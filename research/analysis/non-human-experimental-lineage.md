# Non-Human Experimental Lineage and Dependency Map

Status: Research analysis artifact — proposal-only.
Companion to `non-human-experimental-inventory.md` and `non-human-experiment-matrix.json`.

## Purpose

Two experiments sharing nothing but a topic are not evidence of replication. This document maps what each experiment in the corpus actually shares with the others — providers, packets, vocabulary, comparator tooling, authorship — so that apparent agreement counts can be checked against how independent the agreeing experiments really are.

## Lineage Graph (textual)

```
FE-012A (E2, single-model extraction, 20 artifacts)
  │  produces seed primitive vocabulary
  ▼
FE-012B (E3, single-model synthesis, 10 problems)      FE-012C Manual (E4, 3-provider, 15 packets, 45 responses)
  │  vocabulary reused, unchanged                         │  same seed vocabulary provided in advance
  │                                                        │
  │                                                        ▼
  │                                              FE-012C Repeatability Run 001 (E5)
  │                                                direct repeatability replication:
  │                                                same packets, same 3 providers, later date
  │                                                        │
  │                                                        ▼ (successor comparison layer, NOT executed)
  │                                              FE-013 (E6, 0 responses)
  │
  └── FE-011A (E1, same-model comparative pilot, SWOT/Five Whys/OODA)
        independent packets and question, but shares the corpus-wide
        pattern of same-model generation + same-team evaluation

ECR-000001 (E7, calibration, 3-provider, 12 responses)
  │  packet/schema design basis
  ▼
ECR-000002 (E8, recognition sensitivity, 3-provider, P001/P002/P003 families)
  │  P001/P002/P003 families reused directly; no formal supersession record
  ▼
ECR-000003 (E9, representation sensitivity, 3-provider, 33 responses,
             Comparator v3.1.0 frozen + v3.2.0 explainability,
             EXP-001 topology / EXP-002 representation / EXP-003 domain)
  │  Hypothesis Review Board packet produced, DECISION BLANK (unratified)
  ▼
[Board-recommended: negative non-isomorphic controls — NOT YET CREATED,
 explicitly "do not create ECR-000004 automatically"]

EX-FE-0001 (E10, boundary discrimination pilot) — fixture/template only, no real data
EX-FE-0002 (E11, blinded mechanism/subsumption test) — 0 runs, Stage A incomplete
EX-FE-0003 (E12, uncertainty/evidence-lineage ablation) — fully designed, 0 runs

FE-EVAL-2026-07-23 (E13, Codex meta-evaluation of the whole repository)
  │  same author
  ▼
FE-BOUNDARY-2026-07-28 (E14, Codex successor meta-evaluation,
  externally sourced comparison) — explicitly does not supersede EX-FE-0002 (E11)
```

## Independence Assessment

The mission brief for this analysis is explicit: two experiments with different IDs are not automatically independent. Applying that test here:

### Cluster 1 — Same-model internal FE-01x runs (E1, E2, E3)

**Not independent of each other.** All three:
- were generated and evaluated using the same or closely related model family in a single-actor role (extractor = reconstructor = reviewer = same research direction),
- were designed, executed, and interpreted by the same research program with prior knowledge of what result would be theoretically convenient,
- inherited each other's vocabulary and design assumptions (E3 explicitly reuses E2's vocabulary unchanged).

Counting E1, E2, and E3 as three separate pieces of supporting evidence for related hypotheses (as the hypothesis registry currently does — H001 lists FE-013 and ECR-000001 as supports, H005 lists FE-012A, FE-012C, FE-013, H011 lists FE-012B and FE-013) risks inflating apparent convergence. They should be weighted collectively as roughly one internal-consistency check, not three.

### Cluster 2 — Three-provider ECR / FE-012C lineage (E4, E5, E7, E8, E9)

**Partially independent, with material shared dependencies.** All five studies:
- use the identical GPT / Claude / Gemini provider triad — no experiment in the corpus has ever tested a fourth model family or a non-frontier model,
- descend from a shared packet-design and schema lineage (E7's calibration schema informs E8's artifact families, which are reused directly by E9),
- for E7/E8/E9, share an evolving but continuous Comparator tooling lineage (the same comparator codebase family, versioned 3.0 → 3.1 → 3.2, built by the same research program),
- for E4/E5, are explicitly the same instrument run twice — E5 is not a second independent experiment, it is E4 rerun.

This means: a claim like "multi-model convergence (H003) is supported by four evidence runs" overstates independence. It is more accurate to say H003 has been tested under one recurring experimental design (three fixed providers, one evolving comparator, overlapping packet families) applied on four occasions. That is still useful evidence — repeated application under a stable design is not worthless — but it is evidence of one design's findings holding up under minor variation, not evidence from four independently conceived tests. A genuinely independent test would use a different provider set, a different comparator implementation, or a different research team.

### Cluster 3 — Codex meta-evaluations (E13, E14)

**Not independent.** E14 is an explicit successor to E13, written by the same agent ("Codex"), five days later, extending rather than re-deriving the analysis. Both should be counted as one continuous line of expert-style review, not two independent expert opinions. This document (produced by a different agent, Claude) is the first genuinely independent second opinion on the repository's evidence base, though it is still an AI-agent review rather than a human or differently-resourced review, and should itself be weighted accordingly by future readers.

### Cluster 4 — EX-FE-0001 / EX-FE-0002 / EX-FE-0003

No shared execution data exists across these three (E10 is fixture-only, E11 and E12 have zero runs), so no independence claim can be evaluated — there is nothing yet to compare.

## Replication Classification

| Relationship | Classification | Basis |
|---|---|---|
| E4 → E5 | Direct repeatability replication | Same packets (explicitly unmodified), same 3 providers, same schema, different point in time |
| E2 → E3 | Extension (not replication) | E3 asks a generative question using E2's vocabulary as a fixed input, not a re-test of E2's claim |
| E7 → E8 → E9 | Parameter variation / extension chain | Each varies the representation/recognition manipulation while holding the provider triad and general design philosophy constant; E9 is best described as an extension of E8 with an expanded, frozen-instrument design, not a replication of it |
| E1 (FE-011A) vs. rest | Incomparable to the FE-01x/ECR line | Different research question (redesign utility vs. structural recoverability); no shared packets or comparator |
| E13 → E14 | Follow-up / extension, same author | Same evaluator, expanded external sourcing, narrower conclusion |
| E14 vs. E11 (EX-FE-0002) | Explicitly non-superseding | E14's own text: "does not overwrite the controlling EX-FE-0002 state" |
| E9's board proposal → recommended negative-control experiment | Follow-up, not yet created | Explicitly authorized as a recommendation only; "do not create ECR-000004 automatically" |

## What Counts as a Genuinely Independent Test in This Corpus

Applying strict independence criteria (different model providers, different comparator implementation, different design team, different packet corpus), **no hypothesis in H001–H018 currently has more than one genuinely independent supporting test.** Every quantitative result in the corpus traces back to the same three model providers and, for the structural-recovery hypotheses (H001–H003, H005–H008, H011–H018), the same evolving comparator/packet lineage. This is the single most important lineage finding in this analysis and is carried into the confidence reassessment and next-experiment priorities.
