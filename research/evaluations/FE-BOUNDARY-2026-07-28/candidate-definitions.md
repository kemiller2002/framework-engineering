---
id: FE-BND-2026-07-28-DEFINITIONS
title: Framework Engineering Candidate Definitions and Boundary
artifactType: synthesis
status: proposed
version: "1.0.0"
authorAgent: OpenAI Codex
created: 2026-07-28
updated: 2026-07-28
parentIds: [FE-BND-2026-07-28-MATRIX]
evidenceIds: [EV-FEB-002, EV-FEB-008, EV-FEB-014, EV-FEB-015, EV-FEB-R01, EV-FEB-R02, EV-FEB-R03]
hypothesisIds: [FEH-001]
theoryIds: [FE-THEORY-0.1]
supersedes: []
supersededBy: []
confidence: moderate-for-recommended-classification
completion: complete
repositoryBaseline: c830902195f22d02c820f55a2321f3e9214242a3
---

# Candidate definitions and boundary

## Three definitions tested

### 1. Discipline-aspirational definition

> Framework Engineering is the engineering discipline concerned with the
> systematic design, validation, operation, and evolution of frameworks.

**Strength:** short, memorable, and provides a clear object.

**Failure:** “engineering discipline” outruns the evidence. The definition
does not identify a distinctive mechanism, outcome, professional practice,
or institutional base. It also hides the fact that the claimed operations
come from several established fields.

**Disposition:** reject as a current descriptive claim; retain only as a
governed long-horizon hypothesis.

### 2. Integrated-profile definition

> Framework Engineering is an integrated engineering profile for designing,
> evaluating, operating, and evolving analytical frameworks as versioned
> knowledge artifacts, with explicit purpose, semantics, evidence,
> uncertainty, provenance, context, and human/machine execution boundaries.

**Strength:** identifies the unit of analysis, integration surface, lifecycle,
quality attributes, and intended users without claiming a new causal science.
It is compatible with systems engineering, method engineering, design
science, knowledge engineering, requirements engineering, decision analysis,
quality engineering, and organizational learning.

**Failure risk:** may simply repackage established practice and add
documentation burden. “Integrated” is not evidence of utility.

**Disposition:** recommended normative definition for research and pilot
engineering, subject to matched-utility testing.

### 3. Current-state definition

> Framework Engineering is a repository-centered research program that
> develops and tests representations, comparison methods, evidence controls,
> and operating practices for analytical frameworks.

**Strength:** most directly supported by repository observation.

**Failure:** too local and descriptive to guide external engineering use.

**Disposition:** accepted as the current maturity description until
independent execution and comparative utility are demonstrated.

## Recommended two-layer definition

Use two layers rather than letting aspiration masquerade as status:

**What FE is now**

> A repository-centered research program and candidate integrated engineering
> profile for analytical frameworks.

**What the profile does**

> It treats an analytical framework as a versioned knowledge artifact whose
> purpose, concepts, relationships, procedures, evidence, uncertainty,
> provenance, context, interfaces, validation state, and change history can be
> designed and tested for human and machine use.

This wording is intentionally compatible with established disciplines. FE
does not own systems lifecycle, method construction, requirements,
provenance, semantics, decision quality, feedback, quality control, knowledge
management, or agent coordination. It composes them around a selected object.

## Object of practice

An **analytical framework** is a reusable, bounded structure that organizes
concepts, relations, questions, procedures, evidence, or decision logic to
help a person or machine explain, diagnose, design, compare, decide,
coordinate, or learn.

This object:

- may be descriptive, explanatory, diagnostic, procedural, evaluative, or
  decision-oriented;
- may contain method elements but is not required to be a method;
- may be represented in prose, diagrams, schemas, code, prompts, or mixed
  media;
- is distinct from any one implementation or execution;
- has stakeholders, assumptions, contexts, interfaces, failure modes, and a
  lifecycle;
- is not validated merely because its representation is coherent.

## Included work

FE profile work may include:

- bounding the framework's purpose, stakeholders, questions, and non-goals;
- extracting or designing concepts, relations, roles, rules, steps, and
  decision logic;
- separating identity and invariant intent from optional capabilities and
  implementation;
- preserving source, evidence, contradiction, confidence, and provenance;
- specifying representations and interoperability contracts;
- tailoring to context with explicit boundary conditions;
- testing validity, reliability, utility, portability, safety, and cost;
- operating, observing, changing, versioning, deprecating, and retiring the
  artifact;
- supporting human-only, machine-only, and mixed human-agent execution where
  risks are controlled.

## Excluded or separately governed work

The profile does not:

- replace systems engineering for the containing sociotechnical system;
- replace method engineering when the object is specifically a method;
- replace requirements engineering, architecture, ontology engineering,
  decision analysis, quality engineering, or research methodology;
- certify empirical claims contained in a framework;
- infer product safety or effectiveness from process compliance;
- authorize autonomous theory or policy mutation;
- treat documentation volume, schema validity, provider agreement, or
  framework popularity as evidence of outcome value;
- require full-strength governance for small, reversible, low-consequence
  tasks;
- create a profession, credential, or discipline by declaration.

## Boundary test for candidate work

Use FE only if all of the following are true:

1. The primary object is an analytical framework or a family of such
   frameworks.
2. The work spans at least two of design, evaluation, operation, adaptation,
   comparison, or retirement.
3. Preserving semantics, evidence, provenance, or transfer across people and
   machines materially affects the outcome.
4. An established single-domain process is insufficient without meaningful
   integration.
5. The expected benefit can plausibly exceed authoring, review, compute,
   training, and maintenance cost.

If conditions 1–3 fail, use the relevant established discipline directly. If
condition 4 fails, call the work by that established discipline. If condition
5 cannot be tested, keep the work in research posture.

## Minimum success claim

The profile becomes practically supported only when independent,
preregistered comparisons show that it improves at least one consequential
outcome—quality, error detection, traceability, transfer, adaptation,
recovery, or time-to-correct-action—without unacceptable deterioration in
cost, cognitive burden, safety, or maintainability.

## Kill and rename conditions

Stop discipline-building and rename the work as an established-field profile
if either condition holds:

- a single adjacent field is shown to cover the same object, lifecycle,
  mechanisms, and outcomes without meaningful loss; or
- matched studies show no reproducible net benefit from the FE integration
  or its candidate-specific components.

Even under a kill result, the repository's useful schemas, evidence records,
and experiments may survive as tooling within systems engineering, method
engineering, or design science.

