/**
 * RabbitMQ queue names for each service.
 * Each service consumes from its own queue and all publish to the shared exchange.
 */
export const QUEUE_NAMES = {
  AUTH: 'dde.auth',
  CYCLE: 'dde.cycle',
  CATALOG: 'dde.catalog',
  TRADELIST: 'dde.tradelist',
  OEM: 'dde.oem',
  HEADLINE: 'dde.headline',
  APPROVAL: 'dde.approval',
  CHANNEL_DEALS: 'dde.channel_deals',
  JOB: 'dde.job',
  NOTIFICATION: 'dde.notification',
  AUDIT: 'dde.audit',
} as const;

/** The RabbitMQ topic exchange all events flow through */
export const DDE_EVENTS_EXCHANGE = 'dde.events';
