# Web App Plan

## Scope
`platform/apps/web-app` (product UI application).

## Purpose
- Track product architecture, user-facing feature plans, and performance priorities.
- Capture app-specific rollout and quality gates.

## Next Updates
- Define near-term feature roadmap and milestone slices.
- Document shared package dependencies (`ui`, `types`, auth/state primitives).

## Current State
- Dashboard shell implemented from Paper reference using two primary sections: sidebar and content.
- App routing uses TanStack Router route files under `platform/apps/web-app/src/routes/*`.
- Current routes include:
  - `/`
  - `/settings`
  - `/project-manager`
  - `/structural-toolkit`
  - `/calculation-docs`
  - `/ask-euler`
  - `/file-manager`
  - `/fee-manager`
- Cloudflare deployment is configured via `platform/apps/web-app/wrangler.jsonc` as static assets with SPA fallback.
