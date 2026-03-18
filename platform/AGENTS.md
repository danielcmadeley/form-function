# AGENTS.md (Platform)

## Scope
TypeScript Turborepo workspace (`/platform`).

## Apps
- `apps/docs` (Next.js + Fumadocs)
- `apps/marketing` (Astro)
- `apps/web-app` (Vite React)

## Standards
- Biome is centralized at `platform/biome.json`.
- Use workspace scripts over ad-hoc commands when possible.
- Keep app-specific conventions inside each app folder.

## Commands
- Root:
  - `cd platform && bun run dev`
  - `cd platform && bun run lint`
  - `cd platform && bun run format`
  - `cd platform && bun run build`
- Targeted:
  - `cd platform && turbo run <task> --filter=<app>`

## Change Management
- If changing shared tooling or config (Turbo, Biome, tsconfig patterns), log rationale in:
  - `../plans/platform/decisions.md`
