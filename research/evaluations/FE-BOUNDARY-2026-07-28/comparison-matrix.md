---
id: FE-BND-2026-07-28-MATRIX
title: Framework Engineering Boundary Comparison Matrix
artifactType: comparative-study
status: current-provisional
version: "1.0.0"
authorAgent: OpenAI Codex
created: 2026-07-28
updated: 2026-07-28
parentIds: [FE-BND-2026-07-28-INDEX]
evidenceIds: [EV-FEB-001, EV-FEB-002, EV-FEB-004, EV-FEB-006, EV-FEB-008, EV-FEB-009, EV-FEB-011, EV-FEB-012, EV-FEB-014, EV-FEB-015, EV-FEB-016, EV-FEB-019, EV-FEB-020, EV-FEB-021, EV-FEB-022, EV-FEB-023, EV-FEB-024, EV-FEB-025, EV-FEB-028, EV-FEB-R01, EV-FEB-R02, EV-FEB-R03, EV-FEB-R04, EV-FEB-R05]
hypothesisIds: [FEH-001]
theoryIds: [FE-THEORY-0.1]
supersedes: []
supersededBy: []
confidence: moderate
completion: complete
repositoryBaseline: c830902195f22d02c820f55a2321f3e9214242a3
---

# Boundary comparison matrix

## Reading the matrix

Coverage codes describe source-supported field scope:

- **S** — strong/direct coverage.
- **P** — partial, contextual, or supporting coverage.
- **W** — weak or normally outside the field's central scope.
- **?** — source set is insufficient for a reliable judgment.

These codes do not measure quality, frequency, or outcome superiority. A
field can cover a mechanism without implementing it in the same way as FE.

Abbreviations:

- SE: systems engineering.
- ME: method and situational method engineering.
- RE: requirements engineering.
- KE: knowledge and ontology engineering.
- DA: decision analysis.
- CY: cybernetics.
- QE: quality engineering and quality management.
- OL: organizational learning and knowledge management.
- AO: agent orchestration and multi-agent systems engineering.
- DSR: design science research.

## Frozen-dimension matrix

| # | Frozen dimension | SE | ME | RE | KE | DA | CY | QE | OL | AO | DSR |
|---:|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | Object and unit of analysis | S | S | S | S | S | S | S | S | S | S |
| 2 | Users, decisions, and contexts | S | S | S | S | S | P | S | S | S | S |
| 3 | Discovery-to-retirement lifecycle | S | P | S | P | P | P | S | S | S | S |
| 4 | Core operations and causal mechanisms | S | S | S | S | S | S | S | S | S | S |
| 5 | Representation, semantics, implementation independence | S | S | S | S | S | P | P | P | S | S |
| 6 | Evidence, measurement, V&V, falsification | S | P | S | P | P | P | S | P | P | S |
| 7 | Versioning, provenance, traceability, change control | S | P | S | S | P | W | S | S | S | P |
| 8 | Context adaptation, tailoring, boundary conditions | S | S | S | S | S | S | S | S | S | S |
| 9 | Humans, adoption, governance, ethics | S | P | S | P | S | P | S | S | P | P |
| 10 | Tooling, interoperability, machine/agent use | S | S | S | S | S | P | S | S | S | S |
| 11 | Outcomes, failure modes, burden, cost | S | P | S | P | S | P | S | S | S | S |
| 12 | Institutional maturity | S | P | S | S | S | S | S | S | P | S |

## Steelman comparator profiles

### Systems engineering

Systems engineering is the strongest lifecycle and integration comparator.
It explicitly handles complex human, hardware, software, and conceptual
systems; integrates stakeholder needs, requirements, architecture, design,
verification, validation, transitions, operation, and retirement; and
includes decision analysis, configuration, information management, risk,
measurement, and tailoring. Its process standards are method-neutral, so a
framework-focused profile can exist inside SE without creating a new
discipline. [EV-FEB-001–007, EV-FEB-018]

**Strongest subsumption claim:** an analytical framework can be treated as a
conceptual system or enabling system, and FE can be a tailored lifecycle
profile for that class of system.

**Meaningful residual:** general SE does not make analytical frameworks its
default unit of analysis or supply the repository's specific genome,
identity/capability, and human-agent handoff conventions.

### Method and situational method engineering

Method engineering directly targets construction of methods and supporting
tools. Situational method engineering supplies reusable fragments or chunks,
metamodels, assembly, tailoring to project context, and quality evaluation.
SPEM demonstrates that method content and process can be represented in a
standard metamodel. [EV-FEB-008–010]

**Strongest subsumption claim:** most of FE's construction, decomposition,
adaptation, and context-fit claims are method-engineering claims with
“framework” used as the artifact label.

**Meaningful residual:** FE includes descriptive, diagnostic, taxonomic, and
decision frameworks that are not always executable methods. It also binds
evidence, confidence, contradiction, provenance, and machine handoff more
tightly than the reviewed ME sources require.

