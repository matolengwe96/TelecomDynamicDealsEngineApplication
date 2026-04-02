# DDE Enterprise — Deals Data Engine

A production-grade enterprise workflow platform for deal design, approval, and loading.

## Monorepo Structure

```
apps/
  api-gateway/               API entry point for frontend clients
  auth-service/              Authentication and identity
  cycle-service/             Deal cycle lifecycle management
  catalog-service/           Device/tariff/reference catalog
  tradelist-service/         Trade list ingestion and staging (stub)
  oem-negotiation-service/   OEM negotiation workflows (stub)
  headline-service/          Headline generation/review (stub)
  approval-service/          Approval orchestration (stub)
  channel-deals-service/     Channel deal generation (stub)
  job-service/               Background jobs and loaders (stub)
  audit-service/             Audit log events (stub)
  notification-service/      Notification fanout (stub)
  web/                       React frontend (Vite + Router + Query)

packages/
  contracts/    Shared DTOs and API contracts
  config/       Shared service URLs and config constants
  events/       Shared event names and payload contracts

infra/          Docker, compose, platform manifests

Documentation/  Business docs, process flows, DB design
```

## Quick Start (local dev)

### Prerequisites

- Node.js >= 20
- pnpm >= 9
- Docker + Docker Compose

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env with your local values
```

### 3. Start infrastructure (PostgreSQL + Redis)

```bash
docker-compose up -d postgres redis
```

### 4. Run database migrations

```bash
pnpm db:migrate:all
```

### 5. Start development servers

```bash
pnpm dev
```

- API: http://localhost:3001
- Web: http://localhost:3000
- API Docs: http://localhost:3001/docs (Swagger)

## Local Auth + Gateway Shortcut (Windows)

Use this when you want only local `auth-service` and `api-gateway` with explicit ports:

```bash
pnpm dev:local:auth-gateway
```

This starts:

- `auth-service` on `3011`
- `api-gateway` on `3000` with `AUTH_SERVICE_URL=http://localhost:3011`
- a dedicated local Postgres container on `55432` (`dde_postgres_local`)

Stop everything started by the shortcut:

```bash
pnpm dev:local:auth-gateway:stop
```

Tail local service logs:

```bash
pnpm dev:local:auth-gateway:logs
```

Run local smoke checks (health, login, protected profile, admin routes, refresh, logout, and refresh rejection after logout):

```bash
pnpm dev:local:auth-gateway:smoke
```

Start all 10 core services (cycle, catalog, tradelist, oem-negotiation, headline, approval, channel-deals, job, notification, audit):

```bash
pnpm dev:local:core
```

Run full core smoke checks through gateway (all 10 services, login → resource list per service):

```bash
pnpm dev:local:core:smoke
```

Stop all local core services:

```bash
pnpm dev:local:core:stop
```

Run the web client against the local gateway:

```bash
pnpm --filter @dde/web dev
```

Use `VITE_API_URL=http://localhost:3000` when starting the web app if you want to override the gateway target explicitly.

Optional credentials override for smoke login:

```powershell
$env:SMOKE_LOGIN_EMAIL="admin@dde.local"
$env:SMOKE_LOGIN_PASSWORD="Admin@DDE1!"
pnpm dev:local:auth-gateway:smoke
```

## Tech Stack

| Layer    | Technology                                                                           |
| -------- | ------------------------------------------------------------------------------------ |
| Frontend | React 18, TypeScript, React Router v6, TanStack Query, React Hook Form, Tailwind CSS |
| Backend  | NestJS, TypeScript, Prisma ORM                                                       |
| Database | PostgreSQL 16                                                                        |
| Jobs     | BullMQ + Redis                                                                       |
| Auth     | JWT (access + refresh)                                                               |
| Monorepo | pnpm workspaces + Turborepo                                                          |

## Workflow Overview

1. CBU starts a deal cycle
2. Terminals upload trade list + OEM negotiations
3. Trade Marketing configures deals (standard + custom)
4. Proto-headlines generated → reviewed → edited
5. Headlines promoted → approval workflow
6. Deal review → publish
7. Channel deals generated per channel
8. Channel approval → executive approval
9. Load to downstream systems (Siebel/Eppix)
10. Jobs + incidents tracked

## Documentation

- [Architecture Overview](docs/architecture/overview.md)
- [Database Schema](docs/database/schema-overview.md)
- [Deal Cycle Workflow](docs/workflows/deal-cycle.md)
- [Approval Workflow](docs/workflows/approvals.md)
- [Headlines Workflow](docs/workflows/headlines.md)

## Implementation Roadmap

See [ROADMAP.md](ROADMAP.md)
