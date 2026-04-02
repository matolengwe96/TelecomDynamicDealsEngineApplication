import { BaseDdeEvent } from './base-event';
import { DdeEventName } from './event-names.enum';

export class DealLoadStartedEvent extends BaseDdeEvent {
  eventName = DdeEventName.DEAL_LOAD_STARTED;
  cycleId: string;
  jobRunId: string;
  targetSystem: string;
  triggeredByUserId: string;
}

export class DealLoadCompletedEvent extends BaseDdeEvent {
  eventName = DdeEventName.DEAL_LOAD_COMPLETED;
  cycleId: string;
  jobRunId: string;
  loadedCount: number;
  failedCount: number;
  targetSystem: string;
}

export class DealLoadFailedEvent extends BaseDdeEvent {
  eventName = DdeEventName.DEAL_LOAD_FAILED;
  cycleId: string;
  jobRunId: string;
  errorMessage: string;
  targetSystem: string;
  failedItemIds: string[];
}

export class IncidentLoggedEvent extends BaseDdeEvent {
  eventName = DdeEventName.INCIDENT_LOGGED;
  cycleId: string | null;
  incidentId: string;
  severity: string;
  summary: string;
  affectedSystem: string;
}
