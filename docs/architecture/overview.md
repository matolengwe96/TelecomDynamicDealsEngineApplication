# DDE Enterprise Rebuild - Architecture Overview

## Topology

- Frontend (`apps/web`, pending) calls only API Gateway.
- API Gateway handles JWT verification, throttling, correlation IDs, and routing.
- Domain services own their own database schema and publish/consume events over RabbitMQ.
- Redis is used by Job Service for background queue processing (BullMQ).

## Services and Responsibilities

1. `api-gateway` (3000)
   - Entry point
   - AuthN verification using shared JWT secret
   - Adds internal trust headers (`x-user-*`, `x-internal-secret`, `x-correlation-id`)

2. `auth-service` (3001)
   - Users, roles, permissions, sessions
   - Login, refresh, logout
   - Admin APIs for user and role assignment

3. `cycle-service` (3002)
   - Cycle lifecycle and status FSM
   - Deal configuration submission
   - Emits cycle and configuration events

4. `catalog-service` (3003)
   - Devices, tariffs, channels, terms, VAS
   - Reference data for downstream services

5. `tradelist-service` (3004)
   - Trade list file upload and validation
   - Commit into canonical rows

6. `oem-negotiation-service` (3005)
   - CTD negotiation loop with Terminals

7. `headline-service` (3006)
   - Proto-headline generation
   - Headline lifecycle and publishing

8. `approval-service` (3007)
   - Multi-level approval decisions based on efficiency thresholds

9. `channel-deals-service` (3008)
   - Channel deal packaging and outbound payload generation

10. `job-service` (3009)

- Async jobs and retries
- Deal loading orchestration

11. `notification-service` (3010)

- Email/SMS/In-app notifications

12. `audit-service` (3011)

- Immutable event and action audit log

## Communication Patterns

## Synchronous

- Frontend -> API Gateway -> Service HTTP endpoint

## Asynchronous

- Service -> RabbitMQ exchange (`dde.events`) -> one or more subscribed services
- Dead-letter exchange: `dde.dlx`

## Security Model

1. Gateway validates bearer token.
2. Gateway forwards trusted user context headers.
3. Internal services require `x-internal-secret` for all HTTP APIs.
4. Correlation IDs are propagated end-to-end (`x-correlation-id`).

## Data Ownership

Each service has its own PostgreSQL database in development:

- `dde_auth`, `dde_cycle`, `dde_catalog`, `dde_tradelist`, `dde_oem`, `dde_headline`, `dde_approval`, `dde_channel_deals`, `dde_job`, `dde_notification`, `dde_audit`

No service directly reads/writes another service database.

## Development Runtime

Compose file: `infra/compose/docker-compose.yml`

Profiles:

- `core`: postgres, rabbitmq, redis, api-gateway, auth-service, cycle-service, catalog-service
- `extended`: all remaining domain services

## Known Next Work

- Wire event consumers/producers end-to-end in all domain services.
- Add API-level authorization (role/permission guard) in gateway and services.
- Add transactional outbox pattern for guaranteed event delivery.
- Add frontend application (`apps/web`).
