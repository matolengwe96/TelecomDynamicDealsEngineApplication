import { BaseDdeEvent } from './base-event';
import { DdeEventName } from './event-names.enum';

export class ProtoHeadlinesGeneratedEvent extends BaseDdeEvent {
  eventName = DdeEventName.PROTO_HEADLINES_GENERATED;
  cycleId: string;
  count: number;
  generatedByUserId: string;
}

export class HeadlineUpdatedEvent extends BaseDdeEvent {
  eventName = DdeEventName.HEADLINE_UPDATED;
  cycleId: string;
  headlineId: string;
  updatedByUserId: string;
  fieldsChanged: string[];
}

export class HeadlinesGeneratedEvent extends BaseDdeEvent {
  eventName = DdeEventName.HEADLINES_GENERATED;
  cycleId: string;
  count: number;
  generatedByUserId: string;
}

export class HeadlinesPublishedEvent extends BaseDdeEvent {
  eventName = DdeEventName.HEADLINES_PUBLISHED;
  cycleId: string;
  count: number;
  publishedByUserId: string;
}
