---
id: EXPERIMENT-SYSTEM-FRONTIER
title: "Provider-neutral experiment system frontier"
status: active
generated: 2026-07-28
---

# Provider-neutral experiment system: research frontier

## Scope and source artifacts

- [`research/framework-engineering/experiments/architecture.md`](../../../research/framework-engineering/experiments/architecture.md)
- [`research/framework-engineering/experiments/roadmap.md`](../../../research/framework-engineering/experiments/roadmap.md)
- [`research/framework-engineering/experiments/assessment.md`](../../../research/framework-engineering/experiments/assessment.md)
- [`research/framework-engineering/experiments/IMPLEMENTATION-REPORT.md`](../../../research/framework-engineering/experiments/IMPLEMENTATION-REPORT.md)
- [`research/framework-engineering/experiments/journal/2026-07-23-system-implementation.md`](../../../research/framework-engineering/experiments/journal/2026-07-23-system-implementation.md)

These files are treated as one analysis unit because they share an evidence base or form one accepted/current package. Generated derivatives, templates, prompts, private working packets, and superseded runs are not counted as independent conclusions.

## Knowledge extraction

- **Primary objective:** Provide a provider-neutral, immutable-run experiment registry and migration path for current and historical FE experiments.
- **Primary claims:** The narrow experiment infrastructure is executable and preserves provider/run lineage. Verification of package structure is separate from empirical acceptance.
- **Methodology:** Architecture definition, migration manifests, immutable-run tooling, fixtures, and automated verification.
- **Accepted hypotheses/findings:** The architecture is accepted-for-pilot and the implementation report is complete in its declared engineering scope.
- **Rejected or unsupported hypotheses:** Successful experiment-package verification establishes scientific validity. Provider labels alone establish independent replication.
- **Assumptions:** Write-once run directories and provider metadata are sufficient for the current pilot boundary. Migration manifests faithfully represent historical outputs.
- **Limitations:** Cross-provider independence semantics, adversarial integrity, and high-consequence promotion remain unvalidated.
- **Known uncertainties:** Failure behavior under corrupted runs; Migration compatibility; Independence semantics; Operational maintenance cost.
- **Confidence:** bounded by the source package; no confidence is promoted by this frontier analysis.

## Adversarial challenge

The experiment system has stronger immutability controls than the ROS–FE profile execution validator that indexes some of its research outputs. Evidence that would materially change the assessment includes independent replication, preregistered negative controls, matched causal comparison, or a demonstrated failure of the current measurement instruments. The analysis deliberately treats planned validation as a dependency, not as completed evidence.

## Top five opportunities

| Rank | Record | Opportunity | Category | Frontier score |
|---:|---|---|---|---:|
| 1 | [RFR-2026-008](../records/RFR-2026-008.md) | ROS profile integrity and negative-test suite | Engineering | 295 |
| 2 | [RFR-2026-009](../records/RFR-2026-009.md) | Cross-provider reproducibility semantics | AI | 250 |
| 3 | [RFR-2026-001](../records/RFR-2026-001.md) | Negative non-isomorphic control benchmark | Measurement | 495 |
| 4 | [RFR-2026-015](../records/RFR-2026-015.md) | Automated confidence-decay and frontier refresh | Tooling | 102 |
| 5 | [RFR-2026-014](../records/RFR-2026-014.md) | Adversarial provenance and evidence-integrity study | Security | 136 |

Semantic duplicates were merged into the linked repository-wide records. The five selections maximize uncertainty reduction and repository reuse, rather than creating five unique labels for each source package.
