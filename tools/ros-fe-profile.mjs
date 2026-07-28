#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const profileRoot = path.join(root, "research/framework-engineering/ros-profile");
const recordsRoot = path.join(profileRoot, "records");
const registryRoot = path.join(profileRoot, "generated");
const baseFields = ["id", "title", "status", "version", "created", "updated", "confidence", "completion", "profile"];
const types = {
  "framework": ["purpose", "evidence_ids"],
  "framework-genome": ["framework_id", "dimensions", "evidence_ids"],
  "framework-case-study": ["framework_id", "context", "outcomes", "evidence_ids"],
  "framework-postmortem": ["framework_id", "failure_modes", "evidence_ids"],
  "framework-retrospective": ["framework_id", "adaptations", "evidence_ids"],
  "framework-comparative-study": ["framework_ids", "comparison_dimensions", "evidence_ids"],
  "framework-observation": ["framework_id", "observation", "evidence_ids"],
  "framework-contradiction": ["claim_a", "claim_b", "evidence_ids"],
  "framework-hypothesis": ["statement", "falsification_criteria", "evidence_ids"],
  "framework-synthesis": ["inputs", "findings", "limitations"],
  "framework-experiment-proposal": ["hypothesis_ids", "protocol", "stop_conditions"],
  "research-stream": ["mission", "artifact_types", "prohibited_claims"],
  "source": ["citation", "source_kind", "retrieved"]
};

function files(dir, extensions = [".json"]) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(dir, entry.name);
    return entry.isDirectory() ? files(target, extensions) : extensions.some((extension) => target.endsWith(extension)) ? [target] : [];
  }).sort();
}

function loadRecords() {
  const findings = [];
  const records = [];
  for (const file of files(recordsRoot)) {
    try {
      records.push({ file, value: JSON.parse(fs.readFileSync(file, "utf8")) });
    } catch (error) {
      findings.push(`${path.relative(root, file)}: invalid JSON: ${error.message}`);
    }
  }
  return { findings, records };
}

export function validate(base = root) {
  void base;
  const { findings, records } = loadRecords();
  const ids = new Set(records.map(({ value }) => value.id).filter(Boolean));
  for (const { file, value } of records) {
    const relative = path.relative(root, file);
    for (const field of baseFields) if (value[field] === undefined) findings.push(`${relative}: missing inherited ROS field '${field}'`);
    if (value.profile !== "RP-FE-ROS-2026-A001@1.0.0") findings.push(`${relative}: profile must be RP-FE-ROS-2026-A001@1.0.0`);
    if (!types[value.record_type]) findings.push(`${relative}: unknown record_type '${value.record_type}'`);
    for (const field of types[value.record_type] ?? []) if (value[field] === undefined) findings.push(`${relative}: missing FE field '${field}'`);
    if (value.completion === value.confidence) findings.push(`${relative}: completion and confidence must remain separate values`);
    for (const field of ["framework_id", "hypothesis_ids", "framework_ids", "inputs"]) {
      const refs = value[field] === undefined ? [] : Array.isArray(value[field]) ? value[field] : [value[field]];
      for (const ref of refs) if (typeof ref === "string" && ref.startsWith("FE-") && !ids.has(ref)) findings.push(`${relative}: broken FE reference '${ref}'`);
    }
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(profileRoot, "profile.yaml"), "utf8"));
  if (manifest.required_ros.version !== "1.0.0") findings.push("profile.yaml: required ROS version must be explicit");
  const executionRoots = path.join(profileRoot, "executions");
  for (const manifestPath of files(executionRoots, [".yaml"]).filter((file) => file.endsWith("execution-manifest.yaml"))) {
    const parts = path.relative(executionRoots, manifestPath).split(path.sep);
    if (parts.length !== 4 || !/^\d{4}-\d{2}-\d{2}$/.test(parts[1])) findings.push(`${path.relative(root, manifestPath)}: execution path must be <provider>/<YYYY-MM-DD>/<execution-id>/`);
  }
  return findings.sort();
}

export function buildRegistries() {
  const { findings, records } = loadRecords();
  if (findings.length) throw new Error(findings.join("\n"));
  fs.mkdirSync(registryRoot, { recursive: true });
  const names = {
    framework: "frameworks", "framework-genome": "framework-genomes",
    "framework-case-study": "case-studies", "framework-postmortem": "postmortems",
    "framework-observation": "observations", "framework-contradiction": "contradictions",
    "framework-hypothesis": "hypotheses", "research-stream": "research-streams",
    source: "sources"
  };
  for (const name of ["frameworks", "framework-genomes", "case-studies", "postmortems", "observations", "contradictions", "hypotheses", "research-streams", "executions", "properties", "mechanisms", "contexts", "outcomes"]) {
    let entries = records.filter(({ value }) => names[value.record_type] === name).map(({ file, value }) => ({ id: value.id, title: value.title, status: value.status, path: path.relative(profileRoot, file) }));
    if (["properties", "mechanisms", "contexts", "outcomes"].includes(name)) {
      const tax = JSON.parse(fs.readFileSync(path.join(profileRoot, "taxonomies", `${name}.json`), "utf8"));
      entries = tax.terms.map((term) => ({ id: term, taxonomy: name }));
    }
    if (name === "executions") {
      entries = files(path.join(profileRoot, "executions"), [".yaml"]).filter((file) => file.endsWith("execution-manifest.yaml")).map((file) => {
        const value = JSON.parse(fs.readFileSync(file, "utf8"));
        return { id: value.execution_id, provider: value.provider, path: path.relative(profileRoot, file) };
      });
    }
    fs.writeFileSync(path.join(registryRoot, `${name}.json`), `${JSON.stringify({ generated: true, profile: "RP-FE-ROS-2026-A001@1.0.0", entries }, null, 2)}\n`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [command, subcommand] = process.argv.slice(2);
  if (command === "validate") {
    const findings = validate();
    if (findings.length) { console.error(findings.join("\n")); process.exitCode = 1; }
    else console.log("ROS–FE profile validation passed");
  } else if (command === "registry" && subcommand === "build") {
    buildRegistries();
    console.log("ROS–FE registries generated");
  } else {
    console.error("usage: ros-fe-profile.mjs validate | registry build");
    process.exitCode = 2;
  }
}
