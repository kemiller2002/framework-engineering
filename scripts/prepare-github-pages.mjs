import fs from "node:fs/promises";
import path from "node:path";
import config from "../research-publisher.config.mjs";

const outputDirectory = path.resolve(config.output.directory);
const baseUrl = `/${config.site.baseUrl.split("/").filter(Boolean).join("/")}/`;
const escapedBasePath = baseUrl.slice(1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

if (baseUrl === "//") {
  process.stdout.write("GitHub Pages base URL is the domain root; no rewrite needed.\n");
  process.exit(0);
}

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
  }));
  return nestedFiles.flat();
}

const htmlFiles = (await listFiles(outputDirectory)).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const source = await fs.readFile(file, "utf8");
  const rewritten = source
    .replace(
      new RegExp(`(href|src)="/(?!${escapedBasePath})`, "g"),
      `$1="${baseUrl}`
    )
    .replace(
      new RegExp(`import\\((["'])/(?!${escapedBasePath})`, "g"),
      `import($1${baseUrl}`
    );
  await fs.writeFile(file, rewritten);
}

process.stdout.write(
  `Prepared ${htmlFiles.length} HTML files for GitHub Pages at ${baseUrl}.\n`
);
