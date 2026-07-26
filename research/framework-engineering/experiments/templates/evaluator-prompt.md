# Independent Evaluation — {{EXPERIMENT_ID}} v{{VERSION}}

## Role

{{ROLE}}

## Question and claim

**Question:** {{QUESTION}}

**Primary hypothesis:** {{HYPOTHESIS}}

**Claim under test:** {{CLAIM}}

## Permitted inputs

{{INPUTS}}

Use only the files listed above. Do not inspect `runs/`, `normalized/`, `comparisons/`, `adjudications/`, or `synthesis/`. Another evaluator's result is not a permitted input.

## Procedure

{{PROCEDURE}}

## Required adversarial test

Attempt to falsify the primary hypothesis. At minimum, test:

{{FALSIFICATION}}

Separate observed evidence from inference and recommendation. Record assumptions, uncertainty, counterexamples, competing explanations, blockers, and completion status. Cite repository paths and stable artifact IDs for every material evidence claim.

Do not modify canonical inputs or any other evaluator's records. Return a machine-readable result conforming to `{{OUTPUT_SCHEMA}}`, followed by a concise human-readable explanation. The runner or human operator—not the evaluator—persists the response into its collision-resistant run directory.
