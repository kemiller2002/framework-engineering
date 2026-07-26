// FE-BND-ANALYSIS-001 v1.0.0; frozen draft; 2026-07-24.
// Parents: FE-BND-PROTOCOL-001. Limitation: do not run as primary analysis until inputs are locked.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const seed = process.argv[2] ?? "EX-FE-0002-STAGE-B-20260724-7f3c";
const ids = process.argv.slice(3);
function key(id) {
  return createHash("sha256").update(`${seed}:${id}`).digest("hex");
}
console.log(JSON.stringify({ seed, order: ids.sort((a,b)=>key(a).localeCompare(key(b))) }, null, 2));
if (process.env.RESPONSE_FILE) {
  const data = readFileSync(process.env.RESPONSE_FILE);
  console.error(`sha256=${createHash("sha256").update(data).digest("hex")}`);
}
