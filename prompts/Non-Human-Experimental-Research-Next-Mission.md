# Next Research Mission: ECR-000003 EXP-004 — Negative Non-Isomorphic Controls

Status: Executable research prompt. Produced by a comparative analysis of all located non-human experimental evidence in this repository (see `research/analysis/RP-2026-07-30-non-human-experimental-evidence.md` and its companion documents for full derivation). This prompt is self-contained — do not require the conversation that produced it.

## Prerequisite gate (do these two things first, before touching new data collection)

1. Read `research/operating-system/hypothesis-registry.md`'s H004 entry alongside `research/experiments/FE-012C-repeatability-run-001/comparison/generated/FE-012C-dataset-comparison.md` and `.../semantic-repeatability-report.md`. Either revise H004's confidence/status or record an explicit rationale for retaining "Low-Moderate, Active" despite an 80.0% (literal) / 84.4% (semantic) structural-drift rate across the one repeatability test in this corpus. This is a five-minute-to-one-hour governance action, not a new experiment. Do not proceed to a new theoretical claim about repeatability without doing this first — it is the cheapest, highest-leverage open item in the current research state.
2. Complete `research/evidence-runs/ECR-000003-representation-sensitivity/review-board/HYPOTHESIS-REVIEW-BOARD-DECISION.md` (currently blank, `blank_human_decision_required`). Until this is filled in, no proposed direction/strength update from the ECR-000003 board packet is accepted repository state, and this new mission's own results will land in the same unratified limbo unless the review habit is fixed now.

If you are an autonomous agent and cannot obtain a human decision on either item, do not fabricate one. Record both as still-open blockers in your own run's journal and proceed to the experiment below anyway — the experiment does not logically depend on either decision being finalized, only on their existence being tracked honestly.

## Originating uncertainty

`research/evidence-runs/ECR-000003-representation-sensitivity/experiments/EXP-003-isomorphic-procedures/` produced the single strongest positive structural-recovery result in the entire experimental corpus: backbone, literal, conceptual, and dimensional profiles were all rated `mostly_stable` across a cross-domain, matched-control-flow manipulation (H018, cross-domain procedural isomorphism). That result has never been tested against a negative control. It is currently impossible to distinguish "the comparator correctly detects shared procedural structure across domains" from "the comparator (Comparator 3.1.0) or its scoring rubric defaults toward `mostly_stable` even when structure genuinely differs." This is independently identified as the top research priority by two separate sources: the repository's own `research/evidence-runs/ECR-000003-representation-sensitivity/review-board/HRB-NEXT-RESEARCH-INPUT.md` and `NEXT-RESEARCH-DECISION.md` (Candidate B, ranked #1, "expected information gain: very_high", "falsification value: very_high"), and an independent comparative-evidence review performed 2026-07-30 (`research/analysis/non-human-experimental-comparative-analysis.md`, Section 9, adversarial self-review item 5).

## Linked prior experiments (read these before designing packets)

- `research/evidence-runs/ECR-000003-representation-sensitivity/` — README, `pre-registration.md`, `research-questions.md`, `threats-to-validity.md`, `interpretation-rules.md`. Reuse this run's provider set (GPT, Claude, Gemini), general packet format, and Comparator `3.1.0` scoring fields exactly. Do not introduce a new comparator version for this experiment — a new comparator would confound "is the finding real" with "did the instrument change."
- `research/evidence-runs/ECR-000003-representation-sensitivity/experiments/EXP-003-isomorphic-procedures/` — the specific sub-experiment this one extends. Read its packets, response schema, and comparison outputs (`comparison/generated-v3.1/comparison-summary.md`, `comparison/generated-v3.2-explainability/isomorphic-procedure-explainability.md`) to understand exactly what "mostly_stable" meant operationally there, so EXP-004's negative control uses the same operational definitions.
- `research/analysis/non-human-experimental-contradictions.md` (Contradiction C2) — explains why EXP-003's result should not be read as general evidence that "procedural structure is stable" without this negative-control test.
- `research/analysis/non-human-experimental-failure-modes.md` (F1 recognition/leakage, F5 metric definitional instability) — both failure modes are live threats to this experiment's validity and must be actively guarded against in the design below, not merely noted afterward.

