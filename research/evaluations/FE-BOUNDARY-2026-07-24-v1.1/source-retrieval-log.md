---
id: FE-BND-RETRIEVAL-001
version: 1.1.0
status: curator-submitted
author: comparator-curator-agent-role-3
created: 2026-07-24T19:15:00Z
updated: 2026-07-24T19:15:00Z
parents: [FE-BND-SOURCES-001@1.0.0]
sources: [verified URLs in source-registry.json]
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Section-level comparator retrieval record
confidence: 0.95
completion: complete
limitations: Licensed standards were not available in full text.
---

# Source retrieval log

- 2026-07-24: Used v1.0 entries only as leads. No search snippet or model memory was admitted as evidence.
- BPMN 2.0.2: official 532-page OMG specification retrieved. Verified conformance, overview, collaboration, process, and execution-semantics sections.
- PROV-O: official W3C Recommendation retrieved. Verified sections 2, 3.1, 3.2, and 3.3.
- FAIR: publisher full article retrieved. Verified Box 2, including F1-F4 and R1-R1.3.
- CIA Tradecraft Primer: official 45-page PDF retrieved. Verified Indicators/Signposts and ACH sections and explicit cost language.
- Gotel/Finkelstein: UCL record retrieved, but this run did not verify operational sections in the paper body.
- ISO/IEC 24744, ISO/IEC/IEEE 15288, 24748-1, and 29148: only authoritative public abstracts were available. Their operational fields were not padded.
- DA01 rejected: the URL and document number resolve to Bruce Hoffman, *Al Qaeda, Trends in Terrorism and Future Potentialities: An Assessment* (2003), not the attributed Heuer method publication.

Decision: preserve all insufficient coverage and recommend the Stage A gate fail.
