---
id: FE-BND-2026-07-28-PROFILE-AUDIT
title: ROS–Framework Engineering Profile v1.0 Audit
artifactType: implementation-audit
status: current-provisional
version: "1.0.0"
authorAgent: OpenAI Codex
created: 2026-07-28
updated: 2026-07-28
parentIds: [RP-FE-ROS-2026-A001, FE-BND-2026-07-28-ARCH]
evidenceIds: [EV-FEB-R01, EV-FEB-R04]
hypothesisIds: [FEH-004, FEH-008, FEH-010]
theoryIds: [FE-THEORY-0.1]
supersedes: []
supersededBy: []
confidence: high
completion: complete
repositoryBaseline: c830902195f22d02c820f55a2321f3e9214242a3
---

# ROS–FE Profile v1.0 audit

## Audit scope

The audit inspected the accepted-for-pilot manifest, record definitions,
execution profile, canonical vertical slice, provider executions, generated
registries, `tools/ros-fe-profile.mjs`, its tests, and package scripts. It did
not modify the accepted profile semantics.

## What works

- A versioned profile manifest pins ROS 1.0.0 and declares inherited
  capabilities, record types, taxonomies, streams, and limitations.
- Canonical FE records use a shared inherited envelope and type-specific
  required fields.
- The synthetic vertical slice connects source, framework, genome, case, and
  stream records.
- Provider/date/execution paths isolate execution work and preserve provider
  identity without claiming independence.
- Canonical reference checks cover several important FE relationships.
- Registry output is sorted by file traversal and repeat generation is
  deterministic for the tested framework registry.
- The current repository passes profile validation and its two profile tests.

These are meaningful pilot capabilities. They establish executable
scaffolding, not scientific validity.

## Findings

| ID | Severity | Finding | Consequence | Proposed v1.1 control |
|---|---|---|---|---|
| PA-001 | high | Validation loads only canonical `ros-profile/records`; execution-local `records/` are not parsed or validated. | Provider drafts can be malformed while profile validation remains green. | Validate draft records against the same schemas with execution-local reference scope. |
| PA-002 | high | Execution validation checks only path shape. It does not enforce the six required files, parse the manifest, or compare declared outputs with files. | An incomplete execution can appear registered. | Add execution-packet schema and completeness validation. |
| PA-003 | high | Registry building parses `execution-manifest.yaml` as JSON while the extension and documentation imply YAML. | Valid YAML that is not JSON fails unexpectedly. | Declare JSON syntax explicitly or use a safe YAML parser and schema. |
| PA-004 | high | No duplicate-ID check exists. IDs are placed in a `Set`, allowing collisions to pass and create ambiguous references. | Stable identity can silently fail. | Reject duplicates across canonical and submitted candidate scopes. |
| PA-005 | high | `evidence_ids`, parent/source/theory/decision/supersession links, and most inherited dependencies are not referentially validated. | Evidence and lineage claims can point nowhere. | Define typed reference fields and validate allowed targets and status. |
| PA-006 | medium | Supported record types `framework-retrospective`, `framework-comparative-study`, `framework-synthesis`, `framework-experiment-proposal`, and `source` have no generated registries. | Declared artifacts can be valid but undiscoverable. | Generate all declared registries or declare indexing policy per type. |
| PA-007 | medium | Declared taxonomies `families` and `failure-modes` have no generated registries. | Manifest and discoverability behavior diverge. | Generate both registries and validate term references. |
| PA-008 | medium | Registry generation has no `check` mode and validation does not detect stale generated files. | A green validation can coexist with outdated indexes. | Build in memory, compare in check mode, and test a clean rebuild. |
| PA-009 | medium | The manifest is only checked for the required ROS version; declared record types, taxonomies, streams, status, and profile identity are not reconciled with implementation. | Tool and manifest can drift silently. | Add a manifest schema and implementation-conformance checks. |
| PA-010 | medium | Base fields are checked only for presence. Formats, enums, semantic versions, temporal order, confidence/completion vocabulary, and supersession invariants are not validated. | Structurally present but semantically invalid records pass. | Add JSON Schemas plus cross-record semantic checks. |
| PA-011 | medium | The `base` argument to `validate()` is ignored because profile paths are bound to module-level repository constants. | Isolated fixture and consumer testing is difficult. | Pass an explicit root through loaders and builders. |
| PA-012 | medium | Tests contain one positive vertical slice and one same-file determinism assertion; no negative, collision, broken-execution, stale-registry, or migration tests exist. | Regressions in failure behavior are likely. | Add fixture-based positive, negative, and compatibility suites. |
| PA-013 | medium | Registry writes are direct and do not stage or atomically replace the generated set. | Interrupted builds can leave a partially updated registry set. | Write to a temporary directory, verify, then replace as one operation. |
| PA-014 | medium | FE-CFDP is the only registered stream, but the boundary mission and utility experiments are not comparative framework discovery executions. | Research work is forced into an inaccurate stream or left unregistered. | Add boundary-validation and matched-utility streams or a generic mission registry. |
| PA-015 | medium | Cross-repository ROS record dependencies are documentary rather than machine-resolved. | The FE profile can claim a ROS dependency without verifying its records or version. | Add a lock/compatibility record containing repository, commit, profile ID, and validation result. |
| PA-016 | low | Generated registries carry only ID, title, status, and path. | Consumers cannot filter by version, confidence, completion, execution, or lineage without reopening records. | Add minimal query fields while keeping records authoritative. |
| PA-017 | low | There is no explicit candidate-submission and promotion command. | Draft-to-canonical movement depends on manual convention. | Add `submit`, `review`, and promotion-plan checks; keep acceptance human-authorized. |

## Compatibility judgment

The profile is suitable for:

- synthetic and low-consequence pilot records;
- testing the proposed artifact envelope;
- provider-isolated research drafting;
- deterministic canonical registry demonstrations.

It is not yet sufficient for:

- claiming complete validation of a provider execution;
- unattended canonical promotion;
- high-consequence multi-agent research;
- cross-repository reproducibility;
- stable third-party conformance;
- empirical claims about FE effectiveness.

## v1.1 priority sequence

### P0 — integrity

1. Duplicate IDs.
2. Draft-record validation.
3. Execution manifest and packet completeness.
4. Full typed-reference validation.
5. Stale-registry check.

### P1 — declared-surface completeness

1. All record-type registries.
2. All taxonomy registries and term validation.
3. Manifest-to-tool conformance.
4. Fixture-based negative and compatibility tests.
5. Atomic registry generation.

### P2 — research operations

1. Mission/stream generalization.
2. Candidate submission and review state.
3. ROS dependency lock and cross-repository verification.
4. Query-oriented registry fields.
5. Migration and deprecation tests.

## Change policy

Do not retrofit these changes into accepted v1.0 without a successor decision.
Create v1.1 as a backward-compatible proposal wherever possible. Breaking
schema or status changes require a migration plan and retained v1.0 fixtures.

## Audit conclusion

Version 1.0 achieved its pilot purpose: it proves that ROS-shaped FE records,
executions, registries, and tests can exist. Its largest gap is not more
record types; it is the difference between documented policy and executable
enforcement at the execution and evidence boundaries. That is the correct
v1.1 target after the matched-utility experiment is preregistered.

