import { Module } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { DespesasController } from './despesas.controller';
import { PrismaProvider } from 'src/db/prisma.provider';

@Module({
  controllers: [DespesasController],
  providers: [DespesasService, PrismaProvider],
})
export class DespesasModule { }
