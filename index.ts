import 'reflect-metadata';
import { Injectable } from './packages/common/decorators/core/injectable.decorator';

import { NestFactory } from './packages/core';
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
