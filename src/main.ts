import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  const config = new DocumentBuilder()
    .setTitle('Manter sistema.')
    .setDescription('API que busca, altera ou cria resgistros de sistemas.')
    .setVersion('1.0')
    .addTag('system')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
