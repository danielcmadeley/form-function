# Marketing App (Astro)

Cloudflare deployment target: **Workers static assets**.

## Local development

```bash
bun run dev
```

## Production build

```bash
bun run build
```

## Cloudflare deployment

Wrangler config is in `wrangler.jsonc` and is set up for static asset deployment from `./dist`.

### 1) One-time auth on your machine

```bash
bunx wrangler login
```

### 2) Preflight checks

```bash
bun run lint
bun run build
```

### 3) Local worker preview (uses built assets)

```bash
bun run cf:dev
```

### 4) Deploy to production

```bash
bun run cf:deploy
```

## Production checklist

- Worker name in `wrangler.jsonc` is slug-safe (`form-function-marketing`).
- `compatibility_date` is current.
- Cloudflare Auto Minify is disabled if hydration mismatches appear.
- DNS/route is attached to the deployed worker in Cloudflare dashboard.
