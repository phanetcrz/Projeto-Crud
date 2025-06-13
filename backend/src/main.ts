import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { FormataFilter } from './filters/formata.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalFilters(
    new FormataFilter(),
  ); /* Configuração do filter para toda a aplicação */

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

/* whitelist: true
remove as propriedades não declarada no json, ex:
{
    "nome": "Paulo",
    "email": "phanet@gmail.com",
    "senha": "123456"    
    "teste": "teste" --> esse cara é removido
}

*/
