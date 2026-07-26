# Independent Evaluation — EX-LEGACY-ECR-000003 vlegacy-import-1.0

## Role

Historical replication evaluator; consult the original protocol before any new run.

## Question and claim

**Question:** What results were recorded by ECR-000003 Representation Sensitivity?

**Primary hypothesis:** H016, H017, H018, H013, H003, H015, H002

**Claim under test:** Historical claim retained without reinterpretation during migration.

## Permitted inputs

- `research/evidence-runs/ECR-000003-representation-sensitivity/README.md` (EX-LEGACY-ECR-000003-README.md)
- `research/evidence-runs/ECR-000003-representation-sensitivity/pre-registration.md` (EX-LEGACY-ECR-000003-pre-registration.md)
- `research/evidence-runs/ECR-000003-representation-sensitivity/analysis-plan.md` (EX-LEGACY-ECR-000003-analysis-plan.md)

Use only the files listed above. Do not inspect `runs/`, `normalized/`, `comparisons/`, `adjudications/`, or `synthesis/`. Another evaluator's result is not a permitted input.

## Procedure

1. Read the original protocol and declared inputs.
2. Run an independent replication without reading migrated results.
3. Return a schema-conforming result for a new run.

## Required adversarial test

Attempt to falsify the primary hypothesis. At minimum, test:

- The original experiment's declared kill or failure conditions are met.

Separate observed evidence from inference and recommendation. Record assumptions, uncertainty, counterexamples, competing explanations, blockers, and completion status. Cite repository paths and stable artifact IDs for every material evidence claim.

Do not modify canonical inputs or any other evaluator's records. Return a machine-readable result conforming to `research/framework-engineering/experiments/schemas/normalized-result.schema.json`, followed by a concise human-readable explanation. The runner or human operator—not the evaluator—persists the response into its collision-resistant run directory.
