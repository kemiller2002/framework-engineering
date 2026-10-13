// Declared conformance inventory for visual-engineering/UI-LAYOUT-INTERACTION@1.0.0
// (pinned at visual-engineering 8da8fbc) for framework.echelonfoundry.com, the
// research site this repository generates with research-publisher
// (kemiller2002/research-publisher@c620064, Astro + Pagefind). The page
// templates, styles and search UI belong to research-publisher; this
// repository owns the content and configuration. Data only.

export const STANDARD = Object.freeze({ id: "visual-engineering/UI-LAYOUT-INTERACTION", version: "1.0.0", source: "kemiller2002/visual-engineering@8da8fbc" });

export const GENERATOR = "kemiller2002/research-publisher@c620064";

const link = name => ({ role: "link", name });

const navigate = (id, name, destination, scope) =>
  ({ id, control: link(name), kind: "navigate", destination, scope, intent: `Navigate to ${destination}`, expectedOutcome: `URL becomes ${destination} and the destination's level-one heading is shown` });

// Content-driven links, declared by destination pattern: every rendered
// instance must match and its own href must resolve.
const linkClass = (id, hrefPattern, intent) =>
  ({ id, control: { role: "link", name: `/${hrefPattern.source}/ (href)` }, kind: "class", hrefPattern, intent, expectedOutcome: "Every instance has an accessible name and its href resolves (HTTP 200); the first instance is clicked and lands on its destination" });

export const RESEARCH_SAMPLE = "/research/constitution-325ab1fb/";

export const ROUTES = Object.freeze([
  { id: "home", path: "/", heading: "Find the thinking behind the work." },
  { id: "search", path: "/search/", heading: "Find research quickly" },
  { id: "collections", path: "/collections/artifact-type/", heading: "Artifact Types" },
  { id: "research", path: RESEARCH_SAMPLE, heading: null },
  { id: "not-found", path: "/404.html", heading: "Page not found" }
]);

// The header renders on every page; the link to the current section is
// omitted on that section's own page (research-publisher behaviour).
export const CHROME = Object.freeze([
  { id: "skip-link", control: link("Skip to content"), kind: "anchor", destination: "#main", intent: "Move to #main", expectedOutcome: "URL hash becomes #main and main is in view" },
  navigate("brand-home", "Framework Engineering Research", "/", "banner"),
  { ...navigate("nav-overview", "Overview", "/", "primary"), optional: true },
  { ...navigate("nav-search", "Search", "/search/", "primary"), optional: true },
  { ...navigate("nav-collections", "Collections", "/collections/artifact-type/", "primary"), optional: true }
]);

export const SURFACES = Object.freeze([
  { id: "chrome", path: "/* (shared header on every page)", kind: "catalog", actions: CHROME, groups: [] },
  { id: "home", path: "/", kind: "catalog", actions: [
    navigate("home-search-all", "Search all research", "/search/", "main"),
    navigate("home-browse", "Browse by collection", "/collections/artifact-type/", "main"),
    navigate("home-artifact-types", "View artifact types", "/collections/artifact-type/", "main"),
    navigate("home-research-areas", "View research areas", "/collections/research-area/", "main"),
    navigate("home-purposes", "View reader purposes", "/collections/purpose/", "main"),
    navigate("home-search-index", "Search the full index", "/search/", "main"),
    linkClass("home-recent-document", /^\/research\/[^/]+\/$/, "Open a recently updated research document")
  ], groups: [] },
  { id: "search", path: "/search/", kind: "catalog", actions: [
    { id: "search-submit", control: { role: "button", name: "Search" }, kind: "search", intent: "Run a client-side Pagefind query with the selected filters", expectedOutcome: "The status line reports the number of results and the result list shows them; a query with no match reports \"0 results\" and lists nothing", resetStrategy: "Reload /search/ (no state persists)" }
  ], groups: [] },
  { id: "collections", path: "/collections/artifact-type/", kind: "catalog", actions: [
    linkClass("collection-value", /^\/collections\/artifact-type\/[^/]+\/$/, "Open the documents of one artifact type")
  ], groups: [] },
  { id: "research", path: `${RESEARCH_SAMPLE} (representative research document)`, kind: "catalog", actions: [
    { ...linkClass("research-toc", /^#[a-z0-9-]+$/, "Jump to a section from the document's table of contents"), kind: "anchor-class", expectedOutcome: "Every instance targets an element with that id; the first instance is clicked, the URL hash changes and the section is in view" }
  ], groups: [] },
  { id: "not-found", path: "/404.html", kind: "catalog", actions: [], groups: [] }
]);

export const surfaceForRoute = route => SURFACES.find(surface => surface.id === route.id);

export const declaredActionsFor = route => [
  ...CHROME.map(action => ({ ...action, surfaceId: "chrome" })),
  ...(surfaceForRoute(route)?.actions ?? []).map(action => ({ ...action, surfaceId: route.id }))
];

// Defects that originate in research-publisher (GENERATOR). The suite marks
// the affected assertions as expected failures (test.fail), so the evidence
// records them as "fail" and CI turns red once the generator is fixed and the
// expectation must be removed. They are not repaired locally.
export const UPSTREAM_DEFECTS = Object.freeze({
  "search-form-overflow-768": "ULI-L05/L09: /search/ form (query, three selects, Search) does not wrap at 768px; document scrollWidth 875 > 768",
  "research-duplicate-h1": "Research document pages render the document title as h1 and the Markdown body's own h1 again (1213 of 1254 generated research pages have two h1)",
  "text-scale-narrow": "ULI-L05: at 200% default text size, 320px and 390px widths, headings, lede, form labels, the Search button and list markers escape their clipping containers (/, /search/, collections and research pages; /404.html passes)",
  "home-kicker-mislabel": "The home page kicker reads \"Visual Engineering research archive\" on the Framework Engineering site"
});
