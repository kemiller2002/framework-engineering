# Non-Human Experimental Contradiction Registry

Status: Research analysis artifact — proposal-only.

## C1 — FE-012C "strong cross-model agreement" vs. FE-012C repeatability "severe temporal drift"

- Conflicting claims:
  - E4 (FE-012C Manual): entry-primitive agreement 15/15, strong transition agreement 14/15, framed by its own interpretation.md as evidence that "agreement across GPT-5, Claude, and Gemini strengthens confidence in the extraction instrument."
  - E5 (FE-012C Repeatability): the same instrument, same packets, same three providers, run again later, shows literal structural drift in 36/45 pairs (80.0%) and only 1/45 (2.2%) fully stable pairs; a generous semantic re-scoring still shows 38/45 (84.4%) structural drift.
- Supporting experiment IDs: E4, E5 (same underlying instrument; see lineage doc, Cluster 2)
- Are the experiments genuinely comparable? Yes, more so than almost any other pair in the corpus — E5 was purpose-built as a repeatability test of E4 using the unmodified packet set and the same three providers.
- Compare methods: Identical packets and vocabulary; only the point in time (fresh conversations) differs.
- Compare models: Identical provider triad.
- Compare data: E4 and E5 are directly paired (`packet_id` as primary key) in `FE-012C-dataset-comparison.md`.
- Compare evaluators: Same literal comparator script for the primary comparison; a secondary semantic comparator was added for E5 only, and even under the more generous semantic rules, structural drift does not meaningfully decrease.
- Hidden variables / shared dependencies: Both draw on the same provided vocabulary and the same recognizability of the underlying artifacts; the "agreement" in E4 may be partly explained by the same mechanisms (recognition, constrained vocabulary) that could also produce spuriously consistent literal categorization in a single sitting, without those mechanisms guaranteeing stability across sittings.
- Can both results be true under different conditions? Yes, and this is the most defensible reading: cross-model convergence *at a single point in time, within one conversation each* (E4) can coexist with *poor within-model, cross-time stability* (E5), because different mechanisms are plausibly at work — shared training-data priors and artifact recognition could drive same-day convergence across providers, while conversational sampling variance, prompt-context drift, or model-side non-determinism could independently drive poor repeatability for any single provider across time. These are not the same claim and E4's "strong agreement" finding does not, by itself, predict E5's outcome, but E4's positive framing was written without the benefit of E5's data and was not revisited afterward.
- Is one result methodologically stronger? E5's design is stronger for the specific question of stability — it directly targets repeatability with a matched-pairs design and reports both a literal and a semantic-generous comparator, whereas E4 only ever measured single-sitting cross-model agreement and never claimed to measure temporal stability.
- Classification: **Model-version/temporal difference, with a documentation-currency defect** — the finding is not a pure logical contradiction (both can be simultaneously true), but it is a genuine, currently unresolved tension: the hypothesis registry's H004 ("Repeatability") is still rated Low-Moderate/Active as of this writing, and no located document revises E4's "strengthens confidence" framing in light of E5's drift numbers.
- Resolution status: **Unresolved.** This is the single highest-priority item in the confidence-reassessment section below and in the next-experiment backlog.

## C2 — ECR-000003 EXP-003 "mostly_stable" backbone vs. EXP-001/EXP-002 "mixed" backbone, and vs. FE-012C's 80% structural drift

