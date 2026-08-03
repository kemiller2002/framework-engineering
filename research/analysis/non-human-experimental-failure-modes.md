# Non-Human Experimental Failure-Mode Taxonomy

Status: Research analysis artifact — proposal-only.

Each entry separates description, affected experiments, frequency (as observed in reviewed artifacts, not assumed to be exhaustive), severity, detectability, likely cause, confidence in that causal account, existing mitigation, and mitigation effectiveness.

## F1 — Blinding failure via artifact recognition

- Description: Models frequently recognize the named framework or artifact behind a blinded packet (SWOT, Five Whys, OODA, etc.), undermining the assumption that structural extraction is happening independently of prior training-data familiarity.
- Affected experiments: E4 (15/15 packets recognized), E5 (41/45 recognized-artifact pairs changed between runs, suggesting recognition itself is unstable), E9 (leakage findings 3/5/5 across EXP-001/002/003; recognition explicitly provider-dependent — persistent for GPT and Gemini, gradually decaying for Claude)
- Frequency: High — recognition or leakage is reported in every experiment that measured it.
- Severity: High for any hypothesis resting on "independent structural recovery" (H001, H002, H005, H013); lower for hypotheses only about cross-model output agreement as a practical, not causal, matter.
- Detectability: High — the corpus explicitly instruments and reports this (recognition/leakage fields exist in every relevant schema).
- Likely cause: Named, well-known frameworks are heavily represented in model pretraining data; blinding via renaming or paraphrase does not remove recognizable structural or terminological fingerprints.
- Confidence in causal account: Moderate-High — directly evidenced by the recognition-rate data itself, not inferred.
- Existing mitigation: ECR-000002/ECR-000003's representation and topology perturbations are a direct attempt to reduce recognizability; H016 exists specifically to test whether topology-only presentation avoids recognition.
- Mitigation effectiveness: Partial at best — EXP-001 (topology perturbation) still reported leakage findings (3) and mixed backbone results; recognition was not eliminated.
- Recommended next test: A true negative/graph-only control with no lexical cues (H016's own kill condition), which the corpus itself flags as not yet tested ("no accepted graph-only control exists in the reviewed evidence set").

## F2 — Same-actor confound (generator, evaluator, and theorist are the same agent/team)

- Description: In several experiments, the same model family and/or the same research program plays every role — designing the hypothesis, generating the packets or novelty problems, producing the output, and judging the output.
- Affected experiments: E1 (FE-011A), E2 (FE-012A), E3 (FE-012B), and to a lesser extent E10 (EX-FE-0001, whose only artifact is a fixture).
- Frequency: High among the earliest experiments in the corpus (all of the June 2026 internal runs); declining in the later 3-provider cross-model designs, which at least diversify the generator role even though evaluation/comparison logic remains research-program-authored.
- Severity: High — this is the single largest threat to every "provisional support" claim attached to E1-E3, and is explicitly acknowledged as such by the experiments' own limitations sections.
- Detectability: High — self-reported in every affected experiment's summary.
- Likely cause: Structural — these were designed as fast internal pilots specifically to shake out instrument problems before investing in independent or human evaluation, per each experiment's own stated purpose ("Why LLM Pilot Before Human Study" in E1).
- Confidence in causal account: High — this is explicit repository design intent, not inferred from behavior.
- Existing mitigation: `research-program-status.md`'s explicit instruction to prefer weakening claims and to prioritize "different-model replication for FE-008, FE-011A, FE-012A, and FE-012B."
- Mitigation effectiveness: Not yet executed for E1-E3 specifically (the 3-provider designs replicate the general research question, not these specific pilots).
- Recommended next test: Independent-team or independent-model replication of E1-E3's specific claims, as already queued in `research-program-status.md`'s "Immediate Priorities."

## F3 — Instrument-provided vocabulary constraining apparent sufficiency

- Description: Because the primitive vocabulary is supplied to extractors/synthesizers in advance (FE-012A, FE-012B, FE-012C, and downstream ECR runs), "no missing primitive" results cannot distinguish true sufficiency from response-space constraint.
- Affected experiments: E2, E3, E4, E5, E9 (all use the same or a directly descended vocabulary)
- Frequency: Universal within the primitive-extraction line of work (essentially every experiment that uses "primitives" as its unit of analysis).
- Severity: Moderate-High for any claim of vocabulary sufficiency or completeness; low for claims only about relative agreement between providers given the same constrained vocabulary.
- Detectability: High — explicitly named as H012 (Vocabulary Bias) with its own kill condition ("vocabulary-free extraction produces the same structures").
- Likely cause: Design choice made for tractability (a shared vocabulary makes cross-model comparison scoring far simpler) at the cost of construct validity for sufficiency claims specifically.
- Confidence in causal account: High.
- Existing mitigation: H012 exists and is tracked; ECR-000002/ECR-000003 test canonical/paraphrased/structural wording variants, which is a partial but not complete test of vocabulary dependence (it varies packet wording, not whether the vocabulary itself is withheld).
- Mitigation effectiveness: Partial — no experiment in the corpus has yet run extraction with no vocabulary provided at all.
- Recommended next test: A vocabulary-free extraction arm, directly targeting H012's kill condition.

## F4 — Temporal / run-to-run instability under a nominally fixed instrument

- Description: The same instrument, same packets, same three providers produce materially different structural outputs when run again later (see Contradiction C1).
- Affected experiments: E5 primarily; plausibly latent in every other single-timepoint experiment in the corpus that has not been repeated (E1, E2, E3, E7, E8, E9), since none of them have been tested for this failure mode except E4-via-E5.
- Frequency: Measured once, at 80% (literal) / 84.4% (semantic) structural-drift rate — high where measured, unmeasured elsewhere.
- Severity: High — this bears directly on whether any single-timepoint "agreement" finding in the corpus (which is most of them) would replicate if simply re-run.
- Detectability: High where instrumented (E5); currently undetectable for E1, E2, E3, E7, E8, E9, which have never been repeated.
- Likely cause: Not fully determined by the available evidence. Plausible contributors include model sampling/temperature variance, conversational-context differences between fresh sessions, model version drift between the two run dates (exact dates and versions are MISSING in the reviewed files), and genuine sensitivity of the underlying task to minor prompt-interpretation differences. The corpus's own interpretation-rules.md for the repeatability run explicitly declines to adjudicate between these explanations.
- Confidence in causal account: Low (the "what causes the drift" question is explicitly unresolved in the source material; only the "how much drift" question is well measured).
- Existing mitigation: None yet beyond documenting the drift; H004 exists to track it but has not been updated to reflect the magnitude of this finding (see Contradiction C1 and Confidence Reassessment).
- Recommended next test: Model-version/timestamp-controlled repeatability run (isolating whether drift correlates with elapsed time, session freshness, or documented model updates), plus repeatability testing extended to E7-E9's designs, none of which have ever been repeated.

## F5 — Metric definitional instability ("dominant primitive," "exit primitive," "constraint concept")

- Description: Several scored fields show disagreement in nearly every run that measures them, and multiple internal review documents independently flag that the field definitions themselves may be the problem, not (only) the underlying construct.
- Affected experiments: E4 (exit-primitive agreement 11/15, dominant-primitive 12/15), E9 (primitive/constraint "disagreement" reported in all three sub-experiments)
- Frequency: Near-universal among the fields it affects.
- Severity: Moderate-High — this metric ambiguity is a confound sitting underneath most of the "primitive disagreement persisted" findings that are otherwise interpreted as evidence about the artifacts, when part of the disagreement may be about the measurement instrument.
- Detectability: High — self-flagged in `FE-012C-interpretation.md` and `HYPOTHESIS-KILL-CONDITION-REVIEW.md`.
- Likely cause: Under-specified operational definitions for "dominant" and "exit," allowing reasonable but different provider-side or reviewer-side interpretations.
- Confidence in causal account: Moderate — plausible and self-flagged by the repository, but not yet isolated experimentally from genuine construct instability.
- Existing mitigation: None executed; explicitly recommended, not yet built.
- Recommended next test: A definitional-calibration pass (tighten "dominant"/"exit" operational definitions, then re-score a subset of already-collected responses without re-running providers, to see how much disagreement is attributable to definition vs. genuine model divergence).

## F6 — Silent absorption without a supersession record

- Description: ECR-000002's recognition-sensitivity question and P001/P002/P003 artifact families are directly reused and expanded by ECR-000003, but no located document formally declares ECR-000002 superseded, closed, or absorbed.
- Affected experiments: E8 → E9
- Frequency: Observed once directly (E8/E9); the inventory's coverage gaps mean this pattern was not checked across the unreviewed FE-BOUNDARY-2026-07-24 iteration folders, which show similar "v1", "v1.1", "v1.2" naming suggestive of the same pattern.
- Severity: Moderate — creates ambiguity about whether ECR-000002's thin, unsynthesized evidence should still be cited as active support for its listed hypotheses (H001, H002, H005-H008, H011, H012, H014, H016) or should be treated as withdrawn in favor of ECR-000003.
- Detectability: Moderate — requires cross-referencing directory contents against the hypothesis registry's "Evidence Runs" column, which is what this analysis did.
- Likely cause: Fast-moving, iterative research process without a strict supersession-logging discipline for evidence runs that are informally superseded rather than formally closed.
- Confidence in causal account: Moderate.
- Existing mitigation: The repository does have a `supersedes` / `superseded_by` field in its newer `EX-*` experiment.json schema (see E12's lineage block), which would solve this going forward if applied retroactively to ECR-000002.
- Recommended next test/action: Not an experiment — a bookkeeping action. Add an explicit supersession or closure record for ECR-000002.

## F7 — Documentation-currency defects (stale templates beside populated results)

- Description: Within the same experiment folder, some files still read as unpopulated templates ("do not infer results before results exist") while a sibling file elsewhere in the same folder tree contains fully populated, analyzed results for the same question.
- Affected experiments: E5 specifically (`comparison/drift-analysis.md` is an empty template; `comparison/generated/FE-012C-dataset-comparison.md` and `comparison/generated/FE-012C-drift-analysis.md` are populated) — noted in the inventory.
- Frequency: Observed at least once directly; plausible elsewhere given the volume of templated scaffolding throughout the repository (evident in E9's EXP001-003 review files, which have populated "Dataset Integrity" and "Direct Observations" sections but empty "Interpretation," "Hypothesis Impact," and "Review Outcome" sections — this is expected mid-review-cycle incompleteness, not necessarily a defect, but has the same practical effect for a reader).
- Severity: Low-Moderate — a reader who opens the wrong file could wrongly conclude "no results yet" for an experiment that in fact has fully analyzed results.
- Detectability: Low without deliberately cross-checking sibling files, as this analysis did.
- Likely cause: Generated-output files living in a different location (`comparison/generated/`) from their hand-authored template counterparts (`comparison/`), without the templates being deleted, redirected, or marked deprecated once superseded by generated output.
- Recommended next test/action: Not an experiment — a bookkeeping action. Either delete stale top-level templates once `generated/` output exists, or add a one-line pointer in the template file itself.

## F8 — Unbounded-concurrency defect in the publishing/validation pipeline

- Description: `npm run research:validate` fails with `EMFILE: too many open files` while parsing `research/framework-engineering/experiments/EX-FE-0003/*`, even after raising the process file-descriptor soft/hard limits to 524288 within the execution sandbox used for this analysis.
- Affected: Repository tooling (`research-publisher` dependency), not any specific experiment's content.
- Frequency: Reproduced twice in this session, at two different (already very high) file-descriptor limits, with the failure point advancing slightly between runs (different file named in the error each time), consistent with a race in unbounded-concurrency file reads rather than a fixed missing/corrupt file.
- Severity: Moderate for the research program's own completion criterion "run the repository's documented validation commands" — this command does not currently complete successfully in this environment, though `npm run experiments:verify -- --all` does pass cleanly.
- Detectability: High — reproducible on demand.
- Likely cause: The build step in `research-publisher`'s `buildProject` appears to call `Promise.all` over roughly 1000+ document reads without a concurrency cap, exceeding available file descriptors in some execution environments.
- Confidence in causal account: Moderate — inferred from the stack trace and behavior, not from reading `research-publisher`'s source directly (it lives in `node_modules` as an external dependency).
- Existing mitigation: None observed.
- Recommended action: Not part of this research mission's scope (fixing tooling is out of scope for an evidence-synthesis pass) but flagged for the engineering backlog: add a concurrency limit (e.g., `p-limit`) to the document-parsing step, or confirm this is environment-specific to the sandboxed execution context used here rather than the user's normal machine before prioritizing a fix.

---

## Failure-Mode Summary Table

| Code | Failure Mode | Frequency | Severity | Confidence in Cause | Mitigation Status |
|---|---|---|---|---|---|
| F1 | Blinding failure via recognition | High | High | Moderate-High | Partial |
| F2 | Same-actor confound | High (early runs) | High | High | Queued, not executed |
| F3 | Instrument-provided vocabulary bias | Universal in primitive line | Moderate-High | High | Partial |
| F4 | Temporal/run-to-run instability | High where measured, unmeasured elsewhere | High | Low (cause), High (magnitude) | Not mitigated |
| F5 | Metric definitional instability | Near-universal | Moderate-High | Moderate | Not executed |
| F6 | Silent absorption without supersession record | At least once | Moderate | Moderate | Partial (schema exists, not applied retroactively) |
| F7 | Documentation-currency defects | At least once directly, plausibly more | Low-Moderate | Moderate | None |
| F8 | Unbounded-concurrency tooling defect | Reproducible | Moderate (process, not content) | Moderate | None |

Note on reporting-quality bias: this taxonomy is itself built from documents that self-report their own limitations unusually candidly (nearly every experiment README contains an explicit "Warning" or "Limitations" section). This is a genuine strength of the repository's research culture, but it also means frequency counts above are counts of *documented* occurrences, not necessarily of true underlying occurrences — failure modes in less self-critically documented areas (the unreconstructed FE-BOUNDARY-2026-07-24 series, individual corpus artifacts) could not be assessed and are not represented in these frequency counts.
