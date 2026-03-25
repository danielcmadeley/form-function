# Decisions Log

## 2026-03-18 - Python environment management
- Context: The engine workspace needs reproducible environment and dependency management.
- Decision: Standardize on uv for dependency resolution and command execution.
- Consequences: Team workflows and docs use `uv sync` and `uv run ...`; avoid introducing parallel package managers.
- Alternatives considered: Poetry; pip + venv scripts.

## 2026-03-18 - Engine runtime separation
- Context: Platform and engine evolve independently and deploy to different runtime targets.
- Decision: Keep engine as a standalone Python service boundary consumed over HTTP by `platform/apps/api`.
- Consequences: Avoid direct runtime coupling; maintain explicit request/response contract documentation.
- Alternatives considered: embedding Python runtime logic inside platform services.
