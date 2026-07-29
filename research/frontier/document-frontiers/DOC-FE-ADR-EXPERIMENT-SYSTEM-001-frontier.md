---
id: DOC-FE-ADR-EXPERIMENT-SYSTEM-001-FRONTIER
title: "ADR: Minimal provider-neutral experiment system frontier"
status: active
generated: 2026-07-28
source_artifact_id: "FE-ADR-EXPERIMENT-SYSTEM-001"
source_status: "accepted-for-pilot"
analysis_unit: EXPERIMENT-SYSTEM
---

# ADR: Minimal provider-neutral experiment system: document frontier

## Source and coverage

- **Source:** [`research/framework-engineering/experiments/architecture.md`](../../../research/framework-engineering/experiments/architecture.md)
- **Canonical ID:** `FE-ADR-EXPERIMENT-SYSTEM-001`
- **Lifecycle status:** `accepted-for-pilot`
- **Artifact type:** `research-document`
- **Version:** 1.0
- **Confidence:** not declared
- **Inclusion rule:** eligible lifecycle status: accepted-for-pilot
- **Analysis unit:** [EXPERIMENT-SYSTEM](EXPERIMENT-SYSTEM-frontier.md)

## Phase 1 — knowledge extraction

- **Primary objective:** Provide a provider-neutral, immutable-run experiment registry and migration path for current and historical FE experiments.
- **Primary claims:** The narrow experiment infrastructure is executable and preserves provider/run lineage. Verification of package structure is separate from empirical acceptance.
- **Supporting evidence:** The source's declared references and the co-analyzed records listed in the analysis-unit frontier.
- **Methodology:** Architecture definition, migration manifests, immutable-run tooling, fixtures, and automated verification.
- **Accepted/current findings:** The architecture is accepted-for-pilot and the implementation report is complete in its declared engineering scope.
- **Rejected or unsupported findings:** Successful experiment-package verification establishes scientific validity. Provider labels alone establish independent replication.
- **Assumptions:** Write-once run directories and provider metadata are sufficient for the current pilot boundary. Migration manifests faithfully represent historical outputs.
- **Limitations:** Cross-provider independence semantics, adversarial integrity, and high-consequence promotion remain unvalidated.
- **Known uncertainties:** Failure behavior under corrupted runs; Migration compatibility; Independence semantics; Operational maintenance cost.
- **Declared headings inspected:** ADR: Minimal provider-neutral experiment system; Decision; Safety and lineage; Alternatives rejected for this pilot; Consequences.

## Phase 2 — unresolved unknowns

- Failure behavior under corrupted runs
- Migration compatibility
- Independence semantics
- Operational maintenance cost

## Phase 3 — adversarial challenge

The experiment system has stronger immutability controls than the ROS–FE profile execution validator that indexes some of its research outputs.

Evidence that would materially change this assessment includes a completed
independent replication, a preregistered negative control, a matched causal
comparison, a governance disposition, or a demonstrated failure of the
measurement and integrity instruments relevant to this source.

## Top five traceable opportunities

| Rank for this document | Record | Opportunity | Category | Frontier score |
|---:|---|---|---|---:|
| 1 | [RFR-2026-008](../records/RFR-2026-008.md) | ROS profile integrity and negative-test suite | Engineering | 295 |
| 2 | [RFR-2026-009](../records/RFR-2026-009.md) | Cross-provider reproducibility semantics | AI | 250 |
| 3 | [RFR-2026-001](../records/RFR-2026-001.md) | Negative non-isomorphic control benchmark | Measurement | 495 |
| 4 | [RFR-2026-015](../records/RFR-2026-015.md) | Automated confidence-decay and frontier refresh | Tooling | 102 |
| 5 | [RFR-2026-014](../records/RFR-2026-014.md) | Adversarial provenance and evidence-integrity study | Security | 136 |

The opportunity records contain source sections, challenged assumptions,
supporting evidence, dependencies, methodology, outputs, and success
criteria. Repeated opportunities are semantic links to one repository-wide
record rather than duplicated records.
