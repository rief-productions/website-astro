export interface SkillGroup {
  name: string;
  items: string[];
}

/** Technologies drawn from documented, hands-on project experience. */
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "PHP", "Go"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Vite", "TanStack Router"],
  },
  {
    name: "Backend & data",
    items: [
      "Node.js",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "MySQL",
    ],
  },
  {
    name: "AI & agents",
    items: ["LangGraph", "LangChain", "RAG", "MCP", "Agents", "DeepSeek"],
  },
  {
    name: "Infrastructure",
    items: [
      "AWS",
      "Terraform",
      "AWS CDK",
      "Docker",
      "GitHub Actions",
      "Netlify",
      "Railway",
    ],
  },
  {
    name: "Integrations",
    items: ["Stripe", "Auth0 / Okta", "Clerk", "Algolia", "HubSpot", "Headless CMS"],
  },
];
