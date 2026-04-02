# DDE Implementation Roadmap

## Phase 1 — Foundation (Current)

**Goal:** Runnable skeleton, auth, core data models

- [x] Monorepo structure (pnpm + Turborepo)
- [x] Docker-compose (PostgreSQL + Redis)
- [ ] Backend NestJS bootstrap (main.ts, AppModule, Swagger)
- [x] Frontend React bootstrap (Vite + Router + TanStack Query)
- [ ] Prisma schema — all core tables
- [ ] Database migrations (initial schema)
- [ ] Auth module (login, JWT, refresh, me)
- [ ] Users / Roles / Permissions modules
- [ ] Shared layout (sidebar, header, route guards)
- [ ] Reference data module (devices, tariffs, channels, terms, VAS)

## Phase 2 — Cycle & Configuration

**Goal:** Deal cycle lifecycle + deal configuration

- [ ] Cycles module (create, start, close, status machine)
- [ ] Cycle status history tracking
- [ ] Standard configuration UI + API
- [ ] Custom configuration (per-device overrides)
- [ ] Deal config approval workflow (VB)
- [ ] Audit logging for all config changes
- [ ] System configuration admin page

## Phase 3 — Trade List & Headline Generation

**Goal:** Trade list ingestion + proto-headline generation pipeline

- [ ] Trade list upload (file parsing, validation, staging)
- [ ] Trade list history view
- [ ] OEM negotiations module (CTD, supplier ambitions)
- [ ] CTD confirmation workflow (Terminals ↔ Trade Marketing)
- [ ] Proto-headline generation (all 12 business rule categories)
- [ ] Proto-headline review and edit UI
- [ ] Headline promotion (draft → headline)
- [ ] Headline approval workflow (efficiency-based levels)
- [ ] Deal review page
- [ ] Publish headlines

## Phase 4 — Channel Deals & Approval

**Goal:** Channel deal generation + full approval chain + loading

- [ ] Channel deals generation (differentiation logic per channel)
- [ ] Channel deal review UI (per channel)
- [ ] Channel-level approval workflow
- [ ] Executive approval (4-approver chain)
- [ ] Deal load job (downstream system integration)
- [ ] Job tracking (BullMQ + queue dashboard)
- [ ] Incident logging
- [ ] Notifications (email via SMTP)

## Phase 5 — Polish & Hardening

**Goal:** Production readiness

- [ ] Ad-hoc deals module
- [ ] Deal sets management
- [ ] Document attachments
- [ ] Full audit log UI
- [ ] Performance: query optimization + indexes
- [ ] Security hardening (rate limiting, input validation)
- [ ] E2E tests (Playwright)
- [ ] Unit + integration tests (Jest)
- [ ] CI/CD pipeline

## Business Rules Implemented (tracked)

| Rule Category                    | Status          |
| -------------------------------- | --------------- |
| Device Eligibility (1.1-1.6)     | Pending Phase 3 |
| Tariff Matching (2.1-2.4)        | Pending Phase 3 |
| Contract Terms (3.1-3.4)         | Pending Phase 3 |
| Pricing & Calculation (Step 1-5) | Pending Phase 3 |
| Deal Quality (5.1-5.3)           | Pending Phase 3 |
| Pricing Consistency (6.1-6.2)    | Pending Phase 3 |
| Technical Specs (7.1-7.2)        | Pending Phase 3 |
| Tariff Eligibility (8.1-8.5)     | Pending Phase 3 |
| Insurance/Replacement (9.1)      | Pending Phase 3 |
| Approval Governance (10.1-10.3)  | Pending Phase 3 |
| SIM-Only Rules (11.1-11.4)       | Pending Phase 3 |
| Data Quality (12.1-12.2)         | Pending Phase 3 |
| Headline Generation (H1-H2)      | Pending Phase 3 |
| Deal Approval (AR1-AR4)          | Pending Phase 3 |
