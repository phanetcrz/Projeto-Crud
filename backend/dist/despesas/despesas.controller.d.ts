import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasController {
    private readonly despesasService;
    constructor(despesasService: DespesasService);
    create(createDespesaDto: CreateDespesaDto): import("generated/prisma").Prisma.Prisma__DespesaClient<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
    update(id: string, updateDespesaDto: UpdateDespesaDto): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
    remove(id: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
}
