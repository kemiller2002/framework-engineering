---
id: RP-2026-07-30-NON-HUMAN-EVIDENCE
title: Non-Human Experimental Evidence Analysis — Research Execution Package
artifactType: research-execution-package
status: proposal-only
version: "1.0"
authorAgent: Claude (Cowork research-director pass)
created: 2026-07-30
updated: 2026-07-30
repositoryBaseline: 1012c0f
parentRecords: [FE-EVAL-REP-2026-07-23, FE-BND-2026-07-28-INDEX]
supersedes: []
supersededBy: []
confidence: moderate-for-repository-state-findings, low-for-causal-claims
completion: complete-for-this-pass; several coverage gaps explicitly recorded
---

# Non-Human Experimental Evidence Analysis — Research Execution Package

## Research State Snapshot

- Repository: Framework Engineering, HEAD `1012c0f`, working tree clean except untracked local `.claude/`.
- `npm run experiments:verify -- --all` passes (10/10 registry entries verified).
- `npm run research:validate` fails with `EMFILE` in this session's execution sandbox (tooling defect, not content defect — see Failure Mode F8).
- Current governance-flagged blocker: `ECR-000003` Hypothesis Review Board decision record is blank (`blank_human_decision_required`); no proposed hypothesis update from ECR-000003 is ratified.
- Two prior repository-wide evaluations exist (`FE-EVAL-2026-07-23`, `FE-BOUNDARY-2026-07-28`), both by the same agent ("Codex"), both already concluding Framework Engineering is not currently defensible as a distinct discipline. This package does not repeat that analysis; it extends the evidence base with a mechanism-level, cross-experiment, lineage-and-repeatability-focused review that those two packages did not perform in depth.

## Executive Summary

Fourteen non-human experimental/evaluation units were located and reconstructed from primary sources: three same-model internal pilots (FE-011A, FE-012A, FE-012B), a three-provider primitive-extraction line with an unusually well-controlled repeatability test (FE-012C Manual and its Repeatability Run 001), one fully designed but unexecuted follow-on (FE-013), a three-stage evidence-run family (ECR-000001/2/3) culminating in a certified, frozen-instrument, board-reviewed-but-unratified study, three next-generation `EX-FE-*` experiments (one fixture-only, one blocked/unexecuted, one rigorously designed and unexecuted), and two repository-wide meta-evaluations by a prior agent.

The single most consequential and currently under-weighted finding in the corpus is internal to it: the same instrument that reported strong cross-model agreement on a single sitting (FE-012C Manual: 15/15 entry-primitive agreement) showed 80.0% (literal) to 84.4% (semantic, generously scored) structural drift when the identical packets and providers were re-run later (FE-012C Repeatability Run 001). This tension is not currently reconciled anywhere in the repository's own hypothesis registry, confidence-assessment documents, or either of the two prior meta-evaluations.

A second major finding is structural rather than numerical: no hypothesis in the corpus (H001–H018) currently rests on a genuinely independent replication. Every quantitative structural-recovery result traces to the same three model providers (GPT, Claude, Gemini) and an evolving-but-continuous comparator/packet lineage. This does not invalidate the findings, but it means apparent "multiple supporting evidence runs" should be read as repeated application of one design, not as convergent evidence from independently conceived tests.

Consistent with the repository's own stated norms, no hypothesis in the corpus currently warrants confidence above Moderate, and this review's independent reassessment concurs with — and in a few specific places (H004 repeatability, H013 recognition bias) revises — the repository's existing ratings, in each case with an explicit, evidence-based rationale recorded in `non-human-experimental-comparative-analysis.md` Section 8.

## Original Objective

Conduct a deep comparative analysis of all located non-human experimental evidence in this repository: reconstruct, normalize, compare, challenge, and synthesize it into defensible conclusions, and use it to design the next research program — per the full mission brief supplied by the user (Kevin) on 2026-07-30, reproduced in full at the top of this session's conversation and not repeated here for brevity.

## Scope

