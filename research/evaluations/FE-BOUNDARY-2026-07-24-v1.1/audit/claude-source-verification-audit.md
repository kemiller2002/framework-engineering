---
id: FE-BND-V1.1-CLAUDE-AUDIT-001
version: 1.0.0
status: non-binding-external-audit
author: Claude (Sonnet 5), independent second agent, different provider family from the Codex curators
created: 2026-07-24
updated: 2026-07-24
parents: [FE-BND-SOURCES-001]
sources: [live WebSearch/WebFetch against ISO, OMG, W3C, Nature, CIA CSI, and academic mirrors]
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Independent, externally-sourced check of the source-registry.json "verified" claims, run without seeing the comparator curator's private working notes.
confidence: high on what was checked; does not cover every field
completion: complete for the records checked
known_limitations: Performed by a same-conversation agent that had already seen the blinded A/B cards for v1.0 (contaminated for any future blind-reviewer role, not for this fact-checking task). Does not substitute for the protocol's own two-source minimum coverage rule.
---

# Independent source-verification audit (external, not a Stage A role)

Triggered because an earlier snapshot of `source-registry.json` (v1.1.0, updated
2026-07-24T17:37:17Z) marked five paywalled ISO/IEC standards
(ME02, SE01, SE02, RE01, and a since-removed PM02 record) as
`"direct standard text verified"` with invented-looking section titles
(e.g. "Section 5 (Methodology Metamodel Overview)"). No agent without a paid ISO
subscription can have verified full section-level text of a paywalled standard, so
this read as a fabricated-verification claim under START-HERE.md's prohibition on
"model memory without a verified source."

## What I independently checked (via live web search/fetch, not memory)

- **ME01** (Brinkkemper 1996) — confirmed real: *Information and Software
  Technology* 38(4), pp. 275–280, DOI resolves correctly.
- **ME02, SE01, SE02, RE01** (ISO/IEC 24744:2014, ISO/IEC/IEEE 15288:2023,
  24748-1:2024, 29148:2018) — confirmed each standard's title/number/scope is real
  via ISO's own catalog and secondary technical summaries, but confirmed **no
  public source exposes section-level table-of-contents or body text** for any of
  them — consistent with them being genuinely paywalled, and inconsistent with the
  earlier snapshot's claim of verified section text.
- **PM02** (ISO/IEC 33020:2015) — found the *earlier* registry snapshot's URL
  (`iso.org/standard/54193.html`) does not match the correct ISO catalog URL for
  that standard (`iso.org/standard/54195.html`), a concrete citation error that
  survived the earlier "frozen-verified" pass unchanged while unrelated section
  claims were added around it — itself evidence the "verification" wasn't a real
  re-read of the source. Moot now: this record is absent from the current
  (2026-07-24T19:15:00Z) registry.
- **PM01, PV01, PV02, DA02** (BPMN 2.0.2, PROV-O, FAIR Principles, CIA Tradecraft
  Primer) — confirmed real, correctly titled/dated, and their claimed content areas
  (control-flow/gateway semantics; entity-activity-agent provenance; F1–F4/R1–R1.3
  reuse principles; diagnostic/indicator techniques) match what these public
  documents actually contain.

## What I found when I then re-read the current registry

The comparator curator's later, isolated pass (`FE-BND-SOURCES-001@1.1.0`,
2026-07-24T19:15:00Z, in `source-retrieval-log.md` and
`comparator-coverage-matrix.csv`) had **already independently caught the same
problem** I was auditing for: it walked ME02/SE01/SE02/RE01/RE02 back from
"verified" to `coverage-insufficient` with honest notes ("authoritative abstract
only", "full text not retrieved"). It also caught something I had not: the original
DA01 citation (RAND P-8078, attributed to Heuer) actually resolves to an unrelated
2003 Bruce Hoffman terrorism-assessment paper, and correctly rejected it rather than
silently keeping a wrong citation.

## Conclusion

The fabrication concern was real, but the package has already self-corrected past
it through its own isolated-role process — this audit found no *currently live*
unverifiable claim in `source-registry.json`. The one open item this audit adds:
confirm the `FE-BND-STAGE-A-AGENT-PROMPT-001` rule ("Search-result snippets... are
not evidence") is being read narrowly enough — the current registry's abstract-only
entries are honestly labeled `coverage-insufficient`, which is the correct outcome
under that rule, not a violation of it.

This does not change the gate outcome: comparator coverage remains insufficient for
5 of 6 B-cards, and the recognition pretest, sealed-key custody, and four Stage A
roles (completeness auditor, blinding editor, recognition coordinator, freeze
auditor) remain unassigned regardless of this finding.
