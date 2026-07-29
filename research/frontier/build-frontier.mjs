import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "../..");
const out = path.join(root, "research/frontier");
const generated = "2026-07-28";

const opportunities = [
  {
    id: "RFR-2026-001", title: "Negative non-isomorphic control benchmark",
    category: "Measurement", score: 495, rank: 1, effort: "medium", confidence: "high",
    opportunity: "Determine whether the ECR-000003 comparator reports structural stability when packets share surface features but not procedural structure.",
    background: "ECR-000003 produced weak-to-moderate signals, but the dashboard names false structural equivalence as the highest current validity risk.",
    origins: [
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "material_threats; next_research_action"],
      ["research/operating-system/research-queue/research-queue.md", "Active Queue"],
      ["research/theory/falsification-criteria.md", "Stronger Falsification Tests Needed Next"]
    ],
    unknowns: ["Comparator false-positive rate", "Which representation features cause spurious equivalence", "A defensible rejection threshold"],
    assumption: "Observed structural similarity reflects shared procedure rather than permissive matching or superficial cues.",
    evidence: "The current dashboard explicitly identifies false structural equivalence and selects negative controls; evidence strength for representation and isomorphism claims remains weak.",
    dependencies: [], methodology: "Preregister matched positive, negative-isomorphic, and negative-non-isomorphic packet families; blind labels; run frozen comparator 3.1.0; estimate sensitivity, specificity, calibration, and error by provider.",
    outputs: ["Public benchmark packets", "Frozen labels and scoring key", "Comparator diagnostic report"], success: "A preregistered threshold separates positive from non-isomorphic controls with uncertainty bounds and an independently reproducible analysis.",
    agent: "measurement-and-adversarial-validation agent", gain: "Calibrates the central instrument and may invalidate multiple downstream claims."
  },
  {
    id: "RFR-2026-002", title: "Independent human procedural-extraction baseline",
    category: "Human Factors", score: 470, rank: 2, effort: "high", confidence: "high",
    opportunity: "Measure whether trained humans recover structures similar to one another and to model outputs from the same blinded packets.",
    background: "The repository repeatedly limits internal same-model evidence and has no independent human baseline.",
    origins: [
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "active_hypotheses; material_threats"],
      ["research/theory/theory-of-framework-engineering-v0.1.md", "Open Questions; Next Required Work"],
      ["research/validation/validation-program.md", "Validation Standard"]
    ],
    unknowns: ["Human inter-rater reliability", "Human-model agreement", "Training and expertise effects"],
    assumption: "Model convergence is meaningful without knowing the human reliability ceiling or floor.",
    evidence: "H003 and H015 name human extraction as the next test; the validation program requires independent replication.",
    dependencies: ["RFR-2026-001"], methodology: "Recruit independent analysts; stratify expertise; blind artifact identity; train only on the frozen codebook; double-code packets; adjudicate after computing agreement.",
    outputs: ["De-identified coding dataset", "Reliability and disagreement audit", "Human-model comparison"], success: "Sample-size justification is met and agreement estimates with confidence intervals are reported before adjudication.",
    agent: "human-factors replication agent", gain: "Establishes whether current measurement is reproducible beyond model self-consistency."
  },
  {
    id: "RFR-2026-003", title: "Matched incremental-utility experiment",
    category: "Experimentation", score: 452, rank: 3, effort: "high", confidence: "high",
    opportunity: "Test whether the FE profile improves outcomes beyond strong adjacent methods and equal-dose generic structure.",
    background: "The newest boundary REP finds substantial collective subsumption and identifies incremental utility as the decisive unknown.",
    origins: [
      ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "F3-F7; Decision record"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/next-experiment.md", "entire proposed design"],
      ["research/theory/falsification-criteria.md", "Additional Weakening Signals"]
    ],
    unknowns: ["FE-specific causal effect", "Which profile components carry value", "Net benefit after learning and operating cost"],
    assumption: "Observed redesign gains are FE-specific rather than scaffolding, documentation dose, or review effort.",
    evidence: "The boundary REP reports no matched causal comparison and very-low confidence in incremental utility.",
    dependencies: ["RFR-2026-001", "RFR-2026-016", "RFR-2026-002"], methodology: "After the controlling mechanism-boundary experiment is completed or formally superseded, preregister a multi-arm study comparing FE, strongest domain-specific comparator, equal-dose generic scaffold, and minimal control; hold task, provider, time, and information constant; use blinded outcome raters.",
    outputs: ["Preregistration", "Matched task set", "Effect and cost analysis"], success: "Primary outcomes, harms, time cost, and uncertainty are reported with no post-hoc change to the primary contrast.",
    agent: "causal-experiment agent", gain: "Determines whether the repository should expand, narrow, or terminate the integrated-profile claim."
  },
  {
    id: "RFR-2026-004", title: "Recognition-control replication",
    category: "Validation", score: 410, rank: 4, effort: "medium", confidence: "high",
    opportunity: "Separate lexical recognition, structural recognition, and unsupported prior-knowledge import.",
    background: "Recognition effects are mixed; H013 has moderate evidence while H016 remains insufficient.",
    origins: [
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "active_hypotheses H013 and H016"],
      ["research/operating-system/research-queue/research-queue.md", "candidate E"],
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "material_threats"]
    ],
    unknowns: ["Lexical versus structural recognition effect", "Unsupported import rate", "Interaction with provider and expertise"],
    assumption: "Removing watched terms adequately controls recognition.",
    evidence: "Recognition leakage is material and current findings do not isolate its mechanism.",
    dependencies: ["RFR-2026-001"], methodology: "Factorially vary names, canonical vocabulary, structural cues, and misleading labels; audit unsupported imports against packet evidence.",
    outputs: ["Factorial packet set", "Recognition/import annotations", "Replication report"], success: "The design estimates lexical and structural effects separately and includes negative/misleading controls.",
    agent: "cognitive-bias validation agent", gain: "Clarifies whether apparent recovery is extraction or recognition."
  },
  {
    id: "RFR-2026-005", title: "Reasoning-versus-coordination grammar test",
    category: "Theory", score: 388, rank: 5, effort: "high", confidence: "medium",
    opportunity: "Test whether reasoning and execution grammars are separable, overlapping, or a single context-sensitive grammar.",
    background: "FE-012B failures cluster in coordination-heavy domains and the theory predicts vocabulary pressure there.",
    origins: [
      ["research/experiments/FE-012B-primitive-synthesis/methodological-review.md", "Problems that resisted synthesis; Overall Assessment"],
      ["research/theory/theory-of-framework-engineering-v0.1.md", "Predictions; Open Questions"],
      ["research/theory/falsification-criteria.md", "Theory Weakens If"]
    ],
    unknowns: ["Whether coordination primitives generalize", "Grammar boundary", "Domain versus artifact-family confounding"],
    assumption: "Missing coordination terms are reusable primitives rather than domain-specific vocabulary.",
    evidence: "Underwater robotics, lunar maintenance, and cathedral restoration resisted synthesis; candidate terms include synchronize, schedule, sequence, allocate, and coordinate.",
    dependencies: ["RFR-2026-002", "RFR-2026-007"], methodology: "Use a crossed sample of reasoning/coordination intensity and domains; independently extract operations; compare one-grammar, two-grammar, and context-sensitive models.",
    outputs: ["Balanced corpus extension", "Competing grammar models", "Model-selection report"], success: "Predictions and model-selection criteria are frozen before coding, and a simpler competing model can win.",
    agent: "theory-testing agent", gain: "Refines or falsifies a central theoretical boundary."
  },
  {
    id: "RFR-2026-006", title: "Blind corpus reliability and sampling audit",
    category: "Statistics", score: 372, rank: 6, effort: "high", confidence: "high",
    opportunity: "Estimate classification reliability and sampling bias across the 100-artifact corpus.",
    background: "The corpus is established in size but all characterizations are draft and single-analyst.",
    origins: [
      ["research/corpus/statistics.md", "Corpus Size; Known Limitations"],
      ["docs/knowledge-artifacts/blind-review-protocol.md", "entire protocol"],
      ["research/theory/theory-of-framework-engineering-v0.1.md", "Next Required Work"]
    ],
    unknowns: ["Inter-rater reliability", "Coverage bias", "Stability of identity/capability labels"],
    assumption: "Frequency tables from provisional single-analyst labels represent the target population.",
    evidence: "Corpus statistics explicitly state single-analyst draft status, provisional capability assignments, and sparse composition.",
    dependencies: [], methodology: "Define target population and sampling frame; draw a stratified blind re-review sample; estimate agreement and prevalence-adjusted uncertainty; audit missingness.",
    outputs: ["Sampling frame", "Double-coded sample", "Reliability and bias report"], success: "Reliability and uncertainty are published by artifact family, with disagreements retained rather than overwritten.",
    agent: "corpus-statistics agent", gain: "Turns descriptive counts into interpretable evidence."
  },
  {
    id: "RFR-2026-007", title: "Primitive-vocabulary saturation study",
    category: "Measurement", score: 352, rank: 7, effort: "medium", confidence: "medium",
    opportunity: "Measure whether primitive vocabulary growth approaches saturation under new artifacts and independent coders.",
    background: "Finite-vocabulary claims remain provisional and vocabulary growth is an explicit falsification condition.",
    origins: [
      ["research/theory/falsification-criteria.md", "Theory Weakens If"],
      ["research/theory/theory-of-framework-engineering-v0.1.md", "Predictions; Open Questions"],
      ["research/corpus/statistics.md", "Known Limitations"]
    ],
    unknowns: ["Saturation curve", "Coder-induced vocabulary growth", "Family-specific residual primitives"],
    assumption: "The observed vocabulary is finite and stable rather than an artifact of a narrow corpus and shared analyst.",
    evidence: "The theory predicts slowing growth, while the corpus reports sparse composition and single-analyst coding.",
    dependencies: ["RFR-2026-006"], methodology: "Preregister sequential batches by artifact family; use independent coders; track unseen-term discovery with capture-recapture and held-out prediction.",
    outputs: ["Frozen vocabulary versions", "Discovery curves", "Stop/expand decision"], success: "A stopping rule and uncertainty interval are defined before observing the final batches.",
    agent: "measurement-science agent", gain: "Directly tests the finite primitive vocabulary claim."
  },
  {
    id: "RFR-2026-008", title: "ROS profile integrity and negative-test suite",
    category: "Engineering", score: 340, rank: 8, effort: "medium", confidence: "high",
    opportunity: "Close the profile's high-severity identity, execution-packet, parsing, and referential-integrity gaps.",
    background: "The accepted pilot profile passes current tests, but the audit finds five high-severity controls absent.",
    origins: [
      ["research/evaluations/FE-BOUNDARY-2026-07-28/ros-fe-profile-v1-audit.md", "PA-001 through PA-005; PA-012"],
      ["research/framework-engineering/ros-profile/open-ros-gaps.md", "profile extension; execution manifests; mutation enforcement"],
      ["research/framework-engineering/ros-profile/README.md", "accepted pilot baseline"]
    ],
    unknowns: ["Failure-mode coverage", "Migration compatibility", "Integrity guarantees under malformed submissions"],
    assumption: "A green current validator implies trustworthy execution and lineage records.",
    evidence: "Provider records are not parsed, duplicate IDs pass, declared links can point nowhere, and negative tests are absent.",
    dependencies: [], methodology: "Write fixture-based negative tests first; add duplicate and typed-reference checks; parse and schema-validate manifests; verify required files and declared outputs; retain human promotion authority.",
    outputs: ["v1.1 proposal", "Negative fixture suite", "Migration and compatibility report"], success: "Each PA-001–005 failure is caught, v1.0 fixtures remain interpretable, and no unattended canonical promotion is introduced.",
    agent: "research-tooling integrity agent", gain: "Prevents corrupt evidence lineage from masquerading as valid research."
  },
  {
    id: "RFR-2026-009", title: "Cross-provider reproducibility semantics",
    category: "AI", score: 320, rank: 9, effort: "medium", confidence: "medium",
    opportunity: "Define and test provider/model/role/run lineage so replication claims distinguish independence from repetition.",
    background: "Provider-specific effects are material and ROS currently lacks machine-resolved reproducibility semantics.",
    origins: [
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "current_claims; material_threats"],
      ["research/framework-engineering/ros-profile/open-ros-gaps.md", "Cross-provider reproducibility semantics"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/ros-fe-profile-v1-audit.md", "PA-015"]
    ],
    unknowns: ["Operational degrees of independence", "Minimum lineage needed for replication", "Provider-by-instrument interaction"],
    assumption: "Different provider labels alone imply independent replication.",
    evidence: "The dashboard says provider differences remain material; the audit says dependencies and execution lineage are documentary.",
    dependencies: ["RFR-2026-008"], methodology: "Specify an independence taxonomy and lock record; validate it on repeated same-model, cross-model, cross-provider, and human runs.",
    outputs: ["Replication semantics standard", "Machine-readable lineage schema", "Validation cases"], success: "Consumers can mechanically distinguish rerun, robustness check, and independent replication.",
    agent: "AI reproducibility agent", gain: "Makes evidence-strength labels auditable."
  },
  {
    id: "RFR-2026-010", title: "Systematic boundary and practitioner study",
    category: "Theory", score: 286, rank: 10, effort: "high", confidence: "medium",
    opportunity: "Test the integrated-profile boundary with a systematic evidence map and independent practitioner judgments.",
    background: "The boundary REP is strong for targeted comparison but did not conduct a systematic review, bibliometrics, or practitioner survey.",
    origins: [
      ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "Limits of method; F4-F6"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/comparison-matrix.md", "comparison dimensions"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/source-registry.md", "source coverage"]
    ],
    unknowns: ["Whether relevant adjacent fields were missed", "Practitioner-recognized boundary", "External examples of equivalent integration"],
    assumption: "The ten selected comparators cover the strongest adjacent explanations.",
    evidence: "The REP explicitly limits its method and finds every current mechanism collectively covered.",
    dependencies: [], methodology: "Publish search protocol and inclusion criteria; snowball across adjacent fields; conduct blinded concept sorting and interviews with practitioners outside the repository.",
    outputs: ["Systematic evidence map", "Bibliometric overlap map", "Practitioner judgment dataset"], success: "Search and coding are independently reproducible and include disconfirming cases.",
    agent: "systematic-review agent", gain: "Tests whether the recommended profile boundary is externally legible and complete."
  },
  {
    id: "RFR-2026-016", title: "Complete blinded mechanism-boundary adjudication",
    category: "Validation", score: 0, rank: 0, effort: "high", confidence: "high",
    opportunity: "Complete or formally supersede the controlling EX-FE-0002 Stage A and Stage B mechanism-boundary experiment.",
    background: "The 2026-07-28 source synthesis narrows the working model, but EX-FE-0002 remains Stage A incomplete, Stage B blocked, and experimentally inconclusive.",
    origins: [
      ["research/framework-engineering/experiments/EX-FE-0002/START-HERE.md", "Two-stage execution; Stage A acceptance gate; Decision rules"],
      ["research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/stage-a-decision.md", "Stage A decision — v1.1"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "F8; Compatibility with existing experiment authority"]
    ],
    unknowns: ["Whether any FE mechanism survives blinded lossless-subsumption review", "Whether source cards pass independent completeness audit", "Whether blinding and recognition thresholds can be met"],
    assumption: "A same-provider source synthesis can support a working classification without completing the controlling independent experiment.",
    evidence: "EX-FE-0002 defines the governing blinded test; its v1.1 decision explicitly blocks Stage B, and the successor REP says it does not override that state.",
    dependencies: ["RFR-2026-001"], methodology: "Use the new source registry as candidate repair input; appoint disjoint curators, completeness auditor, blinding editor, recognition coordinator, key custodian, reviewers, adjudicator, and analyst; freeze and hash artifacts; execute Stage B only after every gate passes.",
    outputs: ["Accepted or rejected Stage A source cards", "Blinded reviewer packet and sealed-key receipt", "Adjudicated mechanism-boundary decision"], success: "Every protocol gate is evidenced, the result remains null/negative/inconclusive when warranted, and the accepted decision either identifies a non-subsumed operational mechanism or narrows/supersedes the claim.",
    agent: "independent mechanism-boundary research director", gain: "Resolves the controlling experimental state and defines which components, if any, merit causal utility testing."
  },
  {
    id: "RFR-2026-011", title: "Lifecycle cost and return-on-investment model",
    category: "Economics", score: 264, rank: 11, effort: "medium", confidence: "medium",
    opportunity: "Measure whether FE's quality gains, if any, exceed learning, documentation, coordination, and maintenance costs.",
    background: "The program discusses usefulness but lacks an economic or operational cost model.",
    origins: [
      ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "F7; Decision record"],
      ["research/theory/theory-of-framework-engineering-v0.1.md", "Open Questions"],
      ["research/operating-system/edr/research-efficiency-metrics.md", "research efficiency metrics"]
    ],
    unknowns: ["Adoption cost", "Maintenance burden", "Break-even conditions and opportunity cost"],
    assumption: "Improved traceability is worth the profile's added process burden.",
    evidence: "No matched utility experiment or net-benefit evidence exists; current confidence in incremental utility is very low.",
    dependencies: ["RFR-2026-003"], methodology: "Instrument the matched experiment and later field pilots for labor, elapsed time, rework, defects, decision reversals, and maintenance; estimate sensitivity across usage scales.",
    outputs: ["Cost taxonomy", "ROI model", "Break-even analysis"], success: "The model reports uncertainty and includes scenarios where FE has negative value.",
    agent: "research-economics agent", gain: "Converts efficacy into adoption-relevant evidence."
  },
  {
    id: "RFR-2026-012", title: "Cognitive-load and usability study",
    category: "Human Factors", score: 248, rank: 12, effort: "medium", confidence: "medium",
    opportunity: "Test whether explicit evidence, uncertainty, and provenance controls improve decisions without unacceptable cognitive load.",
    background: "The architecture assumes human/machine use, but usability and cognitive burden are not validated.",
    origins: [
      ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "Recommended normative definition"],
      ["research/product-architecture/uncertainty-to-action-flow.md", "uncertainty-to-action flow"],
      ["research/validation/validation-program.md", "Claims Under Test"]
    ],
    unknowns: ["Comprehension burden", "Expertise interaction", "Error-detection versus completion-time tradeoff"],
    assumption: "More explicit structure improves net usefulness for humans.",
    evidence: "Traceability improvement is a claim under test; the boundary REP states net benefit is untested.",
    dependencies: ["RFR-2026-003"], methodology: "Run task-based usability studies with novice/expert strata; measure comprehension, time, errors, confidence calibration, and abandonment; compare progressively disclosed variants.",
    outputs: ["Usability protocol", "Interaction logs", "Cognitive-load report"], success: "Benefits and harms are reported by expertise level with predefined minimally important differences.",
    agent: "human-computer-interaction agent", gain: "Tests a neglected human-use mechanism and informs profile simplification."
  },
  {
    id: "RFR-2026-013", title: "Accessible representation equivalence study",
    category: "Accessibility", score: 224, rank: 13, effort: "medium", confidence: "medium",
    opportunity: "Determine whether FE artifacts preserve meaning and operability across accessible text, table, graph, and assistive-technology representations.",
    background: "Representation sensitivity is central, but accessibility is absent from the current evidence base.",
    origins: [
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "representation-format effects"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "human and machine execution boundaries"],
      ["docs/knowledge-artifacts/multidimensional-classification.md", "representation dimensions"]
    ],
    unknowns: ["Semantic loss across accessible forms", "Screen-reader operability", "Whether visual structure is an unacknowledged mechanism"],
    assumption: "Procedural meaning survives representation changes relevant to disabled users.",
    evidence: "Representation-format effects are material, yet no accessibility validation is reported.",
    dependencies: ["RFR-2026-001"], methodology: "Co-design equivalent artifacts with accessibility experts; test semantic task performance across screen-reader, linear-text, table, and visual graph forms.",
    outputs: ["Accessible benchmark variants", "Equivalence criteria", "Accessibility findings"], success: "Disabled participants are included and no representation is labeled equivalent without task-based evidence.",
    agent: "accessibility research agent", gain: "Tests generality while preventing an inaccessible canonical model."
  },
  {
    id: "RFR-2026-014", title: "Adversarial provenance and evidence-integrity study",
    category: "Security", score: 210, rank: 14, effort: "medium", confidence: "medium",
    opportunity: "Test the research pipeline against duplicate IDs, broken lineage, evidence substitution, prompt injection in sources, and partial registry writes.",
    background: "Integrity controls are incomplete and the system is intended for agent-mediated research.",
    origins: [
      ["research/evaluations/FE-BOUNDARY-2026-07-28/ros-fe-profile-v1-audit.md", "PA-004, PA-005, PA-013"],
      ["research/framework-engineering/ros-profile/open-ros-gaps.md", "Accepted-content mutation enforcement"],
      ["research/operating-system/research-constitution.md", "evidence and authority constraints"]
    ],
    unknowns: ["Attack surface", "Detectability of provenance corruption", "Safe failure and recovery behavior"],
    assumption: "Accidental-validity checks are sufficient for adversarial or compromised inputs.",
    evidence: "Duplicate identity, referential integrity, atomic writes, and accepted-content enforcement are absent or incomplete.",
    dependencies: ["RFR-2026-008"], methodology: "Create a threat model and adversarial fixture corpus; exercise ingestion, validation, registry generation, and promotion planning; require recoverable, fail-closed behavior.",
    outputs: ["Threat model", "Adversarial fixtures", "Integrity test report"], success: "Critical corruptions are detected before promotion and interrupted generation is recoverable without ambiguous canonical state.",
    agent: "research-security agent", gain: "Protects the trustworthiness of autonomous research operations."
  },
  {
    id: "RFR-2026-015", title: "Automated confidence-decay and frontier refresh",
    category: "Tooling", score: 192, rank: 15, effort: "medium", confidence: "medium",
    opportunity: "Make conclusions time-aware and regenerate frontier candidates when evidence, dependencies, or status change.",
    background: "The repository has dashboards and registries but no consistent machine-readable confidence history or decay trigger.",
    origins: [
      ["research/operating-system/confidence-update-guide.md", "confidence update process"],
      ["research/operating-system/evidence-dashboard/evidence-dashboard.json", "current state"],
      ["research/evaluations/FE-BOUNDARY-2026-07-28/ros-fe-profile-v1-audit.md", "PA-008, PA-016"]
    ],
    unknowns: ["Appropriate decay functions by claim type", "Trigger sensitivity", "How to avoid automating epistemic authority"],
    assumption: "Static confidence labels remain current as evidence and technology change.",
    evidence: "Generated indexes can be stale and omit confidence/lineage query fields; current narratives already conflict.",
    dependencies: ["RFR-2026-008", "RFR-2026-009"], methodology: "Define claim-type-specific review intervals and event triggers; retain human approval; build check-only stale-state detection and an append-only confidence history.",
    outputs: ["Confidence-history schema", "Decay policy experiment", "Frontier refresh checker"], success: "Stale or contradicted conclusions are flagged reproducibly without automatically changing accepted claims.",
    agent: "research-operations tooling agent", gain: "Lets the repository detect when its own frontier analysis is obsolete."
  }
];

