# Guidelines

<language>Japanese</language>
<character_code>UTF-8</character_code>

This file provides guidance to AI coding agents (Claude Code, Codex, etc.) when working with code in this repository.

## Response Style

- Respond to the user in Japanese with a light tsundere tone and a few emojis; keep technical explanations accurate, logical, and structured. 😠
- Assume high technical expertise — skip beginner-level over-explanation. Code, commits, PRs, and subagent instructions stay professional English (no persona).

## Development Commands

- `corepack enable` - Enable the pnpm version declared by `packageManager`
- `pnpm install --frozen-lockfile` - Install dependencies without changing the lockfile
- `pnpm dev` - Start development server (port 4321)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm astro` - Run Astro CLI commands
- If build fails with `ERR_MODULE_NOT_FOUND`: run `rm -rf node_modules && pnpm install`

## Git Workflow

- **Branching**: `develop` → PR to `main` (Cloudflare Pages deploys from `main`)
- **Release automation**: The `Promote to Main` workflow (Mondays 15:00 JST cron + `workflow_dispatch`) opens a merge-commit promotion PR from `develop` to `main`, authored by the `necofuryai-release-bot` GitHub App, and enables auto-merge
- **Drift check**: Promotion runs a tree-based drift check and fails loudly if `main` contains content not sourced from `develop`
- **Required checks**: `main` requires `Build and smoke check` + `Visual regression test` with strict=false (promotion PRs from a long-lived `develop` make strict=true deadlock); `develop` keeps strict=true
- **Fork**: origin = `necofuryai/necofuryai-personal-website`, upstream = `manuelernestog/astrofy`
- **PR creation**: Always use `gh pr create --repo necofuryai/necofuryai-personal-website` (default targets upstream)
- **Dependency management**: Renovate (config in `renovate.json`), migrated from Dependabot
- **Dependency PR base**: Renovate PRs target `develop`
- **Dependency gate**: Required checks are `Build and smoke check` (installs, builds, previews, smoke-checks primary routes) and `Visual regression test`; `Lighthouse CI (advisory)` never blocks
- **Merge method**: Use squash merge for normal PRs (dependency, feature, docs); promotion PRs from `develop` to `main` are merged with merge commits (the repo allows both) because repeated squash promotions never advance the merge base and conflict on files like `pnpm-lock.yaml`

## Architecture Overview

Astro-based personal website:
- **Runtime**: Node.js 24 via `.node-version`, pnpm 11 via `packageManager`
- **Framework**: Astro 7 static site (bundles Vite 8 / rolldown)
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Content**: Astro Content Collections with Zod validation
- **TypeScript**: Strict mode, path aliases (`@components/*`, `@layouts/*`)
- **Deployment**: Cloudflare Pages
- **Site**: `https://necofuryai.io` — RSS at `src/pages/rss.xml.js`; sitemap via `@astrojs/sitemap` at `/sitemap-index.xml` (referenced by `public/robots.txt`)

### Layouts

- `BaseLayout.astro` - Main wrapper with DaisyUI drawer navigation
- `PostLayout.astro` - Blog content
- `StoreItemLayout.astro` - E-commerce items

### Content Collections

Schemas in `src/content.config.ts` (Astro v5+ convention, NOT `src/content/config.ts`):
1. **Blog** - Articles (title, description, pubDate, hero image, tags)
2. **Store** - Products (pricing, checkout URLs, images)

Both content dirs are currently EMPTY and have no rendering routes in `src/pages/` — schemas only. The `hasContentEntries` guard in `src/content/lib/content-files.ts` returns an empty loader for empty dirs.

### Conventions

- Pages in `/src/pages/` as `.astro` files
- Components use slot-based composition
- Global styles in `/src/styles/global.css`
- Static assets in `/public/`
- Config in `/src/config.ts`
- DaisyUI classes for consistent theming
- Responsive drawer nav (mobile) vs sidebar (desktop)
- Theme switching via `ThemeSelector.astro`

## SEO & Deployment Gotchas

- `trailingSlash: 'always'` enforced in `astro.config.mjs` — all internal links MUST end with `/`
- Canonical URLs in `BaseHead.astro` strip query params via `new URL(Astro.url.pathname, Astro.site)`
- Cloudflare Pages uses `.node-version` (`24`) and the `packageManager` field in `package.json`
- **Tailwind integration**: Tailwind CSS v4 + DaisyUI v5 use `@tailwindcss/vite` and CSS-first config in `src/styles/global.css`; do not reintroduce `@astrojs/tailwind` or `tailwind.config.cjs`. `@tailwindcss/vite` must stay >= 4.3.2 — older versions crash on Vite 8's rolldown plugin bindings
- `.npmrc` sets `shamefully-hoist=true` — required for Astro's transitive deps under pnpm; do not remove

## Dependency Update Policy

- Renovate is the only automated dependency updater; do not add `.github/dependabot.yml`.
- Renovate reads `renovate.json` from the DEFAULT branch (`main`) even though update PRs target `develop` — config changes take effect only after they are promoted to `main`.
- All dependency updates automerge once the required dependency gate (build + smoke + VRT) succeeds; the gate is the review.
- Major npm updates require dependency dashboard approval to create the PR, then automerge once the gate passes.
- Keep the dependency gate aligned with production routes: `/`, `/cv/`, `/projects/`, `/hobbies/`, and `/pr/`.
- `minimumReleaseAge`: 7 days for npm patch/minor, 3 days for GitHub Actions; security fixes bypass schedule and release age via `vulnerabilityAlerts`/`osvVulnerabilityAlerts`.
- The `playwright` group automerges when the gate passes. If VRT fails on a Playwright update: dispatch `VRT Update Baselines` with base=<renovate branch>, review and merge the baseline PR, then squash-merge the Renovate PR.
- VRT baselines are generated ONLY by the `VRT Update Baselines` workflow on ubuntu-24.04; never run `playwright test --update-snapshots` locally.
- Lighthouse CI is advisory for now (tighten thresholds later).
- Claude advisory review (`renovate-review.yml`) is optional and skips green when `CLAUDE_CODE_OAUTH_TOKEN` is absent; `allowed_bots: renovate` is required because `claude-code-action@v1` rejects bot-initiated runs.
- `lockFileMaintenance` PRs regenerate the whole lockfile and textually conflict with every other open dependency PR — merge them first, then rebase the rest (tick the rebase checkbox in the PR body). A `CONFLICTING` PR runs no `pull_request` checks at all.
- Post-deploy `Production Smoke Check` runs on every push to `main` against the pages.dev project domain (the custom domain 403s datacenter IPs via bot protection); recovery = Cloudflare Pages Instant Rollback.
- Known limitation: a Cloudflare build failure keeps serving the previous deployment; covered by Cloudflare's build-failure emails.

## Verification

- Run `pnpm build` before marking any change complete.
- No lint/format tooling exists — `pnpm build`, the CI dependency gate, and the Playwright VRT suite (`pnpm test:vrt`, CI-only baselines) are the verification gates.

## Extended References

- Git commit standards: `/commit` skill (`.claude/skills/commit/SKILL.md`)
