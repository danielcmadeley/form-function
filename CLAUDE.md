# CLAUDE.md (Root)

## Collaboration Defaults
- Be concise and implementation-focused.
- Prefer concrete file-level proposals over abstract advice.
- When uncertain, propose one recommended option and one fallback.

## Execution Workflow
1. Read relevant workspace docs (`AGENTS.md`, nearest `plans/*` files).
2. Confirm scope and affected boundaries.
3. Implement the smallest safe change.
4. Run lint/type/test checks relevant to touched workspace.
5. Report what changed, why, and any follow-up risks.

## Planning Expectations
- For multi-step features, update:
  - `plans/<workspace>/current-sprint.md`
  - `plans/<workspace>/decisions.md` when tradeoffs are made
- Keep plans short and actionable.

## Safety Rules
- Never commit secrets.
- Avoid destructive git operations.
- Do not rewrite history unless explicitly requested.
