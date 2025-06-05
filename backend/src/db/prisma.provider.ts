import { Global, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';


@Global()
@Injectable()
export class PrismaProvider extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}


//@Global()  -- ser uma instância unica
//@Injectable() -- injeção de dependencia