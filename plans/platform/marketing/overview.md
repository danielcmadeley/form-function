# Marketing Plan

## Scope
`platform/apps/marketing` (Astro + Tailwind + React islands).

## Current State
- Landing page rebuilt from Paper design references using section-level Astro components.
- Interactive header behavior implemented with a React island (`lenis` + `motion`):
  - Transparent over hero.
  - Neutral background after hero.
  - Hide on scroll down, reveal on scroll up.
- Heatmap strip implemented with `@paper-design/shaders-react` using `/public/logo.svg`.

## Design Constraints
- Core palette constrained to the two Paper tones:
  - `oklch(97.7% 0.017 320.1)`
  - `oklch(90.3% 0.076 319.6)`
- Content rail constrained to `max-w-5xl` (1024px).

## Deployment Notes
- Deploy target: Cloudflare Workers static assets.
- Source of truth:
  - `platform/apps/marketing/wrangler.jsonc`
  - `platform/apps/marketing/README.md`
- Release commands:
  - `bun run lint`
  - `bun run build`
  - `bun run cf:dev`
  - `bun run cf:deploy`
