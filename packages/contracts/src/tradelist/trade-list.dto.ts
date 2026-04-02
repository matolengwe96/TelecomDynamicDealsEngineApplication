export enum TradeListUploadStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  VALIDATED = 'VALIDATED',
  VALIDATION_FAILED = 'VALIDATION_FAILED',
  COMMITTED = 'COMMITTED',
  FAILED = 'FAILED',
}

export class TradeListUploadDto {
  id: string;
  cycleId: string;
  filename: string;
  status: TradeListUploadStatus;
  rowCount: number | null;
  errorCount: number | null;
  uploadedByUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class TradeListValidationErrorDto {
  id: string;
  uploadId: string;
  rowNumber: number | null;
  field: string | null;
  value: string | null;
  errorMessage: string;
  createdAt: Date;
}
