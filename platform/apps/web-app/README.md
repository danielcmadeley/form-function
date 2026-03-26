# Web App (Vite + React)

Deployment target: **Cloudflare Workers static assets**.

## Local development

```bash
bun run dev
```

## Build

- Type-checked build:

```bash
bun run build
```

- SPA build only (used for Cloudflare deploy):

```bash
bun run build:spa
```

## Cloudflare deployment

Wrangler config is in `wrangler.jsonc` and serves assets from `./dist` with SPA fallback.

### 1) One-time auth

```bash
bunx wrangler login
```

### 2) Local worker preview

```bash
bun run cf:dev
```

### 3) Deploy

```bash
bun run cf:deploy
```

## Domain mapping

After deploy, add custom domain `app.itsformfunction.com` in Cloudflare Workers settings for `form-function-web-app`.
