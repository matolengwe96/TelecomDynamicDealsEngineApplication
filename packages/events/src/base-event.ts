import { v4 as uuidv4 } from 'uuid';

/**
 * Base structure for all DDE domain events.
 * Every event MUST include eventId, eventName, correlationId, timestamp, and publishedBy.
 *
 * eventId enables idempotent consumers (deduplicate by eventId).
 * correlationId traces a business workflow across multiple services.
 */
export abstract class BaseDdeEvent {
  /** Unique event ID — consumers use this to deduplicate */
  eventId: string = uuidv4();

  /** Event type name — matches DdeEventName */
  abstract eventName: string;

  /** Correlates this event to a business workflow (e.g. cycleId) */
  correlationId: string;

  /** ISO timestamp of event creation */
  timestamp: string = new Date().toISOString();

  /** Service that published this event */
  publishedBy: string;

  constructor(correlationId: string, publishedBy: string) {
    this.correlationId = correlationId;
    this.publishedBy = publishedBy;
  }
}
