export enum JobStatus {
  QUEUED = 'QUEUED',
  RUNNING = 'RUNNING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  PARTIAL_SUCCESS = 'PARTIAL_SUCCESS',
  RETRIED = 'RETRIED',
}

export class JobRunDto {
  id: string;
  jobType: string;
  cycleId: string | null;
  status: JobStatus;
  startedAt: Date | null;
  completedAt: Date | null;
  totalItems: number | null;
  processedItems: number | null;
  failedItems: number | null;
  errorMessage: string | null;
  triggeredByUserId: string | null;
  createdAt: Date;
}
