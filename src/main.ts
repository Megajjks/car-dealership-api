import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true, //remueve los parametros que no se modifican o usan
      forbidNonWhitelisted:true, // te trata como error los parametros que no estan definidos en el DTO
    })
  )

  await app.listen(3000);
}
bootstrap();
