import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { INTERNAL_HEADERS } from '@dde/contracts';

@Injectable()
export class InternalSecretGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest<Request>();
    const secret = req.headers[INTERNAL_HEADERS.INTERNAL_SECRET.toLowerCase()];
    const providedSecret = Array.isArray(secret) ? secret[0] : secret;
    const expectedSecret = process.env.INTERNAL_SECRET ?? process.env.INTERNAL_SERVICE_SECRET ?? 'internal-dev-secret';

    if (!providedSecret || providedSecret.trim() !== expectedSecret.trim()) {
      throw new UnauthorizedException('Missing or invalid internal secret');
    }
    return true;
  }
}
