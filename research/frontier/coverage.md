---
id: FRONTIER-COVERAGE-2026-07-28
title: Research Frontier Coverage Ledger
status: active
version: 1.0.0
generated: 2026-07-28
---

# Research frontier coverage ledger

## Result

Every one of the **1246** publishable catalog records has
an explicit disposition in `coverage.json`. The analysis covers all
**17** accepted/current/complete records and
**23** additional authoritative
dependencies, for **40** unique analyzed artifacts
across **11** evidence-coherent units.

Eligible records without an analysis unit: **0**.

## Inclusion policy

- Include lifecycle states: `accepted`, `accepted-for-pilot`, `canonical`, `complete`, `current`, `current-evaluated`, `current-evaluation`, `current-pilot`, `current-provisional`.
- Include draft or non-Markdown authority exceptions only when a
  current/accepted conclusion depends on them.
- Exclude superseded, archived, withdrawn, and rejected records except through
  an explicit lineage or contradiction trace.
- Exclude generated frontier outputs from their own source population.
- Treat prompts, templates, provider runs, and generated derivatives as
  evidence inputs only when an authoritative unit explicitly relies on them.

## Coverage metrics

| Metric | Value |
|---|---:|
| Publisher catalog records | 1246 |
| Eligible lifecycle records | 17 |
| Authority exceptions | 23 |
| Unique analyzed artifacts | 40 |
| Analysis units | 11 |
| Open RFR candidates | 16 |
| Unit-level top-five assignments | 55 |
| Unique opportunities after semantic merge | 16 |
| Semantic consolidation rate | 70.9% |

## Important limitation

Coverage is exhaustive at the artifact-disposition level, not a claim that
1,200 files represent 1,200 independent findings. Evidence-coherent packages
are analyzed together to avoid treating templates, repeated run outputs, or
generated views as independent conclusions. Each included source still has a
document-level frontier that preserves its identity and top-five links.