## Hypothesis

**H-EXP004 (primary):** Genuinely non-isomorphic procedures (different control-flow, not merely different domain vocabulary) will show a materially lower backbone-stability rate than EXP-003's isomorphic-procedure pairs, under the identical comparator, provider set, and scoring rubric.

**Competing hypothesis (instrument-artifact account):** The comparator/rubric will continue to report `mostly_stable` or similar high-agreement categories even for genuinely non-isomorphic procedures, indicating the EXP-003 result reflects comparator leniency rather than genuine structural detection.

**H0 / kill result for H-EXP004:** Non-isomorphic procedure pairs score statistically indistinguishably from EXP-003's isomorphic pairs on backbone stability. This would not "disprove Framework Engineering" (no single result does, per this repository's own `research/theory/falsification-criteria.md`) — it would specifically weaken H018 and require an audit of Comparator 3.1.0's scoring logic before any future domain-isomorphism claim is trusted.

## Design

### Independent variable
Procedure-pair isomorphism status: (a) isomorphic pairs — reuse or closely mirror EXP-003's original matched-control-flow, different-domain pairs as the positive-control condition; (b) non-isomorphic pairs — same surface presentation style and complexity as (a), but with deliberately different control-flow (different branch counts, different loop structures, different sequencing) across the domain pair.

### Dependent variables
Identical fields to EXP-001/002/003: structural backbone result, primitive headline, constraint concept result, representation compliance, recognized-artifact flag, tolerant-parsing events, leakage findings — read directly from `research/evidence-runs/ECR-000003-representation-sensitivity/shared-response-schema.json` and each EXP-00x `comparison/generated-v3.1/` output for the exact field set and allowed value vocabulary. Do not invent new fields; comparability with EXP-003 depends on using the same instrument.

