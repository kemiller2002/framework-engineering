#!/usr/bin/env node
import { createHash, randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import process from "node:process";

const root = resolve(dirname(new URL(import.meta.url).pathname), "../..");
const systemRoot = join(root, "research/framework-engineering/experiments");
const registryPath = join(systemRoot, "registry.json");
const providersPath = join(systemRoot, "providers.json");
const templatePath = join(systemRoot, "templates/evaluator-prompt.md");
const statuses = new Set(["proposed", "ready", "running", "partially-complete", "complete", "blocked", "invalidated", "superseded"]);

function fail(message) { throw new Error(message); }
function readJson(path) { return JSON.parse(readFileSync(path, "utf8")); }
function digest(data) { return createHash("sha256").update(data).digest("hex"); }
function jsonDigest(value) { return digest(`${JSON.stringify(value, null, 2)}\n`); }
function atomicWrite(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  const temp = `${path}.tmp-${process.pid}-${randomBytes(4).toString("hex")}`;
  writeFileSync(temp, data, { flag: "wx" });
  renameSync(temp, path);
}
function writeOnce(path, data) {
  if (existsSync(path)) fail(`immutable record already exists: ${relative(root, path)}`);
  atomicWrite(path, data);
}
function within(base, candidate) {
  const rel = relative(resolve(base), resolve(candidate));
  return rel === "" || (!rel.startsWith(`..${sep}`) && rel !== ".." && !isAbsolute(rel));
}
function safeRepoPath(path) {
  const result = resolve(root, path);
  if (!within(root, result)) fail(`path escapes repository: ${path}`);
  return result;
}
function registry() { return readJson(registryPath); }
function experimentEntry(id) {
  const entry = registry().experiments.find((item) => item.id === id);
  if (!entry) fail(`unknown experiment: ${id}`);
  return entry;
}
function loadExperiment(id) {
  const entry = experimentEntry(id);
  const path = safeRepoPath(entry.path);
  return { entry, path, spec: readJson(path), dir: dirname(path) };
}
function renderPrompt(spec) {
  let text = readFileSync(templatePath, "utf8");
  const values = {
    EXPERIMENT_ID: spec.id,
    TITLE: spec.title,
    VERSION: spec.version,
    ROLE: spec.evaluator_role,
    QUESTION: spec.question,
    HYPOTHESIS: spec.hypothesis,
    CLAIM: spec.claim_under_test,
    INPUTS: spec.inputs.map((item) => `- \`${item.path}\` (${item.id})`).join("\n"),
    PROCEDURE: spec.procedure.map((item, i) => `${i + 1}. ${item}`).join("\n"),
    FALSIFICATION: spec.falsification_conditions.map((item) => `- ${item}`).join("\n"),
    OUTPUT_SCHEMA: spec.result_schema,
  };
  for (const [key, value] of Object.entries(values)) text = text.replaceAll(`{{${key}}}`, value);
  return text;
}
function validateSpec(spec, entry) {
  const errors = [];
  const required = ["id", "title", "status", "version", "research_area", "lineage", "question", "hypothesis", "claim_under_test", "inputs", "procedure", "falsification_conditions", "providers", "result_schema"];
  for (const key of required) if (!(key in spec)) errors.push(`missing ${key}`);
  if (spec.id !== entry.id) errors.push("registry ID differs from specification ID");
  if (!/^EX-[A-Z0-9-]+$/.test(spec.id || "")) errors.push("invalid EX- identifier");
  if (!statuses.has(spec.status)) errors.push(`invalid status: ${spec.status}`);
  if (!Array.isArray(spec.inputs) || spec.inputs.length === 0) errors.push("inputs must be a non-empty array");
  for (const input of spec.inputs || []) {
    try {
      const path = safeRepoPath(input.path);
      if (!existsSync(path) || !statSync(path).isFile()) errors.push(`missing input: ${input.path}`);
      if (input.path.includes("/runs/") || input.path.includes("/normalized/")) errors.push(`independent input exposes results: ${input.path}`);
    } catch (error) { errors.push(error.message); }
  }
  const resultSchema = spec.result_schema ? safeRepoPath(spec.result_schema) : null;
  if (resultSchema && !existsSync(resultSchema)) errors.push(`missing result schema: ${spec.result_schema}`);
  const promptPath = join(dirname(safeRepoPath(entry.path)), "prompt.md");
  if (!existsSync(promptPath)) errors.push("missing generated prompt.md (run prepare)");
  else if (readFileSync(promptPath, "utf8") !== renderPrompt(spec)) errors.push("prompt/spec drift detected (run prepare)");
  return errors;
}
function validateRegistry(data = registry()) {
  const errors = [];
  const ids = new Set();
  for (const entry of data.experiments || []) {
    if (ids.has(entry.id)) errors.push(`duplicate ID: ${entry.id}`);
    ids.add(entry.id);
    try {
      const path = safeRepoPath(entry.path);
      if (!existsSync(path)) errors.push(`missing specification: ${entry.path}`);
    } catch (error) { errors.push(error.message); }
  }
  return errors;
}
function newRunId(spec, provider, trial) {
  const stamp = new Date().toISOString().replaceAll(":", "").replaceAll("-", "").replace(".", "-");
  return `${spec.id}--${provider}--v${spec.version}--t${trial}--${stamp}--${randomBytes(4).toString("hex")}`;
}
function promptSnapshot(spec) {
  const prompt = renderPrompt(spec);
  const inputs = spec.inputs.map((item) => {
    const content = readFileSync(safeRepoPath(item.path));
    return { ...item, sha256: digest(content), bytes: content.length };
  });
  return { prompt, inputs };
}
function createRun(id, provider, options = {}) {
  const { spec, dir } = loadExperiment(id);
  if (spec.status !== "ready" && spec.status !== "running") fail(`experiment is not runnable: ${spec.status}`);
  if (![...(spec.providers.required || []), ...(spec.providers.optional || []), "manual"].includes(provider)) fail(`provider not allowed: ${provider}`);
  const trial = Number(options.trial || 1);
  const runId = newRunId(spec, provider, trial);
  const runDir = join(dir, "runs", provider, runId);
  if (!within(join(dir, "runs"), runDir)) fail("unsafe run path");
  const snapshot = promptSnapshot(spec);
  mkdirSync(runDir, { recursive: true });
  writeOnce(join(runDir, "prompt.snapshot.md"), snapshot.prompt);
  writeOnce(join(runDir, "request.json"), `${JSON.stringify({ experiment_id: id, run_id: runId, provider, trial, prompt_version: spec.version, prompt_digest: digest(snapshot.prompt), inputs: snapshot.inputs }, null, 2)}\n`);
  const metadata = {
    experiment_id: id, run_id: runId, provider, model: options.model || "unknown",
    execution_mode: options.execute ? "provider" : "dry-run", created_at: new Date().toISOString(),
    runner_version: "1.0.0", retry_of: options.retryOf || null,
  };
  writeOnce(join(runDir, "metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);
  writeOnce(join(runDir, "checksums.json"), `${JSON.stringify({ prompt_sha256: digest(snapshot.prompt), inputs: Object.fromEntries(snapshot.inputs.map((item) => [item.path, item.sha256])) }, null, 2)}\n`);
  if (!options.execute) {
    writeOnce(join(runDir, "status.json"), `${JSON.stringify({ status: "prepared", provider_invoked: false, updated_at: new Date().toISOString() }, null, 2)}\n`);
    return { runId, runDir, invoked: false };
  }
  const config = readJson(providersPath).providers[provider];
  if (!config || !config.command || config.status !== "available-unverified") fail(`provider execution unavailable: ${provider}`);
  const started = Date.now();
  const result = spawnSync(config.command, config.args || [], { cwd: root, input: snapshot.prompt, encoding: "utf8", timeout: config.timeout_ms || 300000, maxBuffer: 10 * 1024 * 1024 });
  writeOnce(join(runDir, "stdout.raw.txt"), result.stdout || "");
  writeOnce(join(runDir, "stderr.raw.txt"), result.stderr || "");
  if (result.status === 0 && result.stdout) writeOnce(join(runDir, "response.raw.md"), result.stdout);
  writeOnce(join(runDir, "status.json"), `${JSON.stringify({ status: result.status === 0 ? "complete" : "failed", provider_invoked: true, exit_status: result.status, signal: result.signal, duration_ms: Date.now() - started, updated_at: new Date().toISOString() }, null, 2)}\n`);
  return { runId, runDir, invoked: true, exitStatus: result.status };
}
function findRuns(id) {
  const { dir } = loadExperiment(id);
  const base = join(dir, "runs");
  if (!existsSync(base)) return [];
  return readdirSync(base, { withFileTypes: true }).filter((x) => x.isDirectory()).flatMap((provider) => {
    const providerDir = join(base, provider.name);
    return readdirSync(providerDir, { withFileTypes: true }).filter((x) => x.isDirectory()).map((run) => ({ provider: provider.name, runId: run.name, dir: join(providerDir, run.name) }));
  });
}
function validateNormalized(value) {
  const required = ["experiment_id", "run_id", "provider", "model", "raw_response_path", "raw_response_digest", "prompt_digest", "completion_status", "answer_summary", "findings", "claims", "evidence_references", "assumptions", "uncertainties", "counterexamples", "falsification_attempts", "risks", "rubric_scores", "confidence", "recommended_next_actions", "normalization_notes", "normalizer_identity", "normalizer_version"];
  return required.filter((key) => !(key in value)).map((key) => `missing ${key}`);
}
function importResult(id, source, provider, model = "unknown") {
  const { spec, dir } = loadExperiment(id);
  const sourcePath = safeRepoPath(source);
  if (!existsSync(sourcePath)) fail(`missing import source: ${source}`);
  const run = createRun(id, provider, { model });
  const raw = readFileSync(sourcePath);
  writeOnce(join(run.runDir, "response.raw.md"), raw);
  atomicWrite(join(run.runDir, "status.json"), `${JSON.stringify({ status: "complete", provider_invoked: false, imported: true, source_path: relative(root, sourcePath), updated_at: new Date().toISOString() }, null, 2)}\n`);
  return { ...run, digest: digest(raw), spec };
}
function verifyRun(run) {
  const errors = [];
  const checks = readJson(join(run.dir, "checksums.json"));
  if (digest(readFileSync(join(run.dir, "prompt.snapshot.md"))) !== checks.prompt_sha256) errors.push(`${run.runId}: prompt checksum mismatch`);
  for (const [path, expected] of Object.entries(checks.inputs)) if (digest(readFileSync(safeRepoPath(path))) !== expected) errors.push(`${run.runId}: input changed since snapshot (${path})`);
  const status = readJson(join(run.dir, "status.json"));
  const metadata = readJson(join(run.dir, "metadata.json"));
  const rawName = metadata.raw_response_file || "response.raw.md";
  if (status.status === "complete" && !existsSync(join(run.dir, rawName))) errors.push(`${run.runId}: complete without raw response`);
  if (metadata.source_path && existsSync(join(run.dir, rawName)) && digest(readFileSync(join(run.dir, rawName))) !== metadata.source_digest) errors.push(`${run.runId}: migrated raw digest differs from source digest`);
  if (metadata.source_path && digest(readFileSync(safeRepoPath(metadata.source_path))) !== metadata.source_digest) errors.push(`${run.runId}: historical source changed after migration`);
  return errors;
}
function rebuildRegistry() {
  const current = registry();
  const experiments = readdirSync(systemRoot, { withFileTypes: true }).filter((x) => x.isDirectory() && x.name.startsWith("EX-")).map((x) => {
    const path = join(systemRoot, x.name, "experiment.json");
    if (!existsSync(path)) fail(`experiment directory lacks experiment.json: ${x.name}`);
    const spec = readJson(path);
    const runs = findRunsFromDir(join(systemRoot, x.name, "runs"));
    const synthesisDir = join(systemRoot, x.name, "synthesis");
    const syntheses = existsSync(synthesisDir) ? readdirSync(synthesisDir).filter((name) => name.endsWith(".json")).sort() : [];
    return { id: spec.id, title: spec.title, status: spec.status, hypothesis: spec.hypothesis, theory_impact: spec.theory_impact, dependencies: spec.dependencies, prompt_version: spec.version, prompt_digest: digest(renderPrompt(spec)), required_providers: spec.providers.required, run_count_by_provider: runs.reduce((acc, run) => ({ ...acc, [run.provider]: (acc[run.provider] || 0) + 1 }), {}), latest_synthesis: syntheses.length ? relative(root, join(synthesisDir, syntheses.at(-1))) : null, supersession_status: spec.status === "superseded" ? "superseded" : "current", path: relative(root, path) };
  });
  experiments.sort((a, b) => a.id.localeCompare(b.id));
  atomicWrite(registryPath, `${JSON.stringify({ ...current, generated_at: new Date().toISOString(), experiments }, null, 2)}\n`);
}
function findRunsFromDir(base) {
  if (!existsSync(base)) return [];
  return readdirSync(base, { withFileTypes: true }).filter((x) => x.isDirectory()).flatMap((p) => readdirSync(join(base, p.name), { withFileTypes: true }).filter((x) => x.isDirectory()).map((r) => ({ provider: p.name, runId: r.name })));
}

function verifyDerivedSources(id) {
  const { dir } = loadExperiment(id);
  const known = new Set(findRuns(id).map((run) => run.runId));
  const errors = [];
  for (const folder of ["comparisons", "adjudications", "synthesis"]) {
    const target = join(dir, folder);
    if (!existsSync(target)) continue;
    for (const name of readdirSync(target).filter((item) => item.endsWith(".json"))) {
      const artifact = readJson(join(target, name));
      for (const source of artifact.source_run_ids || []) if (!known.has(source)) errors.push(`${relative(root, join(target, name))}: unknown source run ${source}`);
    }
  }
  return errors;
}

export const __testing = {
  atomicWrite,
  digest,
  newRunId,
  renderPrompt,
  safeRepoPath,
  validateNormalized,
  validateRegistry,
  validateSpec,
  within,
  writeOnce,
};

export function main(argv = process.argv.slice(2)) {
  const [command, ...args] = argv;
  const flags = new Map(args.filter((x) => x.startsWith("--")).map((x, i, all) => [x, args[args.indexOf(x) + 1]?.startsWith("--") ? true : args[args.indexOf(x) + 1] || true]));
  const positional = args.filter((x, i) => !x.startsWith("--") && (i === 0 || !args[i - 1].startsWith("--")));
  if (command === "list") {
    for (const item of registry().experiments) console.log(`${item.id}\t${item.status}\t${item.title}`);
  } else if (command === "validate") {
    const ids = flags.has("--all") ? registry().experiments.map((x) => x.id) : [positional[0]];
    const errors = validateRegistry();
    for (const id of ids) {
      const loaded = loadExperiment(id);
      errors.push(...validateSpec(loaded.spec, loaded.entry).map((x) => `${id}: ${x}`));
    }
    if (errors.length) fail(errors.join("\n"));
    console.log(`valid: ${ids.join(", ")}`);
  } else if (command === "prepare") {
    const { spec, dir } = loadExperiment(positional[0]);
    atomicWrite(join(dir, "prompt.md"), renderPrompt(spec));
    const run = createRun(spec.id, flags.get("--provider") || "manual", { trial: flags.get("--trial") });
    console.log(`${run.runId}\tprovider_invoked=false\t${relative(root, run.runDir)}`);
  } else if (command === "run") {
    const id = positional[0];
    const providers = flags.has("--all") ? loadExperiment(id).spec.providers.required : [flags.get("--provider")];
    if (!providers[0]) fail("use --provider NAME or --all");
    for (const provider of providers) {
      const run = createRun(id, provider, { trial: flags.get("--trial"), model: flags.get("--model"), execute: flags.has("--execute") });
      console.log(`${run.runId}\tprovider_invoked=${run.invoked}\t${relative(root, run.runDir)}`);
    }
  } else if (command === "status") {
    const ids = flags.has("--all") ? registry().experiments.map((x) => x.id) : [positional[0]];
    for (const id of ids) console.log(JSON.stringify({ experiment_id: id, runs: findRuns(id).map((run) => ({ provider: run.provider, run_id: run.runId, status: readJson(join(run.dir, "status.json")).status })) }, null, 2));
  } else if (command === "import") {
    const result = importResult(positional[0], flags.get("--file"), flags.get("--provider") || "manual", flags.get("--model"));
    console.log(`${result.runId}\tsha256=${result.digest}`);
  } else if (["normalize", "compare", "adjudicate", "synthesize"].includes(command)) {
    const id = positional[0];
    const { dir } = loadExperiment(id);
    if (command === "normalize") {
      const file = safeRepoPath(flags.get("--file"));
      const value = readJson(file);
      const errors = validateNormalized(value);
      if (value.experiment_id !== id) errors.push("experiment_id mismatch");
      const raw = safeRepoPath(value.raw_response_path);
      if (!existsSync(raw)) errors.push("raw response does not exist");
      else if (digest(readFileSync(raw)) !== value.raw_response_digest) errors.push("raw response digest mismatch");
      if (errors.length) fail(errors.join("\n"));
      writeOnce(join(dir, "normalized", `${value.provider}--${value.run_id}.json`), `${JSON.stringify(value, null, 2)}\n`);
    } else {
      const sourceRuns = flags.get("--sources");
      if (!sourceRuns) fail("use --sources with comma-separated run IDs");
      const payload = { artifact_type: command, experiment_id: id, version: "1.0", created_at: new Date().toISOString(), source_run_ids: String(sourceRuns).split(","), status: "template", findings: [], unresolved: [], decision: null };
      const output = join(dir, `${command === "compare" ? "comparisons" : command === "adjudicate" ? "adjudications" : "synthesis"}`, `${command}--${Date.now()}.json`);
      writeOnce(output, `${JSON.stringify(payload, null, 2)}\n`);
      console.log(relative(root, output));
    }
  } else if (command === "registry" && positional[0] === "rebuild") {
    rebuildRegistry();
    console.log(relative(root, registryPath));
  } else if (command === "verify") {
    const ids = flags.has("--all") ? registry().experiments.map((x) => x.id) : [positional[0]];
    const errors = validateRegistry();
    for (const id of ids) {
      const loaded = loadExperiment(id);
      errors.push(...validateSpec(loaded.spec, loaded.entry).map((x) => `${id}: ${x}`));
      for (const run of findRuns(id)) errors.push(...verifyRun(run));
      errors.push(...verifyDerivedSources(id));
    }
    if (errors.length) fail(errors.join("\n"));
    console.log(`verified: ${ids.join(", ")}`);
  } else {
    console.log("Usage: experiments <list|validate|prepare|run|status|import|normalize|compare|adjudicate|synthesize|verify|registry rebuild>");
  }
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
