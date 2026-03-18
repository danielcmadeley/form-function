# Form + Function — Project Structure

## Repository layout

Single repository with two workspace roots and a clear API contract between them.

```
form-function/
├── platform/          # Turborepo — all TypeScript apps + packages (Bun)
└── engine/            # Python service workspace (uv)
```

This document describes the target architecture while annotating places where the current repository already differs (for example: Bun in `platform/` and uv in `engine/`).

---

## 1. Platform (Turborepo)

Everything TypeScript lives here. Turbo handles task orchestration, caching, and dependency graph across all apps and packages.

```
platform/
├── turbo.json
├── package.json                    # Workspace root
├── bun.lock
├── .github/
│   └── workflows/
│       ├── ci.yml                  # Lint, type-check, test (all apps)
│       ├── deploy-marketing.yml    # CF Pages deploy on apps/marketing change
│       ├── deploy-web.yml          # CF Pages deploy on apps/web-app change
│       ├── deploy-docs.yml         # CF Pages / Vercel deploy on apps/docs change
│       └── deploy-api.yml          # CF Workers deploy on apps/api change
│
├── apps/
│   ├── marketing/                  # Astro site
│   │   ├── astro.config.ts
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── components/         # React islands
│   │   │   ├── layouts/
│   │   │   │   └── BaseLayout.astro
│   │   │   ├── pages/
│   │   │   │   ├── index.astro
│   │   │   │   ├── services.astro
│   │   │   │   ├── about.astro
│   │   │   │   └── blog/
│   │   │   │       ├── index.astro
│   │   │   │       └── [slug].astro
│   │   │   └── styles/
│   │   │       └── global.css
│   │   ├── content/
│   │   │   ├── blog/               # MDX blog posts
│   │   │   └── config.ts           # Astro content collections
│   │   └── public/
│   │       └── assets/
│   │
│   ├── web-app/                    # Vite + React PWA (main product)
│   │   ├── vite.config.ts
│   │   ├── package.json
│   │   ├── index.html
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── routes/
│   │   │   │   ├── __root.tsx
│   │   │   │   ├── index.tsx                   # Dashboard
│   │   │   │   ├── chat/
│   │   │   │   │   ├── index.tsx               # Chat list
│   │   │   │   │   └── $chatId.tsx             # Chat conversation
│   │   │   │   ├── projects/
│   │   │   │   │   ├── index.tsx               # Project list
│   │   │   │   │   ├── $projectId.tsx          # Project detail
│   │   │   │   │   └── $projectId.tasks.tsx    # Task board
│   │   │   │   ├── calcs/
│   │   │   │   │   ├── index.tsx               # Calc note list
│   │   │   │   │   └── $calcId.tsx             # Calc note editor
│   │   │   │   ├── tools/
│   │   │   │   │   ├── frame-2d.tsx            # 2D frame analysis
│   │   │   │   │   └── load-takedown.tsx       # 3D load takedown
│   │   │   │   └── settings/
│   │   │   │       └── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── chat/
│   │   │   │   │   ├── chat-panel.tsx
│   │   │   │   │   ├── message-list.tsx
│   │   │   │   │   └── source-citation.tsx
│   │   │   │   ├── editor/
│   │   │   │   │   ├── plate-editor.tsx        # Main editor setup
│   │   │   │   │   ├── editor-kit.tsx          # Plugin composition
│   │   │   │   │   └── plugins/
│   │   │   │   │       ├── parameter-kit.tsx
│   │   │   │   │       ├── python-kit.tsx
│   │   │   │   │       ├── design-check-kit.tsx
│   │   │   │   │       └── output-kit.tsx
│   │   │   │   ├── projects/
│   │   │   │   │   ├── project-card.tsx
│   │   │   │   │   ├── stage-tracker.tsx
│   │   │   │   │   └── task-board.tsx
│   │   │   │   ├── tools/
│   │   │   │   │   ├── frame-canvas.tsx
│   │   │   │   │   └── load-diagram.tsx
│   │   │   │   └── layout/
│   │   │   │       ├── sidebar.tsx
│   │   │   │       ├── header.tsx
│   │   │   │       └── app-shell.tsx
│   │   │   ├── lib/
│   │   │   │   ├── livestore/
│   │   │   │   │   ├── schema.ts               # Event definitions
│   │   │   │   │   ├── store.ts                # LiveStore setup
│   │   │   │   │   └── materialised-views.ts   # SQLite queries
│   │   │   │   ├── pyodide/
│   │   │   │   │   ├── worker.ts               # Pyodide Web Worker
│   │   │   │   │   └── bridge.ts               # Main thread ↔ worker messaging
│   │   │   │   ├── computation/
│   │   │   │   │   ├── dependency-graph.ts      # Reactive block evaluation
│   │   │   │   │   └── parameter-context.ts     # Shared variable scope
│   │   │   │   └── api/
│   │   │   │       ├── client.ts               # Typed API client
│   │   │   │       ├── chat.ts                 # Chat API helpers
│   │   │   │       └── calcs.ts                # Calc engine API helpers
│   │   │   ├── hooks/
│   │   │   │   ├── use-offline-status.ts
│   │   │   │   ├── use-collab-presence.ts
│   │   │   │   └── use-pyodide.ts
│   │   │   └── workers/
│   │   │       └── livestore-worker.ts          # SharedWorker for LiveStore
│   │   └── public/
│   │       ├── manifest.json                    # PWA manifest
│   │       └── sw.js                            # Service worker (generated)
│   │
│   ├── docs/                       # Fumadocs (Next.js)
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── (home)/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── docs/
│   │   │   │   │   └── [[...slug]]/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── api/
│   │   │   │       ├── search/
│   │   │   │       │   └── route.ts
│   │   │   │       └── chat/
│   │   │   │           └── route.ts
│   │   ├── content/
│   │   │   ├── en-1990/            # Basis of structural design
│   │   │   ├── en-1991/            # Actions on structures
│   │   │   ├── en-1992/            # Concrete
│   │   │   ├── en-1993/            # Steel
│   │   │   ├── en-1994/            # Composite
│   │   │   ├── en-1995/            # Timber
│   │   │   ├── en-1996/            # Masonry
│   │   │   ├── en-1997/            # Geotechnical
│   │   │   ├── en-1998/            # Seismic
│   │   │   ├── en-1999/            # Aluminium
│   │   │   ├── national-annexes/
│   │   │   ├── sci/                # Steel Construction Institute
│   │   │   ├── concrete-centre/
│   │   │   └── design-examples/
│   │   └── lib/
│   │       ├── source.ts           # Fumadocs content source config
│   │       └── typesense.ts        # Search client
│   │
│   └── api/                        # Hono on Cloudflare Workers
│       ├── package.json
│       ├── wrangler.toml
│       ├── src/
│       │   ├── index.ts            # Hono app entry
│       │   ├── routes/
│       │   │   ├── chat.ts         # Proxies to FastAPI for RAG
│       │   │   ├── calcs.ts        # Proxies to FastAPI for calculations
│       │   │   ├── export.ts       # PDF/markdown export endpoints
│       │   │   ├── sync.ts         # LiveStore sync endpoints
│       │   │   └── auth.ts         # Better Auth routes
│       │   ├── middleware/
│       │   │   ├── auth.ts         # Session validation
│       │   │   └── rate-limit.ts   # Per-user rate limiting
│       │   └── durable-objects/
│       │       ├── calc-note-room.ts    # Y.js WebSocket relay per note
│       │       └── sync-actor.ts        # LiveStore sync per user
│       └── migrations/             # D1 migrations
│
├── packages/
│   ├── ui/                         # Shared UI components
│   │   ├── package.json
│   │   └── src/
│   │       ├── components/         # shadcn/ui based components
│   │       │   ├── button.tsx
│   │       │   ├── dialog.tsx
│   │       │   ├── input.tsx
│   │       │   └── ...
│   │       └── index.ts
│   │
│   ├── db/                         # Drizzle schema + shared DB utilities
│   │   ├── package.json
│   │   └── src/
│   │       ├── schema/
│   │       │   ├── users.ts
│   │       │   ├── projects.ts
│   │       │   ├── calc-notes.ts
│   │       │   └── chat-history.ts
│   │       ├── migrations/
│   │       └── index.ts
│   │
│   ├── auth/                       # Better Auth shared config
│   │   ├── package.json
│   │   └── src/
│   │       ├── config.ts           # Auth config used by api + web
│   │       └── index.ts
│   │
│   ├── types/                      # Shared TypeScript types
│   │   ├── package.json
│   │   └── src/
│   │       ├── api.ts              # API request/response types
│   │       ├── eurocode.ts         # Clause, document, chunk types
│   │       ├── calc-note.ts        # Block types, parameter types
│   │       ├── project.ts          # Project, task, stage types
│   │       └── index.ts
│   │
│   ├── plate-plugins/              # Custom Plate.js engineering blocks
│   │   ├── package.json
│   │   └── src/
│   │       ├── parameter/
│   │       │   ├── parameter-plugin.ts
│   │       │   ├── parameter-element.tsx
│   │       │   └── index.ts
│   │       ├── python/
│   │       │   ├── python-plugin.ts
│   │       │   ├── python-element.tsx
│   │       │   └── index.ts
│   │       ├── design-check/
│   │       │   ├── design-check-plugin.ts
│   │       │   ├── design-check-element.tsx
│   │       │   └── index.ts
│   │       ├── output/
│   │       │   ├── output-plugin.ts
│   │       │   ├── output-element.tsx
│   │       │   └── index.ts
│   │       └── index.ts
│   │
│   ├── eurocode-utils/             # Clause parsing and metadata
│   │   ├── package.json
│   │   └── src/
│   │       ├── clause-parser.ts    # Extract clause numbers from text
│   │       ├── doc-links.ts        # Build deep links to docs app
│   │       ├── metadata.ts         # Shared metadata types/constants
│   │       └── index.ts
│   │
│   └── config/                     # Shared config (tsconfig, eslint, tailwind)
│       ├── tsconfig/
│       │   ├── base.json
│       │   ├── react.json
│       │   └── next.json
│       ├── eslint/
│       │   └── base.js
│       └── tailwind/
│           └── base.ts             # Shared Tailwind preset
│
└── tooling/
    └── scripts/
        ├── ingest.ts               # Triggers ingestion on engine service
        └── seed-typesense.ts       # Seeds Typesense from processed content
```

