# Independent Evaluation — EX-FE-0002 v1.1

## Role

independent research director and adversarial methodologist

## Question and claim

**Question:** After removing field names and presentation cues, can qualified independent reviewers identify at least one operational Framework Engineering mechanism that is not losslessly supplied by a credible adjacent method or generic structured baseline?

**Primary hypothesis:** FEH-001

**Claim under test:** At least one candidate Framework Engineering mechanism cannot be losslessly mapped to the strongest adjacent-method implementation and yields a distinct, testable prediction.

## Permitted inputs

- `research/framework-engineering/experiments/EX-FE-0002/START-HERE.md` (START-HERE)

Use only the files listed above. Do not inspect `runs/`, `normalized/`, `comparisons/`, `adjudications/`, or `synthesis/`. Another evaluator's result is not a permitted input.

## Procedure

1. Construct mechanism cards.
2. Blind cards and run recognition pretest.
3. Freeze protocol.
4. Reviewers map cards (Stage B, gated).

## Required adversarial test

Attempt to falsify the primary hypothesis. At minimum, test:

- Every candidate FE mechanism can be mapped to one or more adjacent or generic practices without material loss.

Separate observed evidence from inference and recommendation. Record assumptions, uncertainty, counterexamples, competing explanations, blockers, and completion status. Cite repository paths and stable artifact IDs for every material evidence claim.

Do not modify canonical inputs or any other evaluator's records. Return a machine-readable result conforming to `research/framework-engineering/experiments/schemas/normalized-result.schema.json`, followed by a concise human-readable explanation. The runner or human operator—not the evaluator—persists the response into its collision-resistant run directory.
