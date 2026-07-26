---
id: FE-BND-V1.2-README-001
version: 1.0.0
status: in-progress
author: M0 pilot director (Claude, Anthropic — orchestrating session)
created: 2026-07-24
updated: 2026-07-24
parents: [EX-FE-0002, FE-BND-MACHINE-PILOT-PROMPT-001]
sources: [research/evaluations/FE-BOUNDARY-2026-07-24/MACHINE-ONLY-PILOT-PROMPT.md]
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Package index for the machine-only exploratory pilot
confidence: n/a — index document
completion: in-progress
known_limitations: All isolated agent contexts in this run are Anthropic/Claude instances. Per the pilot prompt's own rule, this counts as role isolation, not independent external (cross-provider) replication. This pilot cannot authorize Stage B and does not touch v1.0 or v1.1.
---

# Machine-only exploratory pilot — v1.2

This package executes `MACHINE-ONLY-PILOT-PROMPT.md` (authored by the Codex research
director) as an exploratory, machine-only instrument-debugging study. It does not
modify, overwrite, or reclassify `FE-BOUNDARY-2026-07-24` (v1.0) or
`FE-BOUNDARY-2026-07-24-v1.1`, both of which remain:

```text
Stage A: incomplete
Stage B: blocked-before-stage-b
classification: inconclusive
stage_b_authorized: false
```

Read `pilot-gate-checklist.md` for acceptance conditions, `research-journal.md` for
the run log, and (once complete) the final report roles M8/M9 produce under
`analysis/` and `validation/`.

**Provider-family limitation, stated prominently per the prompt's own requirement:**
every role in this run (M1–M7) is executed by an isolated Anthropic/Claude agent
context. This satisfies role isolation (no agent curates both sides, no curator
reviews mappings) but does **not** satisfy independent external replication across
model-provider families — Codex (OpenAI) authored the prompt and ran v1.0/v1.1, but
did not participate in this run's M1–M9 roles.
