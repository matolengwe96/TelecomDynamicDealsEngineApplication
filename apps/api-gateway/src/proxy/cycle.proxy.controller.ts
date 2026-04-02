import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { ApiTags } from '@nestjs/swagger';

const CYCLE_URL = (process.env.CYCLE_SERVICE_URL ?? 'http://localhost:3002').trim();

@ApiTags('Cycles')
@Controller('cycles')
export class CycleProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All(['', '*'])
  async proxy(@Req() req: Request, @Res() res: Response) {
    const wildcard = (req.params as Record<string, string | undefined>)['0'] ?? '';
    const suffix = wildcard ? `/${wildcard.replace(/^\/+/, '')}` : '';
    const result = await this.proxyService.forward(req, `${CYCLE_URL}/v1/cycles${suffix}`);
    this.proxyService.reply(res, result);
  }
}

