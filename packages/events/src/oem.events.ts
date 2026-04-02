import { BaseDdeEvent } from './base-event';
import { DdeEventName } from './event-names.enum';

export class OemNegotiationStartedEvent extends BaseDdeEvent {
  eventName = DdeEventName.OEM_NEGOTIATION_STARTED;
  cycleId: string;
  negotiationId: string;
  startedByUserId: string;
}

export class OemCtdUpdatedEvent extends BaseDdeEvent {
  eventName = DdeEventName.OEM_CTD_UPDATED;
  cycleId: string;
  negotiationId: string;
  cid: number;
  ctdAmount: number;
  previousCtdAmount: number | null;
  updatedByUserId: string;
}

export class OemChangesRequestedEvent extends BaseDdeEvent {
  eventName = DdeEventName.OEM_CHANGES_REQUESTED;
  cycleId: string;
  negotiationId: string;
  reason: string;
  requestedByUserId: string;
}

export class OemNegotiationConfirmedEvent extends BaseDdeEvent {
  eventName = DdeEventName.OEM_NEGOTIATION_CONFIRMED;
  cycleId: string;
  negotiationId: string;
  confirmedByUserId: string;
}
