import { BaseDdeEvent } from './base-event';
import { DdeEventName } from './event-names.enum';

export class CycleCreatedEvent extends BaseDdeEvent {
  eventName = DdeEventName.CYCLE_CREATED;
  cycleId: string;
  cycleName: string;
  businessUnit: string;
  createdByUserId: string;
}

export class CycleStartedEvent extends BaseDdeEvent {
  eventName = DdeEventName.CYCLE_STARTED;
  cycleId: string;
  startedByUserId: string;
}

export class CycleStatusChangedEvent extends BaseDdeEvent {
  eventName = DdeEventName.CYCLE_STATUS_CHANGED;
  cycleId: string;
  fromStatus: string;
  toStatus: string;
  changedByUserId: string;
  reason: string | null;
}

export class DealConfigSubmittedEvent extends BaseDdeEvent {
  eventName = DdeEventName.DEAL_CONFIG_SUBMITTED;
  cycleId: string;
  submittedByUserId: string;
}
