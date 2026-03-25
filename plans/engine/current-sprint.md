# Current Sprint

## Objective
Set the engine foundation for a uv-managed Python service with a clear API boundary to platform.

## Tasks
- [ ] Define target FastAPI module layout in `plans/engine/architecture.md`.
- [ ] Document endpoint contracts for chat, calcs, export, and health.
- [ ] Align model ownership with `platform/packages/types` and define drift checks.
- [ ] Define local dev workflow for uv runtime and local backing services.

## Risks / Blockers
- Contract drift between TS request/response types and Python models.
- Ingestion/search dependencies not available in local environment.

## Exit Criteria
- Engine architecture and runtime workflow are documented and actionable.
- Endpoint contract ownership and sync responsibilities are explicit.