- Conflicting claims: Within the same evidence run (E9), the same general measurement approach (Comparator v3.1.0) reports EXP-003 (domain-swap under matched control-flow) as `mostly_stable` on backbone/literal/conceptual/dimensional profiles, while EXP-001 (topology perturbation) and EXP-002 (representation-format change) both report `mixed` backbone results with primitive/constraint disagreement.
- Are the experiments genuinely comparable? Partially. They share the same comparator version, the same three providers, and the same general packet-authoring team, but manipulate different variables (topology vs. representation vs. domain), so a difference in outcome is an expected and interpretable result of the design, not necessarily a contradiction.
- Explanation already offered natively (and concurred with here): "Backbone stability was weakest in EXP-001 and EXP-002, and strongest in EXP-003" — i.e., domain/vocabulary swaps under a fixed control-flow skeleton preserve backbone-level structure better than topology or representation-format changes do. This is a coherent, falsifiable claim, not an unexplained contradiction.
- However, when EXP-003's `mostly_stable` result is set beside E5's 80% structural-drift finding (a different but related question — "does structure survive at all" vs. "does structure survive across a domain swap in a single sitting"), the corpus as a whole does not support a general claim that "procedural structure is stable." It supports a narrower, conditional claim: structure recovered from a single model, in a single sitting, may be stable across a domain swap with matched control-flow, but that same recovered structure is not shown to be stable for the same model asked again later. Any synthesis document that cites EXP-003 as evidence for "procedural structure is real and stable" without also citing E5's repeatability finding would be selectively citing supportive evidence, which this analysis explicitly flags as a documentation risk.
- Classification: **Contextual difference (largely resolved) for EXP-001 vs. EXP-002 vs. EXP-003; measurement-scope difference (unresolved if conflated) between EXP-003 and E5.**
- Resolution status: EXP-001/002/003 internal pattern — resolved, consistent with design. EXP-003-vs-E5 scope conflation risk — unresolved as a documentation practice; no single document in the corpus currently juxtaposes these two findings, which this analysis is the first to do explicitly.

## C3 — "No hypothesis is proven" vs. Moderate-confidence "Active" hypotheses built on same-model-only evidence

