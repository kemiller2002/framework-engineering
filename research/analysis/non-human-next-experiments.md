# Non-Human Experimental Research Backlog

Status: Research analysis artifact — proposal-only. Ranking is a recommendation for human/governance review, not an authorization to execute.

## Method

This backlog does not start from a blank slate — the repository already contains two live prioritization efforts: `research/evidence-runs/ECR-000003-representation-sensitivity/review-board/HRB-NEXT-RESEARCH-INPUT.md` and `.../NEXT-RESEARCH-DECISION.md` (both recommend negative non-isomorphic controls first), and `research/evaluations/FE-BOUNDARY-2026-07-28/next-experiment.md` (a fully designed matched-utility study, currently unpreregistered). This backlog incorporates both rather than re-deriving them from nothing, adds items this analysis's contradiction and failure-mode review surfaced that are not yet queued anywhere, and ranks the combined set using the mission's own criteria (decision importance, expected information gain, ability to distinguish hypotheses, replication value, engineering impact, cost, execution difficulty, obsolescence risk, dependency on unresolved work).

## Proposed Experiments

### N1 — Reconcile FE-012C repeatability drift with the hypothesis registry (governance action, not a new experiment)

- Originating uncertainty: Contradiction C1 — H004 is rated Low-Moderate/Active despite an 80%/84.4% structural-drift result already sitting in the repository.
- Linked prior experiments: E4, E5
- Hypothesis: H004's current rating is stale relative to available evidence.
- Competing hypothesis: The rating is intentionally conservative pending a second repeatability run, and is correctly not yet downgraded further on a single dataset (consistent with the corpus's own interpretation-rules.md, which cautions against treating one drift dataset as proof).
- Independent/dependent variables: N/A — this is a review action, not a new data collection.
- Action: A human reviewer reads `FE-012C-dataset-comparison.md` and `semantic-repeatability-report.md` against H004's current text and either revises the rating or records an explicit rationale for retaining it.
- Estimated cost: Low (hours, not a new experiment run)
- Expected information gain: Low (no new data) but high governance value (closes a live contradiction)
- Priority: **1 (do first — cheapest, unblocks correct interpretation of everything downstream)**

### N2 — Complete the ECR-000003 Hypothesis Review Board decision (governance action)

- Originating uncertainty: Contradiction C4 — `HYPOTHESIS-REVIEW-BOARD-DECISION.md` is blank; `CURRENT_STATE.md` implicitly treats ECR-000003 as settled.
- Action: A human reviewer completes the decision record (accept/revise each proposed direction and strength, decide on the H013 split, decide on H016's status, approve or reject the matrix-update proposal).
- Estimated cost: Low
- Expected information gain: Low (no new data) but high governance value
- Priority: **2**

### N3 — Negative non-isomorphic controls (EXP-004, extending ECR-000003)

- Originating uncertainty: EXP-003's `mostly_stable` backbone result (the strongest positive structural finding in the corpus) has never been tested against a designed negative control, so the comparator's ability to detect genuine structural difference (vs. defaulting to "mostly_stable") is untested.
- Linked prior experiments: E9 (EXP-003), directly. Already the repository's own top-ranked recommendation (`NEXT-RESEARCH-DECISION.md` Candidate B).
- Hypothesis: Genuinely non-isomorphic procedures will show a sharp, expected drop in backbone stability under the same comparator and provider set used for EXP-003.
- Competing hypothesis: The comparator/rubric is lenient enough that even non-isomorphic procedures score as partially stable, which would indicate an instrument problem rather than a genuine isomorphism finding.
- Independent variables: Procedure pair (isomorphic vs. deliberately non-isomorphic, matched for surface complexity)
- Dependent variables: Same Comparator 3.1.0 fields used in EXP-001/002/003
- Controls: Reuse EXP-003's design and provider set exactly; only the isomorphism property of the procedure pairs changes
- Baseline: EXP-003's existing `mostly_stable` result serves as the positive-control comparison point
- Falsification criteria: If non-isomorphic procedures also score `mostly_stable`, H018 and the comparator's discriminative validity are both weakened
- Estimated cost: Medium (per the review board's own estimate)
- Expected information gain: Very high (per both the review board and this analysis, independently)
- Priority: **3**

### N4 — Definitional calibration for "dominant primitive" / "exit primitive" / "constraint concept" fields

- Originating uncertainty: Failure Mode F5 / Contradiction C6 — these fields show persistent disagreement in every experiment that measures them, and it is currently impossible to tell how much of that disagreement is genuine construct instability versus ambiguous field definitions.
- Linked prior experiments: E4, E9 (all sub-experiments)
- Hypothesis: Tightening operational definitions will materially reduce disagreement rates on already-collected data without any new provider runs.
- Competing hypothesis: Disagreement is substantially driven by genuine model-to-model differences in structural interpretation, not definitional ambiguity, and tightening definitions will not much change the numbers.
- Method: Re-score a stratified sample of already-collected E4/E9 responses under a tightened rubric (no new model calls required), compare disagreement rates before/after.
- Estimated cost: Low-Medium (re-analysis of existing data, no new provider spend)
- Expected information gain: High relative to cost — this is the cheapest experiment in the backlog capable of meaningfully changing how every other result in Family B should be read
- Priority: **4 (high value-per-cost; recommend running in parallel with N3, not instead of it)**

### N5 — Second, model-version-controlled repeatability run

- Originating uncertainty: Failure Mode F4 — the cause of E5's drift (sampling variance vs. session-context differences vs. model-version drift) is unresolved because model versions and exact run dates were not logged for E4/E5.
- Linked prior experiments: E4, E5 (this is a second replication of the same repeatability question, this time with model version and timestamp explicitly pinned and logged for both runs)
- Hypothesis: If drift correlates with a documented model-version change between runs, the instability is at least partly attributable to provider-side model updates rather than pure sampling variance.
- Competing hypothesis: Drift persists even within a single pinned model version across fresh sessions, implicating sampling/context variance instead.
- Falsification criteria: If a same-version, same-day repeat still shows ~80% structural drift, model-version drift is ruled out as the primary explanation.
- Estimated cost: Medium (requires controlling for and logging provider version, which the existing tooling does not appear to capture automatically — see Repository Updates in the REP)
- Expected information gain: High for interpreting F4 causally; matches the repository board's own Candidate C ("Model-Version Stability")
- Priority: **5**

### N6 — Vocabulary-free extraction arm (directly targeting H012's kill condition)

- Originating uncertainty: Failure Mode F3 — vocabulary sufficiency claims (E2, E3, E4, E9) cannot currently be distinguished from vocabulary-imposed constraint, because no experiment has withheld the vocabulary entirely.
- Hypothesis: Without a provided vocabulary, models will generate substantially different (or a substantially larger, unstable) set of primitive-like terms, weakening the "finite vocabulary" claim.
- Competing hypothesis: Models converge on a similar bounded vocabulary even unprompted, which would be much stronger evidence for H001/H005 than anything currently in the corpus.
- Estimated cost: Medium
- Expected information gain: High — this is the single test most capable of independently validating (or substantially weakening) the vocabulary-sufficiency claims running through E2, E3, E4, E9
- Priority: **6**

### N7 — Independent comparator / fourth-provider cross-check

- Originating uncertainty: Lineage Cluster 2 — every quantitative structural-recovery result in the corpus traces to the same 3-provider set and an evolving-but-continuous single comparator lineage; no truly independent test currently exists for H003, H013, H015.
- Hypothesis: A structurally similar convergence pattern will replicate under a different comparator implementation and/or a fourth model provider.
- Competing hypothesis: Convergence is partly an artifact of the specific comparator's scoring logic or of these three providers' shared training-data overlap, and will not replicate cleanly under a genuinely independent measurement approach.
- Estimated cost: High (requires either a new comparator build or onboarding a new provider, plus re-running a representative packet subset)
- Expected information gain: Very high for the corpus's overall independence problem, but high cost and high execution difficulty
- Priority: **7**

### N8 — Recognition-control replication (topology/graph-only stimuli)

- Originating uncertainty: H016's kill condition remains untested; no accepted graph-only control exists in the reviewed evidence.
- Linked prior work: ECR-000003 EXP-001 (topology perturbation) is a partial attempt but still showed leakage
- Estimated cost: Medium
- Expected information gain: High, matches the repository board's own Candidate E
- Priority: **8**

### N9 — Human-baseline procedural extraction

- Originating uncertainty: No experiment in the corpus has ever compared model-extracted structure against an independent human analyst's extraction from the same blinded packets — the entire corpus is model-only.
- Linked prior work: Already the repository's own Candidate A in `NEXT-RESEARCH-DECISION.md`, rated highest publication value but highest effort/urgency by the board itself.
- Estimated cost: High
- Expected information gain: Very high, but the repository's own board already concluded this should follow, not precede, the adversarial negative-control test (N3) — this analysis concurs with that sequencing.
- Priority: **9**

### N10 — Matched-utility experiment: does the full FE profile beat a matched adjacent-practice profile? (Arms A/B/C/D, per FE-BOUNDARY-2026-07-28)

- Originating uncertainty: The largest unresolved question in the entire repository per two independent-in-time reviews (E13, E14): incremental causal value of FE over credible adjacent methods.
- Linked prior work: Fully designed in `research/evaluations/FE-BOUNDARY-2026-07-28/next-experiment.md`; this backlog does not redesign it, only re-ranks it in context.
- Explicit prerequisite (from its own design): EX-FE-0002 (the blinded mechanism-boundary gate) must first be completed or formally superseded — it is currently incomplete/blocked.
- Estimated cost: Very high (24+ task benchmark, multiple arms, blinded evaluators, power analysis, preregistration, human authors for the adjacent-practice arm)
- Expected information gain: Very high — a null/negative result here would invalidate several downstream investments, per its own design document
- Priority: **10 (highest ultimate decision impact, but correctly sequenced last because of its own stated prerequisite and cost)**

### N11 — Tooling fix: bound concurrency in `research-publisher`'s document-parsing step

- Originating uncertainty: Failure Mode F8 — `npm run research:validate` fails with EMFILE in this analysis's execution environment.
- This is an engineering backlog item, not a research experiment. Included here only so it is not lost between the two backlog types.
- Priority: **Track separately from N1-N10; does not compete for research priority ranking.**

---

## Next-Experiment Priority Matrix

| Proposed Experiment | Information Gain | Decision Impact | Cost | Obsolescence Risk | Priority |
|---|---|---|---|---|---|
| N1 Reconcile H004 rating | Low (no new data) | High (unblocks correct reading of Family B) | Very Low | Low | 1 |
| N2 Complete HRB decision record | Low (no new data) | High (governance blocker) | Very Low | Low | 2 |
| N3 Negative non-isomorphic controls | Very High | Very High | Medium | Low | 3 |
| N4 Definitional calibration | High | Moderate-High | Low-Medium | Low | 4 |
| N5 Model-version-controlled repeatability | High | Moderate-High | Medium | Medium (depends on provider version cadence) | 5 |
| N6 Vocabulary-free extraction | High | Moderate-High | Medium | Low | 6 |
| N7 Independent comparator / 4th provider | Very High | High | High | Low | 7 |
| N8 Recognition-control replication | High | Moderate | Medium | Low | 8 |
| N9 Human-baseline extraction | Very High | High | High | Low | 9 |
| N10 Matched-utility study (Arms A-D) | Very High | Very High | Very High | Low, but blocked on EX-FE-0002 | 10 |
| N11 Tooling concurrency fix | N/A (infrastructure) | Low for science, Moderate for repo usability | Low | N/A | untracked (engineering) |

## Explicit Non-Recommendations

Per the mission's prohibition on proposing human-subject research: none of the above involve human participants as experimental subjects. N9 (human-baseline extraction) uses human analysts as an independent *comparison arm* performing the same blinded extraction task already performed by models on non-human-subject material (procedural framework text) — this is analogous to using a human expert as a measurement instrument, not human-subject research on people, and should still be routed through whatever the repository's normal review process is for involving people, out of caution, even though it does not fall under this mission's exclusion.

Per the mission's instruction not to propose experiments merely because they would be interesting: items not included in this backlog despite being mentioned in passing elsewhere in the corpus (e.g., broader corpus expansion beyond 100 artifacts, additional novelty-problem sets for FE-012B-style synthesis) were excluded because they would add volume to already-weakly-independent evidence lines (Family A) rather than resolve a specific open uncertainty.
