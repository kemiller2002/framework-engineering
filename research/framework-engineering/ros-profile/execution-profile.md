# Execution profile

Executions live at `<provider>/<YYYY-MM-DD>/<execution-id>/` and contain `execution-manifest.yaml`, `research-journal.md`, `source-index.yaml`, `records/`, `execution-summary.md`, and `HANDOFF.md`. An agent may write only inside its assigned directory. `HANDOFF.md` follows the ROS handoff standard enumerated in `START-HERE.md`.

Provider identity records who executed the work; it does not prove independence. Same-provider role separation is not cross-provider replication. Each execution declares allowed artifact types, stop conditions, source strategy, and the immutable profile version used.

Lifecycle: register → scope → acquire sources → extract observations → construct FE records → validate → synthesize provisionally → hand off. Canonical proposals remain outside execution output until separately reviewed.
