# Repository Guidelines

This repo powers the rief-productions site using Astro 5, React 19, TailwindCSS 4, and pnpm. Use Node 20 LTS (18+ works) and pnpm.

## Project Structure & Module Organization
- `src/pages/` file‑based routes (kebab‑case files become URLs).
- `src/components/` reusable UI; prefer PascalCase (e.g., `Button.astro`). Starwind UI primitives live under `src/components/starwind/`.
- `src/layouts/` shared page shells; `src/styles/` global/Tailwind entry points.
- `src/assets/` processed assets; `public/` served as‑is.
- Path alias: `@/*` → `src/*` (see `tsconfig.json`).

## Build, Test, and Development Commands
- `pnpm install` — install deps.
- `pnpm dev` — run dev server (http://localhost:4321).
- `pnpm build` — production build to `dist/`.
- `pnpm preview` — serve the built site locally.
- `pnpm astro check` — type/syntax checks; `pnpm astro add <pkg>` for integrations.

## Component Library (Starwind)
- Docs: https://starwind.dev/docs/getting-started/
- Config: `starwind.config.json` controls the catalog and target dir (`componentDir: "src/components"`). Generated primitives live in `src/components/starwind/`.
- Add/Update via pnpm dlx:
  - `pnpm dlx starwind@latest add button select` — generate components.
  - `pnpm dlx starwind@latest update button` — update to latest (overwrites edits).
  - `pnpm dlx starwind@latest remove button` — remove component files.
  - Import example: `import { Button } from "@/components/starwind/button"`.
- Extension pattern: create thin wrappers in `src/components/` (outside `starwind/`) for app‑specific variants and composition.

## Docs & Research
- Astro docs MCP tool is available to this agent for up‑to‑date framework guidance. When in doubt about APIs or config, query the official Astro docs via the MCP tool before changing build or integration settings.

## Coding Style & Naming Conventions
- 2‑space indent, TypeScript strict, ES modules.
- Components: PascalCase (`CardHeader.astro`), pages: kebab‑case (`blog-post.astro`).
- Prefer Tailwind utilities; put global styles in `src/styles/global.css` and framework styles in `src/styles/starwind.css`.
- Keep imports using `@/` alias for local modules.

## Testing Guidelines
- No unit test runner is configured yet. Run `pnpm astro check` and smoke‑test pages locally.
- If adding tests, prefer Vitest + Testing Library; co‑locate as `*.test.ts(x)` next to source. Aim for meaningful coverage on logic‑heavy modules.

## Commit & Pull Request Guidelines
- History has no established convention; use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- PRs: concise description, linked issue, and screenshots/GIFs for UI changes. Keep PRs small and focused; update docs when modifying structure or scripts.

## Security & Configuration Tips
- Never commit secrets. Use `.env`/`.env.production` (already git‑ignored). Client‑exposed vars must be prefixed `PUBLIC_` (Vite/Astro rule).
- Avoid editing third‑party generated primitives under `src/components/starwind/`; extend via wrappers to ease upgrades.

## Agent‑Specific Notes
- This file applies repo‑wide. Prefer surgical diffs, keep patches minimal, and update this guide when adding commands, paths, or tooling.