### Requirements engineering

Requirements engineering covers elicitation, analysis, specification,
validation, lifecycle information, traceability, and change for stakeholder
needs and requirements. [EV-FEB-011]

**Strongest subsumption claim:** FE's purpose/scope, constraints,
acceptance criteria, traceability, and change controls can be represented as
requirements-engineering work products.

**Meaningful residual:** requirements are inputs and constraints, not the
entire framework artifact or its explanatory and procedural semantics.

### Knowledge and ontology engineering

Knowledge and ontology engineering cover explicit conceptualization,
semantics, constraints, interoperability, inference, and tradeoffs among
representational profiles. PROV-O directly covers interoperable provenance
and domain specialization. [EV-FEB-012–013]

**Strongest subsumption claim:** framework identity, concepts,
relationships, lineage, and machine-readable semantics can be modeled using
existing knowledge-representation and provenance methods.

**Meaningful residual:** a semantically valid knowledge model does not by
itself establish operational procedure, decision utility, empirical
validity, or organizational adoption.

### Decision analysis

Decision analysis supplies principled problem framing, alternatives,
uncertainty, preferences, value, tradeoffs, sensitivity, and decision
quality. It distinguishes normative guidance from descriptive behavior.
[EV-FEB-016–018]

**Strongest subsumption claim:** FE frameworks intended to improve decisions
must ultimately be evaluated as decision interventions, including whether
they improve decision quality net of elicitation and analysis burden.

**Meaningful residual:** many frameworks organize explanation, diagnosis,
learning, or coordination without directly choosing among alternatives.

### Cybernetics

Cybernetics supplies feedback, communication, control, regulation,
adaptation, and self-organization across technical, biological, and social
systems. [EV-FEB-023]

**Strongest subsumption claim:** FE's observe–evaluate–adapt loop and
framework-evolution language instantiate established feedback and control
ideas.

**Meaningful residual:** cybernetics does not prescribe the repository's
artifact schema, evidence ledger, lifecycle information, or research
governance.

### Quality engineering and quality management

Quality disciplines supply measurement, experimental design, process
characterization, comparison, monitoring, reliability, controlled
improvement, customer focus, corrective action, and continual improvement.
[EV-FEB-019–020]

**Strongest subsumption claim:** FE evaluation, defect classification,
validation gates, and improvement cycles are applications of established
quality and statistical engineering.

**Meaningful residual:** QE needs a product/process definition; it does not
make the semantic structure of analytical frameworks its primary object.

### Organizational learning and knowledge management

Knowledge management covers establishing, maintaining, reviewing, and
improving organizational knowledge systems. Double-loop learning adds the
revision of governing assumptions and policies, not only corrective action
within them. [EV-FEB-021–022]

**Strongest subsumption claim:** FE's durable repositories, contradiction
retention, retrospectives, governance updates, and evolution are mechanisms
of organizational knowledge and learning.

**Meaningful residual:** OL/KM do not necessarily provide an engineering
grammar for individual framework artifacts or matched artifact evaluation.

### Agent orchestration and multi-agent systems engineering

FIPA standardizes agent identities, services, communication, and lifecycle.
Gaia models multi-agent systems as computational organizations with roles,
interactions, and organizational rules. Current NIST work shows that agent
identity, security, and interoperability remain active standards concerns.
[EV-FEB-024–026]

**Strongest subsumption claim:** FE's provider manifests, role boundaries,
handoffs, registry discovery, and execution records apply established agent
lifecycle and organizational-design concerns.

**Meaningful residual:** these sources do not define the analytical
framework as the artifact under study or validate LLM-based research
execution.

### Design science research

Design science builds and evaluates artifacts to create useful knowledge.
FEDS explicitly requires evidence of artifact utility, quality, and efficacy,
allows artificial and naturalistic evaluation, and asks why an artifact
works, when, and with what side effects. [EV-FEB-014–015]

**Strongest subsumption claim:** FE frameworks are design artifacts, and FE's
research program should be judged as a domain-specific DSR program.

**Meaningful residual:** DSR is artifact-generic and does not supply FE's
particular framework grammar, provenance conventions, or operating profile.

## Mechanism-level subsumption test

