import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { ApiTags } from '@nestjs/swagger';

const URL = (process.env.CHANNEL_DEALS_SERVICE_URL ?? 'http://localhost:3008').trim();

@ApiTags('Channel Deals')
@Controller('channel-deals')
export class ChannelDealsProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All(['', '*'])
  async proxy(@Req() req: Request, @Res() res: Response) {
    const wildcard = (req.params as Record<string, string | undefined>)['0'] ?? '';
    const suffix = wildcard ? `/${wildcard.replace(/^\/+/, '')}` : '';
    const result = await this.proxyService.forward(req, `${URL}/v1/channel-deals${suffix}`);
    this.proxyService.reply(res, result);
  }
}

