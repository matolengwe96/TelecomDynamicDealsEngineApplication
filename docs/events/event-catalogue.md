# DDE Event Catalogue

Exchange: `dde.events`
DLX: `dde.dlx`

## Cycle Domain

| Routing Key                 | Producer      | Consumers                                                 |
| --------------------------- | ------------- | --------------------------------------------------------- |
| cycle.created               | cycle-service | tradelist-service, oem-negotiation-service, audit-service |
| cycle.started               | cycle-service | tradelist-service, audit-service                          |
| cycle.status_changed        | cycle-service | headline-service, approval-service, audit-service         |
| cycle.deal_config_submitted | cycle-service | oem-negotiation-service, tradelist-service, audit-service |

## Trade List Domain

| Routing Key         | Producer          | Consumers                                         |
| ------------------- | ----------------- | ------------------------------------------------- |
| tradelist.uploaded  | tradelist-service | cycle-service, audit-service                      |
| tradelist.validated | tradelist-service | cycle-service, headline-service, audit-service    |
| tradelist.committed | tradelist-service | headline-service, approval-service, audit-service |

## OEM Domain

| Routing Key               | Producer                | Consumers                                          |
| ------------------------- | ----------------------- | -------------------------------------------------- |
| oem.negotiation_started   | oem-negotiation-service | notification-service, audit-service                |
| oem.ctd_updated           | oem-negotiation-service | headline-service, audit-service                    |
| oem.changes_requested     | oem-negotiation-service | cycle-service, notification-service, audit-service |
| oem.negotiation_confirmed | oem-negotiation-service | headline-service, approval-service, audit-service  |

## Headline Domain

| Routing Key              | Producer         | Consumers                                         |
| ------------------------ | ---------------- | ------------------------------------------------- |
| headline.proto_generated | headline-service | approval-service, audit-service                   |
| headline.updated         | headline-service | approval-service, audit-service                   |
| headline.generated       | headline-service | channel-deals-service, audit-service              |
| headline.published       | headline-service | channel-deals-service, job-service, audit-service |

## Approval Domain

| Routing Key                  | Producer         | Consumers                                                            |
| ---------------------------- | ---------------- | -------------------------------------------------------------------- |
| approval.submitted           | approval-service | notification-service, audit-service                                  |
| approval.approved            | approval-service | headline-service, channel-deals-service, audit-service               |
| approval.rejected            | approval-service | headline-service, cycle-service, notification-service, audit-service |
| approval.executive_completed | approval-service | headline-service, channel-deals-service, audit-service               |

## Deal Load and Incident Domain

| Routing Key         | Producer                    | Consumers                           |
| ------------------- | --------------------------- | ----------------------------------- |
| deal.load_started   | job-service                 | notification-service, audit-service |
| deal.load_completed | job-service                 | notification-service, audit-service |
| deal.load_failed    | job-service                 | notification-service, audit-service |
| incident.logged     | audit-service / job-service | notification-service                |

## Delivery Guarantees (Target)

1. At-least-once delivery via RabbitMQ durable queues.
2. Consumer idempotency using `eventId` from `BaseDdeEvent`.
3. Correlation tracing via `correlationId`.
4. Dead-letter routing to `dde.dlx` for poison events.
