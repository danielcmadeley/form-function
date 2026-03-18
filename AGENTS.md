# AGENTS.md (Root)

## Repository Overview
This repository contains two primary workspaces:

- `engine/`: Python runtime and execution engine.
- `platform/`: TypeScript Turborepo containing:
  - `apps/docs` (Next.js docs app)
  - `apps/marketing` (Astro marketing site)
  - `apps/web-app` (Vite React web app)
  - shared packages under `packages/*`

## Primary Goals
- Keep engine and platform loosely coupled via explicit interfaces.
- Maintain reliable local development ergonomics.
- Preserve consistency in linting, formatting, and CI behavior.

## Working Rules
1. Prefer minimal, targeted changes.
2. Do not refactor unrelated files during feature work.
3. Validate changes with workspace-local commands first, then root-level checks.
4. Add or update docs in `plans/` when architecture or behavior changes.
5. Treat `plans/*/decisions.md` as the source of truth for tradeoffs.

## Architecture Boundaries
- `engine/` should not import platform runtime code.
- `platform/` should interact with engine via documented API contracts.
- Cross-workspace contracts must be versioned or documented in `plans/_shared/architecture.md`.

## Validation Commands
- Python engine:
  - `cd engine && python main.py`
- Platform monorepo:
  - `cd platform && bun run lint`
  - `cd platform && bun run format`
  - `cd platform && bun run build`

## Where to Put New Context
- Shared concepts: `plans/_shared/*`
- Python/runtime details: `plans/engine/*`
- Frontend/app/product details: `plans/platform/*`
