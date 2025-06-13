import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaProvider } from 'src/db/prisma.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaProvider],
})
export class AuthModule {}
