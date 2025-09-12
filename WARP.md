# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an Astro 5 project called "rief-productions" that uses:
- **Astro 5.13.7** as the primary framework
- **React 19** integration for interactive components
- **TailwindCSS 4** for styling (configured via Vite plugin)
- **TypeScript** with strict configuration
- **pnpm** as the package manager

## Development Commands

All commands are run from the project root:

```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Build for production (outputs to ./dist/)
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]

# Get Astro CLI help
pnpm astro -- --help
```

### Common Astro CLI Commands

```bash
# Add integrations or adapters
pnpm astro add [integration]

# Type-check the project
pnpm astro check

# Generate types for content collections
pnpm astro sync

# Start dev server with specific port
pnpm astro dev --port 3000

# Build with specific output directory
pnpm astro build --outDir custom-dist
```

## Architecture Overview

### Project Structure
```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable Astro components
├── layouts/         # Layout components (page templates)
├── pages/           # File-based routing (each file = route)
└── styles/          # Global styles and TailwindCSS imports
```

### Key Architectural Patterns

**File-based Routing**: Pages in `src/pages/` automatically become routes. `index.astro` becomes the homepage.

**Component Architecture**: 
- Astro components (.astro) handle static content and server-side rendering
- React components can be used for interactive client-side functionality
- Layout components in `src/layouts/` provide consistent page structure

**Styling Strategy**:
- TailwindCSS 4 integrated via Vite plugin (not traditional config file)
- Global styles imported via `src/styles/global.css`
- Component-scoped styles using Astro's `<style>` blocks
- TailwindCSS imported with `@import "tailwindcss"` syntax

**Asset Handling**:
- Assets in `src/assets/` are processed and optimized by Astro
- Public assets go in `public/` directory for direct access
- Image imports provide optimized src URLs

### Integration Configuration

**React Integration**: Configured in `astro.config.mjs` with JSX runtime support in TypeScript config.

**TailwindCSS Integration**: Uses the new Vite plugin approach rather than traditional PostCSS setup, configured directly in the Vite plugins array.

## Development Notes

- The project uses Astro's strict TypeScript configuration
- React components require explicit JSX runtime configuration
- TailwindCSS 4 uses a different setup than v3 - no separate config file needed
- Development server runs on port 4321 by default
- Build outputs to `dist/` directory

## File Creation Guidelines

**New Pages**: Create `.astro` files in `src/pages/` - they automatically become routes.

**Components**: 
- Use `.astro` for static/server-rendered components
- Use `.tsx` for interactive React components
- Place in `src/components/` directory

**Layouts**: Create reusable page templates in `src/layouts/` and import into pages.

**Styles**: Add global styles to `src/styles/global.css` or use component-scoped `<style>` blocks.
