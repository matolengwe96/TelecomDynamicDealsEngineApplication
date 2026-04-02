/**
 * All domain event names used across the DDE platform.
 *
 * Naming convention: <domain>.<event_past_tense>
 * These are used as RabbitMQ routing keys on the 'dde.events' topic exchange.
 *
 * Publisher → Consumer mapping is documented in docs/events/event-catalogue.md
 */
export enum DdeEventName {
  // --- Cycle events (published by: cycle-service) ---
  CYCLE_CREATED = 'cycle.created',
  CYCLE_STARTED = 'cycle.started',
  CYCLE_CLOSED = 'cycle.closed',
  CYCLE_FAILED = 'cycle.failed',
  CYCLE_STATUS_CHANGED = 'cycle.status_changed',

  // --- Deal configuration events (published by: cycle-service) ---
  DEAL_CONFIG_SUBMITTED = 'cycle.deal_config_submitted',
  DEAL_CONFIG_APPROVED = 'cycle.deal_config_approved',

  // --- Trade list events (published by: tradelist-service) ---
  TRADELIST_UPLOADED = 'tradelist.uploaded',
  TRADELIST_VALIDATED = 'tradelist.validated',
  TRADELIST_VALIDATION_FAILED = 'tradelist.validation_failed',
  TRADELIST_COMMITTED = 'tradelist.committed',

  // --- OEM Negotiation events (published by: oem-negotiation-service) ---
  OEM_NEGOTIATION_STARTED = 'oem.negotiation_started',
  OEM_CTD_UPDATED = 'oem.ctd_updated',
  OEM_CHANGES_REQUESTED = 'oem.changes_requested',
  OEM_NEGOTIATION_CONFIRMED = 'oem.negotiation_confirmed',

  // --- Headline events (published by: headline-service) ---
  PROTO_HEADLINES_GENERATED = 'headline.proto_headlines_generated',
  HEADLINE_UPDATED = 'headline.updated',
  HEADLINES_GENERATED = 'headline.headlines_generated',
  HEADLINES_SUBMITTED_FOR_APPROVAL = 'headline.submitted_for_approval',
  HEADLINES_PUBLISHED = 'headline.published',

  // --- Approval events (published by: approval-service) ---
  APPROVAL_SUBMITTED = 'approval.submitted',
  APPROVAL_APPROVED = 'approval.approved',
  APPROVAL_REJECTED = 'approval.rejected',
  EXECUTIVE_APPROVAL_COMPLETED = 'approval.executive_completed',

  // --- Channel deal events (published by: channel-deals-service) ---
  CHANNEL_DEALS_GENERATED = 'channel.deals_generated',
  CHANNEL_DEALS_PUBLISHED = 'channel.deals_published',

  // --- Deal load events (published by: job-service) ---
  DEAL_LOAD_STARTED = 'job.deal_load_started',
  DEAL_LOAD_COMPLETED = 'job.deal_load_completed',
  DEAL_LOAD_FAILED = 'job.deal_load_failed',
  DEAL_LOAD_RETRIED = 'job.deal_load_retried',

  // --- Incident events (published by: job-service) ---
  INCIDENT_LOGGED = 'job.incident_logged',
}
