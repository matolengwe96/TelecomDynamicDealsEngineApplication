export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  success: false;
  statusCode: number;
  timestamp: string;
  path: string;
  error: { message: string | string[]; error?: string };
}

/** Standard internal header names forwarded by the API Gateway. */
export const INTERNAL_HEADERS = {
  USER_ID: 'x-user-id',
  USER_EMAIL: 'x-user-email',
  USER_ROLES: 'x-user-roles',
  CORRELATION_ID: 'x-correlation-id',
  INTERNAL_SECRET: 'x-internal-secret',
} as const;
