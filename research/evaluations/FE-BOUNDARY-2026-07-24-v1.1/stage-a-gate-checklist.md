---
id: FE-BND-V1.1-GATE-CHECKLIST-001
version: 1.1.0
status: blocked-before-stage-b
author: RD-001 / isolated Codex research-director context
created: 2026-07-24T17:38:30Z
updated: 2026-07-24T17:38:30Z
parents: [EX-FE-0002, FE-BND-STAGE-A-AGENT-PROMPT-001]
sources: [FE-BND-PROTOCOL-001, FE-BND-LOCK-001, FE-BND-DECISION-001, FE-BND-V1.1-ROLE-REGISTRY-001]
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Initial v1.1 acceptance-gate state with mandatory blocks preserved
confidence: 0.99
completion: incomplete
limitations: Curator submissions, independent audit, blinding, sealed-key custody, human recognition, and freeze audit are pending.
---

# Stage A gate checklist — v1.1

Frozen comparison dimensions: object of intervention; input representation;
transformation mechanism; decision rights; output representation; scope/exclusions;
temporal or coordination behavior; uncertainty handling; verification; provenance;
failure modes; predicted outcomes; implementation cost.

Canonical dimension digest (ordered, `|`-delimited UTF-8):
`sha256:d1f13ab6249caaeed1571b885680bf00b8610d967f50365b1e470ee196f637fa`.
No dimension was added, removed, or renamed from v1.0.

## Acceptance conditions

- [ ] Every A-series candidate has a complete or explicitly incomplete source card.
- [ ] Every material comparator meets minimum source coverage.
- [ ] Every submitted card uses the frozen schema and is at most 500 words.
- [ ] Every card contains a mechanism field, statement-basis distinction,
      implementation test, limitation, and completeness score.
- [ ] No material comparator is accepted from abstract-only evidence where the
      decision depends on unavailable operational detail.
- [ ] Completeness scores are independently audited and locked before mapping review.
- [ ] Blinded cards contain no identity-bearing citations or branded cues.
- [ ] The sealed key is outside reviewer-visible storage under genuine access control.
- [ ] At least two eligible people who will not be Stage B reviewers complete the
      recognition pretest.
- [ ] Recognition mean accuracy is at most 0.40 across at least four source categories.
- [ ] No A-series card has recognition accuracy above 0.60.
- [ ] The final registry, cards, key receipt, instructions, rubric, analysis, seed,
      thresholds, exclusions, and recognition results are frozen and hashed.
- [ ] Source coverage, cards, completeness, blinding, recognition, sealed-key
      custody, and freeze auditing have the required separate owners.
- [ ] No curator or recognition participant is assigned as a Stage B reviewer or
      sole adjudicator.
- [ ] No protocol deviation invalidates blinding or role separation.

## Current mandatory blocks

1. Comparator curator coverage report and primary-source submissions are pending;
   v1.0 deficiencies for ME02, SE01/SE02, RE01, PM02, and B06 are not presumed repaired.
2. FE curator cards and completeness report are pending.
3. Independent completeness auditor, blinding editor, recognition coordinator,
   sealed-key custodian, and freeze auditor are unassigned.
4. No genuinely access-controlled location or custodian receipt exists for the
   sealed identity key.
5. No eligible human recognition responses exist.
6. No final immutable manifest exists because acceptance conditions have not passed.

Gate state: **Stage A incomplete; Stage B blocked-before-stage-b; classification
inconclusive.**

Smallest repair: complete and independently audit the two curator submissions;
assign separate owners for completeness, blinding, recognition, key custody, and
freeze; establish external access-controlled key storage; then run recognition with
at least two eligible new people and freeze only if both thresholds pass.