### Controls
- Reuse EXP-003's provider set (GPT, Claude, Gemini) and Comparator 3.1.0 exactly.
- Match non-isomorphic pairs to isomorphic pairs on surface complexity (word count, number of steps, presentation format) so any difference in scoring cannot be attributed to length or format rather than isomorphism.
- Run isomorphic pairs again in this same experiment (not just cited from EXP-003) as a concurrent positive control, so both conditions are measured under identical current conditions (model versions may have drifted since EXP-003 — see the F4 finding on temporal instability; do not assume EXP-003's original scores are still reproducible without re-measuring the positive-control arm now).

### Baseline
EXP-003's original `mostly_stable` result serves as the expected positive-control outcome; this experiment's own re-run isomorphic-pair arm is the actual statistical baseline (per the control above).

### Sample size and trials
Match or exceed EXP-003's original scale (9 responses across its packet set) for each arm; run at minimum 3 procedure-pair families × 3 providers × 2 conditions (isomorphic, non-isomorphic) = 18 minimum responses, matching the corpus's existing convention of reporting exact expected-vs-collected counts (0 missing, 0 malformed, is the standard this corpus has consistently hit — maintain it).

### Blinding
Follow EXP-003's existing blinding approach (domain relabeling); additionally record every recognition/leakage event explicitly, per the corpus-wide finding (F1) that recognition is pervasive and must be tracked, not assumed away.

### Evaluation method
Use Comparator 3.1.0 exactly as configured for EXP-001/002/003. Do not introduce Comparator 3.2's explainability layer as the scoring instrument — per this repository's own existing rule, 3.2 explainability may be generated as a post hoc, non-scoring aid only, never as the official measurement.

## Falsification criteria

- H-EXP004 is falsified (or at minimum, not supported) if non-isomorphic pairs score `mostly_stable` (or an equivalent high-agreement category) at a rate statistically indistinguishable from the isomorphic control arm.
- H-EXP004 is supported if non-isomorphic pairs show a materially and consistently lower backbone-stability rate than the concurrently-measured isomorphic control arm, across at least 2 of 3 providers.
- Record the exact comparison test used (this corpus has not yet used inferential statistics beyond simple proportions/counts; a proportion comparison with an explicitly stated minimum-detectable-difference threshold, set before unblinding, is sufficient and consistent with this repository's stated aversion to false numerical precision — do not manufacture a p-value with unjustified precision from n=18).

## Negative-result preservation requirement

If H0 (instrument-artifact account) is supported instead, this must be written up with the same completeness as a positive result, following this corpus's own strong existing norm (see `ECR-000003-FINDINGS.md`'s "Claims Not Supported" section as a template). A null or instrument-artifact result here is high-value, not a failed run — it would directly inform whether Comparator 3.1.0 needs revision before it is used for any further hypothesis testing. Do not treat a null result as reason to quietly drop the experiment record.

## Explicit prohibition

Do not recruit or test human participants for this experiment. This mission is scoped exclusively to AI model outputs (GPT, Claude, Gemini) evaluated through the existing automated comparator. If a future mission wants a human baseline for this same question (already queued in this repository as a lower-priority follow-on — see `research/analysis/non-human-next-experiments.md`, item N9), that requires a separate, explicitly human-subjects-aware protocol and is out of scope here.

## Required outputs

1. A packet set for the non-isomorphic condition, stored under a new `EXP-004-non-isomorphic-controls/` directory inside `research/evidence-runs/ECR-000003-representation-sensitivity/experiments/`, following the existing EXP-001/002/003 directory conventions (packets/, responses/{gpt,claude,gemini}/, comparison/).
2. Raw responses for both arms (isomorphic re-run and non-isomorphic), with 0 missing/malformed as the target standard this corpus has consistently met.
3. A comparator output following the exact format of `EXP-003`'s `comparison/generated-v3.1/comparison-summary.md`.
4. A findings document following the exact structure of `ECR-000003-FINDINGS.md` (Executive Summary, Method Summary, per-arm findings, Claims Supported Cautiously, Claims Not Supported, Threats to Validity, Remaining Uncertainty, Recommended Next Research Action).
5. An explicit update proposal (not an applied update) to H018's row in `research/operating-system/hypothesis-registry.md`, following the existing proposal-only convention used by the ECR-000003 Hypothesis Review Board.
6. A short cross-reference note added to `research/analysis/non-human-experimental-contradictions.md` Contradiction C2, recording whether this experiment resolved the "citation-scope risk" flagged there.

## Stop conditions

- Stop and do not report a positive finding if fewer than 2 of 3 providers can be run under matched conditions (partial-provider results should be reported as inconclusive, not extrapolated).
- Stop if the non-isomorphic and isomorphic arms cannot be matched on surface complexity within a documented tolerance — an uncontrolled complexity confound would make any result uninterpretable.
- Stop if raw response files require manual repair before scoring (per this corpus's own existing stopping-condition convention in `EX-FE-0003/experiment.json`) — tolerant parsing of minor format issues (as already practiced elsewhere in this corpus) is acceptable and should be logged; hand-editing model output content is not.
- Do not create a further `ECR-000004` or expand scope beyond this single negative-control question without a separate, explicit authorization — consistent with this repository's existing rule ("do not create ECR-000004 automatically from this file").

## Completion criteria for this mission

This mission is complete when: both arms have been run to the sample size specified above with 0 unresolved missing/malformed responses; the comparator output and findings document exist in the required format; the H018 update proposal is written (not applied); the contradiction-registry cross-reference is added; and the result — whichever direction it points — is reported with the same completeness the corpus already applies to its positive findings.
