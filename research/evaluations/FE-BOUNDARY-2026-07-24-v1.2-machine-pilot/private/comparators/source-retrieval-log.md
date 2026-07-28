---
id: FE-BND-RETRIEVAL-M2-001
version: 1.0.0
status: curator-submitted
author: M2
created: 2026-07-26T13:27:57Z
updated: 2026-07-26T13:27:57Z
parents: [FE-BND-SOURCES-M2-001@1.2.0]
sources: [verified URLs in source-registry.json]
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Section-level comparator retrieval record for the M2 re-verification pass
confidence: 0.9
completion: complete
limitations: Web tool text extraction from PDFs was unreliable for large/compressed files; all PDFs were downloaded and converted with a local text extractor (poppler pdftotext) rather than relied upon via the summarizing web-fetch tool alone.
---

# Source retrieval log (M2, 2026-07-26)

## Method
Read the v1.1 permitted files (source-registry.json, comparator-coverage-matrix.csv, source-retrieval-log.md, excluded-comparator-fields.md, mechanism-card-schema.json, and cards/private-b-series-source-cards.json) as leads only. Every claim below was independently re-fetched or re-downloaded and read in this pass; nothing from v1.1's paraphrases was carried into a card without independently reading the underlying text.

Tooling note: the built-in WebFetch tool could not reliably extract text from several large/compressed PDFs (returned "corrupted stream" errors for the NASA Handbook and Harmsen thesis on first attempt). Installed `poppler` (via Homebrew) and downloaded each PDF with `curl`, then ran `pdftotext -layout` locally to get a reliable, greppable text layer for direct reading. This was necessary for: nasa_se_handbook.pdf, harmsen1997.pdf, dijkman2008.pdf, gotel1994.pdf, tradecraft2009.pdf, heuer1999.pdf, dod_se_guidebook2022.pdf, bpmn202.pdf, steimann2000.pdf, ontoclean2002.pdf, argyris1977b.pdf, traceability_wild.pdf, opf2020.pdf.

