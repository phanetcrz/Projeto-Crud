import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespesasModule } from './despesas/despesas.module';
import { DbModule } from './db/db.module';
import { PrismaProvider } from './db/prisma.provider';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DespesasModule,
    DbModule,
    AuthModule,
    JwtModule,
    JwtModule.register({
      global: true,
      secret: 'meu-segredo',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaProvider],
})

// eslint-disable-next-line prettier/prettier
export class AppModule { }
