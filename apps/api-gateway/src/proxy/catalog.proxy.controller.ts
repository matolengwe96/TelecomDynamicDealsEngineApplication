import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { ApiTags } from '@nestjs/swagger';

const CATALOG_URL = (process.env.CATALOG_SERVICE_URL ?? 'http://localhost:3003').trim();

@ApiTags('Catalog')
@Controller('catalog')
export class CatalogProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All(['', '*'])
  async proxy(@Req() req: Request, @Res() res: Response) {
    const wildcard = (req.params as Record<string, string | undefined>)['0'] ?? '';
    const suffix = wildcard ? `/${wildcard.replace(/^\/+/, '')}` : '';
    const result = await this.proxyService.forward(req, `${CATALOG_URL}/v1/catalog${suffix}`);
    this.proxyService.reply(res, result);
  }
}

