---
id: REPOSITORY-HEALTH-2026-07-28
title: Repository Research Health
status: active
generated: 2026-07-28
---

# Repository health assessment

## Summary

Repository maturity is **developing / validation-constrained**. Research operations are comparatively mature; empirical validation is not. The repository can tell an agent what to inspect next, but multiple status narratives and incomplete executable integrity controls prevent fully autonomous trust.

| Metric | Result | Interpretation |
|---|---:|---|
| Publishable research artifacts | 1246 | Publisher catalog; each has a disposition in the coverage ledger |
| Accepted/current/complete lifecycle artifacts | 17 | All are mapped to document frontiers |
| Authority exceptions analyzed | 23 | Current-state dependencies not reliably represented by lifecycle metadata |
| Unique analyzed artifacts | 40 | Grouped into evidence-coherent units; not treated as independent findings |
| Authoritative analysis units | 11 | Current/accepted claim-bearing packages and controlling state |
| Reference corpus artifacts | 100 | All current characterizations are draft and single-analyst |
| Open frontier candidates | 16 | Mutable until governance acceptance; semantically deduplicated |
| Validated major theory findings | 0 | No major theory claim meets the repository's independent publication gate |
| Candidate-supported ECR-000003 observations | 3 | Dashboard language is explicitly provisional |
| Active hypotheses in dashboard | 7 | Evidence mostly weak; one moderate, one insufficient |
| Registered experiment definitions | 11 | Engineering verification exists; human baseline and matched causal utility remain absent |
| Direct experiment coverage | partial | EX-FE-0002 is blocked and EX-FE-0003 has no execution data |
| Independent human validation coverage | 0% of major claims | Plans exist, completed baseline does not |
| Critical/high contradictions | 6 | Three critical and three high |
| Semantic duplicate consolidation | 70.9% | 55 unit-level top selections consolidated to 16 unique RFRs |
| Average RFR confidence index | 0.687 | Normalized only for open RFR confidence labels; not an average of research truth |
| Average research trace depth | 3.00 origin documents/RFR | Sections and assumptions are retained in each RFR |
| Opportunity graph connectivity | 16 edges / 16 nodes | Directed acyclic prerequisite graph; source-record links remain documentary |
| Knowledge graph connectivity | moderate, documentary | Many repository links exist; typed referential integrity is not fully enforced |

## Research by discipline

| Discipline | Current strength | Frontier need |
|---|---|---|
| Knowledge/research engineering | high process coverage | Validate process effects |
| Systems/architecture | high conceptual coverage | Enforce declared contracts |
| Measurement/statistics | moderate instruments, weak calibration | Negative controls, reliability, saturation |
| AI/model evaluation | moderate internal coverage | Independence semantics and provider effects |
| Human factors | low | Human baseline and cognitive load |
| Economics/operations | very low | Cost, ROI, field maintenance |
| Accessibility | absent in evidence | Representation equivalence |
| Security | low | Adversarial provenance and fail-closed behavior |

Open RFRs by category:

- Accessibility: 1
- AI: 1
- Economics: 1
- Engineering: 1
- Experimentation: 1
- Human Factors: 2
- Measurement: 2
- Security: 1
- Statistics: 1
- Theory: 2
- Tooling: 1
- Validation: 2

## Largest evidence gaps

1. No matched test of FE-specific incremental utility.
2. No independent human reliability baseline.
3. No calibrated false-positive estimate for structural equivalence.
4. No blind reliability estimate for the 100-artifact corpus.
5. No machine-enforced end-to-end lineage integrity for accepted/provider records.

## Confidence decay

Age alone is not currently the dominant decay factor because most active work is recent. Confidence should nevertheless be reduced where newer evidence changes classification:

- Discipline distinctiveness: **low → very low**, following the 2026-07-28 boundary comparison.
- Integrated-profile coherence: **unassessed → moderate**, but utility stays very low.
- Experimental boundary classification: remains **inconclusive** until
  EX-FE-0002 completes or is formally superseded.
- Corpus distribution claims: retain descriptive status, but inferential confidence is low until blind re-review.
- Accepted profile conformance: medium for pilot structure; low for complete execution/lineage integrity after the audit.
- Grammar and primitive claims: low-to-moderate exploratory confidence; decay if negative controls or independent coders fail.

## Maturity gates

The repository should not advance to autonomous canonical promotion or discipline claims until:

- RFR-2026-001 demonstrates comparator discrimination,
- RFR-2026-016 resolves the controlling mechanism-boundary experiment,
- RFR-2026-002 establishes human reliability,
- RFR-2026-003 demonstrates net incremental utility,
- RFR-2026-008 closes high-severity integrity gaps, and
- claim-level confidence history replaces ambiguous aggregate averages.