In scope: all experiments, evidence runs, and evaluations whose subject is non-human (AI models, prompts, comparator software, the repository's own text). Explicitly out of scope: any human-subject research, and any repair or silent reinterpretation of existing records. Coverage limits are recorded explicitly below and in `non-human-experimental-inventory.md`'s "Coverage and Known Gaps" section — this package does not claim to have reconstructed 100% of repository files.

## Repository Context

Framework Engineering governs itself via a Foundation/Research/Applications split (`README.md`, `CONSTITUTION.md`), a Research Charter and Research Operating System (hypothesis registry, evidence-run template, kill-condition guide, confidence-update process), and — as of 2026-07-23/24 — a newer machine-readable `EX-*` experiment registry (`research/framework-engineering/experiments/registry.json`) intended to supersede ad hoc experiment tracking. No `BOOTSTRAP.md` exists in this repository. The canonical entry points used for this analysis were `README.md`, `CONSTITUTION.md`, `RESEARCH_CHARTER.md`, `CURRENT_STATE.md`, `research/README.md`, `research/operating-system/README.md`, `research/operating-system/hypothesis-registry.md`, and the registry.json noted above.

## Current Understanding

See `non-human-cumulative-findings.md` for the full seven-level synthesis (observations → experiment conclusions → cross-experiment patterns → mechanisms → general principles → theory implications → engineering implications). Headline: Framework Engineering currently functions demonstrably as a research-governance and characterization method with unusually candid self-reporting of its own limitations; it does not currently demonstrate a distinct, causally validated engineering discipline, and its strongest mechanism-level claim (recoverable procedural structure) should be split into a moderately-supported backbone-stability claim and a weakly-supported-to-unresolved detail-stability claim, per this analysis's own review.

## Key Discoveries

1. FE-012C's cross-model agreement and its own repeatability run point in different directions on the same instrument (Contradiction C1) — previously undocumented as a juxtaposed finding.
2. No hypothesis in the corpus has a genuinely independent replication once shared provider/comparator/team lineage is accounted for (Lineage analysis, Independence Assessment).
3. EX-FE-0001's registry status (`ready`, 6 runs) overstates what the located artifact (a template synthesis built on fixture data) actually contains.
4. ECR-000001 and ECR-000002 are cited as supporting evidence for multiple Active hypotheses in `hypothesis-registry.md`, but this pass could not locate consolidated findings documents for either.
5. `research:validate` currently fails with an EMFILE error in this execution environment, unrelated to any research content.
6. Neither of the two prior repository-wide meta-evaluations (E13, E14) engages with the FE-012C repeatability drift finding, despite both post-dating it.

## Evidence Registry

See `non-human-experiment-matrix.json` for the full machine-readable registry (14 units, lineage edges, shared-dependency clusters). Human-readable equivalent in `non-human-experimental-inventory.md`.

## Hypothesis Registry (delta proposal only — not applied)

This package proposes, but does not apply, the following deltas to `research/operating-system/hypothesis-registry.md`:

| Hypothesis | Current | Proposed | Rationale |
|---|---|---|---|
| H004 | Low-Moderate, Active | Weakly supported to contradicted (unresolved which, pending N5) | See comparative-analysis.md Section 8 |
| H013 | Moderate | Strongly supported | Positive recognition/leakage findings in every experiment that measured it |
| H015 | Moderate | Split into data-completeness (moderately-strongly supported) and semantic reliability (weakly supported) | Compound claim, current single rating obscures the split |

Applying these deltas is a human governance decision, consistent with how this repository already handles the (also currently unratified) ECR-000003 board proposals.

## Failed Assumptions

- This analysis initially assumed (before reading `FE-012C-repeatability-run-001`) that FE-012C's "strong agreement" framing was the settled headline result for multi-model convergence. That assumption did not survive contact with the repeatability dataset and was revised — see Contradiction C1.
- This analysis initially assumed EX-FE-0003's "no execution data" note might indicate a stalled or abandoned experiment; on inspection, it is a deliberately staged, well-designed, pre-registered experiment awaiting execution, and is recorded positively rather than as a gap.

## Open Questions

Carried forward explicitly, not resolved by this package: What causes FE-012C's temporal drift (sampling variance vs. session context vs. model-version change)? Would the comparator correctly reject a genuinely non-isomorphic procedure pair, or does it default toward "mostly_stable"? Does a vocabulary-free extraction arm still converge on a bounded primitive set? Does the full FE profile outperform a matched adjacent-practice profile on the co-primary outcomes defined in `FE-BOUNDARY-2026-07-28/next-experiment.md`? All are carried into `non-human-next-experiments.md`.

## Recommended Next Research

Ranked list in `non-human-next-experiments.md`. Top three: (1) reconcile the H004 rating against the repeatability dataset — governance action, near-zero cost; (2) complete the blank ECR-000003 board decision record — governance action, near-zero cost; (3) run the negative non-isomorphic controls experiment already recommended by the repository's own review board (`NEXT-RESEARCH-DECISION.md` Candidate B), which this package independently arrives at as the top *new-data* priority via its own adversarial review.

## Research Backlog

See `non-human-next-experiments.md` in full (N1–N11, with an explicit priority matrix).

## Parallel Research Opportunities

N4 (definitional calibration, re-analysis of existing data) and N3 (negative non-isomorphic controls, new data collection) do not depend on each other and can run in parallel. N1 and N2 (governance actions) can and should happen immediately, independent of everything else. N7 (independent comparator/4th provider) and N10 (matched-utility study) are both high-cost and best sequenced after the cheaper items resolve, but do not block each other.

## Risks

- Risk of this package itself being over-trusted as a second independent opinion when it shares method (AI-agent text-and-evidence review) with E13/E14 and read them before forming its own view (an anchoring risk explicitly disclosed in comparative-analysis.md Section 9).
- Risk that the F8 tooling defect (research:validate EMFILE failure) is specific to this session's sandboxed execution environment rather than the user's normal machine; this was not cross-checked outside the sandbox and should not be assumed to generalize.
- Risk that coverage gaps (FE-BOUNDARY-2026-07-24 series internals, individual EDRs, the 100-artifact corpus, papers/) contain findings that would change this analysis's conclusions; none were found to contradict what was reviewed, but absence of evidence is not evidence of absence here.

## Cross-Discipline Opportunities

`FE-BOUNDARY-2026-07-28`'s external-literature comparison (systems engineering, method engineering, design science, requirements/knowledge/ontology engineering, decision analysis, quality engineering, organizational learning, cybernetics, multi-agent systems engineering) already covers this ground more thoroughly than this package attempts to; this package's own contribution is narrower and complementary — applying general experimental-methodology practice (repeatability testing, independence auditing, contradiction registries) to the repository's own AI-evaluation experiments, which is closer to the practice of ML evaluation/benchmarking methodology than to any of the fields E14 already surveyed.

## Knowledge Relationships

This package is a peer/successor document to `FE-EVAL-2026-07-23` and `FE-BOUNDARY-2026-07-28` (same evidence base, different analytical lens: mechanism/repeatability/independence rather than discipline-boundary/external-subsumption), and a direct extension of `research/evidence-runs/ECR-000003-representation-sensitivity/review-board/*` (uses its proposals as backlog inputs rather than re-deriving them).

## Theory Impact Assessment

See `non-human-cumulative-findings.md` Level 6. Net effect: no theory strand gains support from this pass; the "procedural structure is stable" strand should be explicitly split into backbone vs. detail claims; the "distinct discipline" strand loses further support via an independent (though method-overlapping) route.

## Research Quality Metrics

- Experiments inventoried: 14 (of an estimated 20-30+ discoverable units once the FE-BOUNDARY-2026-07-24 series and individual EDRs are fully reconstructed — see gaps)
- Experiments with consolidated findings located: 9/14
- Experiments with any raw data: 11/14
- Experiments with any independent replication: 1/14 (E4, replicated once by E5)
- Contradictions formally registered: 6
- Failure modes formally registered: 8
- Hypotheses with proposed confidence deltas: 3 of 18

## Research Debt

- ECR-000001 and ECR-000002 consolidated findings are missing or unlocated despite being cited as active support in the hypothesis registry — highest-priority research debt item, cheap to resolve (locate or formally retract the citations).
- ECR-000002 has no supersession record despite apparent absorption into ECR-000003.
- FE-012C-repeatability-run-001's top-level `comparison/drift-analysis.md` template is stale relative to its own populated `comparison/generated/` output.
- EX-FE-0001's registry status does not visibly distinguish "infrastructure/fixture exercised" from "evidence collected."

## Repository Updates

This package proposes (does not apply) the following updates for human governance review:

- Add a `model_version` / `run_timestamp` field to the FE-012C-family response schema so future repeatability analysis does not have to treat model-version drift as an unresolvable unknown (see Failure Mode F4).
- Add an explicit supersession record for ECR-000002 pointing to ECR-000003.
- Add a one-line "see comparison/generated/ for current results" pointer to `FE-012C-repeatability-run-001/comparison/drift-analysis.md`.
- Flag the `research-publisher` EMFILE defect to whoever owns that dependency (external package, `github:kemiller2002/research-publisher#main`).

## AI Consumption Notes

All eight files produced by this package are self-contained enough to be read independently, but `non-human-experimental-inventory.md` is the recommended entry point — it defines the E1-E14 IDs used by every other file. `non-human-experiment-matrix.json` is the machine-readable equivalent for programmatic consumption. Do not infer that any confidence-delta proposal in this package has been accepted; check `research/operating-system/hypothesis-registry.md` directly for the current, human-ratified state.

## Handoff Instructions

A different agent picking this up should: (1) read this REP and `non-human-experimental-inventory.md` first; (2) treat every "proposed"/"proposal-only" label in these files as exactly that — no confidence-registry or CURRENT_STATE.md edits have been applied; (3) prioritize N1 and N2 (both near-zero-cost governance actions) before any new data collection; (4) if extending coverage, prioritize the FE-BOUNDARY-2026-07-24 series and ECR-000001/ECR-000002 findings-reconstruction, both flagged as gaps in this pass; (5) do not re-run `npm run research:validate` expecting a different result without first checking whether the EMFILE issue is sandbox-specific.

## Research Journal

- 2026-07-30: Read repository governance docs (README, CONSTITUTION, RESEARCH_CHARTER, CURRENT_STATE). Confirmed no BOOTSTRAP.md exists.
- 2026-07-30: Located canonical `EX-*` registry and hypothesis registry; treated as ground truth rather than re-derived.
- 2026-07-30: Read all six `research/experiments/` package READMEs and results/reports; discovered FE-013 is fully unexecuted despite CURRENT_STATE.md listing it under "Active Experiments."
- 2026-07-30: Read ECR-000001/2/3 READMEs; discovered ECR-000003's Hypothesis Review Board decision record is blank.
- 2026-07-30: Read FE-012C repeatability dataset-comparison and semantic-repeatability report; identified Contradiction C1 as the single highest-value finding of this pass.
- 2026-07-30: Read EX-FE-0001/0002/0003 experiment.json and synthesis artifacts; discovered EX-FE-0001's registry-vs-content mismatch and EX-FE-0003's rigorous unexecuted design.
- 2026-07-30: Read FE-EVAL-2026-07-23 executive brief and FE-BOUNDARY-2026-07-28 index/next-experiment; confirmed neither engages with the FE-012C repeatability finding.
- 2026-07-30: Ran `npm run experiments:verify -- --all` (passed) and `npm run research:validate` (failed, EMFILE, recorded as tooling defect).
- 2026-07-30: Wrote inventory, matrix, lineage, contradiction registry, failure-mode taxonomy, comparative analysis (with required tables), cumulative findings, and this REP.

## Completion Checklist

- [x] All discoverable non-human experiments inventoried (14 units; explicit gaps recorded for FE-BOUNDARY-2026-07-24 series, individual EDRs, corpus artifacts)
- [x] Major experiments reconstructed (stated vs. implemented vs. measured vs. claimed vs. supported, where data permitted)
- [x] Experimental lineage mapped (`non-human-experimental-lineage.md`)
- [x] Independence evaluated (four lineage clusters identified; headline finding: no fully independent replication exists in the corpus)
- [x] Comparable experiments compared; incomparable experiments explicitly separated (Comparability Matrix)
- [x] Quantitative synthesis performed where justified; formal meta-analysis explicitly declined with rationale
- [x] Qualitative failure patterns synthesized (8 failure modes)
- [x] Contradictions analyzed (6 registered, none resolved by averaging)
- [x] Negative and null findings preserved (FE-013, ECR-000002, EX-FE-0002/0003)
- [x] Major confidence claims reassessed (Findings Matrix, Section 8 of comparative analysis)
- [x] Cumulative findings have evidence links (seven-level structure)
- [x] Theory implications recorded
- [x] Highest-value evidence gaps prioritized (Research-Gap Matrix, Next-Experiment Priority Matrix)
- [x] Next experimental mission prompt written (`prompts/Non-Human-Experimental-Research-Next-Mission.md`)
- [ ] Repository validation passes — **does not currently pass** in this execution environment (EMFILE); `experiments:verify` does pass. Recorded, not silently resolved.
- [x] A different agent could reconstruct and continue the analysis (Handoff Instructions above; all files cross-reference E1-E14 IDs consistently)
