export enum ApprovalRequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  WITHDRAWN = 'WITHDRAWN',
}

export enum ApprovalLevel {
  AUTO = 0,
  MANAGER = 1,
  SENIOR_MANAGER = 2,
  EXECUTIVE = 3,
}

export class ApprovalRequestDto {
  id: string;
  cycleId: string;
  entityType: string;
  entityId: string;
  level: ApprovalLevel;
  status: ApprovalRequestStatus;
  submittedByUserId: string;
  submittedAt: Date;
  resolvedAt: Date | null;
  resolvedByUserId: string | null;
  rejectionReason: string | null;
  createdAt: Date;
}

export class SubmitApprovalDto {
  cycleId: string;
  entityType: string;
  entityIds: string[];
}

export class ApproveDto {
  comment?: string;
}

export class RejectDto {
  reason: string;
}
