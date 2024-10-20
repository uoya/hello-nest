import { Test, type TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import {suite, test, beforeEach} from 'node:test';
import assert from 'node:assert';

suite('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();
    await app.init();
  });

  test('/ (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body, "Hello World!");
    return;
  });
});
