# Independent Evaluation — EX-LEGACY-FE-012A vlegacy-import-1.0

## Role

Historical replication evaluator; consult the original protocol before any new run.

## Question and claim

**Question:** What results were recorded by FE-012A Blind Primitive Extraction?

**Primary hypothesis:** FE-012A

**Claim under test:** Historical claim retained without reinterpretation during migration.

## Permitted inputs

- `research/experiments/FE-012A-blind-primitive-extraction/README.md` (EX-LEGACY-FE-012A-README.md)
- `research/experiments/FE-012A-blind-primitive-extraction/protocol.md` (EX-LEGACY-FE-012A-protocol.md)
- `research/experiments/FE-012A-blind-primitive-extraction/analysis-plan.md` (EX-LEGACY-FE-012A-analysis-plan.md)

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
