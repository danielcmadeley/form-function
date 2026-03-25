# Current Sprint

## Objective
Establish the platform workspace foundation so all four apps share one consistent developer workflow.

## Tasks
- [ ] Confirm app directory contract (`apps/marketing`, `apps/docs`, `apps/web-app`, `apps/api`).
- [ ] Ensure root and per-app scripts align with Turbo tasks (`dev`, `build`, `lint`, `format`, `check-types`).
- [ ] Define initial `packages/types` API envelopes for chat, calcs, export, and health.
- [ ] Document edge API responsibilities and engine proxy boundary in `plans/platform/architecture.md`.

## Risks / Blockers
- API shape drift between platform types and engine models.
- Divergence between planned package layout and implementation order.

## Exit Criteria
- `platform/` can run core workflows with Bun + Turbo without config drift.
- Architecture docs are in place for apps, package boundaries, and edge API responsibilities.
