import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClsMiddleware } from 'nestjs-cls';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    new ClsMiddleware().use,
  );
  await app.listen(3000);
}

bootstrap();
