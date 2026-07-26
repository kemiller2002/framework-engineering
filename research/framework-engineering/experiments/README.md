# Framework Engineering Experiment System

Status: implemented offline pilot, version 1.0  
Authority: infrastructure only; it does not accept hypotheses or mutate canonical theory.

## Lifecycle and record classes

`experiment.json` is the canonical definition. `prompt.md` is deterministically generated and checked against it. A run snapshots the prompt, records declared-input checksums, and writes into a unique provider/run directory. Raw output remains untouched; normalized results, comparisons, adjudications, and syntheses are separate derived records that name their sources.

```text
experiment.json -> prompt.md -> runs/<provider>/<run-id>/
                               -> normalized/
                               -> comparisons/ -> adjudications/ -> synthesis/
```

The registry is a rebuildable discovery index. Git history supplies retrievable prior states; the runner uses create-only writes for raw records. Retrying means creating a new run.

## Commands

```sh
npm run experiments -- list
npm run experiments -- validate --all
npm run experiments -- prepare EX-FE-0001 --provider manual
npm run experiments -- run EX-FE-0001 --provider claude
npm run experiments -- status EX-FE-0001
npm run experiments -- import EX-FE-0001 --provider manual --file path/to/response.md --model "human-reviewer"
npm run experiments -- normalize EX-FE-0001 --file path/to/normalized.json
npm run experiments -- compare EX-FE-0001 --sources RUN-A,RUN-B
npm run experiments -- adjudicate EX-FE-0001 --sources RUN-A,RUN-B
npm run experiments -- synthesize EX-FE-0001 --sources RUN-A,RUN-B
npm run experiments -- verify --all
npm run experiments -- registry rebuild
npm run experiments:migrate
```

`run` is a safe dry run by default. It creates snapshots and reports `provider_invoked=false`. Only an explicit `--execute` can invoke a configured provider. Do not use `--execute` until command syntax, credentials, scope, and cost are reviewed. Paid calls are never part of CI.

## Authoring

Copy `templates/experiment.template.json` into a new `EX-*` directory, declare an allowlist of repository-relative input files, and add it to `registry.json`. Run `prepare` to generate the evaluator prompt, then `validate`. Inputs may not point at provider runs or normalized results. Output paths are controlled by the runner and cannot escape the repository.

The canonical prompt template requires independent evaluators to avoid prior results, distinguish evidence from inference, cite stable IDs, attempt falsification, and return a normalized-schema-compatible record. Provider wrappers may change invocation syntax only.

## Provider adapters

`providers.json` records discovery rather than guessed capability. Claude and ChatGPT/Codex executables were found but not invoked, so their status is `available-unverified`. Gemini was not found. Manual import is tested and can preserve output from any provider. Adding an adapter means adding a reviewed command and arguments; never put credentials in the file.

## Failure and recovery

- A missing input, prompt drift, unsafe path, duplicate experiment ID, changed snapshot input, or completed run without raw output fails verification.
- Interrupted/failed calls retain stdout, stderr, status, and timing. A retry creates a different run ID.
- Manual imports record that no provider was invoked by the runner.
- Normalization must cite an existing raw response and matching digest.
- Comparison describes agreement and disagreement. Adjudication applies evidence rules. Synthesis states theory impact. None overwrites its sources.

## Reproduction and limitations

Reproduce a run from its `prompt.snapshot.md`, `request.json`, input digests, model label, and metadata. Exact reproduction is impossible when a provider model version is unknown; the system records `unknown` instead of guessing.

The current validator implements the safety-critical subset of the checked-in JSON Schemas without adding a package dependency. Provider execution flags are sequential, not parallel. There is no automatic LLM normalization, cost estimator, or canonical hypothesis update. Those omissions follow the current evaluation’s warning against hardening unvalidated governance.

## Historical migrations

`npm run experiments:migrate` idempotently imports the eight result-bearing historical datasets currently cataloged by the adapter. Original files remain authoritative. Each imported raw result records its source path and SHA-256 digest; verification fails if either the source or imported copy changes. Historical prompts and exact model versions are explicitly marked unavailable where they cannot be recovered.