---

## 2. Engine (Standalone Python)

Everything Python lives here. Managed with `uv`. Deployed as a Docker container on Railway.

```
engine/
├── pyproject.toml                  # Dependencies (uv)
├── Dockerfile
├── .github/
│   └── workflows/
│       └── deploy.yml              # Build + push to Railway on main
│
├── app/
│   ├── main.py                     # FastAPI app entry
│   ├── config.py                   # Environment config (Qdrant URL, API keys, etc.)
│   │
│   ├── api/
│   │   ├── __init__.py
│   │   ├── chat.py                 # POST /api/chat — streaming RAG endpoint
│   │   ├── calcs.py                # POST /api/calcs/run — design check execution
│   │   ├── export.py               # POST /api/export/pdf — WeasyPrint PDF generation
│   │   └── health.py               # GET /api/health
│   │
│   ├── rag/
│   │   ├── __init__.py
│   │   ├── chain.py                # LangChain retrieval chain
│   │   ├── graph.py                # LangGraph agent with tool routing
│   │   ├── tools.py                # Tool definitions (calc runner, docs linker, notepad creator)
│   │   ├── prompts.py              # System prompts and prompt templates
│   │   ├── retriever.py            # Qdrant retriever with metadata filtering
│   │   └── embeddings.py           # Embedding model config
│   │
│   ├── calcs/
│   │   ├── __init__.py
│   │   ├── runner.py               # Dispatches to appropriate check module
│   │   ├── steel/
│   │   │   ├── member_design.py    # EC3 member checks (bending, LTB, compression)
│   │   │   ├── connections.py      # Connection design
│   │   │   └── sections.py         # Section property lookups
│   │   ├── concrete/
│   │   │   ├── beam_design.py      # EC2 beam design
│   │   │   ├── column_design.py
│   │   │   └── slab_design.py
│   │   ├── timber/
│   │   │   └── member_design.py    # EC5 member checks
│   │   └── loading/
│   │       ├── combinations.py     # EC0 load combinations
│   │       └── takedown.py         # Gravity load takedown
│   │
│   ├── export/
│   │   ├── __init__.py
│   │   ├── pdf.py                  # WeasyPrint rendering
│   │   ├── handcalcs_formatter.py  # handcalcs LaTeX step formatting
│   │   └── templates/
│   │       ├── base.html           # Branded PDF template
│   │       ├── calc-note.html      # Calc note specific layout
│   │       └── styles.css          # Print stylesheet
│   │
│   ├── ingest/
│   │   ├── __init__.py
│   │   ├── pipeline.py             # Main ingestion orchestrator
│   │   ├── chunker.py              # Structure-aware markdown chunker
│   │   ├── embedder.py             # Batch embedding generation
│   │   ├── qdrant_loader.py        # Push chunks + vectors to Qdrant
│   │   ├── typesense_loader.py     # Index chunks to Typesense
│   │   └── clause_indexer.py       # Build clause index for D1
│   │
│   └── models/
│       ├── __init__.py
│       ├── chunk.py                # Chunk dataclass with metadata
│       ├── calc_request.py         # Pydantic models for calc API
│       └── chat_request.py         # Pydantic models for chat API
│
├── content/                        # Source markdown (git submodule or symlink)
│   ├── eurocodes/
│   ├── design-examples/
│   └── sci/
│
├── tests/
│   ├── test_chunker.py
│   ├── test_retriever.py
│   ├── test_calcs/
│   │   ├── test_steel_member.py
│   │   └── test_load_combinations.py
│   └── test_export.py
│
└── scripts/
    ├── ingest_all.py               # Run full ingestion pipeline
    ├── ingest_single.py            # Ingest one document
    └── eval_retrieval.py           # Evaluate retrieval quality
```