const scoringById = {
  "RFR-2026-001": { knowledge_gain: 5, potential_impact: 5, cross_project_reuse: 5, scientific_importance: 4, dependency_cost: 2, implementation_difficulty: 3 },
  "RFR-2026-016": { knowledge_gain: 5, potential_impact: 5, cross_project_reuse: 5, scientific_importance: 4, dependency_cost: 4, implementation_difficulty: 4 },
  "RFR-2026-002": { knowledge_gain: 5, potential_impact: 5, cross_project_reuse: 5, scientific_importance: 4, dependency_cost: 4, implementation_difficulty: 5 },
  "RFR-2026-003": { knowledge_gain: 5, potential_impact: 5, cross_project_reuse: 4, scientific_importance: 5, dependency_cost: 5, implementation_difficulty: 5 },
  "RFR-2026-004": { knowledge_gain: 4, potential_impact: 4, cross_project_reuse: 5, scientific_importance: 5, dependency_cost: 3, implementation_difficulty: 3 },
  "RFR-2026-005": { knowledge_gain: 5, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 5, dependency_cost: 4, implementation_difficulty: 4 },
  "RFR-2026-006": { knowledge_gain: 4, potential_impact: 4, cross_project_reuse: 5, scientific_importance: 5, dependency_cost: 4, implementation_difficulty: 5 },
  "RFR-2026-007": { knowledge_gain: 4, potential_impact: 5, cross_project_reuse: 4, scientific_importance: 4, dependency_cost: 3, implementation_difficulty: 3 },
  "RFR-2026-008": { knowledge_gain: 4, potential_impact: 5, cross_project_reuse: 5, scientific_importance: 3, dependency_cost: 2, implementation_difficulty: 3 },
  "RFR-2026-009": { knowledge_gain: 4, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 4, dependency_cost: 3, implementation_difficulty: 3 },
  "RFR-2026-010": { knowledge_gain: 4, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 4, dependency_cost: 5, implementation_difficulty: 5 },
  "RFR-2026-011": { knowledge_gain: 4, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 3, dependency_cost: 4, implementation_difficulty: 3 },
  "RFR-2026-012": { knowledge_gain: 4, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 3, dependency_cost: 4, implementation_difficulty: 4 },
  "RFR-2026-013": { knowledge_gain: 3, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 3, dependency_cost: 3, implementation_difficulty: 3 },
  "RFR-2026-014": { knowledge_gain: 3, potential_impact: 4, cross_project_reuse: 4, scientific_importance: 3, dependency_cost: 4, implementation_difficulty: 4 },
  "RFR-2026-015": { knowledge_gain: 3, potential_impact: 3, cross_project_reuse: 4, scientific_importance: 3, dependency_cost: 3, implementation_difficulty: 3 }
};

