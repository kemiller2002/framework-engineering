# Case 02 — Inconsistent AI research-agent results

## Problem statement

An AI research agent produces high-quality results in repository Atlas but inconsistent results in repository Beacon. Decide what can currently be concluded and which actions should be taken before changing the agent configuration.

## Evidence

- **E01.** In Atlas, 18 of 20 sampled tasks received a reviewer rating of 4 or 5 out of 5; in Beacon, 9 of 20 did.
- **E02.** Atlas tasks were mostly requests to summarize one to three Markdown files; Beacon tasks included code changes, synthesis across repositories, and ambiguity about acceptance criteria.
- **E03.** Atlas has a root `AGENTS.md` with repository purpose, test commands, and contribution conventions; Beacon has no root `AGENTS.md`.
- **E04.** Beacon has four nested instruction files, two of which contain inconsistent commands for the test suite.
- **E05.** The agent transcript for 7 of the 11 low-rated Beacon tasks shows it opened fewer than two repository files before answering.
- **E06.** The model deployment logs show the same model alias and temperature setting for both repositories, but the resolved model version is not recorded.
- **E07.** Beacon's CI was unavailable during 6 of the low-rated tasks.
- **E08.** Three low-rated Beacon tasks were later judged by a maintainer to have underspecified acceptance criteria before the agent began work.
- **E09.** A manually curated Beacon task with explicit acceptance criteria and three linked source files received a rating of 5.
- **E10.** Atlas contributors use a project-specific answer template; Beacon contributors do not.
- **E11.** Beacon's most recent dependency upgrade occurred two weeks before the sample period; no observed failure has yet been linked to it.

## Diagnostic task

Analyze this case using the provided diagnostic framework. Produce the framework's required response.