---

## How the two workspaces communicate

The API contract between `platform/` and `engine/` is simple HTTP. The Hono API app proxies requests to FastAPI.

```
Browser → Hono (CF Workers) → FastAPI (Railway)
                                  ├── /api/chat      (streaming SSE)
                                  ├── /api/calcs/run (JSON request/response)
                                  ├── /api/export/pdf (returns PDF binary or R2 URL)
                                  └── /api/health    (healthcheck)
```

### Shared contract

The `packages/types` package in `platform/` defines the TypeScript types for all API requests and responses. The `engine/` workspace mirrors these as Pydantic models in `app/models/`. Keep these in sync manually or use a shared OpenAPI spec generated from FastAPI's automatic schema.

### Content sharing

The processed Eurocode markdown needs to be accessible by both workspaces:

**Option A (recommended): Git submodule.** The `content/` directory is a separate small repository that both `platform/` and `engine/` reference as a submodule. When you update a document, push to the content repository, then both workspaces pull the latest.

**Option B: Build artifact.** The engine's ingestion pipeline processes the markdown and pushes the outputs to Typesense, Qdrant, and D1 directly. The Fumadocs content directory in the platform workspace gets the same markdown files via a CI step that copies from the content source.

Either way, the principle is: one source of truth for document content, consumed by both workspaces.

