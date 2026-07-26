# EX-FE-0003 — Uncertainty and Evidence-Lineage Ablation

Status: proposed. This package is a machine-only framework-discovery experiment. It tests two diagnostic-framework properties; it does not validate Framework Engineering as a whole.

## Start condition

The framework variants in this directory are frozen for pre-execution review. Do not generate, edit, or evaluate a run until the hashes in `frozen-analysis.md` are verified and the sealed identity key is inaccessible to evaluators.

## Question

Does explicit uncertainty representation and traceable evidence lineage improve diagnostic accuracy, missing-information identification, resistance to unsupported conclusions, useful next actions, and revision readiness compared with an otherwise equivalent framework?

## Execution summary

- Run every case against Framework K, M, and R three times (27 isolated runs minimum).
- Use fresh context and identical case input for every run. Do not pass earlier outputs to later runs.
- Use neutral framework identifiers in evaluator-visible artifacts.
- Record provider-family agreement only as a machine-agreement observation, never as human validation.
- Normalize raw outputs without repairing them, then conduct blinded scoring and a separate adversarial review.

`protocol.md` is the operating contract. `analysis-plan.md` is preregistered before execution. `identity-key.private.md` is not evaluator-visible and must be access-controlled before distributing this package.
