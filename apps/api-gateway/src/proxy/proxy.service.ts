import { Injectable, HttpException, InternalServerErrorException, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request, Response } from 'express';
import { firstValueFrom } from 'rxjs';

interface ProxyResult {
  status: number;
  data: unknown;
}

@Injectable()
export class ProxyService {
  private readonly logger = new Logger(ProxyService.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * Forwards an HTTP request to the specified downstream service URL,
   * passing along the internal headers and the request body/params.
   *
   * On error, re-throws the downstream error status/message to the client.
   */
  async forward(req: Request, targetUrl: string): Promise<ProxyResult> {
    const headersToForward: Record<string, string> = {};

    // Forward internal context headers injected by auth middleware
    const internalHeaderKeys = [
      'x-user-id', 'x-user-email', 'x-user-roles',
      'x-correlation-id', 'x-internal-secret',
    ];

    for (const key of internalHeaderKeys) {
      const val = req.headers[key];
      if (val) headersToForward[key] = val as string;
    }

    if (!headersToForward['x-internal-secret']) {
      headersToForward['x-internal-secret'] = process.env.INTERNAL_SERVICE_SECRET ?? 'internal-dev-secret';
    }

    // Forward Authorization so downstream service JWT guards can verify the token directly
    if (req.headers['authorization']) {
      headersToForward['authorization'] = req.headers['authorization'] as string;
    }

    if (req.headers['content-type']) {
      headersToForward['content-type'] = req.headers['content-type'];
    }

    try {
      const response = await firstValueFrom(
        this.httpService.request({
          method: req.method as any,
          url: targetUrl,
          headers: headersToForward,
          params: req.query,
          data: req.body,
          validateStatus: null, // let us handle all statuses
        }),
      );

      if (response.status >= 400) {
        throw new HttpException(response.data, response.status);
      }

      return {
        status: response.status,
        data: response.data,
      };
    } catch (err: any) {
      if (err instanceof HttpException) throw err;

      this.logger.error(`Proxy error to ${targetUrl}: ${err.message}`);
      throw new InternalServerErrorException('Downstream service unavailable');
    }
  }

  reply(res: Response, result: ProxyResult): void {
    if (result.status === 204 || typeof result.data === 'undefined') {
      res.status(result.status).send();
      return;
    }

    res.status(result.status).json(result.data);
  }
}
