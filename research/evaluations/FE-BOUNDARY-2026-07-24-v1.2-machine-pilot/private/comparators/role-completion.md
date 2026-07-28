role: M2 — Comparator evidence curator
status: complete
artifacts created or changed:
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/source-registry.json
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B01.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B02.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B03.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B04.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B05.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B06.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B07.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/cards/B08.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/comparator-coverage-matrix.csv
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/source-retrieval-log.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/excluded-comparator-fields.md
- research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/private/comparators/role-completion.md

direct observations:
- Downloaded and locally text-extracted (poppler pdftotext) every cited source; read the specific cited sections directly rather than relying on abstracts, snippets, or model memory.
- The v1.1 "RAND P-8078" lead is independently re-confirmed invalid: it resolves to Bruce Hoffman's 2003 RAND terrorism-assessment paper, unrelated to Richards J. Heuer Jr.
- Gotel & Finkelstein (1994) full text (all 9 sections) was retrieved and read from the co-author's own institutional page (csis.pace.edu), resolving v1.1's "section-level verification not done" gap for B03.
- Richards J. Heuer Jr., "Psychology of Intelligence Analysis" (CIA CSI, 1999), Chapter 8, was located via the Internet Archive, downloaded, and read in full; footnote 85 in the source itself attributes ACH's development to Heuer.
- The NASA Systems Engineering Handbook (SP-2016-6105 Rev2) and DoD Systems Engineering Guidebook (2022) are U.S. federal public-domain works that give operational lifecycle-tailoring detail (criteria, mechanisms, approval chain) and explicitly map to ISO/IEC/IEEE 15288, closing v1.1's B02 abstract-only gap without purchasing or bypassing the paywalled ISO standard text.
- Two new, freely accessible academic sources (Fahmideh/Shams/Jamshidi 2011 for B01; Dijkman/Dumas/Ouyang 2008 for B04; Rath et al. 2018 for B03) supplied the independent second sources that v1.1 explicitly lacked.
- Two new candidate mechanisms outside v1.1's six cards were located with real, section-verified primary sources: concept/role separation (Steimann 2000; Guarino & Welty OntoClean) and double-loop learning (Argyris 1977).

curator interpretations:
- Treated Harmsen's 1997 doctoral dissertation as an "original-method" primary source for B01 even though it was supervised by Brinkkemper (co-author of the abstract-only ME01 lead); judged this acceptable because the dissertation itself is the operational, citable, freely-accessible document, and paired it with a fully independent (different authors/institution) application paper for the second source.
- Judged the NASA and DoD guides as adequate operational stand-ins for the paywalled ISO/IEC/IEEE 15288/24748-1 standards because both guides explicitly state and demonstrate their alignment to that standard family, rather than treating them as freestanding, unrelated mechanisms.
- Judged B08 (double-loop learning) as worth building a card for despite lacking an independent second source, per the task's explicit invitation to fill this gap if a real primary source could be found; marked it partial/coverage-insufficient rather than inventing or padding a second source.
- Declined to force a cybernetics card or a PDCA-based quality-engineering card, judging that doing so without full-text verification of a primary source (Wiener, Ashby, Shewhart, or Deming) would violate the "no inference from an abstract alone" instruction.

unresolved items:
- B08 lacks an independent second source; a future pass should attempt to locate and full-text-verify Argyris & Schön's 1978 book, a later Argyris paper (e.g. "Teaching Smart People How to Learn," 1991), or a genuinely independent empirical application of double-loop learning.
- ISO/IEC 24744:2014, ISO/IEC/IEEE 15288:2023, ISO/IEC/IEEE 24748-1:2024, and ISO/IEC/IEEE 29148:2018 remain abstract-only across this entire pass; none were purchased or bypassed. All four material comparator fields that originally depended on them (B01-B03) now have non-ISO operational sources instead, but the ISO texts themselves were never read.
- The OntoClean source (KE02) is cited as it will appear in the 2004 Handbook on Ontologies (Springer, pp.201-220) based on an independent bibliographic cross-check, not on inspection of the printed book itself; the PDF read is a chapter draft hosted at the authors' own lab site.
- Quality engineering and cybernetics remain uncarded; see excluded-comparator-fields.md.

protocol deviations:
- Installed a system package (Homebrew `poppler`, providing `pdftotext`/`pdftoppm`) to enable reliable local PDF text extraction, because the built-in WebFetch tool could not parse several large/compressed PDFs and returned only binary/stream noise. This is a tooling change, not a change to any protocol-governed file or role boundary; no file outside the assigned output directory was modified.

contamination incidents:
- One boundary-adjacent event to disclose: while locating the assigned output directory, `ls` was run non-recursively on research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/private/ to confirm the directory tree existed before writing anywhere. That listing surfaced (as filenames only, not contents) subdirectory names including "private-fe" and "blinded" alongside "private-comparator" and "sealed-source-key". No file inside any of those subdirectories was opened, read, or searched, and no content from them was used. Flagging this as a precautionary disclosure rather than treating it as a real breach, since only directory names (not file contents) were observed and the task's isolation rule is phrased in terms of not reading/searching/opening files under those paths.

gate recommendation: Proceed to the next stage for the 7 fully covered cards (B01-B07); hold B08 (organizational learning) as coverage-insufficient/partial pending an independent second source, and do not treat quality engineering or cybernetics as evaluated (they were deliberately not attempted, not attempted-and-failed).

exact next handoff: The next role needs: (1) this directory's source-registry.json and the 8 cards in cards/ as the comparator-side evidence base; (2) awareness that B01-B07 are held to a "primary + independent, both section-verified" standard while B08 is single-source/partial by design, not by oversight; (3) if further comparator work is commissioned, priority should go to finding an independent second source for double-loop learning (B08) and, time permitting, a genuinely independent full-text primary source for either PDCA/PDSA (Shewhart 1939 / Deming 1982) or a cybernetics feedback mechanism, before any Stage B blinded comparison proceeds.