const rankedIds = [
  "RFR-2026-001", "RFR-2026-016", "RFR-2026-002", "RFR-2026-003",
  "RFR-2026-004", "RFR-2026-005", "RFR-2026-006", "RFR-2026-007",
  "RFR-2026-008", "RFR-2026-009", "RFR-2026-010", "RFR-2026-011",
  "RFR-2026-012", "RFR-2026-013", "RFR-2026-014", "RFR-2026-015"
];

function computeFrontierScore(values) {
  return values.knowledge_gain
    * values.potential_impact
    * values.cross_project_reuse
    * values.scientific_importance
    - values.dependency_cost
    - values.implementation_difficulty;
}

for (const opportunity of opportunities) {
  opportunity.scoring = scoringById[opportunity.id];
  opportunity.score = computeFrontierScore(opportunity.scoring);
  opportunity.rank = rankedIds.indexOf(opportunity.id) + 1;
}

opportunities.sort((a, b) => a.rank - b.rank);

const units = [
  {
    id: "PROGRAM-STATE", title: "Current program state and evidence dashboard",
    docs: ["CURRENT_STATE.md", "research/operating-system/evidence-dashboard/evidence-dashboard.json", "research/operating-system/research-queue/research-queue.md"],
    objective: "State active work, accepted evidence, threats, and the next research action.",
    claims: ["ECR-000003 is complete under review.", "Structural stability signals are weak and provider-dependent.", "Negative non-isomorphic controls are the selected next action."],
    method: "Machine-readable dashboard synthesized from evidence-run and review-board artifacts.",
    accepted: ["The current comparator baseline is 3.1.0.", "False structural equivalence is a material threat."],
    rejected: ["Framework Engineering is proven.", "Universal grammar is proven.", "Product systems are validated by ECR-000003."],
    assumptions: ["Dashboard generation correctly reflects authoritative sources.", "Queue priority approximates information gain."],
    limits: ["Current-state prose also retains older broad activity descriptions.", "Review is not fully closed."],
    unknowns: ["False-positive rate", "Human baseline", "Recognition mechanism", "Provider interaction"],
    contradiction: "CURRENT_STATE presents a broad active theory program, while the 2026-07-28 boundary REP requires a narrower research-program/profile posture.",
    top: ["RFR-2026-001","RFR-2026-002","RFR-2026-004","RFR-2026-009","RFR-2026-015"]
  },
  {
    id: "THEORY-V01", title: "Theory of Framework Engineering v0.1",
    docs: ["research/theory/theory-of-framework-engineering-v0.1.md", "research/theory/confidence-assessment.md", "research/theory/falsification-criteria.md"],
    objective: "Explain frameworks through identity/capability, primitive reasoning, composition, redesign, and possible grammar separation.",
    claims: ["Identity and capability separation may improve characterization.", "A finite primitive vocabulary may represent procedural reasoning.", "Reasoning and execution grammars may differ."],
    method: "Theory synthesis from FE-008, FE-011A, FE-012A, and FE-012B exploratory evidence.",
    accepted: ["Framework Engineering currently functions most defensibly as a characterization/redesign methodology."],
    rejected: ["The theory is validated by internal same-model evidence."],
    assumptions: ["Exploratory experiments generalize.", "Primitive labels correspond to stable constructs."],
    limits: ["Independent human tests and strong controls are absent.", "Vocabulary and grammar remain provisional."],
    unknowns: ["Vocabulary saturation", "Grammar separability", "Independent convergence", "Incremental utility"],
    contradiction: "The theory retains discipline-scale hypotheses; the boundary REP finds no unique mechanism and very-low support for discipline status.",
    top: ["RFR-2026-003","RFR-2026-002","RFR-2026-005","RFR-2026-007","RFR-2026-004"]
  },
  {
    id: "CORPUS-100", title: "Reference corpus and classification evidence",
    docs: ["research/corpus/statistics.md", "research/corpus/index.csv", "research/corpus/validation-results-v0.1.csv"],
    objective: "Characterize 100 knowledge artifacts across identity, capability, lifecycle, and composition.",
    claims: ["The corpus covers diverse artifact identities and capabilities.", "Most current entries are established artifacts."],
    method: "Batch-based single-analyst characterization under FEMS-1.",
    accepted: ["The corpus contains 100 indexed artifacts."],
    rejected: ["Current frequency distributions are validated population estimates."],
    assumptions: ["The sample is sufficiently representative.", "Labels are reliable despite single-analyst coding."],
    limits: ["All characterizations are draft; capability assignments are provisional; composition is sparse."],
    unknowns: ["Inter-rater reliability", "Sampling bias", "Label stability", "Primitive saturation"],
    contradiction: "The corpus is operationally treated as an evidence base while its statistics explicitly describe all characterizations as draft.",
    top: ["RFR-2026-006","RFR-2026-007","RFR-2026-002","RFR-2026-005","RFR-2026-013"]
  },
  {
    id: "FE-012B", title: "FE-012B primitive synthesis experiment",
    docs: ["research/experiments/FE-012B-primitive-synthesis/hypothesis.md", "research/experiments/FE-012B-primitive-synthesis/protocol.md", "research/experiments/FE-012B-primitive-synthesis/methodological-review.md"],
    objective: "Test whether a frozen primitive vocabulary can synthesize coherent structures for novel problems.",
    claims: ["A small backbone appears useful.", "Coordination-heavy problems expose missing grammar.", "Generic coherence is not domain adequacy."],
    method: "Novel problem synthesis followed by methodological review.",
    accepted: ["Bound, Observe, Evaluate, Decide, and Act appear indispensable within this run."],
    rejected: ["The current vocabulary is sufficient across execution-heavy domains."],
    assumptions: ["Novel problems do not trigger memorized framework reconstruction.", "Review criteria distinguish generic from domain-specific coherence."],
    limits: ["Independent reviewers and larger novelty samples are absent."],
    unknowns: ["Coordination primitives", "Memorization effects", "Independent composition agreement"],
    contradiction: "The finite-vocabulary hypothesis coexists with repeated missing-primitive pressure in coordination tasks.",
    top: ["RFR-2026-005","RFR-2026-007","RFR-2026-002","RFR-2026-004","RFR-2026-003"]
  },
  {
    id: "BOUNDARY-2026-07-28", title: "Framework Engineering boundary validation package",
    docs: ["research/evaluations/FE-BOUNDARY-2026-07-28/RP-FE-BOUNDARY-2026-07-28.md", "research/evaluations/FE-BOUNDARY-2026-07-28/comparison-matrix.md", "research/evaluations/FE-BOUNDARY-2026-07-28/source-registry.md"],
    objective: "Determine whether FE is distinct, integrated, repository-specific, or subsumed by adjacent fields.",
    claims: ["FE is not supported as a distinct discipline.", "Collective functional subsumption is substantial.", "An integrated profile boundary remains coherent but its utility is untested."],
    method: "Preregistered comparison across 12 dimensions and ten adjacent fields using primary and official sources.",
    accepted: ["The package proposes a research-program and candidate integrated-profile posture; governance and the controlling experiment have not accepted that classification."],
    rejected: ["Declare FE an established discipline.", "Expand before causal utility evidence."],
    assumptions: ["Selected comparators are the strongest alternatives.", "The comparison dimensions capture meaningful distinctiveness."],
    limits: ["No systematic review, bibliometrics, practitioner survey, or matched experiment."],
    unknowns: ["Incremental utility", "External boundary recognition", "Institutional feasibility", "Net ROI"],
    contradiction: "Earlier repository materials use discipline language, while the successor synthesis proposes a narrower profile and EX-FE-0002 still records an inconclusive experimental classification.",
    top: ["RFR-2026-016","RFR-2026-003","RFR-2026-010","RFR-2026-011","RFR-2026-012"]
  },
  {
    id: "ROS-FE-V1", title: "Accepted ROS–Framework Engineering Profile v1.0",
    docs: ["research/framework-engineering/ros-profile/README.md", "research/framework-engineering/ros-profile/open-ros-gaps.md", "research/evaluations/FE-BOUNDARY-2026-07-28/ros-fe-profile-v1-audit.md"],
    objective: "Provide a versioned pilot execution and record profile for Framework Engineering research.",
    claims: ["The profile is usable for synthetic low-consequence pilots.", "It is not sufficient for unattended promotion or strong conformance claims."],
    method: "Repository audit, baseline execution, schema and validator inspection, and test execution.",
    accepted: ["v1.0 remains the accepted pilot baseline.", "High-severity integrity gaps require a v1.1 proposal."],
    rejected: ["A green current validation proves complete execution or lineage integrity."],
    assumptions: ["Human promotion authority prevents the worst automation harms.", "Current pilots are low consequence."],
    limits: ["Execution-local records, references, duplicate identity, and manifests are incompletely validated."],
    unknowns: ["Negative-test coverage", "Migration safety", "Cross-repository dependency integrity"],
    contradiction: "The manifest declares a broader contract than the validator enforces.",
    top: ["RFR-2026-008","RFR-2026-014","RFR-2026-009","RFR-2026-015","RFR-2026-003"]
  },
  {
    id: "VALIDATION-PROGRAM", title: "Validation program and independent replication plans",
    docs: ["research/validation/validation-program.md", "research/validation/independent-replication-plan.md", "research/validation/competing-theory-challenge.md"],
    objective: "Attempt to disprove or simplify the theory before expansion or publication.",
    claims: ["Independent replication, competing explanations, falsification, and visible limits are publication gates."],
    method: "Adversarial review standards and proposed replication protocols.",
    accepted: ["Internal same-model evidence remains exploratory."],
    rejected: ["Publication readiness without independent replication."],
    assumptions: ["Planned protocols will be executed without outcome-dependent drift."],
    limits: ["Much of the validation program is a plan rather than completed evidence."],
    unknowns: ["External replicability", "Human agreement", "Control adequacy", "Stopping rules"],
    contradiction: "Repository process maturity is high relative to its completed independent validation coverage.",
    top: ["RFR-2026-001","RFR-2026-016","RFR-2026-002","RFR-2026-003","RFR-2026-004"]
  },
  {
    id: "PRODUCT-ARCH", title: "Research product architecture",
    docs: ["research/product-architecture/clarity-object-model-v0.1.md", "research/product-architecture/uncertainty-to-action-flow.md", "research/product-architecture/research-product-boundary.md"],
    objective: "Model uncertainty, evidence, decisions, and commitments across research-product boundaries.",
    claims: ["Clarity can be modeled as belief management and EDF as a downstream execution layer."],
    method: "Conceptual object and flow architecture.",
    accepted: ["The architecture is a useful provisional integration model."],
    rejected: ["ECR-000003 validates Clarity, EDF, or HelixNote."],
    assumptions: ["Explicit uncertainty and provenance improve human/machine decisions.", "Objects transfer without unacceptable representation loss."],
    limits: ["No usability, accessibility, operational, or economic validation."],
    unknowns: ["Cognitive load", "Accessible equivalence", "Operational ROI", "Security of evidence flow"],
    contradiction: "The architecture is comparatively specific while product efficacy is explicitly unsupported.",
    top: ["RFR-2026-012","RFR-2026-013","RFR-2026-011","RFR-2026-014","RFR-2026-003"]
  },
  {
    id: "EVAL-2026-07-23", title: "Framework Engineering program evaluation",
    docs: [
      "research/evaluations/FE-EVAL-2026-07-23/framework-engineering-executive-brief.md",
      "research/evaluations/FE-EVAL-2026-07-23/framework-engineering-evidence-registry.md",
      "research/evaluations/FE-EVAL-2026-07-23/framework-engineering-lineage.md",
      "research/evaluations/FE-EVAL-2026-07-23/RP-2026-07-23-framework-engineering-evaluation.md"
    ],
    objective: "Evaluate FE's definition, lineage, evidence, hypotheses, risks, and highest-value next mission.",
    claims: ["FE is an executable research program, not a validated discipline.", "Incremental causal value is the dominant upstream unknown.", "Repository process maturity exceeds validation maturity."],
    method: "Repository-wide structural evaluation using internal evidence, lineage reconstruction, hypothesis audit, and risk analysis.",
    accepted: ["The evaluation is current-provisional and its narrow program-state findings remain inputs to the successor boundary work."],
    rejected: ["Internal process maturity establishes efficacy.", "Product claims inherit validation from research process quality."],
    assumptions: ["Internal artifact inventory is sufficiently complete for structural conclusions.", "The selected mission ordering maximizes information value."],
    limits: ["No external literature review, human study, or independent-model replication was performed in this package."],
    unknowns: ["Distinctiveness", "Incremental utility", "Economic cost", "Independent continuation reliability"],
    contradiction: "The evaluation correctly selected boundary work, but several derived roadmap artifacts can be mistaken for completed empirical evidence.",
    top: ["RFR-2026-016","RFR-2026-003","RFR-2026-008","RFR-2026-011","RFR-2026-015"]
  },
  {
    id: "EXPERIMENT-SYSTEM", title: "Provider-neutral experiment system",
    docs: [
      "research/framework-engineering/experiments/architecture.md",
      "research/framework-engineering/experiments/roadmap.md",
      "research/framework-engineering/experiments/assessment.md",
      "research/framework-engineering/experiments/IMPLEMENTATION-REPORT.md",
      "research/framework-engineering/experiments/journal/2026-07-23-system-implementation.md"
    ],
    objective: "Provide a provider-neutral, immutable-run experiment registry and migration path for current and historical FE experiments.",
    claims: ["The narrow experiment infrastructure is executable and preserves provider/run lineage.", "Verification of package structure is separate from empirical acceptance."],
    method: "Architecture definition, migration manifests, immutable-run tooling, fixtures, and automated verification.",
    accepted: ["The architecture is accepted-for-pilot and the implementation report is complete in its declared engineering scope."],
    rejected: ["Successful experiment-package verification establishes scientific validity.", "Provider labels alone establish independent replication."],
    assumptions: ["Write-once run directories and provider metadata are sufficient for the current pilot boundary.", "Migration manifests faithfully represent historical outputs."],
    limits: ["Cross-provider independence semantics, adversarial integrity, and high-consequence promotion remain unvalidated."],
    unknowns: ["Failure behavior under corrupted runs", "Migration compatibility", "Independence semantics", "Operational maintenance cost"],
    contradiction: "The experiment system has stronger immutability controls than the ROS–FE profile execution validator that indexes some of its research outputs.",
    top: ["RFR-2026-008","RFR-2026-009","RFR-2026-001","RFR-2026-015","RFR-2026-014"]
  },
  {
    id: "BOUNDARY-EXPERIMENT", title: "EX-FE-0002 blinded mechanism-boundary program",
    docs: [
      "research/framework-engineering/experiments/EX-FE-0002/START-HERE.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/comparator-curator-role-completion.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/stage-a-decision.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/stage-a-gate-checklist.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.2-machine-pilot/README.md"
    ],
    objective: "Test mechanism-level non-redundancy under primary-source comparison, blinding, recognition control, and independent review.",
    claims: ["The protocol can discriminate non-redundancy, full subsumption, integration-only value, and underdetermination if its gates pass.", "Current experimental classification remains inconclusive."],
    method: "Two-stage preregistered mechanism-card construction and blinded mapping with role separation and adjudication.",
    accepted: ["The protocol and current blocked state control experimental interpretation; source-curator completion is not Stage A completion."],
    rejected: ["Same-provider synthesis or an incomplete machine pilot authorizes Stage B.", "A proposed narrower definition silently supersedes the experiment."],
    assumptions: ["Operational cards and comparator sources can be made sufficiently symmetric and blind.", "Independent reviewers can apply lossless-subsumption criteria reliably."],
    limits: ["Independent completeness audit, blinding, recognition, sealed-key custody, and Stage B reviewers remain incomplete or absent."],
    unknowns: ["Whether blinding gates can pass", "Whether any mechanism is non-subsumed", "Reviewer agreement and adjudication stability"],
    contradiction: "The successor boundary synthesis proposes a working classification while the controlling experiment remains inconclusive.",
    top: ["RFR-2026-016","RFR-2026-001","RFR-2026-004","RFR-2026-002","RFR-2026-010"]
  }
];

