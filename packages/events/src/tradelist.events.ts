import { BaseDdeEvent } from './base-event';
import { DdeEventName } from './event-names.enum';

export class TradeListUploadedEvent extends BaseDdeEvent {
  eventName = DdeEventName.TRADELIST_UPLOADED;
  cycleId: string;
  uploadId: string;
  filename: string;
  rowCount: number;
  uploadedByUserId: string;
}

export class TradeListValidatedEvent extends BaseDdeEvent {
  eventName = DdeEventName.TRADELIST_VALIDATED;
  cycleId: string;
  uploadId: string;
  rowCount: number;
  errorCount: number;
}

export class TradeListCommittedEvent extends BaseDdeEvent {
  eventName = DdeEventName.TRADELIST_COMMITTED;
  cycleId: string;
  uploadId: string;
  committedRowCount: number;
}
