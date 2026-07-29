---
id: FE-BND-2026-07-28-ARCH
title: Framework Engineering Research and Operating-System Architecture
artifactType: architecture-proposal
status: proposed
version: "1.0.0"
authorAgent: OpenAI Codex
created: 2026-07-28
updated: 2026-07-28
parentIds: [FE-BND-2026-07-28-DEFINITIONS]
evidenceIds: [EV-FEB-004, EV-FEB-006, EV-FEB-007, EV-FEB-012, EV-FEB-014, EV-FEB-015, EV-FEB-019, EV-FEB-024, EV-FEB-027, EV-FEB-R04]
hypothesisIds: [FEH-001, FEH-003, FEH-004, FEH-008, FEH-010]
theoryIds: [FE-THEORY-0.1]
supersedes: []
supersededBy: []
confidence: moderate
completion: complete
repositoryBaseline: c830902195f22d02c820f55a2321f3e9214242a3
---

# Research and operating-system architecture

## Architecture objective

The operating system must let multiple human and machine providers conduct
falsifiable FE research, preserve contradictory and negative results, and
move accepted knowledge into engineering without confusing:

- a source with evidence;
- evidence with an inference;
- an inference with a decision;
- an accepted record with an execution draft;
- tool conformance with scientific validity;
- repository coherence with field maturity.

## Layered model

| Layer | Responsibility | Canonical artifacts | Promotion gate |
|---|---|---|---|
| 0. Governance | authority, identifiers, status, change and safety rules | constitution, ROS policies, profile manifest | authorized decision record |
| 1. Mission control | question, scope, hypotheses, pre-registration, stop rules | mission, stream, execution manifest, pre-registration | frozen before observation |
| 2. Source and observation | immutable source description and direct observations | source, observation, contradiction | provenance and access verified |
| 3. Interpretation | hypotheses, mechanisms, alternatives, syntheses | hypothesis, comparative study, synthesis | evidence traceability and falsification review |
| 4. Artifact engineering | framework, genome, cases, postmortems, proposals | framework records and related types | schema plus substantive review |
| 5. Experiment and evaluation | protocols, runs, measures, analyses, replications | experiment proposal, run, result, evaluation | preregistration and analysis integrity |
| 6. Decision and release | accept, reject, narrow, supersede, or deploy | decision record, release profile, migration plan | named authority and impact analysis |
| 7. Learning and retirement | monitor, adapt, deprecate, preserve lineage | retrospective, successor, deprecation record | observation window and recovery proof |

## Required separation of state

1. **Execution-local draft:** provider-owned, mutable during the run, never
   treated as canonical.
2. **Submitted candidate:** content-addressed or commit-addressed packet,
   closed for review.
3. **Reviewed candidate:** findings and objections recorded; still not
   accepted.
4. **Accepted canonical:** promoted by named authority under a decision
   record.
5. **Superseded or rejected:** retained, discoverable, and linked to its
   successor or rejection rationale.

Generated registries are indexes of these records; they are never authority
by themselves.

## Minimum record envelope

Every research and engineering record should carry:

- stable ID, record type, title, semantic version, status;
- creation and update timestamps;
- author/provider and execution ID;
- governing profile and repository commit;
- parent, source, evidence, hypothesis, theory, decision, and derived-artifact
  dependencies as applicable;
- confidence and completion expressed separately;
- supersedes and superseded-by links;
- change summary and migration impact;
- explicit limitations and next action.

Content schemas then add type-specific fields. A confidence value must state
what claim it qualifies; completion must state which contract was completed.

## Evidence semantics

| Record | May assert | Must not imply |
|---|---|---|
| Source | provenance, access, content description | truth or applicability |
| Observation | what was observed under specified conditions | mechanism or generality |
| Contradiction | incompatible claims or results | which side is correct |
| Hypothesis | falsifiable expected relation and alternatives | acceptance |
| Synthesis | reasoned integration with traceability | causal proof |
| Experiment result | protocol-bounded measurement and analysis | external validity beyond bounds |
| Decision | authorized disposition and consequences | scientific truth |

## Mission lifecycle

1. Orient to canonical state and inspect repository changes.
2. Register a mission and decision owner.
3. Freeze question, dimensions, candidate explanations, outcome measures,
   exclusions, stop rules, and analysis plan.
4. Create provider execution boundaries and immutable source identifiers.
5. Collect direct observations; record access failures and negative evidence.
6. Search explicitly for counterexamples and full subsumption.
7. Build claim-to-source and claim-to-hypothesis traceability.
8. Run validators and substantive review independently.
9. Submit a closed candidate packet.
10. Decide, promote, narrow, reject, or supersede with impact analysis.
11. Export accepted engineering inputs through a release contract.
12. Monitor downstream use, cost, failures, and recovery; retire when the
    boundary or value no longer holds.

