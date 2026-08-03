# Non-Human Experimental Comparative Analysis

Status: Research analysis artifact — proposal-only, not a canonical accepted record. Supersedes nothing; ratification (if any) is a human governance decision.
Companion documents: `non-human-experimental-inventory.md`, `non-human-experiment-matrix.json`, `non-human-experimental-lineage.md`, `non-human-experimental-contradictions.md`, `non-human-experimental-failure-modes.md`, `non-human-cumulative-findings.md`, `non-human-next-experiments.md`.

## 1. Experiment Families

Grouped by what actually varies between members, per the lineage analysis:

### Family A — Same-model internal pilots (E1 FE-011A, E2 FE-012A, E3 FE-012B)
Common design: single model family plays generator and evaluator/reconstructor roles; researcher-authored test material; no independent replication. Question: can structured redesign / a primitive vocabulary do something useful, at all, before investing further? These were explicitly designed as fast pre-checks, not as decisive tests, and their own documentation says so.

### Family B — Three-provider structural-recovery line (E4 FE-012C Manual, E5 FE-012C Repeatability, E7 ECR-000001, E8 ECR-000002, E9 ECR-000003)
Common design: GPT + Claude + Gemini, packet-based blinded extraction, comparator-scored agreement. Question: is there a recoverable, stable, cross-model procedural structure beneath surface wording? This is the corpus's largest and most instrumented family, and the only one with a direct repeatability test (E4→E5) and a frozen, versioned comparator (E9).

### Family C — Unexecuted, fully designed experiments (E6 FE-013, E11 EX-FE-0002, E12 EX-FE-0003)
Common design: rigorous protocols, explicit falsification/stopping conditions, zero execution data. Not failures — genuinely a distinct category the mission's Phase 10 asks to be preserved rather than discarded or silently treated as failures.

### Family D — Repository-scope meta-evaluations (E10 EX-FE-0001, E13 FE-EVAL-2026-07-23, E14 FE-BOUNDARY-2026-07-28)
Common design: an AI agent reasons over the repository's own claims and (for E14) external sources, rather than running a blinded packet experiment. Question: is Framework Engineering itself a distinct, defensible discipline? E10 is nominally in this family by design intent but produced no usable content (fixture only).

## 2. Pairwise Comparisons (materially related pairs only)

### E4 vs. E5 (FE-012C Manual vs. Repeatability)
- Constant: packets, vocabulary, provider triad, comparator logic family
- Changed: point in time (fresh sessions later)
- Valid comparison: Yes — purpose-built matched-pairs design
- Agreement: No — single-sitting cross-model agreement (E4) does not predict cross-time stability (E5)
- Confidence in comparison: High (see Contradiction C1 for full treatment)

