# Start ROS–Framework Engineering Work

You are beginning a Framework Engineering research execution on top of the Research Operating System (ROS).

## Objective

Complete the assigned Framework Engineering research task while preserving evidence, provenance, uncertainty, contradictions, repository history, and the boundary between ROS and Framework Engineering.

Do not build a second research operating system. Do not update canonical Framework Engineering theory unless the assignment explicitly authorizes a separate canonical-review process.

## Required startup

1. Inspect the Framework Engineering and ROS worktrees before changing files:

   ```sh
   git status --short
   git branch --show-current
   git log -1 --oneline
   ```

2. Read, in order:

   - the ROS checkout's `AGENTS.md`
   - the ROS governance index at `docs/00-governance/README.md`
   - `research/framework-engineering/ros-profile/START-HERE.md`
   - `research/framework-engineering/ros-profile/profile.yaml`
   - `research/framework-engineering/ros-profile/execution-profile.md`
   - the FE prompt specific to your assigned role

3. Confirm the assignment provides:

   - a declared provider
   - an execution date
   - a unique execution ID
   - an assigned directory using:

     ```text
     research/framework-engineering/ros-profile/executions/<provider>/<YYYY-MM-DD>/<execution-id>/
     ```

   - a research question or extraction target
   - allowed artifact types
   - stop conditions

If any of these are absent, establish the smallest safe value from repository context. Stop and request direction only when a missing choice would materially change the research scope or evidence claims.

## Write boundary

Write only within the assigned execution directory unless the assignment explicitly authorizes profile maintenance.

Create:

```text
execution-manifest.yaml
research-journal.md
source-index.yaml
records/
execution-summary.md
HANDOFF.md
```

Do not modify another provider's execution. Do not rewrite accepted historical or frozen artifacts.

## Research rules

- Prefer primary sources and preserve enough citation information for retrieval.
- Separate source statements, observations, interpretations, hypotheses, and conclusions.
- Use `unknown`, `not-reported`, `not-applicable`, or `conflicting` for missing or incompatible information.
- Record evidence against a working interpretation, not only supporting evidence.
- Do not infer that a common framework property is beneficial.
- Do not present machine agreement as empirical validation.
- Do not present role separation within one provider as cross-provider replication.
- Preserve the current scientific classification:

  ```text
  Stage A: incomplete
  Stage B: blocked-before-stage-b
  Classification: inconclusive
  Stage B authorized: false
  ```

## Execution cycle

1. Record the objective, scope, assumptions, risks, and stop conditions in the manifest and journal.
2. Acquire and index sources without fabricating inaccessible evidence.
3. Produce only the FE-specific records justified by the sources.
4. Populate Framework Genome fields observationally; do not guess missing properties.
5. Check references, provenance, limitations, and contradictions.
6. Summarize what was learned, what remains unknown, and what should happen next.
7. Complete a ROS-compatible handoff.

## Validation

From the Framework Engineering repository root, run:

```sh
npm run ros-fe:registry
npm run ros-fe:validate
npm run ros-fe:test
npm run research:validate
```

Run additional task-specific tests where applicable. Do not claim a check passed unless it ran and passed. If validation fails, fix only defects attributable to your execution and rerun the affected checks.

## Completion report

Report:

- objective and execution identity
- provider and assigned write directory
- sources inspected
- records created
- important findings and contradictory evidence
- limitations and unresolved questions
- validation commands and exact outcomes
- files changed
- recommended next action

Do not commit or push unless explicitly authorized.
