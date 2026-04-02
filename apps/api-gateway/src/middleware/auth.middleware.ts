import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { INTERNAL_HEADERS } from '@dde/contracts';

interface JwtPayload {
  sub: string;
  email: string;
  roles: string[];
}

/**
 * Verifies the Bearer JWT on every incoming request (except excluded public routes).
 * Extracts user context and forwards it as trusted internal headers to downstream services.
 *
 * Downstream services MUST only accept requests with valid X-Internal-Secret headers —
 * ensuring only the gateway can call them with pre-verified user context.
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly jwtSecret = process.env.JWT_SECRET ?? 'fallback-secret';
  private readonly internalSecret = process.env.INTERNAL_SERVICE_SECRET ?? 'internal-secret';

  private normalizePath(req: Request): string {
    const rawPath = (req.originalUrl ?? req.url ?? req.path ?? '').split('?')[0] ?? '';
    const trimmed = rawPath.replace(/\/+$/, '');
    return trimmed.length ? trimmed : '/';
  }

  private isPublicRoute(req: Request): boolean {
    const path = this.normalizePath(req);
    const method = req.method;

    if (method === 'POST' && /\/auth\/(login|refresh)$/.test(path)) {
      return true;
    }

    if (
      method === 'GET' &&
      (path === '/health' || path === '/api/health' || path === '/v1/health' || path === '/api/v1/health')
    ) {
      return true;
    }

    if (
      method === 'GET' &&
      (path === '/docs' || path.startsWith('/docs/') || path === '/api/docs' || path.startsWith('/api/docs/'))
    ) {
      return true;
    }

    return false;
  }

  use(req: Request, res: Response, next: NextFunction) {
    if (this.isPublicRoute(req)) {
      next();
      return;
    }

    const authorization = req.headers['authorization'];

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or malformed Authorization header');
    }

    const token = authorization.slice(7);

    try {
      const payload = jwt.verify(token, this.jwtSecret) as JwtPayload;

      // Inject user context as internal headers forwarded to downstream services
      req.headers[INTERNAL_HEADERS.USER_ID] = payload.sub;
      req.headers[INTERNAL_HEADERS.USER_EMAIL] = payload.email;
      req.headers[INTERNAL_HEADERS.USER_ROLES] = (payload.roles ?? []).join(',');
      req.headers[INTERNAL_HEADERS.INTERNAL_SECRET] = this.internalSecret;

      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired access token');
    }
  }
}
