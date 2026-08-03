# Non-Human Experimental Inventory

Status: Research analysis artifact — proposal-only, not a canonical accepted record.
Author: Claude (autonomous research-director pass), Cowork session, 2026-07-30.
Repository baseline: commit `1012c0f` on branch as checked out at analysis time.
Scope: All located experiments, evidence runs, and evaluation packages whose subject is non-human (AI models, prompts, comparator software, repository artifacts). No human-subject experiments were located or are proposed anywhere in this document.

## How to read this document

This is a reconstruction, not a re-statement of each experiment's own README. Fields marked `MISSING` were not found in the reviewed artifacts and are not assumed to be zero, absent, or negative — only unrecorded. This inventory does not cover 100% of repository files (see `Coverage and Known Gaps` at the end). It covers the canonical experiment registry (`research/framework-engineering/experiments/registry.json`), the six `research/experiments/` packages, the three `research/evidence-runs/` (ECR) packages, the `research/framework-engineering/experiments/EX-FE-000{1,2,3}` next-generation experiments, and the two major evaluation packages (`FE-EVAL-2026-07-23`, `FE-BOUNDARY-2026-07-28`) that themselves function as non-human meta-evaluations.

Two registries already exist in the repository and were treated as ground truth wherever they overlapped with this inventory rather than re-derived from scratch:

- `research/framework-engineering/experiments/registry.json` (machine-readable, generated 2026-07-24T17:38:48Z, `EX-*` IDs) — the canonical successor experiment registry.
- `research/operating-system/hypothesis-registry.md` (H001–H018) — the canonical hypothesis registry.
- `research/evaluations/FE-EVAL-2026-07-23/framework-engineering-executive-brief.md` — a prior, independent, adversarial repository-wide evaluation (authored by a different agent, "Codex"). This document is evidence, not settled fact, and is treated as such throughout this analysis.

---

## E1 — FE-011A LLM Blind Pilot

