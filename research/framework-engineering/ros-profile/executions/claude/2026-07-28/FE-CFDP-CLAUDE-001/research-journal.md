# Research journal — FE-CFDP-CLAUDE-001

## Objective

First real (non-synthetic) execution of the ROS–FE profile, in the `framework-discovery-agent` role, targeting the OODA Loop (Observe–Orient–Decide–Act). This is the "one real, source-preserving provider execution" that `FE-CFDP`'s `next_execution` field called for.

## Scope and assumptions

- Provider: `claude` (this session), declared explicitly by the user rather than inferred.
- Research question and role were not supplied with the initial instruction to run `start-work-agent.md`; both were confirmed with the user via a clarifying question before work began, since guessing them would have materially changed the research scope.
- Target framework (OODA Loop) was one of two options offered from the active `FE-008 Reference Corpus Batch 001` list in the main repo's `CURRENT_STATE.md`; the user selected it.

## Write-boundary decision

`START-HERE.md` and `execution-profile.md` describe canonical records living under `ros-profile/records/`, but the synthetic execution's own `records/README.md` states: "A real execution keeps draft records here until reviewed and registered." Because the user's authorization covered running this execution, not profile maintenance, all records produced here are held as **drafts inside this execution directory** (`records/sources/`, `records/frameworks/`, `records/genomes/`, `records/observations/`, `records/contradictions/`) rather than written into the canonical `ros-profile/records/` tree. This keeps them outside `ros-fe:validate`/`ros-fe:registry` scope until a separate, explicitly authorized promotion step reviews and registers them.

## Source acquisition

Used `WebSearch`/`WebFetch` to identify and bibliographically check five sources:

- `FE-SRC-OODA-001` — Boyd, "Patterns of Conflict" (Dec 1986 briefing edition) — primary.
- `FE-SRC-OODA-002` — Boyd, "The Essence of Winning and Losing" (1995–96 briefing) — primary; reportedly the only diagram of the loop Boyd himself drew.
- `FE-SRC-OODA-003` — Osinga, *Science, Strategy and War: The Strategic Theory of John Boyd* (2007) — secondary scholarly.
- `FE-SRC-OODA-004` — Hankins, "The Korean War and the OODA Loop: What Happened to the Kill Ratio?" (2025) — secondary critical commentary.
- `FE-SRC-OODA-005` — Wikipedia "OODA loop" article — tertiary, used only for orientation.

Neither primary briefing (FE-SRC-OODA-001, FE-SRC-OODA-002) was fetched and read in full; claims attributed to them are limited to what secondary-source summaries or search-result excerpts corroborate. This is recorded as a limitation on every downstream record rather than treated as full-text verification.

## Findings worth flagging

- The four-box cyclical diagram in near-universal popular circulation is not Boyd's own diagram; his one self-drawn sketch is reported to be more elaborate, with a heavily developed Orient stage and feed-forward/feedback paths. Recorded as `FE-OBS-OODA-001`.
- A commonly cited ~10:1 Korean War kill-ratio figure used to support the framework's tempo thesis is disputed by a 2025 critical source, and this execution could not independently confirm whether Boyd himself originated that specific figure. Recorded as a genuine, unresolved contradiction — `FE-CONTRA-OODA-001` — rather than resolved in either direction.
- No formal decision rule for the "Decide" stage, and no adaptation/tailoring guidance, were found in the primary sources reviewed; both are marked `not-reported` rather than inferred.

## What was not done

- No claim about the OODA loop's effectiveness, superiority, or empirical validation was made or implied.
- No canonical FE theory was touched.
- No second-provider replication was attempted (single-provider execution; role separation would not constitute replication per FE-CFDP's `prohibited_claims`).
