# Ross: Agent Instructions

Canonical agent guide for `projects/cowork-ross/app/` (this repo). Readers: Claude Code, Cursor, Codex CLI, Gemini CLI, and any agent tool that supports `AGENTS.md`.

`CLAUDE.md` and `GEMINI.md` in this directory are symlinks to this file (single source of truth). Symlinks stay inside the app repo so cloners get them.

## Parent context (optional)

Part of the three-tier cowork monorepo (parent → `cowork-ross` → this app). If you have the full monorepo, the enclosing cowork project's `CLAUDE.md` adds brand voice, research pointers, and tool routing. **This file is self-sufficient if you cloned just the app repo.**

## Stack

- Next.js 16 (App Router, Turbopack) at `frontend/`
- Bun (package manager + runtime, no npm/pnpm/yarn)
- Tailwind CSS 4
- React 19
- Vercel (hosting, auto-deploy from `main` via GitHub integration)
- Terraform (legacy AWS stack; DNS module being repurposed for Vercel)

## Build / Dev / Test

```bash
cd frontend
bun install
bun run dev          # next dev (port 3000)
bun run build        # next build
bun run format:fix   # oxfmt
bun run lint:fix     # oxlint
bun run typecheck    # tsgo
bun run knip         # knip-bun (unused deps)
```

Pre-push: `format:fix && lint:fix && typecheck && knip` all must exit 0.

## Directory Conventions

- `frontend/` (Next.js app, Vercel root directory)
- `terraform/` (infra as code; deployed via GitHub Actions, never `apply` locally)
- `.devcontainer/` (Dockerized dev env with Postgres)
- `.github/workflows/` (CI, deploy, terraform-plan, terraform-apply)
- `.husky/pre-push` (local pre-push gate)

## Style Rules (universal)

- **Never use em dashes (—) or en dashes (–)** as punctuation. Use commas, parentheses, periods, or colons.
- Sound personal yet professional. Avoid AI-phrases: "delve into", "it's worth noting", "in conclusion", "certainly", "absolutely".
- Pre-push checks: run `format:fix`, `lint:fix`, `knip`, `typecheck` (see package.json scripts or Makefile). Fail fast locally, not in CI.
- Git workflow: pull main → feature branch → stage only relevant files → push PR. Never force-push to main. Never apply terraform locally; GitHub Actions handles it.

## App invariants

_Fill in with one-liners a new engineer would be surprised by; e.g., "all routes are statically generated", "provider data is not fetched at request time", "SEO meta lives in X not Y"._
