import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
export declare class DespesasService {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    formatarDespesa(despesa: any): any;
    create(createDespesaDto: CreateDespesaDto, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
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
