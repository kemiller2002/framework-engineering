# Non-Human Cumulative Findings and Theory Impact

Status: Research analysis artifact — proposal-only.

Layered per the mission's Phase 12 structure. Each level only draws on the level below it; no level skips directly from observation to general principle.

## Level 1 — Direct Observations (no interpretation)

- 45/45, 33/33, 20/20, 15/15, 12/12, 9/9, 10/10, 6/6 — every measured experiment in the corpus reports 0 missing and 0 malformed records at the response-collection stage (data-completeness is uniformly high across the corpus).
- E4: entry-primitive full agreement 15/15; exit-primitive full agreement 11/15; artifact recognized in 15/15 packets.
- E5: literal stable pairs 1/45; literal structural drift pairs 36/45; semantic structural drift pairs 38/45.
- E9: EXP-003 backbone/literal/conceptual/dimensional profiles reported `mostly_stable`; EXP-001 and EXP-002 backbone reported `mixed`; primitive/constraint fields reported `disagreement` in all three.
- `confidence-assessment.md` assigns no statement above Moderate.
- `HYPOTHESIS-REVIEW-BOARD-DECISION.md` contains no filled human-decision fields.

## Level 2 — Experiment-Specific Conclusions (what each experiment supports under its own conditions)

- E4 supports: under a shared vocabulary and shared blinded packets, GPT/Claude/Gemini produce highly similar entry-point classifications and transition structures at a single point in time.
- E5 supports: the same instrument and providers do not reliably reproduce their own prior structural classifications when re-run later.
- E9 supports: backbone-level structure is more likely to survive a domain/vocabulary swap under matched control-flow (EXP-003) than a topology perturbation (EXP-001) or representation-format change (EXP-002), within this comparator and provider set.
- E2/E3 support: a single, same-model actor can extract and later reuse a bounded primitive vocabulary across most (not all) of a 20-artifact and 10-problem set without immediate collapse into artifact-specific terms.
- E1 supports: in this same-model pilot, more-structured redesigns were judged to improve traceability and evidence use at a verbosity cost, for these three frameworks, under this evaluator.
- E13/E14 support: under adversarial, externally-sourced review, no mechanism claimed by Framework Engineering was shown to be unique relative to adjacent established fields.

## Level 3 — Cross-Experiment Patterns (what recurs across multiple experiments)

- Recognition/leakage recurs across every experiment that measures it (E4, E5, E9) — Failure Mode F1.
- Primitive/constraint-level disagreement recurs across every experiment that measures fine-grained fields (E4, E9), even where backbone-level agreement is higher — a consistent "coarse structure survives better than fine structure" pattern.
- Same-actor and same-provider-set dependency recurs across the whole corpus (Lineage Clusters 1–3) — no hypothesis in the corpus has more than one genuinely independent supporting test.
- Confidence ratings recur at Low/Moderate across essentially every major claim, regardless of how much evidence has accumulated behind it — a program-wide, apparently deliberate conservatism.

## Level 4 — Mechanistic Explanations (what could cause the Level 3 patterns)

