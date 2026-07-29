---
id: FE-BND-2026-07-28-NEXT-EXP
title: FE Incremental-Utility Matched Comparison
artifactType: experiment-proposal
status: proposed-not-preregistered
version: "1.0.0"
authorAgent: OpenAI Codex
created: 2026-07-28
updated: 2026-07-28
parentIds: [FE-BND-2026-07-28-MATRIX, FE-BND-2026-07-28-DEFINITIONS]
evidenceIds: [EV-FEB-014, EV-FEB-015, EV-FEB-019, EV-FEB-027, EV-FEB-R03]
hypothesisIds: [FEH-001]
theoryIds: [FE-THEORY-0.1]
supersedes: []
supersededBy: []
confidence: moderate-for-design
completion: design-ready-for-power-analysis-and-preregistration
repositoryBaseline: c830902195f22d02c820f55a2321f3e9214242a3
---

# FE incremental-utility matched comparison

## Decision this experiment must enable

Does the FE integration provide incremental, reproducible net value over a
matched composition of established practices, or should FE be reduced and
renamed as an implementation profile within those practices?

This experiment is higher value than adding more framework records because a
null or negative result would invalidate several downstream investments.

## Primary research question

For bounded analytical-framework tasks, does using the FE profile improve
downstream correctness and auditability relative to a complexity- and
documentation-matched adjacent-practice profile, without unacceptable time,
token, cognitive, review, or maintenance cost?

## Hypotheses

### H1 — incremental integration value

Artifacts produced with the full FE profile yield higher blinded downstream
task quality than artifacts produced with the matched adjacent-practice
profile.

### H2 — transfer and recovery

Independent users or agents can adapt, critique, and recover interrupted work
more accurately from FE artifacts.

### H3 — evidence integrity

FE artifacts improve claim-to-source traceability and detection of
unsupported, contradictory, stale, or out-of-scope claims.

### H4 — cost boundary

Any quality gain remains after accounting for authoring, execution, review,
training, token/compute, and maintenance cost.

### H0 / kill result

The full FE profile provides no practically important advantage over the
matched adjacent profile, or its gains are attributable to generic structure,
greater documentation dose, evaluator recognition, or provider familiarity.

## Experimental arms

| Arm | Contract | Purpose |
|---|---|---|
| A. Minimal structured baseline | Problem, stakeholders, sources, output, assumptions, acceptance criteria, handoff | Tests benefit over common disciplined practice. |
| B. Matched adjacent profile | SE lifecycle + situational ME tailoring + DSR/FEDS evaluation + PROV-style lineage, expressed without FE terminology | Primary comparator; matches feature and documentation dose. |
| C. Full FE profile | Versioned FE object model, genome, evidence/contradiction/confidence records, context, validation, change and handoff | Candidate treatment. |
| D. FE ablation | Same layout and effort budget as C, but genome and explicit evidence/contradiction/confidence separation are replaced by generic sections | Tests candidate-specific components against template effects. |

Prompts, source access, time budget, tool access, output limit, and review
opportunities are held constant. Arm B must be authored and reviewed by
people competent in the adjacent practices; it must not be a deliberately
weak control.

## Task set

Create a balanced benchmark of at least 24 task packets across four domains,
with six task families represented:

1. design a new framework from mixed-quality evidence;
2. reconstruct an existing framework from incomplete sources;
3. compare and select among competing frameworks;
4. adapt a framework after a hidden context change;
5. diagnose a failed framework execution;
6. hand off and recover an interrupted framework project.

Domains should differ in terminology, consequence, evidence type, and
framework form. Include:

- one negative-control task where a checklist is sufficient;
- one task where the best answer is to use an established method directly;
- contradictory and missing evidence;
- an adversarially plausible unsupported claim;
- a hidden change that invalidates a previously reasonable assumption;
- at least one non-procedural explanatory or taxonomic framework.

The benchmark author must not produce treatment artifacts or score outputs.

## Units, assignment, and independence

- Unit of assignment: task × builder/provider.
- Randomize arms within domain and task family.
- Use multiple human and machine providers; a provider must not see another
  arm's output for the same task.
- Hold provider/model version fixed within matched blocks.
- Reserve unseen task packets for replication.
- Same-provider role prompts are sensitivity analyses, not independent
  replications.
- Evaluators are blind to arm, provider, and FE terminology; normalize
  presentation before scoring.

Before execution, perform a simulation-based power analysis using the final
mixed-effects model and minimum important effect. “At least 24” is a
benchmark-construction target, not a claim that 24 is powered.

## Outcomes

### Co-primary outcomes

1. **Downstream correct-action score:** performance on hidden application,
   adaptation, diagnosis, and decision questions scored against adjudicated
   rubrics.
