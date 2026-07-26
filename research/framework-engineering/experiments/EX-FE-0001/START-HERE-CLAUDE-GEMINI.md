# Claude and Gemini Experiment Start

Load this file to begin an independent evaluation for `EX-FE-0001`, Framework Engineering Boundary Discrimination Pilot.

## Your assignment

Act as a blinded, adversarial research-method evaluator. Your objective is discrimination accuracy—not support for Framework Engineering or preservation of its terminology.

Determine whether the current canonical claims establish a Framework Engineering scope that is not fully subsumed by adjacent method engineering or generic structured analysis.

This is a protocol and infrastructure pilot. Your response may inform the design of `FE-MISSION-001`, but it cannot establish discipline status, validate `FEH-001`, or update canonical theory.

## Read in this order

1. `research/framework-engineering/experiments/EX-FE-0001/prompt.md`
2. `research/framework-engineering/experiments/EX-FE-0001/experiment.json`
3. `research/evaluations/FE-EVAL-2026-07-23/framework-engineering-executive-brief.md`
4. `research/theory/theory-of-framework-engineering-v0.1.md`
5. `research/evaluations/FE-EVAL-2026-07-23/framework-engineering-hypothesis-audit.md`
6. `research/framework-engineering/experiments/schemas/normalized-result.schema.json`

The three research documents above are the only substantive evidence inputs permitted for this run. The specification, generated prompt, and schema provide instructions rather than additional evidence.

## Isolation requirements

Do not read or search:

- `research/framework-engineering/experiments/EX-FE-0001/runs/`
- `research/framework-engineering/experiments/EX-FE-0001/normalized/`
- `research/framework-engineering/experiments/EX-FE-0001/comparisons/`
- `research/framework-engineering/experiments/EX-FE-0001/adjudications/`
- `research/framework-engineering/experiments/EX-FE-0001/synthesis/`
- `research/framework-engineering/experiments/EX-FE-0001/fixtures/`
- another provider's response, review, or conclusion

Do not modify repository files, canonical inputs, experiment definitions, or another evaluator's records. Return your response to the operator. The experiment runner will persist it in an isolated, collision-resistant directory.

If you have already seen another evaluator's result, disclose that contamination and stop rather than presenting the run as independent.

## Required analysis

Your evaluation must:

1. Extract the mechanisms, scope constraints, and claimed outcomes stated in the permitted evidence.
2. Construct the strongest plausible account that subsumes Framework Engineering under method engineering or generic structured analysis.
3. Identify every candidate non-redundant mechanism.
4. Test whether each candidate is operationally defined, supported by evidence, and capable of producing a distinct prediction or outcome.
5. Attempt to falsify `FEH-001`.
6. Consider terminology effects, shared-model priors, repository framing, and missing primary literature.
7. Classify the current boundary as:
   - `distinguishable`
   - `partially-distinguishable`
   - `fully-subsumed`
   - `inconclusive`
8. State what evidence would discriminate between the primary and competing hypotheses.

Separate:

- direct observations from repository evidence;
- interpretations and inferences;
- recommendations for subsequent experiments.

Do not treat agreement among language models as validation.

## Expected response

Return two sections.

### 1. Machine-readable result

Return one JSON object conforming to:

`research/framework-engineering/experiments/schemas/normalized-result.schema.json`

Use these run-time placeholders when the operator has not supplied values:

```json
{
  "experiment_id": "EX-FE-0001",
  "run_id": "OPERATOR_ASSIGNED",
  "provider": "claude-or-gemini",
  "model": "exact user-facing model name, or unknown",
  "raw_response_path": "OPERATOR_ASSIGNED",
  "raw_response_digest": "OPERATOR_ASSIGNED",
  "prompt_digest": "8cae7d7ca28f28499a63159e7af9cfd99eba16c5ca375099989233822409619f"
}
```

Include all required schema fields. Use stable IDs and repository paths in `evidence_references`. Express confidence as a number from `0` to `1`. Do not invent model versions, costs, citations, or run metadata.

### 2. Human-readable explanation

Provide a concise explanation containing:

- boundary classification;
- strongest evidence for that classification;
- strongest competing explanation;
- falsification attempt and outcome;
- important uncertainties and validity threats;
- recommended design changes for `FE-MISSION-001`;
- completion status and blockers.

## Provider-specific expectations

### Claude

Use the same canonical prompt and evidence allowlist. Do not rely on Claude-specific memory or undocumented prior context. Return valid JSON before the explanation.

### Gemini

Use the same canonical prompt and evidence allowlist. Do not use web search, Google Drive, or external retrieval for this pilot. Return valid JSON before the explanation.

Provider-specific formatting conveniences must not change the substantive question, evidence set, rubric, or falsification requirements.

## Completion check

Before returning:

- Confirm you did not inspect any prior-result directory.
- Confirm you used only the permitted evidence.
- Confirm you attempted to falsify the primary hypothesis.
- Confirm every material evidence claim cites a path or stable ID.
- Confirm the JSON parses and includes every required field.
- Report any contamination, missing input, or ambiguity honestly.
