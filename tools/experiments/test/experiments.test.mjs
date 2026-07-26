import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { __testing } from "../experiments.mjs";

const root = resolve(new URL("../../..", import.meta.url).pathname);
const cli = join(root, "tools/experiments/experiments.mjs");

test("canonical pilot validates with no prompt drift", () => {
  const result = spawnSync(process.execPath, [cli, "validate", "--all"], { cwd: root, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /EX-FE-0001/);
});

test("unsafe repository paths are rejected", () => {
  assert.throws(() => __testing.safeRepoPath("../outside"), /escapes repository/);
  assert.equal(__testing.within(root, join(root, "research")), true);
  assert.equal(__testing.within(join(root, "research"), root), false);
});

test("write-once records cannot be overwritten", () => {
  const dir = mkdtempSync(join(tmpdir(), "fe-experiment-test-"));
  const path = join(dir, "raw.md");
  try {
    __testing.writeOnce(path, "first");
    assert.throws(() => __testing.writeOnce(path, "second"), /already exists/);
    assert.equal(readFileSync(path, "utf8"), "first");
  } finally {
    rmSync(dir, { recursive: true });
  }
});

test("run identifiers separate providers, trials, and retries", () => {
  const spec = { id: "EX-FE-TEST", version: "1.0" };
  const a = __testing.newRunId(spec, "claude", 1);
  const b = __testing.newRunId(spec, "claude", 1);
  const c = __testing.newRunId(spec, "manual", 2);
  assert.notEqual(a, b);
  assert.match(a, /claude--v1\.0--t1/);
  assert.match(c, /manual--v1\.0--t2/);
});

test("normalization requires source lineage fields", () => {
  assert.deepEqual(__testing.validateNormalized({}), [
    "missing experiment_id", "missing run_id", "missing provider", "missing model",
    "missing raw_response_path", "missing raw_response_digest", "missing prompt_digest",
    "missing completion_status", "missing answer_summary", "missing findings", "missing claims",
    "missing evidence_references", "missing assumptions", "missing uncertainties",
    "missing counterexamples", "missing falsification_attempts", "missing risks",
    "missing rubric_scores", "missing confidence", "missing recommended_next_actions",
    "missing normalization_notes", "missing normalizer_identity", "missing normalizer_version"
  ]);
});

test("dry run reports that no provider was invoked", () => {
  const result = spawnSync(process.execPath, [cli, "run", "EX-FE-0001", "--provider", "manual"], { cwd: root, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /provider_invoked=false/);
  const runPath = result.stdout.trim().split("\t").at(-1);
  assert.match(runPath, /^research\/framework-engineering\/experiments\/EX-FE-0001\/runs\/manual\//);
  rmSync(join(root, runPath), { recursive: true });
});

test("historical migration manifests preserve all inventoried results", () => {
  const registry = JSON.parse(readFileSync(join(root, "research/framework-engineering/experiments/registry.json"), "utf8"));
  const legacy = registry.experiments.filter((item) => item.id.startsWith("EX-LEGACY-"));
  assert.equal(legacy.length, 8);
  const total = legacy.reduce((sum, item) => {
    const manifest = JSON.parse(readFileSync(join(dirname(join(root, item.path)), "migration-manifest.json"), "utf8"));
    assert.equal(manifest.result_count, manifest.results.length);
    return sum + manifest.result_count;
  }, 0);
  assert.equal(total, 158);
});
