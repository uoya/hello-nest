import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {suite, test, beforeEach} from 'node:test';
import assert from 'node:assert';

suite('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  suite('root', () => {
    test('should return "Hello World!"', () => {
      assert.strictEqual(appController.getHello(),'Hello World!');
    });
  });
});
