# Service Map and Bounded Contexts

## Context Boundaries

- Identity Context: `auth-service`
- Planning Context: `cycle-service`
- Catalog Context: `catalog-service`
- Intake Context: `tradelist-service`
- OEM Context: `oem-negotiation-service`
- Offer Context: `headline-service`
- Governance Context: `approval-service`
- Distribution Context: `channel-deals-service`
- Operations Context: `job-service`
- Communication Context: `notification-service`
- Compliance Context: `audit-service`

## Inbound API Ownership

- `/v1/auth/*`, `/v1/admin/users*`, `/v1/admin/roles*` -> `auth-service`
- `/v1/cycles/*` -> `cycle-service`
- `/v1/catalog/*` -> `catalog-service`
- `/v1/tradelist/*` -> `tradelist-service`
- `/v1/oem-negotiations/*` -> `oem-negotiation-service`
- `/v1/headlines/*` -> `headline-service`
- `/v1/approvals/*` -> `approval-service`
- `/v1/channel-deals/*` -> `channel-deals-service`
- `/v1/jobs/*` -> `job-service`

## Data Contracts

Shared packages:

- `@dde/contracts`: DTOs, enums, shared API response contract
- `@dde/events`: domain event classes + routing keys
- `@dde/config`: queue names, service URLs, RMQ options

## Integration Rules

1. No cross-database access.
2. Cross-context updates must use events.
3. API Gateway is the only public ingress.
4. Internal services trust only requests with `x-internal-secret`.
5. All events and API calls should include correlation ID.
