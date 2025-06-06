import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
export declare class DespesasService {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    formatarDespesa(despesa: any): any;
    create(createDespesaDto: CreateDespesaDto): import("generated/prisma").Prisma.Prisma__DespesaClient<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }[]>;
    findOne(id: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    update(id: string, updateDespesaDto: UpdateDespesaDto): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    remove(id: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    encontraDespesa(id: string): Promise<void>;
    lancaErro404(e: any, stringAcao: string): void;
}
