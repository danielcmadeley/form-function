# Engine Architecture

## Scope
`engine/` is the Python computation and retrieval runtime, managed with uv.

## Runtime Responsibilities (Target)
- FastAPI service for:
  - chat/RAG endpoints
  - engineering calculation execution
  - export generation (PDF/markdown)
  - health and operational checks
- ingestion pipeline for chunking, embedding, and index loading.

## Planned Module Layout
```
engine/
  app/
    api/
    rag/
    calcs/
    export/
    ingest/
    models/
  tests/
  scripts/
```

## Tooling
- Package/dependency management: uv (`pyproject.toml`).
- Current entrypoint: `main.py`.
- Target runtime entrypoint: FastAPI app module (`app.main:app`).

## Data and Indexing (Target)
- Retrieval/index services: Qdrant + Typesense.
- Content ingestion supports shared documentation source used by platform docs and search.

## Integration Contract
- Receives proxied requests from `platform/apps/api`.
- Contract models mirror `platform/packages/types`.
- Any breaking API or schema changes must be recorded in `plans/engine/decisions.md` and `plans/_shared/architecture.md`.
