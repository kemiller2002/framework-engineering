---
id: JR-FE-EXPERIMENT-SYSTEM-2026-07-23
status: complete
version: "1.0"
---

# Experiment-system implementation journal

Observed: the repository uses Node, JSON registries, provider-specific historical response directories, Git history, and an existing research-site CI workflow. Claude and Codex executables were discoverable; Gemini was not. No external provider was invoked.

Interpretation: a zero-dependency, provider-neutral runner is the minimum compatible intervention. Executable presence is insufficient evidence of a working adapter. Write-once raw records plus Git history are stronger than an “immutable” Markdown label but are not an append-only external store.

Action: created schemas, generated prompt contract, pilot, registry, provider discovery record, CLI, offline tests, CI checks, assessment, ADR, roadmap, and handoff. The pilot derives from FEH-001 and does not update its confidence.

Remaining debt: external adapter verification, parallel scheduling, full JSON Schema engine integration, semantic normalization, acceptance authority for IDs, human baseline, and primary-source boundary protocol.

Migration addendum: eight historical result-bearing datasets were imported into legacy experiment records. The adapter preserved 158 raw/result artifacts, source paths, and SHA-256 digests. ECR-000003's pre-fix P001D response remains retrievable and is marked excluded from primary analysis. No source conclusion was reinterpreted and no provider was invoked.