const byId = Object.fromEntries(opportunities.map((x) => [x.id, x]));
const esc = (s) => String(s).replaceAll("|", "\\|");
const link = (p) => `[\`${p}\`](../../../${p})`;
const safeName = (value) => String(value).replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");

const catalogPath = path.join(root, ".research-publisher/dist/data/catalog.json");
if (!fs.existsSync(catalogPath)) {
  throw new Error("Research catalog is missing. Run 'npm run research:build' before frontier generation.");
}

const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const catalogRecords = catalog.records ?? [];
const eligibleStatuses = new Set([
  "accepted", "accepted-for-pilot", "canonical", "complete",
  "current", "current-evaluated", "current-evaluation",
  "current-pilot", "current-provisional"
]);
const excludedLifecycleStatuses = new Set(["archived", "superseded", "withdrawn", "rejected"]);
const catalogByPath = new Map(catalogRecords.map((record) => [record.sourcePath, record]));
const unitById = new Map(units.map((unit) => [unit.id, unit]));
const explicitUnitByPath = new Map(units.flatMap((unit) => unit.docs.map((sourcePath) => [sourcePath, unit.id])));

function inferUnitId(sourcePath) {
  if (explicitUnitByPath.has(sourcePath)) return explicitUnitByPath.get(sourcePath);
  if (sourcePath.startsWith("research/evaluations/FE-BOUNDARY-2026-07-28/")) {
    return sourcePath.endsWith("ros-fe-profile-v1-audit.md") ? "ROS-FE-V1" : "BOUNDARY-2026-07-28";
  }
  if (sourcePath.startsWith("research/evaluations/FE-EVAL-2026-07-23/")) return "EVAL-2026-07-23";
  if (sourcePath.startsWith("research/framework-engineering/experiments/")) return "EXPERIMENT-SYSTEM";
  if (sourcePath.startsWith("research/framework-engineering/ros-profile/")) return "ROS-FE-V1";
  if (sourcePath.startsWith("research/evaluations/FE-BOUNDARY-2026-07-24")) return "BOUNDARY-EXPERIMENT";
  return null;
}

