import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { buildRegistries, validate } from "./ros-fe-profile.mjs";

test("vertical slice is ROS-shaped and FE-valid", () => {
  assert.deepEqual(validate(), []);
});

test("registry generation is deterministic", () => {
  buildRegistries();
  const file = path.resolve("research/framework-engineering/ros-profile/generated/frameworks.json");
  const first = fs.readFileSync(file, "utf8");
  buildRegistries();
  assert.equal(fs.readFileSync(file, "utf8"), first);
});
