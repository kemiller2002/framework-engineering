# Start here

1. Locate the ROS checkout. The current local path is `/Users/kevinmiller/dev/Repository Operating System` (the historical expected alias `/Users/kevinmiller/dev/ROS` may not exist). Read its `AGENTS.md` and `docs/00-governance/README.md`.
2. Read `profile.yaml`, `inherited-capabilities.md`, and `fe-specific-extensions.md`.
3. Create an execution only under `executions/<provider>/<YYYY-MM-DD>/<execution-id>/`.
4. Copy the synthetic execution shape: `execution-manifest.yaml`, `research-journal.md`, `source-index.yaml`, a `records/` directory, `execution-summary.md`, and `HANDOFF.md`. Never copy its claims as evidence.
5. Write only inside the assigned execution directory.
6. From the Framework Engineering repository root, run `npm run ros-fe:registry`, `npm run ros-fe:validate`, and `npm run ros-fe:test`.
7. Leave `execution-summary.md` and `HANDOFF.md`. The handoff records objective and acceptance criteria, completed work, files changed, decisions and assumptions, checks and results, evidence/records, unresolved questions, risks, blockers, and next action.

Unknown values are `unknown`, `not-reported`, `not-applicable`, or `conflicting`; never infer missing framework properties.
