import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { ApiTags } from '@nestjs/swagger';

const AUTH_URL = (process.env.AUTH_SERVICE_URL ?? 'http://localhost:3001').trim();

@ApiTags('Admin')
@Controller('admin')
export class AdminProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  private getSuffix(req: Request): string {
    const wildcard = (req.params as Record<string, string | undefined>)['0'] ?? '';
    return wildcard ? `/${wildcard.replace(/^\/+/, '')}` : '';
  }

  @All('users*')
  async proxyUsers(@Req() req: Request, @Res() res: Response) {
    const result = await this.proxyService.forward(req, `${AUTH_URL}/v1/admin/users${this.getSuffix(req)}`);
    this.proxyService.reply(res, result);
  }

  @All('roles*')
  async proxyRoles(@Req() req: Request, @Res() res: Response) {
    const result = await this.proxyService.forward(req, `${AUTH_URL}/v1/admin/roles${this.getSuffix(req)}`);
    this.proxyService.reply(res, result);
  }
}

