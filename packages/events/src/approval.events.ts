import { BaseDdeEvent } from './base-event';
import { DdeEventName } from './event-names.enum';

export class ApprovalSubmittedEvent extends BaseDdeEvent {
  eventName = DdeEventName.APPROVAL_SUBMITTED;
  cycleId: string;
  approvalRequestId: string;
  entityType: string;
  entityIds: string[];
  level: number;
  submittedByUserId: string;
}

export class ApprovalApprovedEvent extends BaseDdeEvent {
  eventName = DdeEventName.APPROVAL_APPROVED;
  cycleId: string;
  approvalRequestId: string;
  entityType: string;
  level: number;
  approvedByUserId: string;
}

export class ApprovalRejectedEvent extends BaseDdeEvent {
  eventName = DdeEventName.APPROVAL_REJECTED;
  cycleId: string;
  approvalRequestId: string;
  entityType: string;
  level: number;
  rejectedByUserId: string;
  reason: string;
}

export class ExecutiveApprovalCompletedEvent extends BaseDdeEvent {
  eventName = DdeEventName.EXECUTIVE_APPROVAL_COMPLETED;
  cycleId: string;
  approvalRequestId: string;
  approvedByUserId: string;
}
