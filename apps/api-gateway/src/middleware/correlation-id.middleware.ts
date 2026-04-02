import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { INTERNAL_HEADERS } from '@dde/contracts';

/** Assigns a correlation ID to every request for cross-service tracing. */
@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const existing = req.headers[INTERNAL_HEADERS.CORRELATION_ID] as string | undefined;
    req.headers[INTERNAL_HEADERS.CORRELATION_ID] = existing ?? uuidv4();
    next();
  }
}
