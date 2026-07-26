# Future-agent handoff

The experiment system implements discovery, validation, deterministic prompt generation, dry-run preparation, opt-in adapters, immutable raw-run storage, manual import, normalized-result checks, source-linked comparison/adjudication/synthesis templates, registry rebuilding, tests, and CI verification.

It is based on `FE-EVAL-REP-2026-07-23`, `FE-EVAL-BRIEF-2026-07-23`, `FE-THEORY-0.1`, and the research constitution. It deliberately does not promote proposal-only registry changes.

The initial design was narrowed from broad multi-provider automation to a minimal evidence-safe contract because executable discovery does not establish credentials or authorization, and the repository’s own evaluation rejects premature governance automation. The largest unknown remains FE’s incremental causal value.

Highest-value next action: independently review and freeze the protocol for `FE-EXP-BOUNDARY-001`, using the pilot only as infrastructure/protocol evidence.

Read first:

1. `research/framework-engineering/experiments/assessment.md`
2. `research/framework-engineering/experiments/architecture.md`
3. `research/framework-engineering/experiments/EX-FE-0001/experiment.json`
4. `research/framework-engineering/experiments/README.md`

Run:

```sh
npm run experiments -- list
npm run experiments -- validate --all
npm run experiments -- run EX-FE-0001 --provider manual
npm run experiments:test
npm run experiments:verify
```

The `run` command above is a dry run. Do not add `--execute` without reviewing provider scope, credentials, cost, and the declared input allowlist.