- Experiment ID: `EX-LEGACY-FE-011A` (registry) / `FE-011A` (native)
- Title: LLM Blind Pilot — structured redesign vs. original framework
- Research question: Do Framework Engineering redesigns improve quality, consistency, evidence use, traceability, and actionability of blinded LLM outputs, relative to the original (un-redesigned) framework packet?
- Hypothesis: Structured FE redesign improves task output quality (informal; not in H001–H018 registry — tracked as native hypothesis `FE-011A`)
- Subject/system tested: SWOT, Five Whys, OODA Loop framework packets, original vs. FE-redesigned, worked by an LLM
- Experiment type: Same-model comparative pilot (LLM as both subject and — per the repo's own methodology-review — likely evaluator lineage)
- Date conducted: 2026-06-28 (internal pilot)
- Executing agent / model: MISSING exact model identity and version in reviewed files; registry logs runs as `historical-manual: 8`, `reviewer: 3`
- Provider: MISSING (not disambiguated by provider in available summary)
- Comparison condition / baseline: Original (un-redesigned) framework packet vs. FE-redesigned packet, same scenario
- Independent variables: Redesign condition (original vs. FE-redesigned)
- Dependent variables: Quality, consistency, evidence use, traceability, actionability (qualitative evaluator judgment, not a validated numeric scale)
- Controlled variables: MISSING — no documented control for evaluator identity/model relative to generator identity/model
- Sample size / trials: 3 frameworks × 2 outputs each = 6 output artifacts, each with an evaluator review
- Evaluation method: Evaluator review documents (`evaluator-review.md` per framework), qualitative
- Result (as reported): SWOT — Output 1 (redesigned) stronger; Five Whys — Output 2 stronger; OODA — Output 2 stronger; cross-framework pattern of higher traceability/evidence use at the cost of verbosity and process overhead
- Claimed conclusion: "Directional evidence that structured redesigns can improve traceability and evaluation readiness"
- Supported conclusion (this review): Directional and observational only. The pilot does not separate an FE-specific effect from a generic "more structure improves legibility" effect — the pilot's own `methodology-review.md`-referenced concern, restated in its own summary.
- Confidence claim (native): Not explicitly labeled; treated by `research/theory/confidence-assessment.md` as supporting "Structured redesign improves traceability" at **Low** confidence.
- Limitations (native, self-reported): Same-model evaluation bias risk; generic-scaffolding confound; pilot precedes any human validation
- Linked evidence/hypotheses: Feeds `research/theory/confidence-assessment.md`; referenced as input to `FE-EVAL-2026-07-23`'s incremental-utility framing
- Supersession status: Current / not superseded; explicitly flagged by `research/theory/research-program-status.md` as needing "different-model replication"
- Raw data availability: Present (`results/*/output-1.md`, `output-2.md`, `evaluator-review.md`, `run-log.md`)
- Reproducibility status: Not independently reproduced; single internal run

## E2 — FE-012A Blind Primitive Reasoning Extraction

- Experiment ID: `EX-LEGACY-FE-012A`
- Research question: Can a finite set of primitive reasoning operations reconstruct the reasoning flow of diverse knowledge artifacts without domain terminology?
- Subject: 20 non-EDF, non-Clarity knowledge artifacts (framework/methodology corpus)
- Type: Same-model, single-extractor, single-reconstructor internal run
- Date: 2026-06-28
- Executing agent: Single extractor pass `EX-01`, single reconstruction-analyst pass `RA-01`, same model family for both roles (per own summary)
- Baseline/comparison: None (no comparator condition; single-arm extraction-then-reconstruction design)
- Sample: 20 artifacts, 1 pass each
- Result: Reconstruction — Strong 9, Moderate 8, Weak 3, Failed 0; recognizable 17/20; 2 candidate primitives surfaced (`Prioritize`, `Compare`); vocabulary growth "slowed materially" after the artifact-set midpoint
- Claimed conclusion: "Provisional support for a finite primitive vocabulary with transfer across multiple domains"
- Supported conclusion (this review): Weak provisional support at best. Same extractor and reconstructor, same model family, prior awareness of the research goal, and subjective recognizability judgment together mean the "0 failures" and "17/20 recognizable" figures cannot distinguish a real transferable vocabulary from extractor-side pattern completion toward a vocabulary the extractor was primed to look for.
- Confidence claim (native, in `confidence-assessment.md`): **Low** — "partial stabilization and recognizable reconstruction, but independent extractor convergence has not yet been demonstrated"
- Limitations (self-reported): Same-model internal run, not independent/blinded; recognizability judged subjectively
- Raw data: `results/extraction-results-2026-06-28.csv`, `reconstruction-results-2026-06-28.csv`, `stabilization-table-2026-06-28.csv`, `primitive-vocabulary-v0.1.csv`
- Reproducibility: Not independently reproduced

## E3 — FE-012B Primitive Grammar Synthesis Experiment

- Experiment ID: `EX-LEGACY-FE-012B`
- Research question: Can the FE-012A primitive vocabulary synthesize coherent procedural reasoning frameworks for novel (unseen) problems?
- Subject: 10 novelty problems, no existing framework may be copied
- Type: Same-model synthesis + same-model review (internal run)
- Date: 2026-06-28
- Result: 10/10 problems attempted; 7/10 completed without a new primitive; 3/10 flagged missing-primitive pressure; 0 outright failures; "Primitive Sufficiency Index" = 70% (native, explicitly flagged by its own authors as "experimental and should not be treated as validated"); missing-primitive requests: `Synchronize`, `Schedule`, `Sequence`, concentrated in coordination/phased-maintenance problems
- Claimed conclusion: Vocabulary "appears expressive enough" generically, weaker for temporal-coordination problems
- Supported conclusion (this review): The 70% figure is a same-model, same-designer, non-independently-reviewed proportion over a 10-item, researcher-authored problem set. It should not be read as an expressive-sufficiency rate in any general sense — at n=10 with no independent review, the confidence interval on "70%" is wide enough to be compatible with anywhere from roughly 35% to 93% true sufficiency under a naive binomial estimate, before even accounting for non-independence of design and evaluation.
- Confidence claim (native): **Low**
- Limitations (self-reported): same-model synthesis and review; novelty problems designed by the same research direction evaluating the result; no independent reviewer agreement measured
- Raw data: `results/synthesis-run-2026-06-28.md`, `reviewer-run-2026-06-28.md`
- Reproducibility: Not independently reproduced

## E4 — FE-012C Manual Multi-Model Replication

- Experiment ID: `EX-LEGACY-FE-012C-MANUAL`
- Research question: Do GPT, Claude, and Gemini converge on primitive-grammar extraction when given the same packet instrument and a provided primitive vocabulary?
- Subject: 15 packets × 3 providers (GPT, Claude, Gemini) = 45 manually collected JSON responses
- Type: Cross-model (single point in time) convergence study, human-operated, no API
- Date: Prior to 2026-07 (exact date MISSING in reviewed files; precedes the repeatability run)
- Providers: GPT (unspecified version — MISSING), Claude (unspecified version — MISSING), Gemini (unspecified version — MISSING)
- Independent variable: Provider
- Dependent variables: Entry primitive, exit primitive, dominant primitive, reasoning shape, transition structure, artifact recognition, candidate missing primitives
- Sample: 45/45 valid JSON responses, 0 missing, 0 malformed
- Result: Entry-primitive full agreement 15/15; exit-primitive full agreement 11/15; dominant-primitive full agreement 12/15; reasoning-shape full agreement 9/15; strong transition agreement 14/15; **artifact recognized in 15/15 packets** (blinding did not hold); 0/15 packets produced a candidate missing primitive (vocabulary was provided in advance, so this is not independent evidence of sufficiency)
- Claimed conclusion: Strong cross-model agreement "strengthens confidence in the extraction instrument"
- Supported conclusion (this review): Convergence is real at the level measured, but confounded by two mechanisms the experiment's own interpretation.md already names: (1) universal artifact recognition (15/15) means agreement may reflect shared training-data familiarity with named frameworks rather than independent structural extraction from blinded text; (2) the provided vocabulary constrains the space of possible answers, mechanically inflating agreement on which of a small fixed set of primitives applies. See Contradiction C1 in the companion contradiction registry regarding this experiment's relationship to E5.
- Confidence claim (native): Not separately labeled; feeds H003, H013, H015 in the hypothesis registry at Moderate/Moderate/Moderate
- Limitations (self-reported, native): "Model agreement does not prove the theory," "disagreement is useful evidence," blinding weakened by recognition
- Raw data: `responses/{gpt,claude,gemini}/*.json` (45 files), `reports/FE-012C-*.md`
- Reproducibility status: Directly re-tested by E5 (repeatability run) — see below. This is the one experiment in the corpus with an explicit, dedicated repeatability follow-up.

## E5 — FE-012C Repeatability Run 001

- Experiment ID: `EX-LEGACY-FE-012C-REPEAT-001`
- Research question: Does the same packet instrument, run again in fresh conversations with the same three providers, produce materially similar results over time?
- Type: Same-instrument, same-providers, different point in time (temporal repeatability test), explicitly *not* a new theory experiment per its own README
- Sample: 45 new responses (15 packets × 3 providers), paired against the original 45 from E4 → 45 paired comparisons, 90 total observations
- Result (literal/syntactic comparator): Stable 1/45 (2.2%); elaboration drift 8/45 (17.8%); **structural drift 36/45 (80.0%)**; backbone-stable pairs 9/45 (20.0%); recognized-artifact changed in 41/45 pairs
- Result (semantic comparator, generous re-scoring layered on top, not a replacement): Stable 6/45 (13.3%); structural drift 38/45 (84.4%) — semantic normalization *recovers* some elaboration-drift cases into "stable" but does **not** reduce structural drift; if anything the semantic count of structural drift is nominally higher than the literal count
- Claimed conclusion (native, in the dataset-comparison report itself): "This is a measurement analysis task, not a validation of theory... drift does not by itself falsify the instrument"
- Supported conclusion (this review): This is the single most consequential quantitative result in the corpus and it is currently under-weighted in the hypothesis registry. Under both the literal and the semantic comparator, the large majority of same-provider, same-packet, fresh-conversation pairs show structural (not just wording) drift. This directly bears on H004 (Repeatability), whose kill condition reads: "Same-model outputs drift materially across repeated runs without explainable packet ambiguity." An 80% structural-drift rate is a plausible candidate for "drift materially" — see the confidence reassessment and contradiction registry for the full argument on whether this meets or falls short of the kill condition.
- Confidence claim (native, hypothesis registry, current): H004 = **Low-Moderate**, status **Active** (i.e., not yet downgraded to reflect this dataset)
- Limitations (self-reported): 15/45 Dataset-B files required quote normalization before parsing (data-quality, not reasoning, issue); repeatability conclusions remain sensitive to the constrained vocabulary and recognition effects
- Raw data: `comparison/generated/FE-012C-dataset-comparison.md`, `FE-012C-drift-analysis.md` (template, not populated at top-experiment level — populated version lives under `comparison/`, see note below), `semantic-repeatability-report.md`
- Note on internal inconsistency: `experiments/FE-012C-repeatability-run-001/comparison/drift-analysis.md` (top-level) still reads as an unpopulated template ("Do not infer repeatability before results exist"), while `comparison/generated/FE-012C-dataset-comparison.md` contains the fully populated results above. This is a within-experiment documentation-currency defect, recorded as Failure Mode F7.
- Reproducibility status: This experiment *is* the reproducibility test for E4. It has not itself been re-repeated a third time.

## E6 — FE-013 Procedural Language Hypothesis

- Experiment ID: Not yet in the `EX-*` registry (native ID `FE-013`)
- Research question: Do procedural frameworks exhibit compiler-like structural properties (entry/exit/preconditions/postconditions/branches/loops/invariants/procedural ASTs) recoverable from blinded natural-language descriptions?
- Status: **Designed and preregistered, not executed.** `responses/{gpt,claude,gemini}/` each contain only a `.gitkeep`. `comparison/run-status.md` is an empty table. `comparison/observations.md`, `ast-comparison.md`, `constraint-comparison.md`, `invariants.md`, `unresolved-disagreements.md`, `preliminary-observations.md` are all unpopulated templates carrying explicit "do not infer results before the experiment is run" guards.
- Why this matters for this inventory: FE-013 is listed in `CURRENT_STATE.md` under "Active Experiments" with a stated purpose, which could be misread as an in-progress or completed study. It is neither — it is a fully specified, zero-data experiment. This is recorded, not treated as a negative result (it is not a null result; it is an unexecuted design).
- Raw data: None
- Reproducibility status: N/A (not yet run once)

## E7 — ECR-000001 Multi-Layer Procedural Representation

- Experiment ID: `EX-LEGACY-ECR-000001`
- Purpose (native): Instrument calibration, not hypothesis testing — explicitly converted to a calibration run per its own README ("determine whether the measurement instrument itself is reliable before using it for broader hypothesis testing")
- Primary hypotheses in scope: H003, H012, H013, H015
- Sample: 12 responses recorded in `responses/` (registry: `chatgpt: 3, claude: 3, gemini: 3` = 9 native-registry-counted + additional per directory listing = 12 present per file count)
- Result: **MISSING a consolidated top-level findings document.** `instrument-pass-fail.md` defines success/failure criteria but was not found populated with an outcome verdict in the files reviewed; `execution-log.md` was not fully reconstructed in this pass (see Coverage and Known Gaps).
- Claimed conclusion: MISSING (not synthesized into a findings statement discoverable in this pass)
- Supported conclusion: Cannot be assessed from the artifacts reviewed. This experiment functions in the corpus primarily as the calibration precursor to ECR-000002/ECR-000003, and its packet/schema design was reused (with revision) by both.
- Reproducibility status: MISSING
- Flag: This is a Phase-14 evidence gap (missing synthesized findings for a "complete"-status registry entry) rather than a null result — the registry marks `status: "complete"` with real run data present, but no reconstructed top-level conclusion was located.

## E8 — ECR-000002 Recognition Sensitivity

- Experiment ID: `EX-LEGACY-ECR-000002`
- Purpose: Test whether recovered procedural structure is stable across recognition levels (canonical / paraphrased / structural / graph-only) of the same underlying procedure, across artifact families P001 (reasoning-heavy), P002 (execution-heavy), P003 (static/hierarchical)
- Primary hypotheses: H013, H003, H015; secondary H001, H002, H005–H008, H011, H012, H014, H016
- Sample: Responses present (registry: `chatgpt: 2, claude: 2, gemini: 2`); `comparison/` directory contains only 2 substantive files (`p001d-graph-recognition-plan.md`, `p001c-observation-note.md`) plus a `.gitkeep` — materially thinner than ECR-000001 or ECR-000003
- Result: **No consolidated findings document located.** This run appears to have been superseded in practice by ECR-000003, which re-scopes and re-executes an expanded version of the same recognition/representation question with a frozen comparator.
- Claimed conclusion: MISSING
- Supported conclusion: This evidence run appears functionally abandoned or absorbed into ECR-000003 rather than formally closed or superseded on paper. No supersession record was found declaring ECR-000002 superseded by ECR-000003, even though ECR-000003's own README describes itself as following on from ECR-000002's recognition-sensitivity question with an expanded design. Recorded as Failure Mode F6 (silent absorption without a supersession record).
- Reproducibility status: MISSING

## E9 — ECR-000003 Representation Sensitivity (EXP-001, EXP-002, EXP-003)

- Experiment ID: `EX-LEGACY-ECR-000003`
- Purpose: Which features carry procedural recognition and structural extraction — topology (EXP-001), surface representation (EXP-002), or domain semantics under matched control-flow (EXP-003)
- Hypotheses in scope: H016, H017, H018, H013, H003, H015, H002
- Instrument: Comparator `3.1.0` (frozen, official measurement) with Comparator `3.2.0` explainability layer (non-scoring, post hoc)
- Sample: EXP-001 12/12 responses, EXP-002 12/12 responses, EXP-003 9/9 responses — 33 total, 0 missing, 0 malformed; tolerant-parsing events 5 / 4 / 3 respectively; leakage findings 3 / 5 / 5 respectively
- Result:
  - EXP-001 (topology perturbation): structural backbone **mixed**; primitive and constraint comparison **disagreement**; representation compliance full agreement
  - EXP-002 (cross-representation): structural backbone **mixed**; primitive/constraint **disagreement**; compression/elaboration patterns observed but did not erase disagreement
  - EXP-003 (cross-domain isomorphism): structural backbone, literal, conceptual, and dimensional profiles all **mostly_stable**; primitive sequence, transitions, dominant primitives, and constraints still in disagreement; recognition provider-dependent (GPT persistent, Claude gradual decay, Gemini persistent)
- Claimed conclusion (native, `ECR-000003-FINDINGS.md`): "Consistent with limited backbone stability under some transformations, persistent provider-specific variation, and continued recognition or domain-language pressure. The run supports cautious methodological claims more strongly than broad theoretical claims."
- Supported conclusion (this review): Concur with the native conclusion as written; it is already appropriately hedged. The one addition this review makes: EXP-003's "mostly_stable" backbone result is the strongest positive structural signal anywhere in the corpus, and it is exactly the result the repository's own next-research-decision process has flagged as needing an adversarial follow-up (negative non-isomorphic controls) before being trusted, precisely because a positive backbone-stability result obtained without a designed negative control cannot rule out "the comparator/rubric is lenient enough to call most things mostly_stable." This review concurs with that internal prioritization.
- Confidence claim: See Hypothesis Evidence Summary table inside `ECR-000003-FINDINGS.md` — all directions in {mixed, slightly_supported, waiting}, all strengths in {weak, moderate, insufficient}. No hypothesis reaches strong/high anywhere.
- Governance status: A Hypothesis Review Board packet and summary exist (`review-board/HYPOTHESIS-REVIEW-BOARD-SUMMARY.md`) proposing direction/strength updates to H002, H003, H013, H015, H016, H017, H018 — but `HYPOTHESIS-REVIEW-BOARD-DECISION.md` is **blank** (`status: blank_human_decision_required`). No proposed update has been ratified as of this analysis.
- Raw data: Present and certified (dataset-certification step documented); reports present (`ECR-000003-FINDINGS.md`, `NEXT-RESEARCH-DECISION.md`, explainability summaries per experiment)
- Reproducibility status: Not yet independently repeated; recommended next step per the repository's own `NEXT-RESEARCH-DECISION.md` is adversarial (negative controls), not repeatability

## E10 — EX-FE-0001 Framework Engineering Boundary Discrimination Pilot

- Registry status: `ready`; `run_count_by_provider: {manual: 6}`
- Research question: Can an evaluator distinguish a non-redundant FE scope from adjacent method engineering / generic structured analysis, using only current canonical claims?
- **Implemented vs. stated mismatch:** The only located synthesis artifact (`synthesis/synthesize--1784832869017.json`) has `"status": "template"`, `"findings": []`, `"unresolved": []`, `"decision": null`, and the experiment folder contains `fixtures/offline-normalized-result.json` and `fixtures/offline-manual-response.md`. The registry's `run_count_by_provider: {manual: 6}` most plausibly reflects infrastructure/fixture exercise runs rather than six substantive adjudicated evaluator trials. This inventory records the mismatch rather than resolving it; a synthesized finding was not located.
- Result: No usable finding located.
- Supersession/authority: `synthesis_policy` explicitly states "No confidence update from model agreement alone."

## E11 — EX-FE-0002 Blinded Mechanism Boundary and Subsumption Test

- Registry status: `ready`; `run_count_by_provider: {}` (zero runs recorded)
- Research question: Is any FE mechanism non-redundant relative to adjacent disciplines, under blinded adjudication?
- Result: Not executed. Per `FE-BOUNDARY-2026-07-28/README.md`: "Stage A remains incomplete, Stage B remains blocked, and its experimental boundary classification remains inconclusive."
- Note: A large body of *scaffolding* exists for this question under `research/evaluations/FE-BOUNDARY-2026-07-24/`, `FE-BOUNDARY-2026-07-24-v1.1/`, and `FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/` (mechanism cards, reviewer packets, adjudication folders, role registries). These were inventoried by directory listing but not individually reconstructed in this pass — see Coverage and Known Gaps. They appear to be iterative attempts at the same blinded mechanism-boundary test, each superseding protocol details of the last, none reaching a completed Stage B per the 07-28 package's own account.

## E12 — EX-FE-0003 Uncertainty and Evidence-Lineage Ablation

- Registry status: `proposed`, confidence `0.5` (self-declared design confidence, not evidentiary confidence)
- Research question: Does explicit uncertainty representation and traceable evidence lineage improve diagnostic reasoning/decisions vs. an otherwise-equivalent framework?
- Design quality (this review): Notably rigorous as a *design* — pre-specifies a 27-run minimum matrix (3 trials × providers × cases), blinded scoring, adversarial review, freeze-then-unblind sequencing, explicit falsification conditions, explicit stopping conditions (identity leakage, prompt drift, unequal case information, manual repair before evaluation), and a private identity key (`identity-key.private.md`) for later unblinding.
- Result: `final-analysis.md` explicitly states "Status: no execution data." Not run.
- This is recorded as a positive process finding (a well-specified null-state experiment with real blinding infrastructure already built) rather than a gap in this inventory, though it remains a research-backlog item.

## E13 — FE-EVAL-2026-07-23 (Repository-Wide Evaluation Package)

- Type: Meta-evaluation / evidence-synthesis artifact, itself produced by a non-human agent ("Codex") reasoning over repository text — included in scope because it is a non-human analytical process operating on non-human artifacts (the repository itself).
- Result headline: Classifies Framework Engineering as "a provisional research and method-engineering program," maturity "research prototype / pre-validation," explicitly states no confidence-assessment statement reaches High, and flags the ECR-000003 board decision as blank/unratified — i.e., independently arrived at several of the same conclusions this analysis also reaches from the primary evidence.
- Use in this analysis: Treated as evidence (a data point about how the repository's claims read to an independent evaluator), not as ground truth. Its own findings are carried into the contradiction and confidence-reassessment sections below with attribution, not silently absorbed as consensus.

## E14 — FE-BOUNDARY-2026-07-28 (Successor Boundary/Definition Package)

- Type: Successor meta-evaluation, produced 5 days after E13, incorporating externally sourced comparisons (systems engineering, method engineering, design science, requirements/knowledge/ontology engineering, decision analysis, quality engineering, organizational learning, cybernetics, multi-agent systems engineering)
- Result headline: "The evidence does **not** support presenting FE as a distinct engineering discipline... Framework Engineering is a repository-centered research program and a candidate integrated engineering profile," and explicitly designs (but does not execute) the matched-utility experiment (Arms A/B/C/D) described in `next-experiment.md`.
- Status note it makes about itself: "This is a proposed successor finding. It does not overwrite the controlling `EX-FE-0002` state."
- Use in this analysis: Same treatment as E13 — evidence, cited with attribution, its proposed next experiment folded into the ranked backlog in `non-human-next-experiments.md` rather than duplicated.

---

## Summary Table — Execution Status

| ID | Experiment | Status | Real response data | Consolidated findings doc | Independent replication attempted |
|---|---|---|---|---|---|
| E1 | FE-011A | Complete (internal) | Yes (6 outputs) | Yes | No |
| E2 | FE-012A | Complete (internal) | Yes (20 artifacts) | Yes | No |
| E3 | FE-012B | Complete (internal) | Yes (10 problems) | Yes | No |
| E4 | FE-012C Manual | Complete | Yes (45) | Yes | Yes (by E5) |
| E5 | FE-012C Repeatability | Complete | Yes (45) | Yes (in `comparison/generated/`) | This *is* the replication of E4 |
| E6 | FE-013 | Designed, not executed | No (0/54 expected) | N/A | N/A |
| E7 | ECR-000001 | Registry "complete," data present | Yes (12) | **Not located** | MISSING |
| E8 | ECR-000002 | Registry "complete," data thin | Yes (partial) | **Not located** | MISSING |
| E9 | ECR-000003 | Complete, certified, frozen instrument | Yes (33) | Yes, detailed | Recommended (not yet run) |
| E10 | EX-FE-0001 | Registry "ready" | Fixture/template only | No real findings | N/A |
| E11 | EX-FE-0002 | Registry "ready," 0 runs | No | No | N/A |
| E12 | EX-FE-0003 | Proposed | No | No (explicit "no execution data") | N/A |
| E13 | FE-EVAL-2026-07-23 | Complete (meta-evaluation) | N/A (text-analytic) | Yes | Followed by E14 |
| E14 | FE-BOUNDARY-2026-07-28 | Complete (meta-evaluation) | N/A (text-analytic) | Yes | N/A |

---

## Coverage and Known Gaps in This Inventory

This pass reconstructed 14 experiment/evaluation units from primary source documents (READMEs, protocol files, results/reports, response counts, registry.json, hypothesis-registry.md, confidence-assessment.md). It did **not** individually reconstruct, and marks as an open gap for the next research pass:

- The internal contents of `research/evaluations/FE-BOUNDARY-2026-07-24/`, `-v1.1/`, and `-v1.2-machine-pilot/` beyond directory-level listing (mechanism cards, individual reviewer packets, adjudication records, source registries). These plausibly contain 50+ additional individually inventoriable sub-artifacts.
- Individual Evidence Decision Records (EDRs) under `research/evidence-runs/*/edr/` and `research/operating-system/edr/`.
- The 100-artifact reference corpus (`research/corpus/artifacts/`, `research/corpus/batches/`) as individual characterization records — only aggregate `statistics.md` was reviewed.
- `research/papers/`, `input-documents/`, and `research/frontier/` were not opened.
- `ECR-000001/execution-log.md` and `ECR-000003`'s full pipeline/orchestration logs were listed but not read line-by-line.

None of the conclusions in the companion analysis documents depend on these unread materials; where a claim would require them, it is marked `MISSING` rather than inferred.

## Repository Validation State (recorded, not repaired)

- `npm run experiments:verify -- --all` **passed**, verifying all 10 registry entries (`EX-FE-0001`, `EX-FE-0002`, `EX-LEGACY-ECR-000001/2/3`, `EX-LEGACY-FE-011A/012A/012B/012C-MANUAL/012C-REPEAT-001`).
- `npm run research:validate` **failed** with `EMFILE: too many open files` while parsing `research/framework-engineering/experiments/EX-FE-0003/*`, even after raising the shell's file-descriptor limit to 524288. This appears to be an unbounded-concurrency defect in the `research-publisher` build step (attempts to open >1000 files via `Promise.all` without a concurrency cap) rather than a content defect in any research record. Recorded as a research-system finding (see failure-mode taxonomy F8); not fixed as part of this analysis, per the instruction not to silently repair tooling encountered mid-investigation.
- Git state at analysis time: HEAD `1012c0f`, working tree clean except an untracked `.claude/` directory (local agent configuration, not a repository content change).
