---
id: DOC-PATH-OPEN-ROS-GAPS-eb77000faa-FRONTIER
title: "Open ROS gaps frontier"
status: active
generated: 2026-07-28
source_artifact_id: null
source_status: "draft"
analysis_unit: ROS-FE-V1
---

# Open ROS gaps: document frontier

## Source and coverage

- **Source:** [`research/framework-engineering/ros-profile/open-ros-gaps.md`](../../../research/framework-engineering/ros-profile/open-ros-gaps.md)
- **Canonical ID:** missing; path-derived frontier identity used
- **Lifecycle status:** `draft`
- **Artifact type:** `research-document`
- **Version:** 0.1
- **Confidence:** not declared
- **Inclusion rule:** explicit authority/current-state dependency
- **Analysis unit:** [ROS-FE-V1](ROS-FE-V1-frontier.md)

## Phase 1 — knowledge extraction

- **Primary objective:** Provide a versioned pilot execution and record profile for Framework Engineering research.
- **Primary claims:** The profile is usable for synthetic low-consequence pilots. It is not sufficient for unattended promotion or strong conformance claims.
- **Supporting evidence:** The source's declared references and the co-analyzed records listed in the analysis-unit frontier.
- **Methodology:** Repository audit, baseline execution, schema and validator inspection, and test execution.
- **Accepted/current findings:** v1.0 remains the accepted pilot baseline. High-severity integrity gaps require a v1.1 proposal.
- **Rejected or unsupported findings:** A green current validation proves complete execution or lineage integrity.
- **Assumptions:** Human promotion authority prevents the worst automation harms. Current pilots are low consequence.
- **Limitations:** Execution-local records, references, duplicate identity, and manifests are incompletely validated.
- **Known uncertainties:** Negative-test coverage; Migration safety; Cross-repository dependency integrity.
- **Declared headings inspected:** Open ROS gaps.

## Phase 2 — unresolved unknowns

- Negative-test coverage
- Migration safety
- Cross-repository dependency integrity

## Phase 3 — adversarial challenge

The manifest declares a broader contract than the validator enforces.

Evidence that would materially change this assessment includes a completed
independent replication, a preregistered negative control, a matched causal
comparison, a governance disposition, or a demonstrated failure of the
measurement and integrity instruments relevant to this source.

## Top five traceable opportunities

| Rank for this document | Record | Opportunity | Category | Frontier score |
|---:|---|---|---|---:|
| 1 | [RFR-2026-008](../records/RFR-2026-008.md) | ROS profile integrity and negative-test suite | Engineering | 295 |
| 2 | [RFR-2026-014](../records/RFR-2026-014.md) | Adversarial provenance and evidence-integrity study | Security | 136 |
| 3 | [RFR-2026-009](../records/RFR-2026-009.md) | Cross-provider reproducibility semantics | AI | 250 |
| 4 | [RFR-2026-015](../records/RFR-2026-015.md) | Automated confidence-decay and frontier refresh | Tooling | 102 |
| 5 | [RFR-2026-003](../records/RFR-2026-003.md) | Matched incremental-utility experiment | Experimentation | 490 |

The opportunity records contain source sections, challenged assumptions,
supporting evidence, dependencies, methodology, outputs, and success
criteria. Repeated opportunities are semantic links to one repository-wide
record rather than duplicated records.