## B01 (method engineering)
- Searched for an operational, freely accessible source beyond the Brinkkemper 1996 abstract and the ISO/IEC 24744 abstract.
- Found and downloaded Harmsen, A.F. (1997) "Situational Method Engineering," PhD dissertation, University of Twente, from the university's own repository (ris.utwente.nl). Confirmed ISBN 90-75498-10-1 in the document's own front matter. Read Chapter 6 "Method Assembly" (section 6.2.2, p.216 per the dissertation's own table of contents) directly from the extracted text: found a concrete 5-step procedure with worked examples (project goal determination, preliminary scenario, scenario adaptation via heuristics, fragment selection via property queries, and fragment assembly via Join...Into / Let...Precede operations governed by stated axioms).
- Found and downloaded Fahmideh, Shams, Jamshidi (2011) "Toward a Methodological Knowledge for Service-Oriented Development Based on OPEN Meta-Model" (ICSECS 2011) via its arXiv preprint (2004.10135); confirmed venue/year/pages independently by web search (Springer chapter 978-3-642-22203-0_54, pp.631-643) since the arXiv upload itself carries no venue metadata in its text. Read Sections 2.1-2.2, confirming operational use of a method-fragment repository (OPF) conformant to ISO/IEC 24744, with a named 5-core-class fragment taxonomy (Work Unit, Work Product, Producer, Language, Stage).
- Decision: treat ME03 (Harmsen) as primary and ME04 (Fahmideh et al.) as the independent source; keep ME01/ME02 as abstract-only background, not counted toward the coverage gate.

## B02 (systems engineering)
- Downloaded the official NASA Systems Engineering Handbook (NASA/SP-2016-6105 Rev2) directly from nasa.gov. Read Section 2.1 (The Common Technical Processes and the SE Engine, pp.5-7) and Section 3.11 (Tailoring and Customization, pp.34-40) directly from the extracted text: found 8 named tailoring criteria, 3 tailoring mechanisms, and the Compliance Matrix approval mechanism.
- Downloaded the DoD Systems Engineering Guidebook (Feb 2022, OUSD(R&E), cto.mil). Read Section 4 (pp.89-92): found an explicit statement of DoD's adoption of ISO/IEC/IEEE 15288 and IEEE 15288.1, and a figure (4-1) mapping the Guidebook's own processes to the ISO/IEC/IEEE 15288 process set.
- Both documents are U.S. federal government works and are public domain; no paywall was bypassed.
- Decision: treat SE03 (NASA) as primary and SE04 (DoD) as the independent source; ISO/IEC/IEEE 15288:2023 and 24748-1:2024 remain abstract-only background (paywalled; not purchased or bypassed).

## B03 (requirements traceability)
- Downloaded Gotel & Finkelstein (1994) directly from the co-author's own institutional page (csis.pace.edu/~ogotel/...), distinct from the UCL Discovery repository page cited in v1.1. Read the full 8-page paper (all 9 numbered sections plus references) from the extracted text: confirmed the pre-RS/post-RS distinction (Section 5), the "establish and end-use conflict" analysis (Section 6), proposed solutions (Section 7), and the empirical finding that source location/accessibility was the most commonly cited problem (Section 8.2).
- Searched for an independent second source since ISO/IEC/IEEE 29148:2018 remains abstract-only. Found and downloaded Rath, Rendall, Guo, Cleland-Huang, Mäder (2018) "Traceability in the Wild" from arXiv (1804.02433); confirmed ACM DOI (10.1145/3180155.3180207) in the paper's own reference-format block. Read the abstract, introduction, and approach sections: an independently authored, empirically measured (60% average commit-issue link completeness; precision/recall for automated recovery) operational application of post-RS-style traceability.
- Decision: treat RE02 as primary and RE03 as the independent source; ISO/IEC/IEEE 29148:2018 remains abstract-only background.

## B04 (process/workflow modeling)
- Re-downloaded the official OMG BPMN 2.0.2 PDF (532 pages) directly and re-confirmed sections 2, 7, 9, 10, 13 by grepping the extracted text for the exact headings and page numbers claimed in v1.1; matched.
- Searched for an independent primary-application source. Found and downloaded Dijkman, Dumas, Ouyang (2008) "Semantics and analysis of business process models in BPMN" as the accepted author manuscript from QUT ePrints (institutional repository, not a paywall bypass). Read Sections 2-5: confirmed the BPMN-to-Petri-net control-flow mapping and the paper's own report of specification deficiencies it found in BPMN.
- Decision: B04 is now covered (PM01 primary/controlling specification, PM02 independent application).

## B05 (provenance / reproducible research)
- Re-fetched PROV-O (w3.org/TR/prov-o/) live; sections 2, 3.1-3.3 confirmed present with the same class/property content as v1.1's claim.
- Re-fetched the FAIR principles paper. The original nature.com URL returned an authentication-redirect interstitial (not a paywall — Scientific Data is open access, but the fetch tool followed a login-cookie redirect); used the PMC open-access mirror (PMC4792175) instead and confirmed Box 2 and the F1-F4/R1-R1.3 wording.
- Decision: B05 remains covered, unchanged in substance from v1.1.

## B06 (structured analytic techniques)
- Independently re-confirmed the v1.1 finding that "RAND P-8078" is Bruce Hoffman's unrelated 2003 terrorism-assessment paper, not a Heuer publication.
- Located the corrected original-method source: Richards J. Heuer Jr., "Psychology of Intelligence Analysis" (CIA Center for the Study of Intelligence, 1999). Attempted a direct cia.gov static-PDF URL analogous to the Tradecraft Primer's URL pattern; got HTTP 404. Attempted the CIA's own books-monographs landing page; got HTTP 403 to automated fetch. Used the Internet Archive item "PsychologyOfIntelligenceAnalysis" instead (file Psychology_of_Intelligence.pdf; item metadata states "Center for the Study of Intelligence, Central Intelligence Agency, 1999"). Downloaded and read Chapter 8 (pp.95-98) directly: confirmed the 8-step ACH procedure and footnote 85, which attributes the procedure's development to the author himself.
- Re-downloaded the CIA Tradecraft Primer (2009) PDF directly and re-confirmed the Indicators/Signposts (pp.12-13) and ACH (pp.14-16) sections by grepping the extracted text.
- Decision: B06 is now covered (DA03 primary/original-method, DA02 independent authoritative manual).

## B07 (new: concept/role separation, knowledge engineering)
- Searched for a real, citable primary source for gap (a) in the prompt (separating "what an artifact fundamentally is" from "what operations/capabilities it supports"). Found and downloaded Steimann (2000) "On the representation of roles in object-oriented and conceptual modelling" (Data & Knowledge Engineering 35(1)) from the author's own institutional page (fernuni-hagen.de). Read Section 2 and Section 4.1 directly: confirmed Guarino's rigidity/foundation-based distinction between natural types and roles, and a 15-item enumerated feature list for the role concept.
- Found and downloaded Guarino & Welty, "An Overview of OntoClean" (a chapter draft hosted at the authors' own institutional page, loa.istc.cnr.it) as an independent methodology paper giving the formal rigidity/anti-rigidity/identity/unity metaproperties. Cross-checked the chapter's final published venue (Handbook on Ontologies, Springer, 2004, pp.201-220, DOI 10.1007/978-3-540-24750-0_8) via an independent bibliographic search rather than assuming it from the PDF alone.
- Decision: built a new card B07; both sources section-verified.

## B08 (new: double-loop learning, organizational learning)
- Searched for gap (b) in the prompt (verification criteria plus prospective triggers that reopen a decision when named assumptions/evidence change). Attempted the official hbr.org page for Argyris (1977) "Double Loop Learning in Organizations" — paywalled. Tried a first free mirror (theisrm.org); its PDF had no extractable text layer (scanned image, no OCR). Tried a second mirror (avannistelrooij.nl); this one had a genuine text layer, and the extracted text carries the original 1977 Harvard Business Review copyright notice and running page headers/footers (pp.115-124), confirming it reproduces the actual published article rather than a paraphrase.
- Read pp.115-118 directly: confirmed the single-loop/double-loop distinction (thermostat analogy) and the four Model I "governing variables."
- Searched for an independent second source (PDCA/Deming as an alternative candidate, or a second double-loop application). Found only secondary summaries or non-full-text-verifiable candidates within the time available (Shewhart's 1939 original is not freely available in full text; a full-text-verifiable independent application of double-loop learning specifically was not found).
- Decision: built card B08 with a single section-verified primary source; marked operational_coverage=partial and status=coverage-insufficient in the matrix rather than padding a second source.

## Not pursued further
- Cybernetics: no specific, independently sourced feedback/control mechanism distinct from what's already covered in B02 (tailoring) or B08 (double-loop) was pursued as its own card; see excluded-comparator-fields.md.
- Quality engineering / PDCA: considered as an alternative to B08 for gap (b); not pursued because Deming's own primary text ("Out of the Crisis," 1982) and Shewhart's 1939 original were not confirmed freely accessible in full text within the time available, whereas Argyris (1977) was confirmed accessible and section-verified.
