# Shared Architecture

## Repository Model
- Single repository with two workspace roots:
  - `engine/` (Python runtime, uv)
  - `platform/` (TypeScript Turborepo, Bun)
- Workspaces are loosely coupled through explicit HTTP contracts.

## Runtime Topology
```
Browser -> platform/apps/api (Hono on Workers) -> engine (FastAPI)
                                               -> /api/chat (SSE)
                                               -> /api/calcs/run (JSON)
                                               -> /api/export/pdf (binary or URL)
                                               -> /api/health
```

## Contract Ownership
- Source of TS API shapes: `platform/packages/types`.
- Python mirror models: `engine/app/models` (target layout).
- Sync strategy:
  - short term: manual sync + review checks
  - target: generate shared OpenAPI and validate both sides

## Content Strategy
- Goal: one source of truth for technical markdown content.
- Option A (preferred): separate content repository as submodule for both workspaces.
- Option B: ingestion pipeline publishes artifacts for both docs and search systems.

## Cross-Cutting Concerns
- Auth/session boundaries: edge API verifies session, engine trusts signed/internal calls.
- Observability: request IDs propagated across API -> engine.
- Error model: stable error envelope and consistent status codes.
- Deployment assumptions:
  - `platform/` deploys by app (docs/marketing/web-app/api)
  - `engine/` deploys independently as a containerized service