## Validation stack

| Validation class | Example checks | What passing means |
|---|---|---|
| Syntax | parse JSON/YAML/front matter | readable representation |
| Schema | required fields, enums, types | structural conformance |
| Referential | IDs resolve; lineage is acyclic; status links agree | navigable record graph |
| Determinism | clean rebuild produces identical registries | reproducible generation |
| Execution completeness | six required packet files and declared outputs exist | contract completion |
| Evidence integrity | claims link to source/observation and access limits | inspectable reasoning |
| Scientific | preregistration, controls, threats, falsification, analysis | research-quality review |
| Engineering | requirements, risks, acceptance, rollback, operational telemetry | deployability |
| Independent | separate provider/person reproduces or replicates | reduced provider dependence |

No lower row can be inferred from a higher row. In particular, schema
validity cannot stand in for empirical validity.

## Human and agent control model

- Every execution declares provider, model/tool version where applicable,
  role, write boundary, allowed actions, and conflict owner.
- Same-provider role separation is not independent replication.
- Agents may draft evidence and syntheses but may not self-authorize
  acceptance, theory mutation, or consequential deployment.
- High-impact decisions require a named human or institutionally delegated
  authority.
- Concurrent writes use disjoint execution paths; canonical promotion is a
  serialized operation.
- Prompt, tool, source, and environment changes are configuration changes and
  must be recorded.
- Secrets, private data, licensed source text, and personally identifiable
  information stay outside research artifacts unless explicitly governed.
- A failed or interrupted execution retains a partial manifest and reason; it
  is not silently erased.

## Minimal and full modes

### Minimal mode

Use for reversible, low-consequence, narrow work:

- mission;
- pre-registration or acceptance statement;
- sources/inputs;
- result;
- limitations;
- handoff;
- schema and reference validation.

### Full mode

Add for novel, cross-domain, safety-relevant, high-cost, or canonical work:

- competing hypotheses and kill criteria;
- source registry and evidence ledger;
- comparative or controlled protocol;
- risk and ethics review;
- independent replication or adjudication;
- decision record and migration plan;
- monitoring, incident, recovery, and retirement plans;
- cost and cognitive-burden telemetry.

The selected mode and reason must be recorded. Artifact count is never a
proxy for rigor.

## Export contract into engineering

Research output may enter the engineering discipline only through a versioned
release packet containing:

1. accepted definition and boundary;
2. supported and unsupported claims;
3. requirements and quality attributes;
4. evidence and confidence per claim;
5. architecture decisions and alternatives;
6. machine-readable schemas and conformance tests;
7. risks, ethical constraints, and prohibited uses;
8. acceptance criteria and test vectors;
9. compatibility, migration, rollback, and retirement rules;
10. unresolved hypotheses and required telemetry.

The receiving discipline should import this packet, not the entire mutable
research workspace.

## Maturity gates

| Gate | Question | Current result |
|---|---|---|
| G0 Coherence | Is there a bounded object, vocabulary, and research question? | pass internally |
| G1 Reproducibility | Can another provider reconstruct the state and rerun tools? | partial |
| G2 Boundary | Is the profile non-redundant or clearly classified as integration? | pass with narrowed integration claim |
| G3 Comparative utility | Does it outperform matched alternatives net of cost? | fail / untested |
| G4 Transfer | Do independent users and domains reproduce useful outcomes? | fail / untested |
| G5 Safety and governance | Are risks, authority, incidents, and recovery controlled? | partial |
| G6 Engineering release | Are schemas, conformance, migration, and operations stable? | partial pilot only |
| G7 Institutional practice | BOK, curriculum, community, ethics, standards, competency | fail |
| G8 Discipline claim | Is distinct, durable, socially accountable practice established? | fail |

The immediate goal is G3, not curriculum, credentialing, or discipline
branding.

## Architectural decisions

- Preserve v1.0 as the accepted pilot; propose compatible v1.1 changes.
- Treat FE-CFDP as one evidence stream, not as the umbrella for all FE
  missions.
- Add an explicit mission/experiment stream for boundary and utility studies.
- Validate execution-local draft records and packet completeness before
  submission.
- Generate registries for every supported record type and taxonomy, or
  explicitly mark a type as non-indexed.
- Make cross-repository dependencies machine-checkable.
- Record accepted research exports as releases with a receiving owner.
- Delay automatic framework generation and autonomous theory mutation until
  G3–G5 evidence exists.

