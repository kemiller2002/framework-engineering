---
id: FE-BND-MACHINE-PILOT-PROMPT-001
version: 1.0.0
status: ready-for-execution
author: Codex research director
created: 2026-07-24T17:48:29Z
updated: 2026-07-24T17:48:29Z
parents: [EX-FE-0002, FE-BND-STAGE-A-AGENT-PROMPT-001, FE-BND-V1.1-DECISION-001]
sources:
  - research/framework-engineering/experiments/EX-FE-0002/START-HERE.md
  - research/evaluations/FE-BOUNDARY-2026-07-24/protocol.md
  - research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/stage-a-decision.md
  - research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/stage-a-gate-checklist.md
  - research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/comparator-coverage-matrix.csv
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Self-contained operating prompt for an exploratory machine-only boundary pilot
confidence: 0.98
completion: complete
limitations: Machine-only evidence cannot replace human recognition, expert review, outcome experiments, or support a confirmatory novelty or discipline claim.
---

# EX-FE-0002 machine-only exploratory pilot

Execute this prompt as a new study. Create
`research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot`. Never modify,
overwrite, reclassify, or represent v1.0 or v1.1 as completed. In particular, v1.1
must remain:

```text
Stage A: incomplete
Stage B: blocked-before-stage-b
classification: inconclusive
stage_b_authorized: false
```

This pilot is an exploratory instrument-debugging and evidence-prioritization study.
It is not Stage B of the preregistered human protocol.

## Objective

Determine what a reproducible, adversarial, machine-only blinded review says about
the operational completeness, comparator coverage, potential mappings, leakage,
and discriminating predictions of current Framework Engineering mechanism claims.

The pilot may prioritize candidates for later human or empirical testing. It may
not establish novelty, non-redundancy, full subsumption, practical utility, or
discipline status.

## Required execution model

Use separate isolated agent contexts for each role. Prefer different model-provider
families where available and record the actual provider, model, version, prior
repository exposure, and context inputs. Multiple contexts from one provider count
as role isolation, not independent external replication.

No agent may perform both A-side and B-side curation. No curator may review mappings
or act as sole adjudicator. Do not share private scratch work or conclusions across
roles. Share only the artifacts explicitly allowed below.

If the execution environment cannot provide enough isolated contexts at once,
execute roles sequentially while preserving input isolation. Do not combine roles
merely for convenience. Stop any role that receives prohibited material and start
a newly versioned pilot.

## Common authoritative inputs

- `research/framework-engineering/experiments/EX-FE-0002/START-HERE.md`
- `research/evaluations/FE-BOUNDARY-2026-07-24/protocol.md`
- `research/evaluations/FE-BOUNDARY-2026-07-24/mechanism-card-schema.json`
- `research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/protocol-lock.json`
- the files explicitly permitted by each role

Use the 13 frozen comparison dimensions and their ordered digest:

`sha256:d1f13ab6249caaeed1571b885680bf00b8610d967f50365b1e470ee196f637fa`

Do not add a dimension after reviews begin. Do not change the mapping definitions,
thresholds, decision rules, common schema, or randomization seed unless a documented
pilot amendment is made before affected agents see results.

## Evidence rules

1. The unit of analysis is an operational mechanism claim.
2. Preserve negative, null, incomplete, and indeterminate results.
3. Every card must use the common schema and be at most 500 words.
4. Mark every material statement `direct`, `inference`, `proposal-only`, or `absent`.
5. Search snippets, vendor summaries, citation counts, evaluator conclusions, and
   model memory are not evidence.
6. Every material comparator requires an original or primary method source plus an
   independent standard, authoritative specification, or primary application source
   where one exists.
7. Abstract-only access is insufficient when operational detail affects a judgment.
8. Record exact title, authors or issuing body, year, identifier, URL or path, access
   date, relevant sections or pages, and a faithful paraphrase.
9. Respect copyright and quotation limits. Prefer short paraphrases.
10. Never convert unavailable evidence into support for either side.

## Required artifact metadata

Every Markdown, JSON, and CSV artifact must provide or be accompanied by:

```text
stable ID
version
status
author or agent ID
created and updated timestamps
parent and source dependencies
repository commit or external digest
change summary
confidence
completion state
known limitations
```

Log every source, decision, uncertainty, amendment, deviation, and contamination
incident.

## Role M0 — Pilot director and gatekeeper

Create the v1.2 workspace without copying v1.0 or v1.1 reviewer-visible cards as
accepted artifacts. Register stable agent IDs, model/provider families, exposure,
conflicts, allowed paths, and artifact ownership. Verify the frozen dimensions.

Required outputs:

- `README.md`
- `role-registry.json`
- `pilot-gate-checklist.md`
- `research-journal.md`
- initial `protocol-lock.json`

The director never curates either side and never performs a mapping review.

## Role M1 — FE mechanism curator

Permitted inputs:

