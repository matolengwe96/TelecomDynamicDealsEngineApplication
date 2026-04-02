export enum OemNegotiationStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

export class OemNegotiationDto {
  id: string;
  cycleId: string;
  status: OemNegotiationStatus;
  startedByUserId: string;
  confirmedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class OemNegotiationItemDto {
  id: string;
  negotiationId: string;
  cid: number;
  deviceDescription: string;
  ctdAmount: number;
  previousCtdAmount: number | null;
  isUsingPreviousCtd: boolean;
  supplierAmbition: string | null;
  confirmedByUserId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class UpdateCtdDto {
  cid: number;
  ctdAmount: number;
  supplierAmbition?: string;
}

export class ConfirmCtdDto {
  itemIds: string[];
}

export class RequestChangesDto {
  reason: string;
  itemIds?: string[];
}