- Recognition/leakage pattern: plausibly explained by heavy pretraining-data representation of named, well-known frameworks, such that blinding via renaming/paraphrase removes labels but not underlying stylistic or structural fingerprints models have seen many times before. (Confidence: moderate — consistent with general knowledge of how large language models are trained and with the corpus's own provider-dependent recognition-decay pattern for Claude in EXP-003, but not independently verified against training-data composition, which is not available to this analysis.)
- "Coarse survives, fine does not" pattern: plausibly explained by backbone/entry/exit-type fields having a small number of plausible values (making chance or shared-prior agreement easier) while primitive-sequence and constraint fields have combinatorially more degrees of freedom (making exact agreement harder even under a genuinely shared understanding of the artifact). This is also consistent with Failure Mode F5 (metric definitional instability) contributing independently to fine-grained disagreement. Both mechanisms likely contribute; the corpus cannot currently apportion how much each explains.
- Program-wide confidence conservatism: plausibly explained by the explicit governance norm in `research-program-status.md` and `confidence-assessment.md`'s "Confidence Constraint" ("Confidence should increase only when new independent evidence narrows major competing explanations") — a deliberate methodological choice, not an emergent property of the evidence alone.

## Level 5 — General Principles (candidate transferable claims)

1. **Single-timepoint model agreement should not be reported without an accompanying repeatability check.** Supporting evidence: Contradiction C1 (E4 vs. E5). Contradicting evidence: none found — no other repeatability test exists in the corpus to check this against. Boundary condition: demonstrated only for this specific packet-based primitive-extraction task; unknown whether it generalizes to other LLM-evaluation task types. Confidence: Moderate (single demonstrated instance, but a large and clean one). Practical consequence: any future FE evidence run should budget for a same-instrument repeat before treating cross-model agreement as durable evidence. Falsification condition: a second repeatability run (different task, same or different providers) showing high stability would weaken the generality of this principle without invalidating the specific E4/E5 finding.
2. **Blinding-by-renaming is not sufficient to prevent artifact recognition in frontier LLMs for well-known reasoning/procedural frameworks.** Supporting evidence: F1 across E4/E5/E9. Contradicting evidence: none found. Boundary condition: tested only for named, well-established frameworks (SWOT, Five Whys, OODA, and the corpus's broader 100-artifact reference set); unknown for genuinely novel procedural structures. Confidence: Moderate-High. Practical consequence: any experiment relying on blinding for validity needs topology-only or fully synthetic (non-training-data) procedural stimuli, not renamed real frameworks. Falsification condition: a validated graph-only control (H016) showing recognition can in fact be suppressed while structure is retained.
3. **Coarse/backbone-level structural agreement and fine/primitive-level agreement are empirically dissociable and should be reported and reasoned about separately, not blended into one "agreement" number.** Supporting evidence: E4, E9 (all three sub-experiments). Confidence: Moderate-High. Practical consequence: future comparators and hypothesis-registry entries should track backbone and detail-layer confidence independently, which the ECR-000003 kill-condition review already recommends but has not yet implemented.
4. **A research program can accumulate a large volume of experiments without its top-line discipline claim gaining support, if the experiments test mechanism-level questions rather than the discipline-boundary question directly.** Supporting evidence: 10+ mechanism-level experiments (Family A/B) coexisting with two independent-in-time-but-not-in-author discipline-level downgrades (E13, E14). Confidence: Moderate, and specific to this repository — this is presented as an observed pattern in this corpus, not a claimed universal law of research programs.

## Level 6 — Theory Implications

Referencing `research/theory/theory-of-framework-engineering-v0.1.md`, `grammar-hypotheses-v0.1.md`, and `emergent-design-laws-v0.1.md` (titles reviewed; full content not re-derived in this pass — see inventory coverage gaps):

- The "finite primitive reasoning vocabulary" strand of theory (H001, H005, H007, H008) gains no new support from this analysis beyond what the repository's own `confidence-assessment.md` already states (Low), and loses some apparent support once Lineage Cluster 1/2 non-independence is accounted for — the theory's evidentiary base is thinner in independent-test terms than a naive count of "5 supporting experiments" would suggest.
- The "reasoning grammar vs. execution grammar separation" strand (H011) remains, per the repository's own `confidence-assessment.md`, at Very Low confidence; this analysis found no additional evidence bearing on it directly and concurs with the existing rating.
- The "Framework Engineering as distinct discipline" strand loses support across the review period (E13 → E14 → this analysis), converging from three different angles (external-literature subsumption in E14; mechanism-independence analysis in this document) on the same conclusion: FE currently functions better as a research-governance and characterization method than as a validated framework-generation discipline.
- The "procedural structure is stable/recoverable" strand should be split, per this analysis's Level 5 principle 3, into a backbone-stability claim (moderately supported, conditional on the manipulation type — strong for domain swaps, weak for topology/representation swaps) and a detail-stability claim (weakly supported to unresolved) — the theory documents reviewed do not yet make this split explicit and would benefit from it.

## Level 7 — Engineering Implications (what builders/researchers should do differently)

1. Do not cite E4's cross-model agreement figures without also citing E5's repeatability figures; update `hypothesis-registry.md`'s H004 entry and any downstream document that cites E4 in isolation.
2. Before running another cross-model convergence study, add a fourth, non-overlapping model provider or a differently-implemented comparator to at least one arm, specifically to break Lineage Cluster 2's shared-dependency problem.
3. Complete the blank `HYPOTHESIS-REVIEW-BOARD-DECISION.md` (a five-minute human governance action) before any downstream document treats ECR-000003's proposed hypothesis updates as accepted.
4. Prioritize the repository's own already-identified top next experiment (negative non-isomorphic controls) — this analysis independently arrives at the same priority via a different route (adversarial self-review, Section 9 of the comparative analysis) and sees no reason to override the existing board recommendation.
5. Add a supersession record for ECR-000002 (Failure Mode F6) — low-cost, resolves an open bookkeeping gap.
6. Treat the F8 tooling defect (`research:validate` EMFILE failure) as a research-infrastructure backlog item, not a research finding — track separately from the scientific backlog in `non-human-next-experiments.md`.
