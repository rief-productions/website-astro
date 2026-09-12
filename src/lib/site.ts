export const site = {
  name: "Rief Productions",
  legalName: "Rief Productions LLC",
  url: "https://riefproductions.com",
  title: "Rief Productions | Software Engineering & Technology Consulting",
  description:
    "Senior software engineering and technology consulting for full-stack applications, backend systems, APIs, AI workflows, automation, and scalable architecture.",
  ogImage: "/og-image.png",
  email: "hello@riefproductions.com",
  location: "United States",
  availability:
    "Available for contract and consulting engagements, and open to select full-time senior software engineering roles.",
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