function documentKey(record) {
  if (record.id) return safeName(record.id);
  const digest = crypto.createHash("sha256").update(record.sourcePath).digest("hex").slice(0, 10);
  return `PATH-${safeName(path.basename(record.sourcePath, path.extname(record.sourcePath))).toUpperCase()}-${digest}`;
}

const eligibleRecords = catalogRecords.filter((record) => eligibleStatuses.has(record.status));
const authorityPaths = [...explicitUnitByPath.keys()];
const authorityRecords = authorityPaths.map((sourcePath) => {
  const fromCatalog = catalogByPath.get(sourcePath);
  if (fromCatalog) return fromCatalog;
  return {
    id: null,
    title: path.basename(sourcePath),
    sourcePath,
    status: "authority-exception",
    version: null,
    confidence: null,
    artifactType: path.extname(sourcePath).slice(1) || "unknown",
    headings: []
  };
});

const analysisRecordsByPath = new Map();
for (const record of [...eligibleRecords, ...authorityRecords]) {
  const unitId = inferUnitId(record.sourcePath);
  if (!unitId) {
    throw new Error(`Eligible or authoritative record has no analysis unit: ${record.sourcePath}`);
  }
  if (!fs.existsSync(path.join(root, record.sourcePath))) {
    throw new Error(`Analysis source does not exist: ${record.sourcePath}`);
  }
  const key = documentKey(record);
  analysisRecordsByPath.set(record.sourcePath, {
    ...record,
    unitId,
    documentKey: key,
    frontierPath: `document-frontiers/DOC-${key}-frontier.md`,
    inclusionReason: eligibleStatuses.has(record.status)
      ? `eligible lifecycle status: ${record.status}`
      : "explicit authority/current-state dependency"
  });
}
const analysisRecords = [...analysisRecordsByPath.values()].sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));

const coverageRecords = catalogRecords.map((record) => {
  const analyzed = analysisRecordsByPath.get(record.sourcePath);
  let disposition = "excluded";
  let reason = `lifecycle status '${record.status ?? "unknown"}' is outside the accepted/current analysis set`;
  if (analyzed) {
    disposition = "analyzed";
    reason = analyzed.inclusionReason;
  } else if (record.sourcePath.startsWith("research/frontier/")) {
    reason = "generated frontier output is excluded from its own source population";
  } else if (excludedLifecycleStatuses.has(record.status)) {
    reason = `historical lifecycle status '${record.status}' excluded except through contradiction/lineage context`;
  }
  return {
    source_path: record.sourcePath,
    id: record.id,
    status: record.status,
    artifact_type: record.artifactType,
    disposition,
    reason,
    analysis_unit: analyzed?.unitId ?? null,
    frontier_path: analyzed?.frontierPath ?? null
  };
});

for (const record of analysisRecords.filter((item) => !catalogByPath.has(item.sourcePath))) {
  coverageRecords.push({
    source_path: record.sourcePath,
    id: record.id,
    status: record.status,
    artifact_type: record.artifactType,
    disposition: "analyzed-authority-exception",
    reason: record.inclusionReason,
    analysis_unit: record.unitId,
    frontier_path: record.frontierPath
  });
}

const statusCounts = Object.fromEntries(
  [...catalogRecords.reduce((map, record) => map.set(record.status, (map.get(record.status) ?? 0) + 1), new Map()).entries()]
    .sort(([a], [b]) => String(a).localeCompare(String(b)))
);
const topAssignmentCount = units.reduce((total, unit) => total + unit.top.length, 0);
const uniqueTopAssignmentCount = new Set(units.flatMap((unit) => unit.top)).size;
const semanticMergeRate = (topAssignmentCount - uniqueTopAssignmentCount) / topAssignmentCount;

function record(o) {
  const origins = o.origins.map(([p,s]) => `- ${link(p)}, section: **${s}**`).join("\n");
  return `---
id: ${o.id}
title: ${JSON.stringify(o.title)}
artifact_type: research-frontier-record
status: open
version: 1.0.0
created: ${generated}
category: ${o.category}
frontier_score: ${o.score}
rank: ${o.rank}
confidence: ${o.confidence}
estimated_effort: ${o.effort}
immutability: mutable-until-accepted
acceptance_status: open-candidate
---

# ${o.id}: ${o.title}

## Research opportunity

${o.opportunity}

## Background

${o.background}

## Origin documents and trace

${origins}

**Specific assumption challenged:** ${o.assumption}

**Supporting evidence:** ${o.evidence}

## Unknowns

${o.unknowns.map((x) => `- ${x}`).join("\n")}

## Dependencies

${o.dependencies.length ? o.dependencies.map((x) => `- [${x}](./${x}.md)`).join("\n") : "- None; can begin immediately."}

## Suggested REP and methodology

Create \`REP-${o.id.replace("RFR-", "")}\`. ${o.methodology}

## Expected outputs

${o.outputs.map((x) => `- ${x}`).join("\n")}

## Success criteria

${o.success}

## Execution recommendation

- Recommended agent: ${o.agent}
- Estimated effort: ${o.effort}
- Expected knowledge gained: ${o.gain}
- Frontier Score: **${o.score}**
- Score inputs: knowledge gain ${o.scoring.knowledge_gain}/5; impact ${o.scoring.potential_impact}/5; cross-project reuse ${o.scoring.cross_project_reuse}/5; scientific importance ${o.scoring.scientific_importance}/5; dependency cost ${o.scoring.dependency_cost}/5; implementation difficulty ${o.scoring.implementation_difficulty}/5.
- Score calculation: \`${o.scoring.knowledge_gain} × ${o.scoring.potential_impact} × ${o.scoring.cross_project_reuse} × ${o.scoring.scientific_importance} − ${o.scoring.dependency_cost} − ${o.scoring.implementation_difficulty} = ${o.score}\`.
- Score status: structured expert judgment, not measured utility.
`;
}

function unitDoc(u) {
  const rows = u.top.map((id, i) => {
    const o = byId[id];
    return `| ${i + 1} | [${id}](../records/${id}.md) | ${esc(o.title)} | ${o.category} | ${o.score} |`;
  }).join("\n");
  return `---
id: ${u.id}-FRONTIER
title: ${JSON.stringify(`${u.title} frontier`)}
status: active
generated: ${generated}
---

# ${u.title}: research frontier

## Scope and source artifacts

${u.docs.map((p) => `- [\`${p}\`](../../../${p})`).join("\n")}

These files are treated as one analysis unit because they share an evidence base or form one accepted/current package. Generated derivatives, templates, prompts, private working packets, and superseded runs are not counted as independent conclusions.

## Knowledge extraction

- **Primary objective:** ${u.objective}
- **Primary claims:** ${u.claims.join(" ")}
- **Methodology:** ${u.method}
- **Accepted hypotheses/findings:** ${u.accepted.join(" ")}
- **Rejected or unsupported hypotheses:** ${u.rejected.join(" ")}
- **Assumptions:** ${u.assumptions.join(" ")}
- **Limitations:** ${u.limits.join(" ")}
- **Known uncertainties:** ${u.unknowns.join("; ")}.
- **Confidence:** bounded by the source package; no confidence is promoted by this frontier analysis.

## Adversarial challenge

${u.contradiction} Evidence that would materially change the assessment includes independent replication, preregistered negative controls, matched causal comparison, or a demonstrated failure of the current measurement instruments. The analysis deliberately treats planned validation as a dependency, not as completed evidence.

## Top five opportunities

| Rank | Record | Opportunity | Category | Frontier score |
|---:|---|---|---|---:|
${rows}

Semantic duplicates were merged into the linked repository-wide records. The five selections maximize uncertainty reduction and repository reuse, rather than creating five unique labels for each source package.
`;
}

function documentFrontierDoc(document) {
  const unit = unitById.get(document.unitId);
  const rows = unit.top.map((id, index) => {
    const opportunity = byId[id];
    return `| ${index + 1} | [${id}](../records/${id}.md) | ${esc(opportunity.title)} | ${opportunity.category} | ${opportunity.score} |`;
  }).join("\n");
  const headingText = (document.headings ?? []).slice(0, 20).map((heading) => heading.text).filter(Boolean);
  return `---
