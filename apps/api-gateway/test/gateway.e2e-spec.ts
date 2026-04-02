import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import nock from 'nock';
import * as jwt from 'jsonwebtoken';

process.env.JWT_SECRET = 'test-jwt-secret';
process.env.INTERNAL_SERVICE_SECRET = 'test-internal-secret';
process.env.AUTH_SERVICE_URL = 'http://auth.local:3011';
process.env.CYCLE_SERVICE_URL = 'http://cycle.local:3002';
process.env.CATALOG_SERVICE_URL = 'http://catalog.local:3003';
process.env.TRADELIST_SERVICE_URL = 'http://tradelist.local:3004';
process.env.OEM_SERVICE_URL = 'http://oem.local:3005';
process.env.HEADLINE_SERVICE_URL = 'http://headline.local:3006';
process.env.APPROVAL_SERVICE_URL = 'http://approval.local:3007';
process.env.CHANNEL_DEALS_SERVICE_URL = 'http://channel-deals.local:3008';
process.env.JOB_SERVICE_URL = 'http://job.local:3009';
process.env.NOTIFICATION_SERVICE_URL = 'http://notification.local:3010';
process.env.AUDIT_SERVICE_URL = 'http://audit.local:3012';

import { AppModule } from '../src/app.module';

describe('API Gateway E2E', () => {
  let app: INestApplication;

  const jwtSecret = process.env.JWT_SECRET!;
  const internalSecret = process.env.INTERNAL_SERVICE_SECRET!;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });

    await app.init();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    nock.enableNetConnect((host) => host.includes('127.0.0.1'));
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  afterAll(async () => {
    await app.close();
  });

  function makeAccessToken(): string {
    return jwt.sign(
      { sub: 'u-1', email: 'admin@dde.local', roles: ['SUPER_ADMIN'], jti: 'jti-1' },
      jwtSecret,
      { expiresIn: '15m' },
    );
  }

  it('GET /api/v1/health returns 200 without auth', async () => {
    const res = await request(app.getHttpServer()).get('/api/v1/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('POST /api/v1/auth/login proxies to auth service', async () => {
    nock('http://auth.local:3011')
      .post('/v1/auth/login', { email: 'admin@dde.local', password: 'Admin@DDE1!' })
      .reply(200, {
        success: true,
        data: {
          accessToken: 'a',
          refreshToken: 'r',
          expiresIn: 900,
          user: { id: 'u-1', email: 'admin@dde.local', roles: ['SUPER_ADMIN'] },
        },
      });

    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send({ email: 'admin@dde.local', password: 'Admin@DDE1!' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBe('a');
  });

  it('GET /api/v1/auth/me forwards auth + internal headers', async () => {
    const token = makeAccessToken();

    nock('http://auth.local:3011', {
      reqheaders: {
        authorization: `Bearer ${token}`,
        'x-user-id': 'u-1',
        'x-user-email': 'admin@dde.local',
        'x-user-roles': 'SUPER_ADMIN',
        'x-internal-secret': internalSecret,
      },
    })
      .get('/v1/auth/me')
      .reply(200, {
        success: true,
        data: { id: 'u-1', email: 'admin@dde.local', roles: ['SUPER_ADMIN'] },
      });

    const res = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('GET /api/v1/admin/users preserves query params', async () => {
    const token = makeAccessToken();

    nock('http://auth.local:3011')
      .get('/v1/admin/users')
      .query({ page: '1', limit: '5' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 5, totalPages: 0 } },
      });

    const res = await request(app.getHttpServer())
      .get('/api/v1/admin/users?page=1&limit=5')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.data.meta.limit).toBe(5);
  });

  it('GET /api/v1/cycles and /api/v1/catalog/devices proxy to downstream services', async () => {
    const token = makeAccessToken();

    nock('http://cycle.local:3002')
      .get('/v1/cycles')
      .query({ page: '1', limit: '10' })
      .reply(200, { success: true, data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } } });

    nock('http://catalog.local:3003')
      .get('/v1/catalog/devices')
      .query({ page: '1', limit: '10' })
      .reply(200, { success: true, data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } } });

    const cyclesRes = await request(app.getHttpServer())
      .get('/api/v1/cycles?page=1&limit=10')
      .set('Authorization', `Bearer ${token}`);
    const devicesRes = await request(app.getHttpServer())
      .get('/api/v1/catalog/devices?page=1&limit=10')
      .set('Authorization', `Bearer ${token}`);

    expect(cyclesRes.status).toBe(200);
    expect(devicesRes.status).toBe(200);
  });

  it('GET /api/v1/tradelist and /api/v1/oem-negotiations preserve query params', async () => {
    const token = makeAccessToken();

    nock('http://tradelist.local:3004')
      .get('/v1/tradelist')
      .query({ page: '1', limit: '5' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 5, totalPages: 0 } },
      });

    nock('http://oem.local:3005')
      .get('/v1/oem-negotiations')
      .query({ cycleId: 'cycle-1' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } },
      });

    const tradelistRes = await request(app.getHttpServer())
      .get('/api/v1/tradelist?page=1&limit=5')
      .set('Authorization', `Bearer ${token}`);
    const oemRes = await request(app.getHttpServer())
      .get('/api/v1/oem-negotiations?cycleId=cycle-1')
      .set('Authorization', `Bearer ${token}`);

    expect(tradelistRes.status).toBe(200);
    expect(oemRes.status).toBe(200);
  });

  it('POST /api/v1/auth/logout preserves downstream 204 status', async () => {
    const token = makeAccessToken();

    nock('http://auth.local:3011')
      .post('/v1/auth/logout', { refreshToken: 'r1' })
      .reply(204);

    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/logout')
      .set('Authorization', `Bearer ${token}`)
      .send({ refreshToken: 'r1' });

    expect(res.status).toBe(204);
    expect(res.text).toBe('');
  });

  it('POST /api/v1/auth/refresh proxies rotated tokens and preserves 401 after logout', async () => {
    const token = makeAccessToken();

    nock('http://auth.local:3011')
      .post('/v1/auth/refresh', { refreshToken: 'r1' })
      .reply(200, {
        success: true,
        data: {
          accessToken: 'a2',
          refreshToken: 'r2',
          expiresIn: 900,
          user: { id: 'u-1', email: 'admin@dde.local', roles: ['SUPER_ADMIN'] },
        },
      });

    const refreshRes = await request(app.getHttpServer())
      .post('/api/v1/auth/refresh')
      .send({ refreshToken: 'r1' });

    expect(refreshRes.status).toBe(200);
    expect(refreshRes.body.success).toBe(true);
    expect(refreshRes.body.data.refreshToken).toBe('r2');

    nock('http://auth.local:3011')
      .post('/v1/auth/logout', { refreshToken: 'r2' })
      .reply(204);

    const logoutRes = await request(app.getHttpServer())
      .post('/api/v1/auth/logout')
      .set('Authorization', `Bearer ${token}`)
      .send({ refreshToken: 'r2' });

    expect(logoutRes.status).toBe(204);

    nock('http://auth.local:3011')
      .post('/v1/auth/refresh', { refreshToken: 'r2' })
      .reply(401, { success: false, message: 'Invalid refresh token' });

    const rejectedRefreshRes = await request(app.getHttpServer())
      .post('/api/v1/auth/refresh')
      .send({ refreshToken: 'r2' });

    expect(rejectedRefreshRes.status).toBe(401);
    expect(rejectedRefreshRes.body.success).toBe(false);
  });

  it('GET /api/v1/headlines and /api/v1/approvals preserve query params', async () => {
    const token = makeAccessToken();

    nock('http://headline.local:3006')
      .get('/v1/headlines')
      .query({ cycleId: 'cycle-1' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } },
      });

    nock('http://approval.local:3007')
      .get('/v1/approvals')
      .query({ page: '1', limit: '5' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 5, totalPages: 0 } },
      });

    const headlineRes = await request(app.getHttpServer())
      .get('/api/v1/headlines?cycleId=cycle-1')
      .set('Authorization', `Bearer ${token}`);
    const approvalRes = await request(app.getHttpServer())
      .get('/api/v1/approvals?page=1&limit=5')
      .set('Authorization', `Bearer ${token}`);

    expect(headlineRes.status).toBe(200);
    expect(approvalRes.status).toBe(200);
  });

  it('GET /api/v1/channel-deals and /api/v1/jobs preserve query params', async () => {
    const token = makeAccessToken();

    nock('http://channel-deals.local:3008')
      .get('/v1/channel-deals')
      .query({ channelId: 'ch-1' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } },
      });

    nock('http://job.local:3009')
      .get('/v1/jobs')
      .query({ page: '1', limit: '5' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 5, totalPages: 0 } },
      });

    const channelDealsRes = await request(app.getHttpServer())
      .get('/api/v1/channel-deals?channelId=ch-1')
      .set('Authorization', `Bearer ${token}`);
    const jobsRes = await request(app.getHttpServer())
      .get('/api/v1/jobs?page=1&limit=5')
      .set('Authorization', `Bearer ${token}`);

    expect(channelDealsRes.status).toBe(200);
    expect(jobsRes.status).toBe(200);
  });

  it('GET /api/v1/notifications and /api/v1/audit preserve query params', async () => {
    const token = makeAccessToken();

    nock('http://notification.local:3010')
      .get('/v1/notifications')
      .query({ userId: 'u-1' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } },
      });

    nock('http://audit.local:3012')
      .get('/v1/audit')
      .query({ actorId: 'u-1' })
      .reply(200, {
        success: true,
        data: { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } },
      });

    const notificationsRes = await request(app.getHttpServer())
      .get('/api/v1/notifications?userId=u-1')
      .set('Authorization', `Bearer ${token}`);
    const auditRes = await request(app.getHttpServer())
      .get('/api/v1/audit?actorId=u-1')
      .set('Authorization', `Bearer ${token}`);

    expect(notificationsRes.status).toBe(200);
    expect(auditRes.status).toBe(200);
  });
});
