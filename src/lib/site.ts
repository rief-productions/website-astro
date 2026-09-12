export const site = {
  name: "Rief Productions",
  legalName: "Rief Productions LLC",
  url: "https://riefproductions.com",
  title: "Rief Productions | Software Engineering & Technology Consulting",
  description:
    "Senior software engineering and technology consulting for full-stack applications, backend systems, APIs, AI workflows, automation, and scalable architecture.",
  ogImage: "/og-image.png",
  // GA4 measurement ID. Public by design (it ships in the page source), so no
  // env var is required. Override with PUBLIC_GA_ID if ever needed.
  analyticsId: "G-9MV375RHQC",
  email: "hello@riefproductions.com",
  location: "United States",
  availability: "Available for contract and consulting engagements.",
} as const;

export const founder = {
  name: "Andrew Riefenstahl",
  role: "Senior Software Engineer",
  url: "https://andrewriefenstahl.com",
  linkedin: "https://www.linkedin.com/in/andrewriefenstahl/",
  github: "https://github.com/riefer02",
  twitter: "https://twitter.com/riefer02",
} as const;

export const nav = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/#contact" },
] as const;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