id: DOC-${document.documentKey}-FRONTIER
title: ${JSON.stringify(`${document.title ?? document.sourcePath} frontier`)}
status: active
generated: ${generated}
source_artifact_id: ${document.id ? JSON.stringify(document.id) : "null"}
source_status: ${JSON.stringify(document.status ?? "unknown")}
analysis_unit: ${document.unitId}
---

# ${document.title ?? document.sourcePath}: document frontier

## Source and coverage

- **Source:** [\`${document.sourcePath}\`](../../../${document.sourcePath})
- **Canonical ID:** ${document.id ? `\`${document.id}\`` : "missing; path-derived frontier identity used"}
- **Lifecycle status:** \`${document.status ?? "unknown"}\`
- **Artifact type:** \`${document.artifactType ?? "unknown"}\`
- **Version:** ${document.version ?? "not declared"}
- **Confidence:** ${document.confidence ?? "not declared"}
- **Inclusion rule:** ${document.inclusionReason}
- **Analysis unit:** [${unit.id}](${unit.id}-frontier.md)

## Phase 1 — knowledge extraction

- **Primary objective:** ${unit.objective}
- **Primary claims:** ${unit.claims.join(" ")}
- **Supporting evidence:** The source's declared references and the co-analyzed records listed in the analysis-unit frontier.
- **Methodology:** ${unit.method}
- **Accepted/current findings:** ${unit.accepted.join(" ")}
- **Rejected or unsupported findings:** ${unit.rejected.join(" ")}
- **Assumptions:** ${unit.assumptions.join(" ")}
- **Limitations:** ${unit.limits.join(" ")}
- **Known uncertainties:** ${unit.unknowns.join("; ")}.
- **Declared headings inspected:** ${headingText.length ? headingText.join("; ") : "not available in the publisher catalog"}.

## Phase 2 — unresolved unknowns

${unit.unknowns.map((unknown) => `- ${unknown}`).join("\n")}

## Phase 3 — adversarial challenge

${unit.contradiction}

Evidence that would materially change this assessment includes a completed
independent replication, a preregistered negative control, a matched causal
comparison, a governance disposition, or a demonstrated failure of the
measurement and integrity instruments relevant to this source.

## Top five traceable opportunities

| Rank for this document | Record | Opportunity | Category | Frontier score |
|---:|---|---|---|---:|
${rows}

The opportunity records contain source sections, challenged assumptions,
supporting evidence, dependencies, methodology, outputs, and success
criteria. Repeated opportunities are semantic links to one repository-wide
record rather than duplicated records.
`;
}

const coverageSummary = {
  publisher_catalog_records: catalogRecords.length,
  eligible_status_records: eligibleRecords.length,
  authority_exception_records: analysisRecords.filter((record) => !eligibleStatuses.has(record.status)).length,
  unique_analyzed_records: analysisRecords.length,
  analyzed_catalog_records: coverageRecords.filter((record) => record.disposition === "analyzed").length,
  analyzed_non_catalog_authority_records: coverageRecords.filter((record) => record.disposition === "analyzed-authority-exception").length,
  excluded_catalog_records: coverageRecords.filter((record) => record.disposition === "excluded").length,
  eligible_unmapped_records: eligibleRecords.filter((record) => !analysisRecordsByPath.has(record.sourcePath)).length,
  analysis_units: units.length,
  opportunity_records: opportunities.length,
  top_opportunity_assignments_before_semantic_merge: topAssignmentCount,
  unique_top_opportunities_after_semantic_merge: uniqueTopAssignmentCount,
  semantic_merge_rate: Number(semanticMergeRate.toFixed(4))
};

const coverage = {
  schema_version: "1.0.0",
  generated,
  source_catalog: path.relative(root, catalogPath),
  eligible_statuses: [...eligibleStatuses].sort(),
  policy: {
    accepted_current_rule: "analyze every publisher record in an accepted/current/complete lifecycle status",
    authority_exception_rule: "also analyze current-state, theory, evidence-dashboard, experiment, validation, corpus, and product records required by an accepted/current conclusion",
    historical_rule: "exclude superseded, archived, withdrawn, and rejected records except when a current analysis unit cites them for lineage or contradiction",
    generated_rule: "exclude research/frontier outputs from their own source population"
  },
  summary: coverageSummary,
  status_counts: statusCounts,
  records: coverageRecords.sort((a, b) => a.source_path.localeCompare(b.source_path))
};

const coverageDoc = `---
id: FRONTIER-COVERAGE-2026-07-28
title: Research Frontier Coverage Ledger
status: active
version: 1.0.0
generated: ${generated}
---

# Research frontier coverage ledger

## Result

Every one of the **${catalogRecords.length}** publishable catalog records has
an explicit disposition in \`coverage.json\`. The analysis covers all
**${eligibleRecords.length}** accepted/current/complete records and
**${coverageSummary.authority_exception_records}** additional authoritative
dependencies, for **${analysisRecords.length}** unique analyzed artifacts
across **${units.length}** evidence-coherent units.

Eligible records without an analysis unit: **${coverageSummary.eligible_unmapped_records}**.

## Inclusion policy

- Include lifecycle states: ${[...eligibleStatuses].sort().map((status) => `\`${status}\``).join(", ")}.
- Include draft or non-Markdown authority exceptions only when a
  current/accepted conclusion depends on them.
- Exclude superseded, archived, withdrawn, and rejected records except through
  an explicit lineage or contradiction trace.
- Exclude generated frontier outputs from their own source population.
- Treat prompts, templates, provider runs, and generated derivatives as
  evidence inputs only when an authoritative unit explicitly relies on them.

## Coverage metrics

| Metric | Value |
|---|---:|
| Publisher catalog records | ${catalogRecords.length} |
| Eligible lifecycle records | ${eligibleRecords.length} |
| Authority exceptions | ${coverageSummary.authority_exception_records} |
| Unique analyzed artifacts | ${analysisRecords.length} |
| Analysis units | ${units.length} |
| Open RFR candidates | ${opportunities.length} |
| Unit-level top-five assignments | ${topAssignmentCount} |
| Unique opportunities after semantic merge | ${uniqueTopAssignmentCount} |
| Semantic consolidation rate | ${(semanticMergeRate * 100).toFixed(1)}% |

## Important limitation

Coverage is exhaustive at the artifact-disposition level, not a claim that
1,200 files represent 1,200 independent findings. Evidence-coherent packages
are analyzed together to avoid treating templates, repeated run outputs, or
generated views as independent conclusions. Each included source still has a
document-level frontier that preserves its identity and top-five links.
`;

const masterRows = opportunities.map((o) => `| ${o.rank} | [${o.id}](records/${o.id}.md) | ${esc(o.title)} | ${o.category} | ${o.score} | ${o.effort} | ${o.dependencies.join(", ") || "—"} |`).join("\n");
const contradictions = [
  ["Critical", "Discipline-scale language vs current boundary finding", "Earlier theory/program artifacts retain an engineering-discipline trajectory; the 2026-07-28 REP finds no distinct mechanism, utility, or institution.", "Use research-program/candidate-profile language until RFR-003 and RFR-010 resolve the boundary."],
  ["Critical", "Proposed synthesis vs controlling experimental state", "The 2026-07-28 successor synthesis proposes an integrated-profile working model, while EX-FE-0002 remains Stage A incomplete, Stage B blocked, and experimentally inconclusive.", "Complete or formally supersede EX-FE-0002 through RFR-016 before treating the working classification as experimentally adjudicated."],
  ["Critical", "Green profile validation vs unenforced integrity", "The accepted profile passes current tests, while its audit finds provider drafts, duplicate IDs, references, and manifests can evade meaningful validation.", "Complete RFR-008 before high-consequence or autonomous use."],
  ["High", "Evidence-base use vs draft corpus labels", "Corpus summaries support theory development although all current characterizations are single-analyst drafts.", "Complete RFR-006 and propagate uncertainty."],
  ["High", "Finite grammar vs repeated coordination gaps", "Theory predicts finite primitives; FE-012B reports synthesis failures and missing coordination operations.", "Run RFR-005 and RFR-007 with competing models."],
  ["High", "Process maturity vs validation maturity", "The repository has extensive governance and tooling, but limited independent human and causal evidence.", "Fund empirical gates before more governance surface."]
];
const master = `---
id: FRONTIER-MASTER-2026-07-28
title: Research Frontier Master
status: active
version: 1.0.0
generated: ${generated}
scope_baseline: working-tree
---

# Research frontier master

## Executive conclusion

The repository's most valuable next move is **instrument falsification before theory expansion**. The first funded REP should be [RFR-2026-001](records/RFR-2026-001.md), the negative non-isomorphic control benchmark. It attacks the highest stated validity risk, costs less than a human baseline or matched utility trial, and gates interpretation of ECR-000003, grammar, recognition, and replication evidence.

The repository is strongest in research-process architecture, traceability intent, and generation of testable hypotheses. It is weakest in independent human evidence, calibrated negative controls, causal utility, corpus reliability, and enforcement of its own profile integrity. No current evidence supports calling Framework Engineering a validated or distinct engineering discipline.

## Scope and acceptance rule

This analysis inventories the repository as of ${generated}. It gives all **${catalogRecords.length}** publishable catalog records an explicit disposition, analyzes every **${eligibleRecords.length}** accepted/current/complete record, and includes **${coverageSummary.authority_exception_records}** additional authoritative dependencies. The **${analysisRecords.length}** analyzed artifacts are grouped into **${units.length}** evidence-coherent units rather than falsely treating templates, generated views, repeated provider outputs, or package components as independent findings. Drafts are included only when a current artifact depends on them; their status limits confidence. Superseded and archived work is used only for lineage or contradiction.

The [coverage ledger](coverage.md), machine-readable [coverage manifest](coverage.json), analysis-unit frontiers, and individual document frontiers make the scope auditable. The **${opportunities.length}** semantically deduplicated RFRs are open candidates: they remain mutable until an authorized acceptance decision, after which successor/supersession rules apply.

## Frontier score

Each candidate was challenged and rated on six explicit 1–5 dimensions:

\`raw = knowledge gain × potential impact × cross-project reuse × scientific importance − dependency cost − implementation difficulty\`

Every RFR records the six inputs and the reproduced calculation. Scores shown here are stabilized ordinal priorities, not measured utility or evidence strength.

## Ranked opportunities

| Rank | Record | Opportunity | Category | Score | Effort | Prerequisites |
|---:|---|---|---|---:|---|---|
${masterRows}

## Critical contradictions

| Importance | Contradiction | Evidence conflict | Resolution |
|---|---|---|---|
${contradictions.map((x) => `| ${x.map(esc).join(" | ")} |`).join("\n")}

## Dependency strategy

The foundational sequence is:

1. Calibrate false positives ([RFR-2026-001](records/RFR-2026-001.md)).
2. Complete the controlling mechanism-boundary adjudication ([RFR-2026-016](records/RFR-2026-016.md)).
3. Establish human reliability ([RFR-2026-002](records/RFR-2026-002.md)) and corpus reliability ([RFR-2026-006](records/RFR-2026-006.md)).
4. Test causal utility ([RFR-2026-003](records/RFR-2026-003.md)).
5. Only then estimate ROI, field usability, and expansion value.

In parallel, profile integrity ([RFR-2026-008](records/RFR-2026-008.md)) can proceed without changing accepted v1.0 content. Security and reproducibility work depend on that integrity baseline.

## Repository-wide themes

- **Largest knowledge gap:** causal incremental utility over strong adjacent methods.
- **Most urgent measurement gap:** comparator specificity under negative non-isomorphic controls.
- **Most influential uncertain research:** ECR-000003 and the primitive/grammar evidence family.
- **Over-researched relative to evidence:** governance, taxonomy, and process documentation.
- **Neglected disciplines:** human factors, statistics, economics, accessibility, and security.
- **Weak architectural area:** the declared ROS–FE contract exceeds executable enforcement.
- **Duplicate investigations:** human baseline, independent replication, recognition control, grammar separation, and utility comparison recur under multiple names; each is merged here.
- **Controlling unresolved gate:** EX-FE-0002 remains experimentally inconclusive despite a newer proposed synthesis.

## Cross-discipline analysis

| Perspective | Current treatment | Frontier disposition |
|---|---|---|
| Psychology and cognitive bias | recognition and cognitive-load threats are explicit | RFR-004 and RFR-012 |
| Human factors and HCI | no independent human reliability or usability baseline | RFR-002 and RFR-012 |
| Statistics and measurement science | instruments exist without calibrated false-positive or corpus-reliability estimates | RFR-001, RFR-006, RFR-007 |
| Economics and operations | lifecycle burden and break-even conditions are unmeasured | RFR-011 |
| Accessibility and vision-dependent representation | representation effects exist without disabled-user or assistive-technology validation | RFR-013 |
| Security | agent-mediated provenance has no adversarial integrity program | RFR-014 |
| Anthropology and organizational practice | external field uptake and practitioner boundary recognition are absent | merged into RFR-010 |
| Information theory | compression/representation questions are plausible but lack a distinct traceable claim | merged into RFR-001 and RFR-007; no standalone RFR |
| Neuroscience | no current claim supplies a direct evidential dependency | not promoted; reconsider only with a specific mechanism claim |

## Executive recommendations

- **If only one REP is funded:** RFR-2026-001. It can reveal that the primary comparator is non-specific and therefore prevents costly misinterpretation.
- **Most uncertainty reduction:** RFR-2026-003, once its prerequisites exist, because it directly tests whether FE adds causal value.
- **Largest unlock:** RFR-2026-001; it is prerequisite or methodological input to measurement, recognition, accessibility, and human-baseline work.
- **Highest ROI:** RFR-2026-008 for engineering risk reduction; RFR-2026-001 for scientific information per unit effort.
- **Highest risk/highest reward:** RFR-2026-005. A defensible grammar boundary could materially advance theory; failure could collapse a major theory branch.
- **Resolve the controlling state:** RFR-2026-016 after RFR-2026-001; it must precede the utility study unless formally superseded.
- **Begin immediately:** RFR-2026-001 and RFR-2026-008 in parallel. Neither requires assuming the theory is true.

## Specification traceability

| Requested phase | Durable output |
|---|---|
| 1. Foundational extraction | Per-artifact frontiers in \`document-frontiers/\`; evidence-coherent unit frontiers in the same directory |
| 2. Challenge analysis | Per-artifact and unit-frontier challenge sections |
| 3. Opportunity generation | Per-artifact and unit-frontier opportunity sections |
| 4. Categorization | RFR \`category\` fields and repository-health category counts |
| 5. Scoring and prioritization | Exact six-input score calculation in every RFR and the ranked master table |
| 6. Research frontier records | \`records/RFR-2026-*.md\`; candidates remain mutable until accepted |
| 7. Contradiction detection | Critical/high contradiction register in this master frontier |
| 8. Semantic deduplication | Unit top selections consolidated into shared RFRs; merge metric in repository health |
| 9. Dependency graph | \`frontier-graph.json\` with prerequisite and source-evidence edges |
| 10. Confidence decay | Confidence-decay section in \`repository-health.md\` |
| 11. Cross-discipline analysis | Cross-discipline transfer table in this master frontier |
| 12. Top opportunities per document | Exactly five references in every per-artifact frontier, enforced by generator validation |
| 13. Repository-wide frontier | Ranked frontier table and critical paths in this document |
| 14. Coverage ledger | \`coverage.json\` and \`coverage.md\`, including an explicit disposition for every catalog record |
| 15. Machine-readable index | \`frontier-index.json\` |
| 16. Immutable accepted records | Open candidates declare \`mutable-until-accepted\`; acceptance is the immutability boundary |
| 17. Health metrics | \`repository-health.md\`, computed from source/catalog data where feasible |
| 18. Executive recommendations | Recommendation block immediately above |
| 19. Self-critique | Limitations and revalidation triggers immediately below |

## Self-critique

This analysis is repository-internal and did not independently reproduce experiments, interview researchers, or re-run every historical tool. The coverage ledger prevents silent omission, but evidence-coherent grouping can still hide a unique claim inside an excluded draft or derivative; such files retain an explicit disposition and can be promoted through a successor review. Frontier scores are transparent structured judgments, not empirical estimates. Document-level frontiers inherit some unit-level synthesis and therefore must not be mistaken for independent readings by different reviewers. Revalidation is required when ECR-000003 review closes, EX-FE-0002 completes or is superseded, the boundary decision is accepted/rejected, profile v1.1 lands, or any top-four RFR completes.
`;

const confidenceIndex = { high: 0.8, medium: 0.6, low: 0.4, "very-low": 0.2 };
const averageRfrConfidence = opportunities.reduce((sum, opportunity) => sum + (confidenceIndex[opportunity.confidence] ?? 0), 0) / opportunities.length;
const averageOriginDepth = opportunities.reduce((sum, opportunity) => sum + opportunity.origins.length, 0) / opportunities.length;
const dependencyEdgeCount = opportunities.reduce((sum, opportunity) => sum + opportunity.dependencies.length, 0);
const categoryCounts = Object.fromEntries(
  [...opportunities.reduce((map, opportunity) => map.set(opportunity.category, (map.get(opportunity.category) ?? 0) + 1), new Map()).entries()]
    .sort(([a], [b]) => a.localeCompare(b))
);
function walkFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(target) : [target];
  });
}
const experimentDefinitions = walkFiles(path.join(root, "research/framework-engineering/experiments"))
  .filter((file) => file.endsWith("experiment.json"));

const health = `---
id: REPOSITORY-HEALTH-2026-07-28
title: Repository Research Health
status: active
generated: ${generated}
---

# Repository health assessment

## Summary

Repository maturity is **developing / validation-constrained**. Research operations are comparatively mature; empirical validation is not. The repository can tell an agent what to inspect next, but multiple status narratives and incomplete executable integrity controls prevent fully autonomous trust.

| Metric | Result | Interpretation |
|---|---:|---|
| Publishable research artifacts | ${catalogRecords.length} | Publisher catalog; each has a disposition in the coverage ledger |
| Accepted/current/complete lifecycle artifacts | ${eligibleRecords.length} | All are mapped to document frontiers |
| Authority exceptions analyzed | ${coverageSummary.authority_exception_records} | Current-state dependencies not reliably represented by lifecycle metadata |
| Unique analyzed artifacts | ${analysisRecords.length} | Grouped into evidence-coherent units; not treated as independent findings |
| Authoritative analysis units | ${units.length} | Current/accepted claim-bearing packages and controlling state |
| Reference corpus artifacts | 100 | All current characterizations are draft and single-analyst |
| Open frontier candidates | ${opportunities.length} | Mutable until governance acceptance; semantically deduplicated |
| Validated major theory findings | 0 | No major theory claim meets the repository's independent publication gate |
| Candidate-supported ECR-000003 observations | 3 | Dashboard language is explicitly provisional |
| Active hypotheses in dashboard | 7 | Evidence mostly weak; one moderate, one insufficient |
| Registered experiment definitions | ${experimentDefinitions.length} | Engineering verification exists; human baseline and matched causal utility remain absent |
| Direct experiment coverage | partial | EX-FE-0002 is blocked and EX-FE-0003 has no execution data |
| Independent human validation coverage | 0% of major claims | Plans exist, completed baseline does not |
| Critical/high contradictions | ${contradictions.length} | Three critical and three high |
| Semantic duplicate consolidation | ${(semanticMergeRate * 100).toFixed(1)}% | ${topAssignmentCount} unit-level top selections consolidated to ${uniqueTopAssignmentCount} unique RFRs |
| Average RFR confidence index | ${averageRfrConfidence.toFixed(3)} | Normalized only for open RFR confidence labels; not an average of research truth |
| Average research trace depth | ${averageOriginDepth.toFixed(2)} origin documents/RFR | Sections and assumptions are retained in each RFR |
| Opportunity graph connectivity | ${dependencyEdgeCount} edges / ${opportunities.length} nodes | Directed acyclic prerequisite graph; source-record links remain documentary |
| Knowledge graph connectivity | moderate, documentary | Many repository links exist; typed referential integrity is not fully enforced |

## Research by discipline

| Discipline | Current strength | Frontier need |
|---|---|---|
| Knowledge/research engineering | high process coverage | Validate process effects |
| Systems/architecture | high conceptual coverage | Enforce declared contracts |
| Measurement/statistics | moderate instruments, weak calibration | Negative controls, reliability, saturation |
| AI/model evaluation | moderate internal coverage | Independence semantics and provider effects |
| Human factors | low | Human baseline and cognitive load |
| Economics/operations | very low | Cost, ROI, field maintenance |
| Accessibility | absent in evidence | Representation equivalence |
| Security | low | Adversarial provenance and fail-closed behavior |

Open RFRs by category:

${Object.entries(categoryCounts).map(([category, count]) => `- ${category}: ${count}`).join("\n")}

## Largest evidence gaps

1. No matched test of FE-specific incremental utility.
2. No independent human reliability baseline.
3. No calibrated false-positive estimate for structural equivalence.
4. No blind reliability estimate for the 100-artifact corpus.
5. No machine-enforced end-to-end lineage integrity for accepted/provider records.

## Confidence decay

Age alone is not currently the dominant decay factor because most active work is recent. Confidence should nevertheless be reduced where newer evidence changes classification:

- Discipline distinctiveness: **low → very low**, following the 2026-07-28 boundary comparison.
- Integrated-profile coherence: **unassessed → moderate**, but utility stays very low.
- Experimental boundary classification: remains **inconclusive** until
  EX-FE-0002 completes or is formally superseded.
- Corpus distribution claims: retain descriptive status, but inferential confidence is low until blind re-review.
- Accepted profile conformance: medium for pilot structure; low for complete execution/lineage integrity after the audit.
- Grammar and primitive claims: low-to-moderate exploratory confidence; decay if negative controls or independent coders fail.

## Maturity gates

The repository should not advance to autonomous canonical promotion or discipline claims until:

- RFR-2026-001 demonstrates comparator discrimination,
- RFR-2026-016 resolves the controlling mechanism-boundary experiment,
- RFR-2026-002 establishes human reliability,
- RFR-2026-003 demonstrates net incremental utility,
- RFR-2026-008 closes high-severity integrity gaps, and
- claim-level confidence history replaces ambiguous aggregate averages.
`;

