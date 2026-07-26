# Protocol

## Scope and control

The independent variables are (1) explicit uncertainty representation and (2) traceable evidence lineage. Framework K has neither requirement; Framework M adds uncertainty; Framework R adds lineage to uncertainty. All three retain identical operating guidance and identical required substantive sections. No case materials, domain guidance, or general reasoning instruction may differ by framework.

## Blinding and isolation

The executor keeps `identity-key.private.md` sealed. Evaluators receive only framework identifiers, case files, raw outputs, and scoring materials. They must not inspect the key, prior scores, or other evaluations. Each run uses a fresh model context and one framework file plus one case file. Raw outputs are immutable; normalization may remove transport metadata but may not repair content.

## Minimum matrix

| Case | K | M | R |
|---|---:|---:|---:|
| 01 simple | 3 | 3 | 3 |
| 02 incomplete | 3 | 3 | 3 |
| 03 conflicting | 3 | 3 | 3 |

Minimum total: 27. Preferred: repeat the full matrix with a second provider family (54 runs). Record provider/model/version, temperature or deterministic setting, framework, case, trial, prompt hash, raw-output hash, timestamp, and word count for every run.

## Standard diagnostic task

Every run receives exactly this task after its framework and case material: “Analyze this case using the provided diagnostic framework. Produce the framework's required response.” The case and framework files contain the substantive requirements; do not append variant-specific coaching.

## Stop conditions

Classify the experiment as compromised and record the failure if identities are revealed before evaluation; prompts drift beyond the variables; a variant gets additional material; earlier outputs leak; an evaluator is told which framework represents FE; traceability to framework/case/provider/trial fails; or an output is manually repaired before evaluation. Do not silently restart.

## Completion boundary

Completion requires the execution matrix, blinded evaluations, adversarial review, frozen analysis, unblinding record, final analysis, and a principle decision. This proposed package has none of those results yet.
