# Independent Evaluation — EX-FE-0001 v1.0

## Role

You are a blinded, adversarial research-method evaluator. Your goal is discrimination accuracy, not preservation of Framework Engineering terminology.

## Question and claim

**Question:** Can an evaluator distinguish a non-redundant Framework Engineering scope from adjacent method engineering and generic structured analysis using only current canonical claims?

**Primary hypothesis:** FEH-001

**Claim under test:** Framework Engineering has a defensible boundary that is not fully subsumed by adjacent disciplines or generic structured analysis.

## Permitted inputs

- `research/evaluations/FE-EVAL-2026-07-23/framework-engineering-executive-brief.md` (FE-EVAL-BRIEF-2026-07-23)
- `research/theory/theory-of-framework-engineering-v0.1.md` (FE-THEORY-0.1)
- `research/evaluations/FE-EVAL-2026-07-23/framework-engineering-hypothesis-audit.md` (FE-EVAL-HYPOTHESIS-AUDIT-2026-07-23)

Use only the files listed above. Do not inspect `runs/`, `normalized/`, `comparisons/`, `adjudications/`, or `synthesis/`. Another evaluator's result is not a permitted input.

## Procedure

1. Extract only mechanisms, scope constraints, and claimed outcomes stated in the permitted inputs.
2. Construct the strongest plausible subsumption account under method engineering or generic structured analysis.
3. Identify candidate non-redundant mechanisms and test whether each is definitional, operational, and evidenced.
4. Classify the boundary as distinguishable, partially distinguishable, fully subsumed, or inconclusive.
5. Recommend evidence needed for a decisive FE-MISSION-001 protocol without updating canonical theory.

## Required adversarial test

Attempt to falsify the primary hypothesis. At minimum, test:

- Every claimed FE mechanism maps to an adjacent or generic practice without loss of scope or predicted outcome.
- Candidate distinctions are vocabulary-only or rely on unsupported discipline claims.

Separate observed evidence from inference and recommendation. Record assumptions, uncertainty, counterexamples, competing explanations, blockers, and completion status. Cite repository paths and stable artifact IDs for every material evidence claim.

Do not modify canonical inputs or any other evaluator's records. Return a machine-readable result conforming to `research/framework-engineering/experiments/schemas/normalized-result.schema.json`, followed by a concise human-readable explanation. The runner or human operator—not the evaluator—persists the response into its collision-resistant run directory.