- Conflicting claims: `research/theory/research-program-status.md` states "Internal same-model runs remain exploratory evidence only" and instructs the program to "prefer weakening claims over strengthening them." Simultaneously, `hypothesis-registry.md` lists H001 (Procedural Invariance), H003 (Multi-Model Convergence), and H006 (Control Flow) at **Moderate** confidence and "Active" status, where H001's and H006's supporting-evidence columns list FE-013 (never executed) and ECR-000001 (findings not locatable) alongside FE-012C.
- Are these directly comparable claims? Yes — both are governance statements about the same evidence base, produced by the same research operating system.
- Hidden variable: H001's "Supports" column lists "FE-013; ECR-000001." FE-013 has zero response data (E6). ECR-000001's consolidated findings document was not located in this review (E7). If accurate, H001's Moderate rating is currently resting substantially on FE-012C/ECR-000003-family evidence (Cluster 2 in the lineage doc) plus two citations that do not currently correspond to locatable supporting data.
- Classification: **Documentation defect / stale citation**, not a live contradiction in the evidence itself — but a real risk that the hypothesis registry's confidence column is citing support that cannot currently be verified from the artifacts in the repository.
- Resolution status: Unresolved. Recommended action: audit each "Supports" and "Evidence Runs" column in `hypothesis-registry.md` against locatable, populated findings documents (this analysis's inventory can serve as the checklist), and either locate the missing ECR-000001/FE-013 evidence or remove/qualify the citation.

## C4 — Proposal-state vs. accepted-state confusion (carried forward from FE-EVAL-2026-07-23, independently re-confirmed here)

- Conflicting claims: `CURRENT_STATE.md` treats Comparator 3.1 as "frozen" and ECR-000003 as the "Current Phase," language that reads as settled/current. The ECR-000003 Hypothesis Review Board's own decision record (`HYPOTHESIS-REVIEW-BOARD-DECISION.md`) is explicitly blank (`status: blank_human_decision_required`), and its readiness report states the board packet is "proposal_only."
- This was first identified by E13 (FE-EVAL-2026-07-23): "`CURRENT_STATE.md` calls Comparator 3.1 frozen and ECR-000003 current, while the review board has not accepted its proposed updates." This analysis independently re-derived the same tension while reading the review-board files directly (see inventory E9), which corroborates E13's finding from a second, independent read of the primary sources rather than merely repeating E13's claim.
- Classification: **Governance/documentation-currency defect.**
- Resolution status: Unresolved as of this analysis. The blank decision record means no proposed hypothesis-direction or confidence update from ECR-000003 should be treated as accepted repository state until a human reviewer completes it.

## C5 — "Vocabulary sufficiency" claims (FE-012A/B) vs. the vocabulary being investigator-provided

- Conflicting claims: FE-012A/FE-012B summaries describe primitive-vocabulary coverage in positive terms ("did not collapse immediately into artifact-specific vocabulary," "70 percent... primitive sufficiency index"), while the same documents' own limitations sections, and separately `competing-explanations.md` (#2, "Primitive stabilization results from prompt engineering") and `hypothesis-registry.md` (H012, Vocabulary Bias), state that the vocabulary was seeded/provided in advance and that this could mechanically produce the appearance of sufficiency.
- Is this a true contradiction or an acknowledged, unresolved threat? The latter — the repository does not claim these are inconsistent; it flags the risk in a separate document from where the positive framing appears. The contradiction here is one of *emphasis and placement*: readers who see only the FE-012A/B summary documents (which most readers would open first) get a more positive impression than readers who separately locate `competing-explanations.md` and `H012`.
- Classification: **Documentation-defect / framing-placement issue**, not a factual contradiction.
- Resolution status: Not a blocking issue, but worth correcting: FE-012A/FE-012B summary documents would benefit from a forward pointer to `H012` and `competing-explanations.md` #2, rather than requiring readers to discover the caveat in a separate file.

## C6 — Metric definitional instability treated as a minor detail vs. its role in every major result

- Observation, not a classic two-claim contradiction: "Dominant primitive" and "exit primitive" (or their ECR-000003 analogues, "primitive headline" and "constraint concept") show disagreement in nearly every experiment that measures them — E4 (12/15, 11/15), E9 EXP-001/002/003 (disagreement in all three). Multiple separate documents (FE-012C-interpretation.md, ECR-000003 kill-condition review) independently flag that these fields need "tighter operational definition," but no experiment in the corpus has yet been designed specifically to fix the definition before re-measuring.
- Why this belongs in a contradiction registry: Several hypotheses (H002, H005, H007, H008) are evaluated partly using these unstable fields, meaning disagreement attributed to "the underlying construct is unstable across representations" (a theoretically interesting finding) is currently confounded with "the measurement field itself is ambiguously defined" (an instrument problem). The corpus cannot currently distinguish these two explanations for the same observed disagreement rate.
- Classification: **Measurement-validity gap**, carried into the failure-mode taxonomy (F5) and the next-experiment backlog as a priority instrument-refinement item.
- Resolution status: Unresolved; explicitly recommended as a near-term fix in `HYPOTHESIS-KILL-CONDITION-REVIEW.md` ("distinguish backbone collapse from detail-layer disagreement" / "distinguish role compression from transition and constraint compression") but not yet executed.

---

## Contradiction Matrix

| Contradiction | Evidence A | Evidence B | Likely Explanation | Resolution Status |
|---|---|---|---|---|
| C1 | E4 (strong single-sitting cross-model agreement) | E5 (80% structural drift on repeat) | Different mechanisms: recognition/shared-prior convergence at one timepoint vs. genuine run-to-run instability over time | Unresolved — highest priority |
| C2 | E9 EXP-003 (mostly_stable) | E5 (80% structural drift) / E9 EXP-001-002 (mixed) | Different manipulated variable (domain swap vs. topology/representation vs. temporal repeat); risk of selective citation if conflated | Internally resolved; citation-scope risk unresolved |
| C3 | `research-program-status.md` ("same-model runs are exploratory only") | `hypothesis-registry.md` (Moderate confidence citing FE-013/ECR-000001) | Stale or unverifiable citations in the registry | Unresolved |
| C4 | `CURRENT_STATE.md` ("frozen," "current phase") | `HYPOTHESIS-REVIEW-BOARD-DECISION.md` (blank) | Proposal/accepted-state confusion, previously flagged by E13, independently re-confirmed here | Unresolved |
| C5 | FE-012A/B positive framing | H012 / competing-explanations #2 | Caveat exists but is not co-located with the claim | Not blocking; documentation fix recommended |
| C6 | Multiple experiments report primitive/constraint disagreement | Multiple documents attribute this to unstable underlying construct | Field definitions may be the confound, not (only) the construct | Unresolved, recommended as instrument-refinement priority |

## What This Registry Deliberately Does Not Do

Per the governing instructions for this analysis, none of these six items were resolved by averaging, by silently editing the hypothesis registry, or by declaring a winner. C1, C3, C4, and C6 are recorded as open items for human/governance review; C2 and C5 are recorded as explained-but-worth-correcting documentation issues.
