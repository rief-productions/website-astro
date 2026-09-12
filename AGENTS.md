# Repository Guidelines

This repo powers the rief-productions site using Astro 5, React 19, TailwindCSS 4, and pnpm. Use Node 20 LTS (18+ works) and pnpm.

## Project Structure & Module Organization
- `src/pages/` file‑based routes (kebab‑case files become URLs). Current routes: `/`, `/work/`, `/services/`, `/about/`, `/studio/`, `404`.
- `src/lib/` site data as typed modules: `site.ts` (brand, contact, nav), `projects.ts`, `capabilities.ts`, `skills.ts`. Prefer editing these over hardcoding copy in pages.
- `src/components/` reusable UI; prefer PascalCase (e.g., `Button.astro`). Starwind UI primitives live under `src/components/starwind/`; app‑specific composition lives directly in `src/components/`.
- `src/layouts/Layout.astro` is the single page shell and owns SEO, JSON‑LD, and the mobile nav.
- `src/assets/` processed assets; `public/` served as‑is.
- `documents/brand/logo-master.svg` is the original traced logo. Never serve it directly — it is ~4 MB. Regenerate the small derivatives with `node scripts/generate-assets.mjs`.
- Path alias: `@/*` → `src/*` (see `tsconfig.json`).

## Build, Test, and Development Commands
- `pnpm install` — install deps.
- `pnpm dev` — run dev server (http://localhost:4321).
- `pnpm build` — production build to `dist/`.
- `pnpm preview` — serve the built site locally.
- `pnpm astro check` — type/syntax checks; `pnpm astro add <pkg>` for integrations. Requires TypeScript 6.x (`astro check` does not yet support TS 7).
- `node scripts/generate-assets.mjs` — regenerate the optimized logo (`src/assets/logo-mark.png`), favicons, and the social preview card (`public/og-image.png`) from `documents/brand/logo-master.svg`.

## Deployment
- Netlify, static output. `netlify.toml` sets the build command, Node version, immutable caching for `/_astro/*`, and baseline security headers.
- `@astrojs/sitemap` emits `sitemap-index.xml`; `public/robots.txt` references it.

## Theming
- Light/dark tokens live in `src/styles/starwind.css` (`:root` and `.dark`). Prefer semantic tokens (`text-accent-text`, `bg-card`, `border-border`, `text-muted-foreground`) over raw palette colors so both modes work.
- `ThemeToggle.astro` owns the control, persistence, and OS-preference handling. A small `is:inline` script in `Layout.astro` applies the saved/system theme before first paint, and the toggle re-applies on `astro:after-swap` because view transitions replace root attributes.

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
