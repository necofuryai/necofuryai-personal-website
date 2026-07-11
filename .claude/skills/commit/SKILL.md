---
name: commit
description: Create git commits for this repository using Conventional Commits with scopes. Defines the commit format, project-specific scopes, message principles, and prohibits AI attribution signatures and emojis in commit messages.
---

# Git & Commit Standards

- **Commit Format**: Conventional Commits with scopes — `type(scope): description`
- **No Auto-Signatures**: Do not include AI agent/tool attribution or co-authorship footers
- **Clean History**: Keep messages concise and focused on the change
- **English Only**: Write commit messages in English
- **No Symbols/Emojis**: Avoid symbols and emojis in commit messages

## Commit Types

`feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`, `perf`

## Scopes (align with folder structure)

- `pages`: page files in `src/pages/`
- `components`: UI components in `src/components/`
- `layouts`: layout templates in `src/layouts/`
- `content`: content collections in `src/content/`
- `styles`: CSS and styling in `src/styles/`
- `config`: configuration files (`astro.config.mjs`, `src/config.ts`, `tsconfig.json`)
- `public`: static assets in `public/`
- `deps`: dependency updates (`package.json`, `pnpm-lock.yaml`)
- `ci`: CI/CD pipeline and GitHub Actions
- `docs`: documentation (`AGENTS.md`, `CLAUDE.md`, etc.)
- `claude`: Claude Code configuration (`.claude/`)

## Message Principles

Explain **WHY, not WHAT** — the code shows what changed; the message should explain why the change was necessary, what problem it solved, and what effect it has.

Structure for complex changes:

```
Short (50 chars or less) summary line

Body wrapped at ~72 chars explaining the problem this commit
solves and why, plus any side effects or unintuitive
consequences.

- Bullet points are okay
```

Examples (symbols below are documentation only — never in real messages):

- Bad: `fix: update code` / Good: `fix(components): correct header z-index overlap on mobile`
- Bad: `feat: add new feature` / Good: `feat(pages): add project showcase page with card grid`

Apply fully for features, fixes, refactors, and performance work; simplify for typos, dependency bumps, and formatting.

## Workflow

1. Review changes: `git status`, `git diff`
2. Stage file-by-file (or `git add -p`) to keep commits focused
3. Group related changes by feature/scope; split unrelated changes into separate commits (features vs docs vs deps); commit infrastructure before dependent changes
4. Commit using the format above with an appropriate scope
