# Marketing Plan

## Scope
`platform/apps/marketing` (Astro + Tailwind + React islands).

## Current State
- Landing page rebuilt from Paper design references using section-level Astro components.
- Interactive header behavior implemented with a React island (`lenis` + `motion`):
  - Transparent over hero.
  - Neutral background after hero.
  - Hide on scroll down, reveal on scroll up.
- Heatmap strip implemented with `@paper-design/shaders-react` using `/public/logo.svg` and Paper-matched parameters.
- Initial page-load overlay now runs at layout level (pre-paint) and appears only on first session load to avoid content flash before loader.
- Browser tab icon now uses `/public/logo.svg` (`rel="icon"` and `rel="shortcut icon"`).

## Design Constraints
- Core palette constrained to the two Paper tones:
  - `oklch(97.7% 0.017 320.1)`
  - `oklch(90.3% 0.076 319.6)`
- Content rail constrained to `max-w-5xl` (1024px).
- Heatmap uses equivalent hex values for shader compatibility:
  - `#fcf5ff`
  - `#f6cfff`

## UI Component Policy
- `platform/apps/marketing/src/components/ui/*` is shadcn-generated code and should be treated as vendor-owned primitives.
- Do not hand-edit files in `platform/apps/marketing/src/components/ui/` for feature work in marketing pages.
- Prefer styling/behavior changes in app-level components under `platform/apps/marketing/src/components/marketing/`.
- If a primitive change is unavoidable, regenerate/update via shadcn workflow and document rationale in `plans/platform/decisions.md`.

## Deployment Notes
- Deploy target: Cloudflare Workers static assets.
- Source of truth:
  - `platform/apps/marketing/wrangler.jsonc`
  - `platform/apps/marketing/README.md`
- CI/CD inputs (Workers Builds):
  - Root directory: `platform/apps/marketing`
  - Build command: `npm run build`
  - Deploy command: `npx wrangler deploy`
  - Non-production branch deploy command: `npx wrangler versions upload`
- Release commands:
  - `bun run lint`
  - `bun run build`
  - `bun run cf:dev`
  - `bun run cf:deploy`
