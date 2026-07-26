export default {
  site: {
    title: "Framework Engineering Research",
    description: "Searchable research, evidence, methods, and knowledge artifacts for Framework Engineering",
    baseUrl: "/",
    language: "en",
    siteUrl: "https://github.com/kemiller2002/Framework-engineering"
  },
  repository: {
    name: "Framework-engineering",
    sourceUrl: "https://github.com/kemiller2002/Framework-engineering"
  },
  content: {
    include: [
      "**/*.md"
    ],
    exclude: [
      "node_modules/**",
      "**/node_modules/**",
      "dist/**",
      "build/**",
      "build-reports/**",
      "coverage/**",
      ".git/**",
      ".github/**",
      ".research-publisher/**",
      "tmp/**",
      "temp/**",
      "**/archive/**",
      "**/archives/**",
      "input-documents/**",
      "prompts/**",
      "research/framework-engineering/experiments/**/runs/**",
      "research/framework-engineering/experiments/**/normalized/**",
      "research/framework-engineering/experiments/**/comparisons/**",
      "research/framework-engineering/experiments/**/adjudications/**",
      "research/framework-engineering/experiments/**/synthesis/**",
      // v1.1 carries these v1.0 artifacts forward without accepting them as new
      // Stage A evidence. Publish the canonical v1.0 copies and the uniquely
      // identified v1.1 repair/audit records, not the inherited duplicates.
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/README.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/HANDOFF.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/STAGE-A-MULTI-AGENT-PROMPT.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/protocol.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/decision.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/analysis/README.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/cards/blinded/**",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/cards/sealed-source-key/README.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/recognition-pretest/instructions.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/reviewer-packets/instructions.md",
      "research/evaluations/FE-BOUNDARY-2026-07-24-v1.1/reviews/claude-informal-preview-NON-BINDING.md",
      "research/**/generated/**"
    ],
    drafts: false
  },
  metadata: {
    mode: "compatible",
    strictInCI: false
  },
  output: {
    directory: "dist",
    catalog: "data/research-catalog.json",
    diagnostics: "data/build-diagnostics.json"
  }
};
