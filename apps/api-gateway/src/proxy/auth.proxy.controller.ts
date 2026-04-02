import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { ApiTags } from '@nestjs/swagger';

const AUTH_URL = (process.env.AUTH_SERVICE_URL ?? 'http://localhost:3001').trim();

@ApiTags('Auth')
@Controller('auth')
export class AuthProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All(['', '*'])
  async proxyToAuth(@Req() req: Request, @Res() res: Response) {
    const wildcard = (req.params as Record<string, string | undefined>)['0'] ?? '';
    const suffix = wildcard ? `/${wildcard.replace(/^\/+/, '')}` : '';

    const result = await this.proxyService.forward(req, `${AUTH_URL}/v1/auth${suffix}`);
    this.proxyService.reply(res, result);
  }
}

