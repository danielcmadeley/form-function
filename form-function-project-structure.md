# Form + Function — Project Structure (Index)

This file is now an index. Detailed architecture and implementation planning live under `plans/`.

## Canonical planning docs

- Shared system architecture: `plans/_shared/architecture.md`
- Platform architecture (Bun + Turborepo): `plans/platform/architecture.md`
- Engine architecture (Python + uv): `plans/engine/architecture.md`

## Delivery plans

- Platform roadmap: `plans/platform/roadmap.md`
- Platform current sprint: `plans/platform/current-sprint.md`
- Platform decisions: `plans/platform/decisions.md`
- Engine roadmap: `plans/engine/roadmap.md`
- Engine current sprint: `plans/engine/current-sprint.md`
- Engine decisions: `plans/engine/decisions.md`

## Working conventions

- Repository model: single repo with `platform/` and `engine/` workspaces.
- Platform tooling: Bun + Turborepo + Biome.
- Engine tooling: uv-managed Python workspace.
- Cross-workspace changes and tradeoffs must be captured in `plans/*/decisions.md`.
