# Runtime Handoff (2026-04-02)

## Summary

The DDE stack now runs successfully via Docker Compose for the core local smoke path.

Validated services:

- `api-gateway` on `http://localhost:3001`
- `web` on `http://localhost:3000`
- `postgres` on `5432`
- `redis` on `6379`

Validated endpoint checks:

- `GET /api/v1/health` -> `200`
- `GET /` on web -> `200`
- Home page contains `DDE Enterprise`

## Commands Used (Known-Good)

From repository root:

```bash
# Build and run services

docker compose up -d --build

# Check service status

docker compose ps

# Tail logs if needed

docker compose logs --tail=120 api-gateway

docker compose logs --tail=120 web
```

PowerShell checks:

```powershell
# Gateway health
$resp = Invoke-WebRequest -Uri http://localhost:3001/api/v1/health -UseBasicParsing -TimeoutSec 10
$resp.StatusCode
$resp.Content

# Web availability
$web = Invoke-WebRequest -Uri http://localhost:3000 -UseBasicParsing -TimeoutSec 10
$web.StatusCode
```

## Key Fixes Landed

1. Gateway Docker build/runtime alignment

- `apps/api-gateway/Dockerfile`
- `apps/api-gateway/tsconfig.json`

2. Shared package runtime entrypoint correctness

- `packages/contracts/package.json`
- `packages/config/package.json`
- `packages/events/package.json`

3. Web container startup reliability

- `apps/web/.dockerignore` added to exclude host `node_modules`
- `docker-compose.yml` web bind mounts removed to avoid dependency shadowing

4. Public health route confirmed

- `apps/api-gateway/src/health.controller.ts`
- `apps/api-gateway/src/middleware/auth.middleware.ts`

## Remaining Follow-up

- Optional monorepo-wide strictness hardening beyond gateway-only scope.
- Optional README alignment to emphasize `docker compose` over legacy `docker-compose` wording.

## Rollback Notes

If web fails to start with missing `vite` in container, confirm:

- `apps/web/.dockerignore` contains `node_modules`
- `docker-compose.yml` has no web service bind mounts for `/app` or `/app/node_modules`

If gateway health is unauthorized, confirm auth middleware public-path allowlist includes:

- `/api/v1/health`
