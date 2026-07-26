---
id: FE-EXPERIMENT-SYSTEM-REPORT-2026-07-23
status: complete
version: "1.0"
---

# Experiment system implementation report

## Outcome

Implemented a working offline experiment lifecycle with a ready boundary-discrimination pilot. It supports canonical specifications, generated prompts, declared-input snapshots, provider-isolated write-once runs, dry runs, manual import, normalized records, source-linked comparison/adjudication/synthesis templates, registry rebuilding, checksums, tests, CI, and handoff documentation.

External provider execution is implemented as an explicit opt-in adapter boundary but remains unverified. No external model was invoked.

## Repository basis and architecture

The system derives from `FE-EVAL-REP-2026-07-23`, `FE-EVAL-BRIEF-2026-07-23`, `FE-THEORY-0.1`, FEH-001, EV-FE-001/002, and the research constitution. The ADR selects Node plus JSON to match repository tooling and separates canonical, raw, normalized, comparison, adjudication, and synthesis records.

## Files and portfolio

`README.md`, `assessment.md`, `architecture.md`, `roadmap.md`, and `HANDOFF.md` explain the system. `schemas/`, `templates/`, `providers.json`, and `registry.json` define contracts. `tools/experiments/` contains the runner and tests. `EX-FE-0001/` is the pilot.

The ranked portfolio is boundary pilot, full boundary study, cold-start/provenance study, matched utility study, human baseline, then concurrency/governance. The sequence follows empirical gates rather than implementation convenience.

## Provider status

- Claude: executable discovered; adapter syntax recorded; not invoked or authenticated.
- Gemini: no executable found; documented unavailable adapter.
- ChatGPT/OpenAI: Codex executable discovered; adapter syntax recorded; not invoked or authenticated.
- Manual: dry-run and offline fixture import tested.

## Verification and challenged assumptions

Structural validation, Node tests, checksum verification, research validation, and the research site build pass. Provider presence was not treated as working capability. Model agreement is not treated as validation. “Immutable” is enforced as create-only runner records plus Git-retrievable versions, not as a property of editable Markdown.

## Remaining risks and next action

The validator covers the safety-critical schema subset but does not use a general JSON Schema engine. Provider command compatibility, cost, authentication, true parallel execution, semantic normalization, human recruitment, and accepted authority policy remain open.

The next action is to independently review and freeze `FE-EXP-BOUNDARY-001`. Start with `assessment.md`, `EX-FE-0001/experiment.json`, and `HANDOFF.md`.

Base directory: `/Users/kevinmiller/dev/Framework-engineering`

## Historical migration addendum

Eight historical result sets were registered as completed legacy experiments with 158 checksum-verified result artifacts:

- ECR-000001: 9
- ECR-000002: 6
- ECR-000003: 34, including one explicitly excluded pre-fix response
- FE-011A: 11
- FE-012A: 5
- FE-012B: 3
- FE-012C manual replication: 45
- FE-012C repeatability run 001: 45

The migration made no provider calls and did not alter any historical source file.