---

## Turborepo task graph

```json
// turbo.json
{
  "$schema": "https://turborepo.dev/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "format": {
      "dependsOn": ["^format"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    }
  }
}
```

Turbo handles the dependency graph automatically. When you run `turbo build`, it knows that app and package dependencies (for example `apps/web-app` -> shared packages) must build in order, with caching across tasks.

---

## Development workflow

### Running locally

```bash
# Terminal 1: Platform (all TS apps + packages)
cd platform
bun install
bun run dev                 # Starts all apps in parallel via Turbo

# Terminal 2: Engine (Python service)
cd engine
uv sync                     # Install Python dependencies
uv run python main.py       # Current entrypoint
# target once FastAPI app package exists:
# uv run uvicorn app.main:app --reload --port 8000

# Terminal 3: Local services
docker compose up           # Qdrant + Typesense (local instances)
```

### docker-compose.yml (for local dev services)

```yaml
# Lives in `engine/` for convenience
services:
  qdrant:
    image: qdrant/qdrant
    ports:
      - "6333:6333"
    volumes:
      - qdrant-data:/qdrant/storage

  typesense:
    image: typesense/typesense:27.1
    ports:
      - "8108:8108"
    environment:
      TYPESENSE_API_KEY: dev-key
      TYPESENSE_DATA_DIR: /data
    volumes:
      - typesense-data:/data

volumes:
  qdrant-data:
  typesense-data:
```
