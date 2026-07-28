# ROS–Framework Engineering Profile Setup
## Autonomous Agent Execution Prompt

You are an autonomous research-systems architect and repository engineer.

Your mission is to define and implement the **ROS–Framework Engineering Profile** so that Framework Engineering becomes a domain-specific research discipline running on top of the existing Research Operating System.

Do not create a second research operating system inside the Framework Engineering repository.

Do not duplicate ROS capabilities.

Do not update Framework Engineering canonical theory.

Do not treat existing machine-only research as human or cross-provider validation.

Your job is to establish a precise, executable boundary between:

- the **Research Operating System**, which owns generic research infrastructure and governance, and
- **Framework Engineering**, which owns domain-specific concepts for studying frameworks.

---

# Repositories

Inspect both repositories before making architectural decisions.

## Research Operating System

Expected repository:

```text
/Users/kevinmiller/dev/ROS
```

If the repository uses a different local directory name, locate it before proceeding.

## Framework Engineering

Repository:

```text
/Users/kevinmiller/dev/Framework-engineering
```

Expected branch:

```text
main
```

Do not assume either repository is clean.

Do not reset, discard, overwrite, or silently reorganize existing work.

---

# Mandatory Preflight Gate

Before beginning this mission, inspect both repositories.

Run in each repository:

```bash
git status --short
git branch --show-current
git log -1 --oneline
```

Review all tracked and untracked work.

## Framework Engineering pre-existing work

Before creating any ROS–FE Profile files:

1. Run:

```bash
npm run experiments:test
npm run experiments:verify
npm run research:validate
npm run research:build
```

2. If any command fails:

- investigate the failure
- fix only issues attributable to the current uncommitted work
- do not weaken validation
- do not bypass checks
- do not delete tests
- rerun the entire suite

3. Once all checks pass, commit all pre-existing Framework Engineering work as a separate commit.

Suggested commit message:

```text
Complete framework engineering experiment and evaluation infrastructure
```

4. Verify the Framework Engineering worktree is clean:

```bash
git status --short
```

Do not begin the ROS–FE Profile implementation until the existing Framework Engineering work is safely committed.

Do not push unless explicitly authorized.

## ROS repository

Inspect ROS carefully before modifying it.

Do not commit unrelated ROS work.

If the ROS worktree is dirty:

- identify ownership and intent
- preserve all user work
- avoid touching unrelated files
- do not reset
- do not discard
- do not combine unrelated ROS work with this mission

If the mission can be completed without modifying ROS, prefer that.

If ROS lacks a generic capability required by multiple disciplines, create a clearly scoped ROS proposal or implementation only after documenting why the capability belongs in ROS rather than Framework Engineering.

---

# Current ROS State

Treat the following accepted ROS record as authoritative context:

```text
RP-ROS-2026-A005
ROS executable contract and validation slice
```

Current established ROS capabilities include:

- plain-text canonical records
- generated registries
- deterministic validation
- identifier rules
- lifecycle values
- confidence and completion separation
- reference validation
- supersession handling
- filename validation
- registry freshness checks
- governance under `docs/00-governance/`
- dependency-free CLI
- accepted-content immutability as a current policy boundary
- handoff and research journal records

Current ROS limitations include:

- accepted-content mutation enforcement is not fully implemented
- cold-start agent interpretation is untested
- artifact creation commands are not yet implemented
- context manifests and intake are incomplete
- publishing and model routing are outside the accepted slice
- full JSON Schema evaluation is not yet integrated
- cross-agent reproducibility remains a hypothesis

Do not claim ROS is complete.

Build against the accepted executable contract, not against imagined future capabilities.

---

# Current Framework Engineering Scientific State

Preserve the current research classification:

```text
Stage A: incomplete
Stage B: blocked-before-stage-b
Classification: inconclusive
Stage B authorized: false
```

Do not:

- promote Framework Engineering’s distinctiveness
- update canonical theory
- claim machine-only work satisfies human requirements
- claim same-provider role isolation is cross-provider replication
- treat model agreement as empirical validation
- authorize Stage B
- modify frozen experiment artifacts
- weaken existing research gates

The Comparative Framework Discovery Program is a separate research stream intended to generate structured evidence and hypotheses.

