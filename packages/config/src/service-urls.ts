/**
 * Internal service base URLs.
 * In production, these would be service discovery addresses or K8s DNS names.
 * Locally, they map to Docker Compose service names + port numbers.
 *
 * Services read their peers' URLs from environment variables with these as defaults.
 */
export const SERVICE_URLS = {
  AUTH_SERVICE: (process.env.AUTH_SERVICE_URL ?? 'http://localhost:3001').trim(),
  CYCLE_SERVICE: (process.env.CYCLE_SERVICE_URL ?? 'http://localhost:3002').trim(),
  CATALOG_SERVICE: (process.env.CATALOG_SERVICE_URL ?? 'http://localhost:3003').trim(),
  TRADELIST_SERVICE: (process.env.TRADELIST_SERVICE_URL ?? 'http://localhost:3004').trim(),
  OEM_SERVICE: (process.env.OEM_SERVICE_URL ?? 'http://localhost:3005').trim(),
  HEADLINE_SERVICE: (process.env.HEADLINE_SERVICE_URL ?? 'http://localhost:3006').trim(),
  APPROVAL_SERVICE: (process.env.APPROVAL_SERVICE_URL ?? 'http://localhost:3007').trim(),
  CHANNEL_DEALS_SERVICE: (process.env.CHANNEL_DEALS_SERVICE_URL ?? 'http://localhost:3008').trim(),
  JOB_SERVICE: (process.env.JOB_SERVICE_URL ?? 'http://localhost:3009').trim(),
  NOTIFICATION_SERVICE: (process.env.NOTIFICATION_SERVICE_URL ?? 'http://localhost:3010').trim(),
  AUDIT_SERVICE: (process.env.AUDIT_SERVICE_URL ?? 'http://localhost:3011').trim(),
} as const;

export type ServiceName = keyof typeof SERVICE_URLS;