### E7 vs. E8 vs. E9 (ECR-000001/2/3)
- Constant: provider triad, general packet-based design philosophy, general research question lineage
- Changed: manipulated variable (calibration → recognition-level → topology/representation/domain), comparator version, packet corpus scope
- Valid comparison: Partially — meaningful for tracking how the research question and instrument matured, not meaningful as a controlled experiment across the three (they are not held constant on enough dimensions to isolate one variable's effect across all three)
- Agreement: E7's outcome could not be reconstructed (finding not located); E8 and E9 both report persistent primitive/constraint disagreement, and E9 additionally reports the recognition- and topology-dependent backbone results described in Contradiction C2.
- Confidence in comparison: Moderate for E8-vs-E9, low for anything involving E7 given its missing synthesis

### E2/E3 vs. E4/E5/E9 (same-model extraction vs. cross-model convergence)
- Constant: shared primitive vocabulary lineage
- Changed: single-model vs. three-provider design; internal vs. externally-facing evaluation
- Valid comparison: Limited — E2/E3's "did not collapse into artifact-specific vocabulary" finding and E4/E9's "primitive/constraint disagreement persisted" finding are not strictly contradictory (different questions: "is a vocabulary usable at all" vs. "do independent models converge using it"), but a reader moving from E2/E3's more positive framing to E4/E9's more mixed framing without tracking the underlying design change could wrongly read this as regression or inconsistency rather than a difference in what was tested.
- Confidence in comparison: Low-Moderate

### E13 vs. E14 (Codex meta-evaluations)
- Constant: authoring agent, general method (text-analytic reasoning over repository claims)
- Changed: E14 adds external sourcing and narrows scope specifically to the discipline-boundary question
- Valid comparison: Yes, as a longitudinal single-author view, not as two independent opinions (see Lineage Cluster 3)
- Agreement: High — E14's conclusion ("not a distinct discipline," "candidate integrated engineering profile") is a direct continuation of E13's "provisional research and method-engineering program" framing, not a reversal
- Confidence in comparison: High for tracking one evaluator's view over time; this pairing cannot be used as evidence of inter-rater agreement

## 3. Longitudinal Findings

Ordering what's dateable: E1/E2/E3 (2026-06-28) → E4 (undated, before repeatability) → E7/E8/E9 (ECR series, undated internally but referenced from a June 30 decision-log entry establishing the operating system) → E5 (2026-07, post-E4) → E9's board packet and E13 (2026-07-23) → E14 (2026-07-28) → this analysis (2026-07-30).

- Confidence has not monotonically increased with time. `confidence-assessment.md` caps every major claim at Moderate or below regardless of how much additional evidence has accumulated since June, which is consistent with (and arguably a strength of) the program's explicit "prefer weakening claims" posture — this is one of few research programs reviewed where volume of work has not been allowed to inflate stated confidence.
- The single largest longitudinal shift in the corpus is discipline-scope, not mechanism-level findings: E13 (2026-07-23) already downgrades "Framework Engineering" from an implied discipline to "provisional... program," and E14 (2026-07-28) goes further, concluding no mechanism is shown to be unique. Neither of these downgrades rests on new experimental (Family A/B) data — both are text-analytic reassessments of the same underlying evidence base. This means the corpus's confidence in FE-as-a-discipline has fallen over the reviewed period while its confidence in specific structural-recovery findings (H001-H018) has stayed flat, because different documents, not new data, drove the discipline-level reassessment.
- Model/version drift cannot be assessed from available documentation: exact GPT/Claude/Gemini versions and dates were MISSING for E4 and E5, so it is not possible to determine whether E5's drift is attributable to model updates between the two runs versus pure sampling variance at a fixed model version. This is recorded as an evidence gap, not resolved by assumption.

## 4. Cross-Project / Cross-Family Comparisons

The mission checklist asks whether findings transfer across projects; within this single repository, the closest analogue is whether findings transfer across the "structural recovery" question (Family B) and the "discipline boundary" question (Family D). They do not currently inform each other much: Family D's evaluations (E13, E14) cite Family B's results only briefly (as one bullet each in E13's "Findings that survive this review": "Backbone-level procedural similarity sometimes persists across representations and providers; detailed primitives, transitions, and constraints are less stable" — an accurate, hedged summary), and neither E13 nor E14 engages with E5's repeatability finding at all. This is itself worth flagging: the corpus's most decisive single quantitative result (80% structural drift on repeat) is not mentioned in either of the two repository-wide evaluation packages, despite both being produced after E5's data existed in the repository. This is either an oversight in those evaluations or a scoping choice (E13/E14 focus on discipline-boundary questions, not mechanism-level repeatability) — this analysis cannot determine which from available evidence, and records it as an open question rather than asserting oversight.

## 5. Quantitative Synthesis

Formal meta-analysis (pooled effect sizes, weighted averages) is **not performed** in this document. Justification, per the mission's own constraint against forcing incomparable measurements into a common score: the corpus's dependent variables are not on a common scale even within Family B (E4/E5 use a 3-category literal/semantic drift classification; E9 uses a comparator-specific multi-field agreement/disagreement/mixed vocabulary with different field names per sub-experiment), sample sizes are small (n=9 to n=45 per experiment), and — per the lineage analysis — the "independent" observations within Family B are not independent in the statistical sense (same 3 providers repeated across studies), which would violate the independence assumption behind any naive pooled estimate or confidence interval. Reporting a single pooled number here would create false precision the source data does not support, which the repository's own Constitution explicitly warns against ("Appropriate Precision").

What can be reported honestly:

| Experiment | Metric | Value | n | Independent of other rows? |
|---|---|---|---|---|
| E4 | Entry-primitive full agreement | 15/15 (100%) | 15 packets | No (shares providers/vocabulary with E5, E9) |
| E4 | Exit-primitive full agreement | 11/15 (73%) | 15 packets | No |
| E4 | Dominant-primitive full agreement | 12/15 (80%) | 15 packets | No |
| E4 | Reasoning-shape full agreement | 9/15 (60%) | 15 packets | No |
| E5 | Literal stable pairs | 1/45 (2.2%) | 45 pairs | No (is E4 repeated) |
| E5 | Literal structural drift pairs | 36/45 (80.0%) | 45 pairs | No |
| E5 | Semantic structural drift pairs | 38/45 (84.4%) | 45 pairs | No |
| E3 | Primitive Sufficiency Index | 7/10 (70%) | 10 problems | No (same-model, self-evaluated) |
| E9 EXP-003 | Backbone/literal/conceptual/dimensional | "mostly_stable" (categorical, not a rate) | 9 responses | No |

The two headline numbers most likely to be quoted out of context elsewhere in the repository going forward — E4's "15/15 entry-primitive agreement" and E5's "80% structural drift" — describe the *same instrument and the same three providers* under different temporal conditions and should always be reported together, never separately, per Contradiction C1.

Sensitivity check performed: recalculating E5's headline under the more evaluator-generous semantic comparator (rather than the strict literal one) does not materially change the conclusion (84.4% vs. 80.0% structural drift) — the finding is robust to this specific analytical choice, which is one of the few places in this corpus where a sensitivity analysis was actually possible from available data.

## 6. Qualitative Synthesis

See `non-human-experimental-failure-modes.md` for the full taxonomy. Headline qualitative pattern: every experiment in Family B that measured recognition/leakage found it present; every experiment that measured "dominant"/"exit"-type fields found persistent disagreement; and the one experiment that tested temporal repeatability found it largely absent. Read together, these three qualitative patterns support a more conservative reading of the whole family's positive results than any single experiment's own summary suggests in isolation — a pattern the mission brief specifically warns is common ("conclusions may be weaker than the repository currently claims").

## 7. Negative and Null Result Analysis

- FE-013 (E6): fully designed, zero execution — a preserved, explicit non-result, not folded into any claim. This is good practice: the repository did not quietly drop the idea or claim a result it doesn't have.
- ECR-000002 (E8): thin execution, no consolidated findings located, apparently informally absorbed by ECR-000003 without a formal supersession record (Failure Mode F6). This is a case where a stalled/incomplete result risks being neither actively cited nor formally retired — a gray zone the mission specifically asks to be surfaced.
- EX-FE-0002 (E11): explicitly described by a later document (E14) as incomplete/blocked. Correctly not treated as evidence of anything by E14, which is good practice.
- EX-FE-0001 (E10): registry metadata (`status: ready`, `run_count_by_provider: {manual: 6}`) creates an impression of substantive completed work that the underlying artifact (a template synthesis file with empty findings, built on fixture data) does not support. This is the one place in the corpus where this analysis found a registry status that appears to overstate what was actually produced — recorded as a documentation-integrity finding, not an accusation of fabrication (fixture/infrastructure runs are a legitimate and disclosed activity; the risk is only that the registry's status field does not visibly distinguish "infrastructure exercised" from "evidence collected").
- Publication/recording bias assessment: The corpus does **not** show evidence of hiding negative results — quite the opposite; E5's unfavorable repeatability finding is fully published with both a strict and a generous comparator, and E9's `ECR-000003-FINDINGS.md` has an explicit "Claims Not Supported" section. The main asymmetry found is not suppression but **under-cross-referencing**: unfavorable findings (E5's drift rate) are documented in full but not consistently carried forward into the higher-level synthesis documents (hypothesis registry confidence ratings, E13/E14 meta-evaluations) that a reader would consult first.

## 8. Confidence Reassessment

Applying the calibrated-language scale requested by the mission (established / strongly supported / moderately supported / suggestive / weakly supported / unsupported / contradicted / obsolete / unresolved) to the corpus's major claims, independent of the repository's own existing labels:

| Claim | Repository's current label | This review's reassessment | Basis for any difference |
|---|---|---|---|
| A finite primitive vocabulary can describe diverse procedural artifacts without immediate collapse (H001/H005) | Moderate / Low-Moderate | **Weakly supported** | Evidence is same-model (E2/E3) plus a vocabulary-constrained cross-model design (E4/E9) with unresolved repeatability (E5); no independent-extractor test exists |
| GPT/Claude/Gemini converge on procedural structure given the same packet (H003) | Moderate | **Suggestive, single-timepoint only** | E4's convergence is real but not shown to be stable over time (E5) or free of recognition confounds (F1); "convergence" and "repeatable convergence" are different, unequally supported claims |
| The packet-based measurement instrument is reliable enough for evidence review (H015) | Moderate | **Moderately supported for data-quality/completeness (0 missing/malformed records across the corpus is a genuinely strong result); weakly supported for semantic reliability** given F4 and F5 | Splits a compound claim the current single Moderate rating does not split |
| Recognition/training-prior bias is a real, active threat (H013) | Moderate | **Strongly supported** | This is arguably the best-evidenced claim in the entire corpus — positive recognition findings in every experiment that measured it |
| Structured FE redesign improves output quality (informal FE-011A claim) | Low | **Weakly supported, unchanged** | No new evidence located beyond E1 itself; concur with existing Low rating |
| Cross-domain procedural isomorphism (H018) | Very Low → proposed Slightly Supported (board, unratified) | **Unresolved, pending negative controls** | EXP-003's positive result (E9) has not yet been tested against a designed negative control, which both the repository's own board and this review independently identify as the decisive missing test |
| Framework Engineering is a distinct engineering discipline | (repo already downgrades this via E13/E14) | **Unsupported, per two independent lines of internal evidence (E14's boundary analysis, and this analysis's own observation that no hypothesis reaches beyond Moderate confidence after 10+ experiments)** | Concurs with E14; this analysis reaches the same conclusion via a different route (mechanism-evidence quality rather than external-literature subsumption) |
| Repeatability of same-model, same-instrument structural extraction over time (H004) | Low-Moderate, Active | **Weakly supported to contradicted, pending explicit reconciliation** | This is the one rating this review recommends revising downward with highest confidence and highest urgency — see Contradiction C1. This review stops short of declaring the hypothesis fully killed, because the corpus's own interpretation-rules.md correctly notes that one drift dataset should not by itself be treated as proof, and because the causal driver of the drift (F4) has not been isolated. But "Low-Moderate, Active" understates what an 80%/84.4% structural-drift result would normally imply for a repeatability hypothesis, and this should not remain unexamined at the next research-governance checkpoint. |

## 9. Adversarial Self-Review of This Analysis

Applying the mission's Phase 13 challenge questions to the five conclusions above with the largest decision consequences:

1. **"Recognition bias is strongly supported"** — Could this be evaluator bias in this analysis rather than the artifacts? Alternative: recognition fields might be over-reported because the schema makes them easy and salient to fill in relative to true-negative (no recognition) cases, inflating apparent frequency. This review cannot rule this out from available data; recorded as a residual uncertainty.
2. **"H004 repeatability should be revised downward"** — Could regression to the mean or a single bad run explain the 80% figure? The corpus's own semantic-comparator re-analysis (a designed robustness check, not this review's invention) shows the result is not an artifact of strict literal scoring (84.4% under generous scoring), which weakens this alternative but does not eliminate the possibility that this specific repeatability run happened to catch an unusually volatile period (e.g., a provider-side model update). Without dated model-version metadata (a documented gap), this alternative cannot be excluded.
3. **"No hypothesis exceeds Moderate confidence"** — Is this a real finding about the world, or an artifact of a research culture that has adopted deliberately conservative confidence-labeling norms (per `confidence-assessment.md`'s explicit "No statement in this document is assigned High")? Plausibly both — the norm itself is evidence-appropriate given the underlying evidence quality (Family A/B's independence and blinding problems), so this review treats the low confidence ceiling as substantively earned, not merely stylistic, while acknowledging the norm itself was adopted before, not because of, this specific evidence review.
4. **"FE is not a distinct discipline"** — This review agrees with E14, but E14 and this review share partial method overlap (both are AI-agent text-and-evidence reviews, and this review read E14 before forming its own view, which is a real anchoring risk this review cannot fully correct for from within the same review). A genuinely independent check would require a reviewer who has not read E13/E14 first.
5. **"EXP-003's mostly_stable backbone is real but untrusted pending negative controls"** — Could the comparator itself be biased toward reporting "mostly_stable" (e.g., a lenient default codepath)? This review did not audit the Comparator 3.1.0 source code and cannot rule this out; it is exactly the concern the repository's own next-research-decision document raises as the reason to run negative controls before trusting this result, and this review defers to that reasoning rather than independently re-deriving it.

## 10.5 Required Analytical Tables

### Experiment Quality Matrix

| Experiment | Hypothesis Clarity | Controls | Sample Adequacy | Metric Validity | Raw Data | Reproducibility | Independence | Overall Strength |
|---|---|---|---|---|---|---|---|---|
| E1 FE-011A | Moderate | Weak (no baseline control for evaluator bias) | Low (n=3 frameworks, 6 outputs) | Moderate (qualitative rubric) | Present | Not attempted | Low (same-model) | Weak |
| E2 FE-012A | Moderate | Weak (no comparator condition) | Moderate (n=20) | Moderate | Present | Not attempted | Low (same-model) | Weak |
| E3 FE-012B | Moderate | Weak | Low (n=10) | Moderate | Present | Not attempted | Low (same-model) | Weak |
| E4 FE-012C Manual | High (explicit RQ) | Moderate (shared instrument across providers) | Moderate (n=45 obs, 15 packets) | Moderate (F5 field ambiguity) | Present, complete | Yes — replicated by E5 | Low (shared providers/vocabulary) | Moderate |
| E5 FE-012C Repeatability | High | High (matched-pairs design, dual comparator) | Moderate (n=45 pairs) | Moderate-High (two independent scoring rules agree) | Present, complete | This is itself a replication | Low (same instrument as E4) | Moderate-High (best-controlled single experiment for its specific question) |
| E6 FE-013 | High (design only) | High (design only) | N/A | N/A | None | N/A | N/A | Not assessable (no data) |
| E7 ECR-000001 | Moderate | Moderate (calibration design) | Low-Moderate (n=12) | Unknown (findings not located) | Present | Unknown | Low | Not assessable (missing synthesis) |
| E8 ECR-000002 | Moderate | Moderate | Low (thin execution) | Unknown | Partial | Unknown | Low | Weak (incomplete) |
| E9 ECR-000003 | High | High (frozen instrument, certified data, explainability layer) | Moderate (n=33) | Moderate (same F5 issue, but explicitly flagged internally) | Present, certified | Recommended, not yet done | Low (shared providers/comparator lineage) | Moderate (best-instrumented multi-experiment run in the corpus) |
| E10 EX-FE-0001 | High (design) | N/A | N/A | N/A | Fixture only | N/A | N/A | Not assessable (no real data) |
| E11 EX-FE-0002 | High (design) | High (design) | N/A | N/A | None | N/A | N/A | Not assessable (no data) |
| E12 EX-FE-0003 | High (design) | High (design; strongest blinding/stopping-condition design in the corpus) | N/A | N/A | None | N/A | N/A | Not assessable (no data) |
| E13 FE-EVAL-2026-07-23 | High | Moderate (adversarial method, but single-author) | N/A (text-analytic) | N/A | Present | N/A | Moderate (independent of Family A/B, not of E14) | Moderate |
| E14 FE-BOUNDARY-2026-07-28 | High | High (externally sourced comparison) | N/A | N/A | Present | N/A | Low relative to E13 (same author) | Moderate |

### Comparability Matrix

| Experiment A | Experiment B | Comparable Dimensions | Incompatible Dimensions | Shared Dependencies | Comparison Validity |
|---|---|---|---|---|---|
| E4 | E5 | Packets, vocabulary, providers, comparator logic | Point in time only (by design) | Full instrument | High — purpose-built matched comparison |
| E7 | E8 | Provider triad, general design philosophy | Manipulated variable, comparator version, packet corpus | Provider selection, design lineage | Moderate |
| E8 | E9 | Provider triad, P001/P002/P003 artifact families | Comparator version (E9 uses frozen 3.1.0), scope (E9 adds EXP-001/002/003 structure) | Artifact-family design | Moderate |
| E2/E3 | E4/E9 | Shared primitive vocabulary lineage | Single-model vs. three-provider design; internal vs. externally-facing evaluation | Vocabulary | Low-Moderate |
| E1 | E2/E3/E4/E5/E9 | General corpus (same research program, same repository) | Research question, subject matter, design entirely different | Research program/team only | Low — not meaningfully comparable beyond noting shared authorship |
| E13 | E14 | Method (text-analytic), author, general scope | External sourcing (E14 only), narrower question (E14) | Full — same author, direct successor | High for longitudinal tracking; not usable as independent corroboration |

### Findings Matrix

| Finding | Supporting Experiments | Contradicting Experiments | Boundary Conditions | Revised Confidence |
|---|---|---|---|---|
| Cross-model agreement on backbone-level primitive fields at a single timepoint | E4, E9 (partially) | E5 (does not contradict the single-timepoint claim, but contradicts any implied durability) | Blinded packets, provided vocabulary, 3 specific providers only | Suggestive, single-timepoint only |
| Same-instrument temporal repeatability is poor | E5 (literal and semantic) | None located | One repeatability run, cause of drift not isolated | Weakly supported to contradicted for H004 as currently worded |
| Recognition/blinding leakage is pervasive | E4, E5, E9 | None located | Tested only on well-known, named frameworks | Strongly supported |
| Primitive/constraint-level fields are less stable than backbone-level fields | E4, E9 (all sub-experiments) | None located | Possible confound with field-definition ambiguity (F5), not yet isolated | Moderately supported |
| Domain swaps under matched control-flow preserve backbone structure better than topology/representation swaps | E9 (EXP-003 vs. EXP-001/002) | None located, but no negative control exists yet | No negative (non-isomorphic) control tested | Suggestive, pending N3 |
| A finite primitive vocabulary is broadly sufficient for procedural description | E2, E3 (weakly), E4/E9 (mechanically, given provided vocabulary) | H012 (vocabulary-bias concern), no vocabulary-free test exists | Vocabulary always provided in advance | Weakly supported |
| Framework Engineering is a distinct engineering discipline | None found | E13, E14, and this analysis's independent mechanism-evidence review | N/A | Unsupported |

### Replication Matrix

| Original Experiment | Replication | Independence | Result | Replication Strength |
|---|---|---|---|---|
| E4 (FE-012C Manual) | E5 (FE-012C Repeatability Run 001) | Not independent — same instrument, same providers, same team, different time only | Did not replicate (80.0% / 84.4% structural drift) | Strong, well-controlled repeatability test with a clear negative result |
| E13 (FE-EVAL-2026-07-23) | E14 (FE-BOUNDARY-2026-07-28) | Not independent — same author | Directionally consistent (both downgrade discipline claim); E14 extends rather than re-tests E13 | Not a true replication; a longitudinal extension |
| E8 (ECR-000002) | E9 (ECR-000003) | Not independent — shared providers, shared artifact families, shared design lineage | Partial — E9 reports similar disagreement patterns on fine-grained fields, better backbone stability under domain manipulation specifically | Weak as a replication (too many simultaneous design changes to isolate what varied) |
| No hypothesis in H001-H018 | — | — | — | **No hypothesis in this corpus has a genuinely independent replication** (different provider set and/or different comparator implementation). This absence is itself the most important entry in this table. |

### Research-Gap Matrix

| Gap | Affected Conclusion | Risk | Experiment Needed | Priority |
|---|---|---|---|---|
| No vocabulary-free extraction has ever been run | Vocabulary-sufficiency claims (H001, H005, H012) | Cannot distinguish true sufficiency from imposed constraint | N6 | 6 |
| No negative (non-isomorphic) control exists | H018, EXP-003's positive backbone-stability finding | Risk of false structural equivalence / lenient comparator | N3 | 3 |
| No model-version/timestamp-pinned repeatability run exists | H004, cause of E5's drift | Cannot separate model drift from sampling variance | N5 | 5 |
| No independent comparator or 4th provider has ever been used | H003, H013, H015, and effectively every quantitative finding in Family B | Every "cross-model" finding in the corpus may partly reflect shared comparator/provider-selection artifacts rather than a general phenomenon | N7 | 7 |
| "Dominant"/"exit"/"constraint concept" fields are not tightly operationalized | Every fine-grained disagreement finding | Disagreement may partly measure definition ambiguity, not construct instability | N4 | 4 |
| No human baseline exists anywhere in the corpus | All structural-recovery hypotheses | Cannot establish whether model-recovered structure resembles expert human analysis at all | N9 | 9 |
| ECR-000001 and ECR-000002 findings could not be located in this pass | H001, H002, H003, H005-H008, H011, H012, H014, H016 (all cite these runs as supporting evidence) | Confidence ratings may rest partly on uncited/unlocatable synthesis | Governance action: locate or formally retract these citations | High (cheap, unblocks correct citation accounting) |
| `research:validate` fails in this execution environment | Repository's own completion criterion ("run documented validation commands") | Cannot currently confirm full-repository structural validity via the intended tool | N11 (engineering, not research) | Track separately |

## 10. What Would Reverse Each Major Conclusion (Falsification Conditions Carried Forward)

- H004 downgrade would be reversed by: a second, independently-timed repeatability run showing drift substantially below 80%, ideally with model version pinned and logged.
- H013 (recognition bias, strongly supported) would be reversed by: a validated graph-only/topology-only negative control showing recognition drops to near-zero while structural extraction quality is maintained (H016's own kill condition).
- "FE is not a distinct discipline" would be reversed by: the matched-utility experiment already designed in E14's `next-experiment.md` (Arms A/B/C/D) showing C (full FE profile) outperforms B (matched adjacent-practice profile) on replication, with cost accounted for.
- EXP-003's isomorphism finding (currently "unresolved, pending negative controls") would be strengthened by: the board's own top-ranked recommended experiment (negative non-isomorphic controls) showing a sharp, expected drop in backbone stability for genuinely non-isomorphic procedures, which would validate that the comparator can in fact detect the absence of shared structure rather than defaulting to "mostly_stable."