2. **Evidence-integrity score:** precision and recall for claim-source links,
   unsupported claims, contradictions, stale assumptions, and scope
   violations.

### Secondary outcomes

- independent reconstruction fidelity;
- hidden-change adaptation accuracy;
- error-detection recall and false-positive rate;
- reviewer agreement and calibration;
- provenance completeness and correctness;
- confidence calibration;
- time to first usable result and time to correct action;
- authoring, execution, review, and maintenance minutes;
- token/compute and tool-call cost;
- artifact volume and required reading;
- subjective cognitive load;
- safety or policy violations;
- rollback/recovery success;
- user preference, recorded only after objective scoring.

Schema conformance and document count are manipulation checks, not outcome
benefits.

## Scoring and analysis

- Freeze rubrics using benchmark-author gold rationales and pilot them on
  non-study artifacts.
- Use at least two blind evaluators per artifact plus adjudication rules.
- Report inter-rater reliability and disagreement, not only adjudicated
  scores.
- Fit preregistered mixed-effects models with arm as a fixed effect and task,
  domain, and provider as random or blocked effects as supported by the
  design.
- Primary contrast: C versus B.
- Mechanism contrast: C versus D.
- Context contrast: C versus A, especially on the negative-control task.
- Report raw outcomes, confidence intervals, standardized effects, missing
  data, exclusions, multiplicity policy, and all deviations.
- Model cost separately and as a preregistered net-utility sensitivity
  analysis; do not hide cost behind a single unexamined composite.

## Decision thresholds to freeze after pilot and power analysis

The preregistration must set:

- a minimum practically important improvement for each co-primary outcome;
- a non-inferiority or maximum-burden boundary for cost;
- the rule for joint success across co-primary outcomes;
- equivalence bounds for a “no meaningful difference” conclusion;
- stopping boundaries for safety, data leakage, or invalid blinding.

Recommended initial design target: detect approximately 0.3 standardized
units on the primary C-versus-B contrast while treating more than a 25%
increase in total lifecycle cost as presumptively unacceptable unless
downstream benefit is consequential. These are planning values, not frozen
scientific thresholds.

## Falsification and interpretation

| Result | Interpretation | Action |
|---|---|---|
| C > B and C > D, replicated, cost acceptable | Candidate FE-specific integration value | continue profile research; do not yet claim discipline |
| C > A but C ≈ B | Structure helps; FE adds no demonstrated value over adjacent practice | rename as adjacent-practice implementation profile |
| C ≈ D | Genome/evidence separation not an active mechanism | simplify or redesign those components |
| C worse on cost or negative-control tasks | Over-processing/burden boundary confirmed | strengthen minimal-mode routing |
| Provider interaction dominates | Technique depends on provider expertise or prompting | narrow generality; train/test separately |
| No reliable differences and equivalence supported | Current FE profile lacks practically important incremental value | stop discipline-building and preserve only useful tooling |
| Study underpowered, contaminated, or blinding fails | Inconclusive | repair and rerun; do not update efficacy confidence |

## Threat controls

- Documentation-dose matching and presentation normalization.
- Independent creation of the adjacent comparator.
- Hidden benchmark cases and contamination checks.
- Predeclared exclusions and immutable raw outputs.
- Provider/model/prompt/tool version capture.
- Negative controls and direct-established-method cases.
- Separate artifact quality from downstream task performance.
- Publish null, negative, burden, and failure results.
- Repeat with unseen tasks and at least one independent organization before
  generalizing.

## Execution sequence

1. Appoint experiment owner, statistician/method reviewer, benchmark author,
   adjacent-practice reviewer, and decision authority.
2. Build benchmark and scoring manual without treatment outputs.
3. Pilot manipulation, blinding, rubrics, cost telemetry, and analysis code.
4. Freeze minimum effects, equivalence bounds, sample size, exclusions, and
   analysis.
5. Register the protocol and hashes before revealing study cases.
6. Execute Stage A artificial evaluation.
7. Replicate on held-out providers and tasks.
8. Only if Stage A discriminates and survives replication, run a Stage B
   naturalistic field evaluation.
9. Publish result and decision packet regardless of direction.

## Stop conditions

- Source licensing or privacy cannot be preserved.
- Treatment arms cannot be matched for feature and documentation dose.
- Evaluators can reliably identify the arm after normalization.
- Benchmark leakage or provider training contamination is detected.
- Safety or consequential decision risk exceeds the approved study boundary.
- Sample or exclusion changes would be required after unblinding.

## What must wait

Do not build general automatic framework generation, credentialing,
organization-wide mandates, or autonomous canonical promotion before this
experiment and an independent replication establish a benefit worth the
cost.