- current canonical and proposal-only FE records
- v1.1 private FE cards, completeness CSV, consolidation log, and source appendix
- common schema

Prohibited inputs:

- all B-series cards and comparator notes
- prior or current mapping judgments
- leakage-test or reviewer outputs

Independently verify and revise the eight A-series candidates. Preserve unsupported
and incomplete fields. Do not improve claims beyond canonical evidence.

Required outputs:

- `private/fe/cards/A01.md` through `A08.md`
- `private/fe/fe-card-completeness.csv`
- `private/fe/fe-candidate-consolidation-log.md`
- `private/fe/fe-source-appendix.json`
- `private/fe/role-completion.md`

Do not use `unique`, `novel`, `subsumed`, `partial`, `exact`, or
`functionally-equivalent`.

## Role M2 — Comparator source-retrieval and evidence curator

Permitted inputs:

- comparator fields in EX-FE-0002
- v1.1 `source-registry.json`, coverage matrix, source-retrieval log, excluded-fields
  log, and B-series cards as leads requiring independent verification
- common schema

Prohibited inputs:

- all A-series cards and FE curator materials
- mapping hypotheses and reviewer outputs

Repair or preserve the following known gaps:

- B01: section-level original method-engineering evidence and an independent
  authoritative source, including full ISO/IEC 24744 text if legitimately available
- B02: section-level systems-engineering evidence, including ISO/IEC/IEEE 15288 and
  ISO/IEC/IEEE 24748-1 if legitimately available
- B03: section-level Gotel/Finkelstein verification and an independent requirements
  source, including ISO/IEC/IEEE 29148 if legitimately available
- B04: an independent primary application source to accompany BPMN 2.0.2
- B06: a valid original ACH method source; reject RAND P-8078 as an ACH source

Do not bypass paywalls, access controls, licensing, or network restrictions. If full
operational evidence cannot be lawfully retrieved, mark the card
`coverage-insufficient`. Saturate only the smallest material comparator set.

Required outputs:

- `private/comparators/source-registry.json`
- `private/comparators/cards/B01.md` onward
- `private/comparators/comparator-coverage-matrix.csv`
- `private/comparators/source-retrieval-log.md`
- `private/comparators/excluded-comparator-fields.md`
- `private/comparators/role-completion.md`

## Role M3 — Operational-completeness auditor

Receive only final M1 and M2 cards and the schema. Do not receive curator
correspondence, source identities beyond what is required to verify statement basis,
or mapping hypotheses.

Score every required field as `present-operational`, `present-descriptive`, or
`absent`. Treat slogans and implied decision rules as absent. Confirm that
implementation tests can fail and predictions name baselines and measurements.
Return defects independently to the responsible curator, allow one logged revision
round, and lock the resulting scores.

Required outputs:

- `audit/operational-completeness-audit.csv`
- `audit/card-defects.md`
- `audit/completeness-lock.json`
- `audit/role-completion.md`

Do not compare A cards with B cards.

## Role M4 — Blinding editor and key custodian

Receive only accepted cards and locked completeness results. Normalize heading
order, length, reading level, formatting, and example density. Remove source
identities, citations, URLs, repository names, disciplines, providers, coined terms,
and branded language without changing mechanism content.

Assign opaque randomized card IDs using the frozen seed procedure. Store the
identity key under `private/sealed/identity-key.json`, exclude that directory from
every leakage tester and reviewer context, and compute its SHA-256 digest.

Repository path isolation is only context separation, not genuine access control.
State this limitation prominently. Never claim that this satisfies the v1.1
external-custody requirement.

Required outputs:

- `reviewer-visible/cards/*.md`
- `private/sealed/identity-key.json`
- `reviewer-visible/sealed-key-receipt.json` containing only digest, custodian ID,
  separation policy, and the access-control limitation
- `reviewer-visible/blinding-edit-log.md`
- `reviewer-visible/role-completion.md`

## Role M5 — Adversarial machine leakage panel

Use at least three fresh isolated model contexts, preferably from different provider
families. They must not receive the key, private files, source registry, original
cards, project history, or prior mappings.

Each tester receives only:

- blinded cards
- a frozen list of at least four broad source categories
- response instructions

For every card, collect one category guess, confidence, suspected revealing phrase,
and reasoning limited to visible card text. Lock and hash responses before the
authorized analyst receives the identity key.

Compute:

- mean source-identification accuracy
- per-card and per-side accuracy
- confidence-weighted accuracy
- suspicious-phrase frequency
- between-model agreement

Use the former human thresholds only as diagnostic targets:

- mean accuracy at most 0.40
- no A-card accuracy above 0.60

Passing these targets means only that the cards resisted this machine panel. It is
not a human-recognition pass. If targets fail, return leaking cards to M4 and repeat
once with new model contexts. Preserve both rounds.

Required outputs:

- `leakage/panel-registry.json`
- `leakage/locked-responses/*`
- `leakage/response-hashes.sha256`
- `leakage/leakage-results.json`
- `leakage/leakage-validity-report.md`