---

# Core Architecture

The system must follow this model:

```text
ROS Kernel
    ↓
ROS–Framework Engineering Profile
    ↓
Framework Engineering Research Programs
    ↓
Individual Research Executions
    ↓
Evidence, Synthesis, Experiments, and Canonical Proposals
```

## ROS owns generic research concerns

ROS should own or eventually own:

- canonical artifact rules
- identifiers
- lifecycle
- confidence
- completion
- evidence references
- supersession
- immutability
- execution manifests
- provider isolation
- research journals
- handoffs
- generated registries
- deterministic validation
- canonicalization primitives
- publishing primitives
- intake
- generic experiment mechanics
- generic evidence quality structures
- generic provenance

## Framework Engineering owns domain-specific concerns

Framework Engineering should own:

- framework records
- Framework Genome records
- framework-property taxonomy
- framework-family taxonomy
- framework-mechanism taxonomy
- framework-context taxonomy
- framework-outcome taxonomy
- case-study extraction rules
- postmortem extraction rules
- retrospective analysis rules
- comparative-framework analysis
- framework-specific contradiction records
- Framework Engineering hypotheses
- Framework Engineering synthesis
- Framework Engineering experiments
- canonical Framework Engineering theory

## Governing rule

When a requirement applies to multiple research disciplines, it belongs in ROS.

When a requirement applies specifically to studying frameworks, it belongs in Framework Engineering.

Do not duplicate a generic ROS capability inside Framework Engineering merely because it is not yet fully automated.

Record missing generic ROS capabilities as ROS gaps.

---

# Primary Objective

Create the smallest coherent and executable **ROS–Framework Engineering Profile v1.0**.

The profile must answer:

> What does Framework Engineering add to ROS that ROS does not already provide?

The output should establish:

1. the dependency from Framework Engineering to ROS
2. the exact ROS capabilities inherited by Framework Engineering
3. the FE-specific record types and taxonomies
4. the FE-specific research lifecycle
5. the Comparative Framework Discovery Program as a registered FE research stream
6. the validation boundary between generic ROS checks and FE-specific checks
7. the migration path from existing FE structures to ROS-compatible structures
8. the minimum viable implementation needed to run the first valid discovery execution

Do not attempt to write a massive standards document before this contract is proven.

Build the narrowest complete vertical slice.

---

# Required Discovery and Analysis

Before implementation, inspect both repositories and determine:

- which ROS schemas already exist
- which ROS lifecycle values already exist
- which ROS identifier conventions already exist
- which ROS registry patterns already exist
- which ROS governance rules already exist
- which FE structures already duplicate ROS
- which FE structures are truly domain-specific
- which FE experiment tools are generic enough to propose upstream to ROS
- which FE validators can extend ROS rather than run separately
- which existing FE artifacts can remain where they are
- which artifacts require migration aliases rather than rewriting
- whether a profile mechanism already exists in ROS
- whether research streams already exist or need a generic ROS proposal

Document every important architectural choice.

Do not infer compatibility from filenames alone.

Read the governing files.

---

# Required Deliverables

## 1. ROS–FE Profile Specification

Create a profile specification inside the Framework Engineering repository.

Recommended location:

```text
research/framework-engineering/ros-profile/
```

Adapt to existing repository conventions if a better location already exists.

At minimum create:

```text
research/framework-engineering/ros-profile/
├── README.md
├── START-HERE.md
├── profile.yaml
├── compatibility.md
├── inherited-capabilities.md
├── fe-specific-extensions.md
├── validation-profile.md
├── execution-profile.md
├── canonicalization-profile.md
├── migration-notes.md
└── open-ros-gaps.md
```

The specification must clearly distinguish:

- inherited ROS behavior
- FE extensions
- prohibited duplication
- current limitations
- compatibility aliases
- future ROS dependencies

## 2. Profile Manifest

Create a machine-readable profile manifest using actual ROS schema conventions.

It should identify:

- profile ID
- profile name
- profile version
- status
- required ROS version
- inherited capabilities
- FE-specific record types
- FE-specific taxonomies
- registered research streams
- current limitations

## 3. FE-Specific Record Types

Define only record types that are specific to Framework Engineering.

At minimum evaluate and, where justified, define:

