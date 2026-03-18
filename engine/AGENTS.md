# AGENTS.md (Engine)

## Scope
Python engine workspace (`/engine`).

## Tech
- Python project managed via `pyproject.toml`.
- Entry point currently includes `main.py`.

## Rules
- Keep runtime logic deterministic and testable.
- Isolate side effects at boundaries (I/O, network, subprocess).
- Favor typed function signatures and explicit error handling.

## Commands
- Run: `cd engine && python main.py`
- Environment: use local `.python-version` and project tooling defined in `pyproject.toml`.

## Integration Contract
- Any API/protocol consumed by `platform/` must be documented in:
  - `../plans/_shared/architecture.md`
  - `../plans/engine/decisions.md` (if changed)