## Role M6 — Machine mapping reviewers

Use at least three fresh isolated reviewer contexts. Prefer no more than one reviewer
per provider/model family. A reviewer must not have served as curator, completeness
auditor, blinding editor, leakage tester, or adjudicator.

Reviewers receive only:

- final blinded cards
- frozen reviewer instructions and rubric
- opaque card IDs

They must not receive source identities, the key, curator conclusions, other
reviews, or the likely A03 target noted in the v1.0 handoff.

For each candidate/comparator assessment, record the frozen mapping category,
dimension-level losses, whether a combined comparator is required, confidence,
evidence from visible card text, indeterminacy reason, and any claimed distinct
prediction. Lock and hash each response before adjudication or unblinding.

Required outputs:

- `reviews/reviewer-registry.json`
- `reviews/locked/*`
- `reviews/review-hashes.sha256`
- individual role-completion reports

## Role M7 — Blind adjudicator

Receive the frozen blinded cards, rubric, and locked reviews, but not the identity
key. Resolve only disagreements that the frozen rules permit. Preserve
`indeterminate`; do not resolve missing evidence through inference or majority
preference. Record the exact rule and visible evidence for every resolution.

Required outputs:

- `adjudication/adjudication.csv`
- `adjudication/adjudication-log.md`
- `adjudication/role-completion.md`

## Role M8 — Analyst

After all reviews and adjudications are locked, compute the preregistered metrics
without seeing source identities where possible:

- raw category counts and proportions
- full-subsumption and indeterminate proportions
- operational-completeness results
- distinct-prediction count
- reviewer agreement, including nominal Krippendorff alpha or justified equivalent
- combined-versus-single-comparator sensitivity
- confidence at least 0.70 sensitivity
- incomplete-excluded-versus-indeterminate sensitivity
- leave-one-reviewer-out and model-family sensitivity

The original human-only sensitivity is unavailable and must be reported
`not-computable-machine-only`.

After calculations are frozen, the director may authorize unblinding solely for
labeling results. Do not change calculations after unblinding.

Required outputs:

- `analysis/results.json`
- `analysis/results.csv`
- `analysis/sensitivity-analysis.md`
- `analysis/analysis-log.md`
- `analysis/role-completion.md`

## Role M9 — Freeze and reproducibility auditor

Receive all final artifacts except the identity-key contents. Validate JSON, CSV,
Markdown, metadata, counts, and the 500-word limit. Recompute completeness, leakage,
agreement, and analysis summaries from locked inputs. Reproduce randomized order.
Confirm no post-result dimension changes and no identity leakage in reviewer-visible
files.

Hash the source registry, cards, instructions, rubric, seed, thresholds, exclusions,
locked responses, adjudication, results, key receipt, deviations, and analysis code.

Required outputs:

- `validation/validation-report.md`
- `validation/artifact-manifest.sha256`
- finalized `protocol-lock.json`
- `validation/role-completion.md`

## Machine-pilot acceptance conditions

The director may mark the machine pilot complete only if:

- [ ] Every A card is complete or explicitly incomplete.
- [ ] Every material comparator is covered or explicitly coverage-insufficient.
- [ ] Every card uses the frozen schema and is at most 500 words.
- [ ] Completeness is independently audited and locked before mapping.
- [ ] Reviewer-visible cards contain no identity-bearing citations or branded cues.
- [ ] The identity key was withheld from leakage testers, reviewers, and adjudicator.
- [ ] At least three eligible machine leakage tests were locked before unblinding.
- [ ] At least three eligible machine mapping reviews were locked before adjudication.
- [ ] Analysis was frozen before unblinding.
- [ ] The package is validated and hashed.
- [ ] Every provider/model-family limitation is reported.
- [ ] No output claims to satisfy v1.1 human recognition or Stage B requirements.

Comparator coverage insufficiency does not need to be rhetorically repaired. It must
propagate into mapping results as `indeterminate` wherever material.

## Permitted terminal states

Use exactly one:

```text
machine_pilot_status: complete
human_protocol_status: blocked-before-stage-b
classification: exploratory-machine-result
```

or:

```text
machine_pilot_status: incomplete
human_protocol_status: blocked-before-stage-b
classification: inconclusive
```

Never set `stage_b_authorized` to true. Never label a result confirmatory.

## Required final report

Return:

```text
Machine-pilot completion status:
Package version and manifest digest:
Roles, model families, and independence limitations:
Candidate-card status:
Comparator coverage:
Operational-completeness results:
Blinding and machine-leakage results:
Mapping-review agreement:
Adjudicated exploratory results:
Sensitivity results:
Evidence defects and indeterminate findings:
Protocol deviations or contamination:
Claims permitted:
Claims prohibited:
Human protocol status:
Highest-value next empirical or human test:
Artifacts and exact handoff:
```

Do not return or imply a discipline-level boundary classification.