```text
Framework Record
Framework Genome Record
Framework Case Study
Framework Postmortem
Framework Retrospective
Framework Comparative Study
Framework Observation
Framework Contradiction
Framework Hypothesis
Framework Synthesis
Framework Experiment Proposal
```

Each type must inherit generic ROS metadata.

Do not redefine base identity, lifecycle, confidence, completion, supersession, evidence references, journal structure, provider provenance, or generic execution metadata.

## 4. Framework Genome Specification

Create the smallest executable Framework Genome schema.

It should describe observable framework properties without assuming those properties are beneficial.

Include identity, purpose, structure, reasoning, operation, human system, adaptation, risk, and evidence sections.

Use explicit values such as:

```text
unknown
not-reported
not-applicable
conflicting
```

Do not guess missing properties.

## 5. FE Taxonomies

Create initial controlled taxonomies for:

- framework properties
- framework mechanisms
- context dimensions
- outcomes
- framework families
- failure modes

These are observational categories.

Do not treat frequency as proof of value.

## 6. Comparative Framework Discovery Program Registration

Register the Comparative Framework Discovery Program as an FE research stream.

Suggested identity:

```text
FE-CFDP
```

The program mission is:

> Build a structured, cross-domain evidence corpus of frameworks, case studies, postmortems, retrospectives, comparative studies, failures, adaptations, and outcomes so that Framework Engineering hypotheses can emerge from evidence.

The record should include mission, scope, inherited profile, artifact types, allowed execution providers, evidence strategy, prohibited claims, current status, limitations, next execution, stop conditions, and handoff instructions.

## 7. Provider-Isolated Execution Profile

Use ROS provider-isolation rules if they exist.

If they do not yet exist as executable rules, document the required FE execution profile without building a duplicate generic system.

Each discovery execution should use:

```text
<provider>/<YYYY-MM-DD>/<execution-id>/
```

Each execution should contain:

```text
execution-manifest.yaml
research-journal.md
source-index.yaml
records/
execution-summary.md
```

Each execution agent may write only within its assigned execution directory.

## 8. Reusable Agent Prompts

Create minimal prompts that reference ROS and the FE profile instead of restating all generic rules.

At minimum create:

```text
framework-discovery-agent.md
case-study-extraction-agent.md
postmortem-extraction-agent.md
framework-genome-agent.md
cross-case-synthesis-agent.md
```

## 9. Validation Profile

Define which checks are inherited from ROS and which are FE-specific.

Prefer extending ROS validators through a profile mechanism.

If ROS lacks profile extension support, create a narrow FE validator that consumes ROS-valid records and a documented ROS enhancement proposal for profile-aware validation.

Do not fork ROS validation logic.

Add tests.

## 10. Registries

Use generated registries.

Do not introduce manual dual-writing.

Create or extend deterministic generated indexes for frameworks, Framework Genomes, case studies, postmortems, observations, contradictions, hypotheses, research streams, executions, properties, mechanisms, contexts, and outcomes.

## 11. Migration Strategy

Do not rewrite accepted historical artifacts merely to fit the new profile.

Use compatibility aliases, migration manifests, adapter logic, superseding records, and profile-version declarations.

Preserve original files.

## 12. ROS Gap Registry

Create a specific record of generic capabilities required by Framework Engineering that ROS does not yet provide.

For every gap, record:

- why it is generic
- why it should not be implemented only in FE
- minimum proposed ROS behavior
- dependency priority
- whether FE can proceed with a temporary policy-only workaround
- risks of delaying the ROS capability

Do not silently implement generic features in FE.

---

# Required Engineering Method

Work autonomously through repeated cycles:

1. Inspect ROS.
2. Inspect Framework Engineering.
3. Map overlapping concerns.
4. Separate generic and domain-specific responsibilities.
5. Form an architecture hypothesis.
6. Challenge the hypothesis.
7. Implement the smallest coherent vertical slice.
8. Validate.
9. Run a cold-start review using only repository documentation.
10. Revise until meaningful diminishing returns.

The minimum successful vertical slice is:

```text
ROS-valid FE profile
    ↓
registered FE-CFDP research stream
    ↓
one provider execution manifest
    ↓
one source record
    ↓
one framework record
    ↓
one Framework Genome record
    ↓
one case-study or postmortem record
    ↓
generated registry
    ↓
validation passes
    ↓
fresh-agent handoff instructions
```

Use synthetic examples only when clearly labeled.

Do not fabricate real case-study evidence.

---

# Cold-Start Test

Design and, if practical, run a cold-start test.

A fresh agent should be able to:

1. locate ROS requirements
2. locate the FE profile
3. identify its allowed execution directory
4. create a valid FE-specific artifact set
5. run validation
6. generate registries
7. leave a handoff record

Do not coach the agent beyond the repository instructions.

If the fresh agent fails, record the failure, identify whether the defect is in ROS, the FE profile, or the prompt, revise the smallest responsible layer, and rerun once.

Do not hide the failure.

---

# Required Verification

## Framework Engineering

Run:

```bash
npm run experiments:test
npm run experiments:verify
npm run research:validate
npm run research:build
```

Run any new FE profile tests and validators.

## ROS

Run:

```bash
python3 -m unittest discover -s tests -v
./ros registry build
./ros validate
```

Run any new ROS tests only if ROS was modified.

All required checks must pass.

Do not claim success if any required check is red.

---

# Commit Strategy

The implementation must produce separate logical commits.

## Commit 1

Existing Framework Engineering work, before the profile mission begins.

Suggested message:

```text
Complete framework engineering experiment and evaluation infrastructure
```

## Commit 2

ROS–FE Profile implementation.

Suggested message:

```text
Add ROS Framework Engineering profile
```

## Optional ROS commit

Only if ROS itself required a generic enhancement.

Suggested message:

```text
Add research profile extension support
```

Do not mix FE-specific and generic ROS changes in one commit.

Do not push unless explicitly authorized.

---

# Required Final Report

At completion, produce a detailed handoff covering:

## Repository State

For both repositories include path, branch, starting HEAD, ending HEAD, commits created, and final worktree status.

## Architecture

Explain what ROS owns, what Framework Engineering owns, what duplication was avoided, what profile mechanism was chosen, what alternatives were considered, why the selected design is preferable, and what remains provisional.

## Files Created or Modified

Group by profile specification, FE-specific schemas, taxonomies, research-stream registration, prompts, validators, tests, registries, migration notes, ROS gap records, and documentation.

## Validation Results

Include exact results for all required commands.

## Cold-Start Result

Report whether it was performed, exact prompt used, artifacts created, validation outcome, points of confusion, revisions made, and unresolved issues.

## Scientific Constraints Preserved

Explicitly confirm:

- canonical FE theory was not updated
- Stage B remains unauthorized
- machine work was not represented as human validation
- same-provider roles were not represented as cross-provider replication
- frozen experiment artifacts were not altered

## Remaining ROS Gaps

List generic capabilities still missing from ROS.

## Next Actions

Prioritize first real CFDP provider execution, independent second-provider execution, corpus seeding, source preservation, cross-case synthesis, Framework Genome refinement, hypothesis generation, focused experiments, and eventual canonical review.

---

# Acceptance Criteria

The mission is complete only when:

- pre-existing FE work was committed first
- both repositories were inspected
- ROS and FE responsibilities are explicitly separated
- no generic ROS capability was needlessly duplicated
- an ROS–FE Profile exists
- the FE-CFDP research stream is registered
- FE-specific record types are defined
- Framework Genome records are supported
- provider-isolated executions are documented
- validation distinguishes ROS checks from FE checks
- registries are generated rather than manually maintained
- migration preserves historical artifacts
- ROS gaps are explicitly recorded
- the minimum vertical slice validates
- all existing tests remain green
- setup work is committed separately
- the final worktrees are clean or any remaining changes are fully explained

---

# Final Principle

ROS defines how research is conducted, preserved, validated, and handed forward.

Framework Engineering defines how frameworks are discovered, decomposed, compared, challenged, and tested.

Do not blur those responsibilities.

Do not build a second ROS inside Framework Engineering.

Do not force FE-specific knowledge into the ROS kernel.

Preserve evidence.

Preserve provenance.

Preserve uncertainty.

Preserve contradictions.

Let Framework Engineering emerge from the research performed on top of ROS.
