#!/usr/bin/env node
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { __testing, main as experimentsMain } from "./experiments.mjs";

const root = resolve(dirname(new URL(import.meta.url).pathname), "../..");
const targetRoot = join(root, "research/framework-engineering/experiments");

const datasets = [
  {
    id: "EX-LEGACY-ECR-000001",
    title: "ECR-000001 Multi-Layer Procedural Representation",
    source: "research/evidence-runs/ECR-000001-multi-layer-procedural-representation",
    inputs: ["README.md", "pre-registration.md", "analysis-plan.md"],
    hypotheses: ["H003", "H012", "H013", "H015"],
    theoryImpact: ["instrument calibration", "multi-model convergence"],
    select: (path) => /\/responses\/(claude|gemini|gpt)\/[^/]+\.json$/.test(path),
    summary: "comparison/generated-v3/ecr-000001-comparator-v3-report.md"
  },
  {
    id: "EX-LEGACY-ECR-000002",
    title: "ECR-000002 Recognition Sensitivity",
    source: "research/evidence-runs/ECR-000002-recognition-sensitivity",
    inputs: ["README.md", "pre-registration.md", "analysis-plan.md"],
    hypotheses: ["H013", "H003", "H015"],
    theoryImpact: ["recognition bias", "representation independence"],
    select: (path) => /\/responses\/(claude|gemini|gpt)\/[^/]+\.json$/.test(path),
    summary: "decision-log.md"
  },
  {
    id: "EX-LEGACY-ECR-000003",
    title: "ECR-000003 Representation Sensitivity",
    source: "research/evidence-runs/ECR-000003-representation-sensitivity",
    inputs: ["README.md", "pre-registration.md", "analysis-plan.md"],
    hypotheses: ["H016", "H017", "H018", "H013", "H003", "H015", "H002"],
    theoryImpact: ["structural recognition", "procedural isomorphism"],
    select: (path) => /\/responses\/(claude|gemini|gpt)\/[^/]+\.json$/.test(path) || /\/responses\/pre-fix\/[^/]+\/[^/]+\.json$/.test(path),
    summary: "edr/EDR-ECR-000003-SUMMARY.md"
  },
  {
    id: "EX-LEGACY-FE-011A",
    title: "FE-011A LLM Blind Pilot",
    source: "research/experiments/FE-011A-llm-blind-pilot",
    inputs: ["README.md", "protocol.md", "analysis-plan.md"],
    hypotheses: ["FE-011A"],
    theoryImpact: ["structured redesign utility"],
    select: (path) => /\/results\//.test(path) && path.endsWith(".md") && !/template|README/.test(basename(path)),
    summary: "results/summary.md"
  },
  {
    id: "EX-LEGACY-FE-012A",
    title: "FE-012A Blind Primitive Extraction",
    source: "research/experiments/FE-012A-blind-primitive-extraction",
    inputs: ["README.md", "protocol.md", "analysis-plan.md"],
    hypotheses: ["FE-012A"],
    theoryImpact: ["finite primitive vocabulary"],
    select: (path) => /\/results\//.test(path) && /\.(md|csv)$/.test(path) && !/template|README/.test(basename(path)),
    summary: "results/summary-2026-06-28.md"
  },
  {
    id: "EX-LEGACY-FE-012B",
    title: "FE-012B Primitive Synthesis",
    source: "research/experiments/FE-012B-primitive-synthesis",
    inputs: ["README.md", "protocol.md", "analysis-plan.md"],
    hypotheses: ["FE-012B"],
    theoryImpact: ["primitive expressive sufficiency"],
    select: (path) => /\/results\//.test(path) && path.endsWith(".md") && !/template|README/.test(basename(path)),
    summary: "results/summary-2026-06-28.md"
  },
  {
    id: "EX-LEGACY-FE-012C-MANUAL",
    title: "FE-012C Manual Multi-Model Replication",
    source: "research/experiments/FE-012C-manual-replication",
    inputs: ["README.md", "protocol.md", "packet-index.md"],
    hypotheses: ["FE-012C"],
    theoryImpact: ["primitive grammar agreement"],
    select: (path) => /\/responses\/(claude|gemini|gpt)\/[^/]+\.json$/.test(path),
    summary: null
  },
  {
    id: "EX-LEGACY-FE-012C-REPEAT-001",
    title: "FE-012C Repeatability Run 001",
    source: "research/experiments/FE-012C-repeatability-run-001",
    inputs: ["README.md", "pre-registration.md", "comparison-plan.md"],
    hypotheses: ["FE-012C-REPEATABILITY"],
    theoryImpact: ["cross-run repeatability"],
    select: (path) => /\/responses\/(claude|gemini|gpt)\/[^/]+\.json$/.test(path),
    summary: "comparison/semantic-repeatability-report.md"
  }
];

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.name === "node_modules" || entry.name === ".git") return [];
    return entry.isDirectory() ? walk(path) : [path];
  });
}
function hash(data) { return createHash("sha256").update(data).digest("hex"); }
function providerFor(path) {
  const match = path.match(/\/responses\/(claude|gemini|gpt)\//);
  if (match) return match[1] === "gpt" ? "chatgpt" : match[1];
  if (path.includes("/pre-fix/")) return "unknown-pre-fix";
  if (basename(path).includes("review")) return "reviewer";
  return "historical-manual";
}
function safeName(value) { return value.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 90); }
function writeJson(path, value) { writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" }); }

for (const dataset of datasets) {
  const sourceDir = join(root, dataset.source);
  const files = walk(sourceDir).filter(dataset.select).sort();
  if (!files.length) throw new Error(`no results found for ${dataset.id}`);
  const dir = join(targetRoot, dataset.id);
  mkdirSync(dir, { recursive: true });
  const inputs = dataset.inputs.filter((path) => existsSync(join(sourceDir, path))).map((path) => ({ id: `${dataset.id}-${basename(path)}`, path: `${dataset.source}/${path}` }));
  const spec = {
    id: dataset.id,
    title: dataset.title,
    status: "complete",
    version: "legacy-import-1.0",
    research_area: "framework-engineering",
    created_at: "2026-07-23",
    created_by: "historical migration adapter",
    updated_at: "2026-07-23",
    priority: "historical",
    confidence: 0.5,
    lineage: { based_on: { research_packages: [], journal_entries: [], evidence: [], hypotheses: dataset.hypotheses, theories: [], experiments: [dataset.id.replace("EX-LEGACY-", "")], documents: inputs.map((x) => x.id) }, supersedes: [], superseded_by: [] },
    question: `What results were recorded by ${dataset.title}?`,
    hypothesis: dataset.hypotheses.join(", "),
    competing_hypotheses: [],
    claim_under_test: "Historical claim retained without reinterpretation during migration.",
    objective: "Preserve and register historical results under the provider-neutral experiment system.",
    non_objectives: ["Re-run providers", "Change historical conclusions", "Promote provisional findings"],
    evaluator_role: "Historical replication evaluator; consult the original protocol before any new run.",
    assumptions: ["Original repository files are the authoritative historical record."],
    confounders: ["Historical model versions and invocation metadata may be incomplete."],
    risks: ["Migration metadata could be mistaken for contemporaneous execution metadata."],
    inputs,
    procedure: ["Read the original protocol and declared inputs.", "Run an independent replication without reading migrated results.", "Return a schema-conforming result for a new run."],
    falsification_conditions: ["The original experiment's declared kill or failure conditions are met."],
    stopping_conditions: ["Stop if original protocol or required inputs are unavailable."],
    metrics: ["historical result count", "source checksum integrity"],
    providers: { required: [], optional: ["claude", "gemini", "chatgpt", "manual"], minimum_independent_runs: 0, trials_per_provider: 1 },
    dependencies: [],
    theory_impact: dataset.theoryImpact,
    synthesis_policy: "Historical conclusions remain provisional and retain their original authority.",
    adjudication_policy: "Use the original protocol and review records; migration does not adjudicate.",
    privacy_and_security: "Repository-local historical files only.",
    cost_and_resource_limits: "No provider calls during migration.",
    result_schema: "research/framework-engineering/experiments/schemas/normalized-result.schema.json",
    historical_source: dataset.source,
    historical_summary: dataset.summary ? `${dataset.source}/${dataset.summary}` : null,
    migrated_result_count: files.length
  };
  const specPath = join(dir, "experiment.json");
  const rendered = __testing.renderPrompt(spec);
  if (!existsSync(specPath)) writeJson(specPath, spec);
  else if (__testing.digest(readFileSync(specPath)) !== __testing.digest(`${JSON.stringify(spec, null, 2)}\n`)) throw new Error(`existing spec differs: ${dataset.id}`);
  const promptPath = join(dir, "prompt.md");
  if (!existsSync(promptPath)) writeFileSync(promptPath, rendered, { flag: "wx" });
  else if (readFileSync(promptPath, "utf8") !== rendered) throw new Error(`prompt drift: ${dataset.id}`);
  const manifest = [];
  for (const sourcePath of files) {
    const bytes = readFileSync(sourcePath);
    const sourceDigest = hash(bytes);
    const provider = providerFor(sourcePath);
    const runId = `legacy--${provider}--${safeName(basename(sourcePath, extname(sourcePath)))}--${sourceDigest.slice(0, 12)}`;
    const runDir = join(dir, "runs", provider, runId);
    mkdirSync(runDir, { recursive: true });
    const rawName = `response.raw${extname(sourcePath) || ".txt"}`;
    const rawPath = join(runDir, rawName);
    if (!existsSync(rawPath)) copyFileSync(sourcePath, rawPath);
    else if (hash(readFileSync(rawPath)) !== sourceDigest) throw new Error(`migrated raw differs: ${runId}`);
    const sourceRelative = relative(root, sourcePath);
    const metadata = {
      experiment_id: dataset.id,
      run_id: runId,
      provider,
      model: "historical-unknown",
      execution_mode: "historical-import",
      created_at: "2026-07-23T00:00:00.000Z",
      runner_version: "migration-1.0",
      source_path: sourceRelative,
      source_digest: sourceDigest,
      raw_response_file: rawName,
      historical_prompt_snapshot_available: false,
      excluded_from_primary: sourceRelative.includes("/pre-fix/")
    };
    const records = {
      "prompt.snapshot.md": `# Historical prompt unavailable\n\nConsult the canonical inputs for ${dataset.id}. This placeholder does not claim to reconstruct the original provider prompt.\n`,
      "request.json": `${JSON.stringify({ experiment_id: dataset.id, run_id: runId, provider, historical_import: true, original_request_metadata: "unavailable", source_path: sourceRelative }, null, 2)}\n`,
      "metadata.json": `${JSON.stringify(metadata, null, 2)}\n`,
      "checksums.json": `${JSON.stringify({ prompt_sha256: hash(`# Historical prompt unavailable\n\nConsult the canonical inputs for ${dataset.id}. This placeholder does not claim to reconstruct the original provider prompt.\n`), inputs: Object.fromEntries(inputs.map((input) => [input.path, hash(readFileSync(join(root, input.path)))])) }, null, 2)}\n`,
      "status.json": `${JSON.stringify({ status: "complete", provider_invoked: false, imported: true, historical: true, updated_at: "2026-07-23T00:00:00.000Z" }, null, 2)}\n`
    };
    for (const [name, content] of Object.entries(records)) {
      const path = join(runDir, name);
      if (!existsSync(path)) writeFileSync(path, content, { flag: "wx" });
      else if (readFileSync(path, "utf8") !== content) throw new Error(`migration record differs: ${relative(root, path)}`);
    }
    manifest.push({ run_id: runId, provider, source_path: sourceRelative, source_digest: sourceDigest, raw_response_path: relative(root, rawPath), excluded_from_primary: metadata.excluded_from_primary });
  }
  const manifestPath = join(dir, "migration-manifest.json");
  const manifestData = `${JSON.stringify({ experiment_id: dataset.id, migrated_at: "2026-07-23", source_root: dataset.source, result_count: manifest.length, results: manifest }, null, 2)}\n`;
  if (!existsSync(manifestPath)) writeFileSync(manifestPath, manifestData, { flag: "wx" });
  else if (readFileSync(manifestPath, "utf8") !== manifestData) throw new Error(`manifest differs: ${dataset.id}`);
  const readmePath = join(dir, "README.md");
  const readme = `# ${dataset.id}\n\nHistorical migration of \`${dataset.source}\`.\n\n- Imported results: ${files.length}\n- Provider calls during migration: none\n- Original files remain authoritative and unchanged.\n- Checksums and source paths are recorded in \`migration-manifest.json\`.\n${dataset.summary ? `- Historical summary: \`${dataset.source}/${dataset.summary}\`\n` : ""}`;
  if (!existsSync(readmePath)) writeFileSync(readmePath, readme, { flag: "wx" });
}

experimentsMain(["registry", "rebuild"]);
console.log(JSON.stringify({ datasets: datasets.length, results: datasets.reduce((sum, dataset) => sum + readFileSync(join(targetRoot, dataset.id, "migration-manifest.json"), "utf8").match(/\"run_id\"/g).length, 0) }, null, 2));
