---
id: FRONTIER-HANDOFF-2026-07-28
title: Research Frontier Analysis Handoff
status: active
version: 1.0.0
generated: 2026-07-28
---

# Research frontier handoff

## Objective

Maintain an auditable, traceable, dependency-aware inventory of where the
repository's accepted/current knowledge ends and which research should move
the boundary next.

## Current result

- 1246 publishable records have explicit dispositions.
- 40 accepted/current or authority-dependent artifacts
  are analyzed through 11 evidence-coherent units and individual
  document frontiers.
- 16 open RFR candidates remain after semantic merging.
- RFR-2026-001 is the first funded REP recommendation.
- RFR-2026-008 can begin in parallel.
- RFR-2026-016 resolves the controlling EX-FE-0002 experimental state before
  RFR-2026-003 tests causal utility.

## Authority

RFRs are open candidates and mutable. This analysis does not accept them,
promote theory, supersede EX-FE-0002, or authorize autonomous canonical
mutation. Acceptance requires a named governance decision; accepted changes
then use successor and supersession records.

## Reproduction

```bash
npm run research:build
node research/frontier/build-frontier.mjs
node research/frontier/build-frontier.mjs --check
npm run research:validate
```

The builder checks source existence, accepted/current coverage, duplicate IDs,
score reproduction, rank order, dependency integrity, cycle freedom, unit
top-five completeness, and generated-output staleness.

## Revalidation triggers

- ECR-000003 review closes.
- EX-FE-0002 completes or is superseded.
- The boundary decision is accepted, rejected, or superseded.
- ROS–FE v1.1 lands.
- An RFR changes status.
- A top-four RFR completes.
- The publisher catalog changes accepted/current membership.

## Next action

Create the REP for RFR-2026-001. In parallel, prepare the v1.1 proposal and
negative fixtures for RFR-2026-008. Do not start RFR-2026-003 until both its
human-baseline and controlling mechanism-boundary dependencies are satisfied
or explicitly superseded.
