---
id: FE-ADR-EXPERIMENT-SYSTEM-001
status: accepted-for-pilot
version: "1.0"
---

# ADR: Minimal provider-neutral experiment system

## Decision

Use the repository’s existing Node runtime, JSON records, JSON Schema documents, deterministic prompt generation, repository-relative input allowlists, collision-resistant run directories, and separate immutable/derived layers.

The runner is zero-dependency and external calls are explicit opt-in. JSON was selected over YAML to avoid a second parser/runtime and to align with existing registries. One canonical experiment specification generates the human prompt, preventing substantive prompt/spec drift. Historical ECR conventions remain valid; this system is a forward experiment contract, not a competing research taxonomy.

## Safety and lineage

The runner rejects repository escapes and prior-result inputs, snapshots prompt and input hashes, uses atomic writes, refuses raw-record overwrites, and records provider invocation truthfully. Normalization requires a matching raw digest. Comparison, adjudication, and synthesis are versioned source-linked artifacts.

## Alternatives rejected for this pilot

- A hosted orchestration service: adds authority, secrets, and lifecycle complexity before utility is demonstrated.
- Provider SDK dependencies: unnecessary for manual/dry-run validation and costly to maintain.
- Automatic canonical theory updates: prohibited by current governance evidence.
- Provider-specific substantive prompts: invalidates independent comparison.
- Migrating historical ECR artifacts: high churn with no measured research benefit.

## Consequences

Offline structural testing and manual import work now. Provider commands need separate verification. Parallel execution, deterministic semantic normalization, and registry-wide lineage resolution remain future work gated by evidence.
