import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: () => {
        return new HttpException(
          'Dados obrigatorios não informados ou invalidos',
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
