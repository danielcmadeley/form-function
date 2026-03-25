# Decisions Log

## 2026-03-18 - Platform package manager and orchestration
- Context: The platform workspace contains multiple apps and shared packages that need a single toolchain.
- Decision: Use Bun as package manager/runtime and Turborepo for task orchestration.
- Consequences: Root scripts and CI should run through Bun + Turbo; docs and onboarding should not mention pnpm.
- Alternatives considered: pnpm workspaces; npm workspaces.

## 2026-03-18 - Unified formatter/linter strategy
- Context: Apps were mixed between ESLint/Prettier and Biome, causing config drift.
- Decision: Standardize on root Biome config at `platform/biome.json` for app-level lint/format.
- Consequences: App scripts use `biome lint .` and `biome format --write .`; some legacy lint configs are removed.
- Alternatives considered: keep mixed toolchains per app.

## 2026-03-18 - App naming convention for product UI
- Context: Product app naming needed consistency with current repo structure.
- Decision: Use `apps/web-app` as the canonical product app path.
- Consequences: References, deploy docs, and route ownership docs should use `web-app`.
- Alternatives considered: keep legacy `apps/web` naming.

## 2026-03-25 - Platform planning split by app
- Context: Platform-level plans were too centralized to track app-specific changes and release preparation.
- Decision: Add app-scoped planning folders under `plans/platform/` for `api`, `docs`, `marketing`, and `web-app`.
- Consequences: New app-specific updates should be documented in the corresponding folder while shared concerns remain in `plans/platform/*` and `plans/_shared/*`.
- Alternatives considered: keep only top-level platform planning files.

## 2026-03-25 - Marketing deploy strategy for Cloudflare
- Context: `apps/marketing` is currently a static Astro site with client islands; adapter-based build introduced version-compatibility issues.
- Decision: Deploy marketing via Cloudflare Workers static assets (`wrangler` + `dist`) and avoid `@astrojs/cloudflare` adapter until Astro/adapter versions are aligned for SSR needs.
- Consequences: `wrangler.jsonc` and app scripts are the deployment source of truth; migration to adapter can be revisited if on-demand rendering is introduced.
- Alternatives considered: keep adapter enabled in current version set; deploy through Cloudflare Pages.
