export interface Capability {
  id: string;
  title: string;
  summary: string;
  items: string[];
}

/** Primary engineering capabilities. */
export const capabilities: Capability[] = [
  {
    id: "application-engineering",
    title: "Application Engineering",
    summary: "Products, platforms, and the interfaces people use every day.",
    items: [
      "Full-stack web applications",
      "Internal platforms and dashboards",
      "Customer-facing products and portals",
      "Modern frontend architecture",
      "Design-system and component foundations",
    ],
  },
  {
    id: "backend-systems",
    title: "Backend & Systems",
    summary:
      "The APIs, data, and infrastructure behind an application — built to hold up in production.",
    items: [
      "APIs and service design",
      "Authentication and authorization",
      "Integrations and third-party services",
      "Data workflows and background processing",
      "Event-driven systems",
      "Databases, caching, and search",
      "Cloud infrastructure",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    summary:
      "AI where it earns its place, wired into real workflows rather than bolted on.",
    items: [
      "LLM applications",
      "Retrieval-augmented generation (RAG)",
      "AI agents and orchestration",
      "Workflow automation",
      "MCP and tool integrations",
      "Structured data pipelines",
      "Developer productivity tooling",
    ],
  },
  {
    id: "architecture-modernization",
    title: "Architecture & Modernization",
    summary:
      "Technical direction and the unglamorous work that keeps systems healthy over time.",
    items: [
      "Technical planning and system design",
      "Migrations and legacy modernization",
      "Performance and reliability",
      "Security and accessibility",
      "Developer experience and tooling",
    ],
  },
];

/** Secondary, non-engineering services. Kept deliberately out of the core pitch. */
export const additionalCapabilities: Capability[] = [
  {
    id: "audio",
    title: "Audio Production",
    summary: "Recording, editing, and engineering.",
    items: [
      "Mixing and mastering",
      "Podcast cleanup and editing",
      "Sound design and asset libraries",
      "Voiceover capture and editing",
    ],
  },
  {
    id: "design",
    title: "Design",
    summary: "Brand, UI, and visual systems.",
    items: [
      "Brand identity and style guides",
      "Web and UI assets",
      "Iconography",
      "Marketing collateral and layouts",
    ],
  },
  {
    id: "content",
    title: "Content & Editorial",
    summary: "Content operations and editorial support.",
    items: [
      "Content pipelines and CMS integration",
      "Editorial workflows and curation",
      "QA, accessibility, and performance checks",
    ],
  },
];
