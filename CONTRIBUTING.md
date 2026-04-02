# Contributing Guide

## Branching and Delivery

- Work in focused branches by service or phase.
- Keep pull requests scoped and reviewable.
- Push milestones by service/phase completion rather than every tiny edit.

## Commit Convention

Use clear conventional prefixes:

- `feat(service): ...`
- `fix(service): ...`
- `chore(ci): ...`
- `docs(scope): ...`
- `test(service): ...`

## Development Setup

```bash
pnpm install
docker compose up -d postgres redis
pnpm test:gateway:all
```

## Quality Gates

Before opening a PR:

```bash
pnpm --filter @dde/api-gateway build
pnpm test:gateway:all
```

Run additional service checks when your change impacts those services.

## Pull Requests

- Use the PR template.
- Document validation commands and outcomes.
- Include rollback notes for risky changes.