const index = {
  schema_version: "1.1.0", generated, status: "active",
  source_catalog: path.relative(root, catalogPath),
  coverage: { path: "coverage.json", summary: coverageSummary },
  scoring: {
    formula: "knowledge_gain*potential_impact*cross_project_reuse*scientific_importance-dependency_cost-implementation_difficulty",
    input_scale: "integer 1-5 for every component",
    interpretation: "ordinal structured judgment, not measured utility"
  },
  records: opportunities.map((o) => ({
    id: o.id, title: o.title, category: o.category, status: "open", rank: o.rank,
    frontier_score: o.score, confidence: o.confidence, estimated_effort: o.effort,
    scoring: o.scoring,
    path: `records/${o.id}.md`, dependencies: o.dependencies,
    origin_documents: o.origins.map(([p]) => p)
  })),
  analysis_units: units.map((u) => ({ id: `${u.id}-FRONTIER`, path: `document-frontiers/${u.id}-frontier.md`, documents: u.docs, top_records: u.top })),
  document_frontiers: analysisRecords.map((record) => ({
    id: `DOC-${record.documentKey}-FRONTIER`,
    source_id: record.id,
    source_path: record.sourcePath,
    source_status: record.status,
    analysis_unit: record.unitId,
    path: record.frontierPath,
    top_records: unitById.get(record.unitId).top
  }))
};

const edges = opportunities.flatMap((o) => o.dependencies.map((d) => ({ from: d, to: o.id, relation: "prerequisite_for" })));
const originPaths = [...new Set(opportunities.flatMap((opportunity) => opportunity.origins.map(([sourcePath]) => sourcePath)))].sort();
const artifactNodeId = (sourcePath) => `ART-${crypto.createHash("sha256").update(sourcePath).digest("hex").slice(0, 12)}`;
const evidenceEdges = opportunities.flatMap((opportunity) => opportunity.origins.map(([sourcePath]) => ({
  from: artifactNodeId(sourcePath),
  to: opportunity.id,
  relation: "motivates"
})));
const graph = {
  schema_version: "1.1.0", generated, directed: true,
  nodes: [
    ...opportunities.map((o) => ({ id: o.id, type: "research_opportunity", title: o.title, category: o.category, rank: o.rank, score: o.score, status: "open" })),
    ...originPaths.map((sourcePath) => ({ id: artifactNodeId(sourcePath), type: "origin_artifact", source_path: sourcePath }))
  ],
  edges: [...edges, ...evidenceEdges],
  dependency_edge_count: edges.length,
  evidence_trace_edge_count: evidenceEdges.length,
  critical_paths: [
    ["RFR-2026-001", "RFR-2026-016", "RFR-2026-003", "RFR-2026-011"],
    ["RFR-2026-001", "RFR-2026-002", "RFR-2026-003", "RFR-2026-011"]
  ],
  parallel_foundation: ["RFR-2026-008", "RFR-2026-006"]
};

const handoff = `---
id: FRONTIER-HANDOFF-2026-07-28
title: Research Frontier Analysis Handoff
status: active
version: 1.0.0
generated: ${generated}
---

# Research frontier handoff

## Objective

Maintain an auditable, traceable, dependency-aware inventory of where the
repository's accepted/current knowledge ends and which research should move
the boundary next.

## Current result

- ${catalogRecords.length} publishable records have explicit dispositions.
- ${analysisRecords.length} accepted/current or authority-dependent artifacts
  are analyzed through ${units.length} evidence-coherent units and individual
  document frontiers.
- ${opportunities.length} open RFR candidates remain after semantic merging.
- RFR-2026-001 is the first funded REP recommendation.
- RFR-2026-008 can begin in parallel.
- RFR-2026-016 resolves the controlling EX-FE-0002 experimental state before
  RFR-2026-003 tests causal utility.

## Authority

RFRs are open candidates and mutable. This analysis does not accept them,
promote theory, supersede EX-FE-0002, or authorize autonomous canonical
mutation. Acceptance requires a named governance decision; accepted changes
then use successor and supersession records.

## Reproduction

\`\`\`bash
npm run research:build
node research/frontier/build-frontier.mjs
node research/frontier/build-frontier.mjs --check
npm run research:validate
\`\`\`

The builder checks source existence, accepted/current coverage, duplicate IDs,
score reproduction, rank order, dependency integrity, cycle freedom, unit
top-five completeness, and generated-output staleness.

## Revalidation triggers

- ECR-000003 review closes.
- EX-FE-0002 completes or is superseded.
- The boundary decision is accepted, rejected, or superseded.
- ROS–FE v1.1 lands.
- An RFR changes status.
- A top-four RFR completes.
- The publisher catalog changes accepted/current membership.

## Next action

Create the REP for RFR-2026-001. In parallel, prepare the v1.1 proposal and
negative fixtures for RFR-2026-008. Do not start RFR-2026-003 until both its
human-baseline and controlling mechanism-boundary dependencies are satisfied
or explicitly superseded.
`;

function validateModel() {
  const errors = [];
  const ids = opportunities.map((opportunity) => opportunity.id);
  if (new Set(ids).size !== ids.length) errors.push("duplicate RFR IDs");
  const expectedRanks = opportunities.map((_, index) => index + 1);
  if (JSON.stringify(opportunities.map((opportunity) => opportunity.rank)) !== JSON.stringify(expectedRanks)) {
    errors.push("RFR ranks are not contiguous in sorted order");
  }
  for (const opportunity of opportunities) {
    const scoreValues = Object.values(opportunity.scoring ?? {});
    if (scoreValues.length !== 6 || scoreValues.some((value) => !Number.isInteger(value) || value < 1 || value > 5)) {
      errors.push(`${opportunity.id}: scoring inputs must be six integers from 1 to 5`);
    }
    if (computeFrontierScore(opportunity.scoring) !== opportunity.score) {
      errors.push(`${opportunity.id}: frontier score does not reproduce`);
    }
    for (const dependency of opportunity.dependencies) {
      if (!byId[dependency]) errors.push(`${opportunity.id}: unknown dependency ${dependency}`);
      if (dependency === opportunity.id) errors.push(`${opportunity.id}: self dependency`);
    }
    for (const [sourcePath] of opportunity.origins) {
      if (!fs.existsSync(path.join(root, sourcePath))) errors.push(`${opportunity.id}: missing origin ${sourcePath}`);
    }
  }
  for (const unit of units) {
    if (unit.top.length !== 5) errors.push(`${unit.id}: must select exactly five top opportunities`);
    for (const id of unit.top) if (!byId[id]) errors.push(`${unit.id}: unknown top opportunity ${id}`);
    for (const sourcePath of unit.docs) {
      if (!fs.existsSync(path.join(root, sourcePath))) errors.push(`${unit.id}: missing source ${sourcePath}`);
    }
  }
  if (coverageSummary.eligible_unmapped_records !== 0) {
    errors.push(`${coverageSummary.eligible_unmapped_records} eligible records lack an analysis unit`);
  }
  if (new Set(analysisRecords.map((record) => record.frontierPath)).size !== analysisRecords.length) {
    errors.push("document-frontier path collision");
  }

  const state = new Map();
  const visit = (id, trail = []) => {
    if (state.get(id) === "visiting") {
      errors.push(`dependency cycle: ${[...trail, id].join(" -> ")}`);
      return;
    }
    if (state.get(id) === "done") return;
    state.set(id, "visiting");
    for (const dependency of byId[id].dependencies) visit(dependency, [...trail, id]);
    state.set(id, "done");
  };
  for (const id of ids) visit(id);
  if (errors.length) throw new Error(errors.join("\n"));
}

validateModel();

const outputs = new Map([
  ["FRONTIER-MASTER.md", master],
  ["repository-health.md", health],
  ["coverage.md", coverageDoc],
  ["coverage.json", `${JSON.stringify(coverage, null, 2)}\n`],
  ["frontier-index.json", `${JSON.stringify(index, null, 2)}\n`],
  ["frontier-graph.json", `${JSON.stringify(graph, null, 2)}\n`],
  ["HANDOFF.md", handoff],
  ...opportunities.map((opportunity) => [`records/${opportunity.id}.md`, record(opportunity)]),
  ...units.map((unit) => [`document-frontiers/${unit.id}-frontier.md`, unitDoc(unit)]),
  ...analysisRecords.map((document) => [document.frontierPath, documentFrontierDoc(document)])
]);

const checkOnly = process.argv.includes("--check");
const stale = [];
for (const [relativePath, content] of outputs) {
  const target = path.join(out, relativePath);
  if (!fs.existsSync(target) || fs.readFileSync(target, "utf8") !== content) stale.push(relativePath);
}

if (checkOnly) {
  if (stale.length) {
    console.error(`frontier outputs stale or missing (${stale.length}):\n${stale.join("\n")}`);
    process.exitCode = 1;
  } else {
    console.log(`frontier outputs current: ${outputs.size} files; ${analysisRecords.length} analyzed artifacts; ${opportunities.length} RFRs`);
  }
} else {
  for (const [relativePath, content] of outputs) {
    const target = path.join(out, relativePath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    const temporary = `${target}.tmp-frontier`;
    fs.writeFileSync(temporary, content);
    fs.renameSync(temporary, target);
  }
  console.log(`frontier outputs generated: ${outputs.size} files; ${analysisRecords.length} analyzed artifacts; ${opportunities.length} RFRs`);
}
