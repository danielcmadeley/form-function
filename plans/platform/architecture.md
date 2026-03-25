# Platform Architecture

## Scope
`platform/` is a Bun-based Turborepo for all TypeScript applications and shared packages.

## Apps
- `apps/marketing`: Astro marketing website.
- `apps/docs`: Next.js + Fumadocs documentation site.
- `apps/web-app`: Vite React product app.
- `apps/api`: Hono edge API that fronts auth and engine-facing endpoints.

## Planning Structure
- `plans/platform/marketing/*`: marketing app planning, release notes, and deployment decisions.
- `plans/platform/docs/*`: documentation app planning and content/search integration notes.
- `plans/platform/web-app/*`: product app planning and feature architecture notes.
- `plans/platform/api/*`: API app planning and contract/runtime notes.

## Shared Packages (Target)
- `packages/ui`: shared UI primitives.
- `packages/types`: cross-app and API contract types.
- `packages/auth`: auth configuration shared by web and api.
- `packages/db`: schema and database utilities.
- `packages/plate-plugins`, `packages/eurocode-utils`, `packages/config` as domain/shared tooling packages.

## Build and Task Graph
- Orchestrator: Turborepo (`platform/turbo.json`).
- Package manager: Bun (`platform/package.json`, `platform/bun.lock`).
- Core tasks:
  - `dev` (persistent, uncached)
  - `build`
  - `lint`
  - `format`
  - `check-types`

## Standards
- Formatting/linting: Biome at `platform/biome.json`.
- App/package scripts should be runnable independently and via Turbo.
- Shared package boundaries should be respected; avoid app-to-app imports.

## External Integrations (Target)
- Cloudflare Workers for `apps/api`.
- Docs search integration (Typesense/Qdrant-backed flows).
- Engine proxy routes for chat/calcs/export.