| FE mechanism or claim | Strongest existing coverage | Finding |
|---|---|---|
| Treat a framework as an engineered artifact with a lifecycle | SE + DSR | Substantially covered; framework-specific specialization remains. |
| Separate identity/purpose from capabilities and implementation | SE architecture + architecture-description standards + KE | Covered in principle; FE vocabulary may improve local usability but is not shown unique. |
| Decompose into primitives, relations, roles, and control flow | ME/SPEM + KE + AO | Covered through method metamodels, ontologies, and organizational models. |
| Build a “Framework Genome” for comparison | ME metamodels + architecture viewpoints + taxonomy/ontology practice | FE packaging is specific; comparative decomposition mechanism is inherited. |
| Preserve sources, evidence, contradictions, confidence, and lineage | DSR + W3C PROV + RE + quality/scientific practice | Covered collectively; the integrated record bundle may be convenient but is not unique. |
| Tailor a framework to context and record boundary conditions | Situational ME + SE tailoring + DA sensitivity | Directly covered. |
| Validate utility, quality, efficacy, and side effects | DSR/FEDS + QE + DA | Directly covered and currently under-executed by FE. |
| Operate feedback, adaptation, and double-loop revision | Cybernetics + QE + OL | Directly covered. |
| Control versions, baselines, changes, and downstream impact | SE configuration/information management + RE + PROV | Directly covered. |
| Support human and machine/agent execution from the same records | KE/ontologies + process metamodels + AO | Collectively covered; empirical portability and incremental value remain open. |
| Govern a distributed research program with durable handoffs | SE information management + KM + AO + reproducibility practice | Collectively covered; FE implementation may be a useful integration. |
| Establish a distinct profession or discipline | No repository mechanism establishes this | Not supported; requires independent institutions and outcome evidence. |

## Full-subsumption search

### Individual-field full subsumption

Not established. Systems engineering comes closest, particularly because it
can include conceptual systems and full lifecycle processes, but it does not
make cross-domain analytical frameworks the default unit of analysis.
Method engineering comes closest at the construction and tailoring level,
but its canonical literature is method- and software-oriented. Design
science comes closest at artifact build/evaluate logic, but remains
artifact-generic.

### Collective functional subsumption

Substantially supported. Every FE mechanism identified in the current
repository has a plausible established home in one or more adjacent fields.
The literature review found no clearly non-subsumed causal mechanism. FE's
remaining candidate contribution is the deliberate integration of those
mechanisms around a neglected unit of analysis and a portable record model.

### Consequence

The result does not justify terminating the research program because an
integrated profile can still be useful. It does require stopping any
unqualified claim that FE is already a distinct discipline. The burden of
proof moves from “the pieces are assembled” to “the integration produces
measurably better net outcomes than matched alternatives.”

## Institutional maturity comparison

| Maturity element | Established-discipline exemplar | FE current state | Gate |
|---|---|---|---|
| Defined object and boundary | SE/RE/DA standards and bodies | Candidate object; boundary narrowed here | Independent boundary review |
| Maintained body of knowledge | SEBoK, SWEBOK | Large internal corpus; no independent consensus | Curated public BOK with external editors |
| Education and curriculum | ABET program criteria | No validated curriculum or learning outcomes | Pilot syllabus plus measured competency |
| Competency and professional assessment | UK-SPEC | Agent/user instructions only | Role and competency model with independent assessment |
| Standards and interoperability | ISO/IEC/IEEE, W3C, OMG, FIPA | Local JSON/YAML profile | Interoperable specification with conformance suite |
| Ethics and public responsibility | NSPE and professional codes | General repository governance; no FE-specific risk code | Risk/ethics standard before consequential deployment |
| Independent community and practice | Professional societies | Repository-centered authorship | Multiple independent organizations and practitioners |
| Reproducible empirical evidence | Scientific and engineering validation norms | Internal executions; no independent matched study | Preregistered replication and negative results |
| Demonstrated economic utility | Adoption/outcome evidence | Cost and benefit unmeasured | Net-benefit study including maintenance burden |
| Credentialing/accreditation | Professional registration and accreditation | None | Late-stage gate; not an immediate build target |

## Boundary judgment

| Candidate explanation | Evidence for | Evidence against | Posterior judgment |
|---|---|---|---|
| Distinct discipline | Coherent candidate object; integrated lifecycle; substantial repository | No unique mechanism, independent outcomes, external institutions, or mature practice | **Not supported now** |
| Integrated method/engineering profile | Coherent unit of analysis; established mechanisms can be composed; local profile executes | Incremental utility and cognitive/economic cost untested | **Best current model** |
| Repository-specific research program | All concrete evidence is internal; external uptake absent | Concepts plausibly transfer; external adjacent work supplies foundations | **True current maturity state** |
| Full subsumption | Every mechanism has adjacent coverage | No single field exactly foregrounds this object/integration | **Collectively substantial; individually incomplete** |

## Confidence update for FEH-001

- **Distinct-discipline interpretation:** Low → **Very Low**.
- **Coherent integrated-profile interpretation:** unassessed → **Moderate**.
- **Incremental utility over matched alternatives:** remains **Very Low**.
- **Generalizability beyond the repository:** remains **Low**.

The update is driven by strong overlap evidence and the absence of
non-subsumed mechanisms. Confidence does not move higher for the profile
because literature and executable infrastructure cannot substitute for
comparative outcome evidence.

