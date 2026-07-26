---
id: FE-BND-SEALED-NOTICE-001
version: 1.0.0
status: withheld
author: blinding editor
created: 2026-07-24T17:14:36Z
updated: 2026-07-24T17:14:36Z
parents: [FE-BND-PROTOCOL-001]
sources: [FE-BND-SOURCES-001]
repositoryCommit: a7b6a7178cdb41579730c8971bec70f5660c2f86
changeSummary: Records inability to enforce repository access separation
confidence: 1.0
completion: incomplete
limitations: Repository permissions do not isolate paths from reviewers.
---

# Sealed material notice

No identity-bearing key is stored here. Because this repository cannot enforce reviewer-specific path access, creating the key in a reviewer-visible tree would violate the protocol. A future blinding editor must store it in a separately access-controlled system and add only its SHA-256 digest to a new protocol version before pretesting.
