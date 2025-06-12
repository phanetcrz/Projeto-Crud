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
    findAll(email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }[]>;
    findOne(id: string, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    update(id: string, updateDespesaDto: UpdateDespesaDto, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    remove(id: string, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    encontraDespesa(id: string, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
        usuarioId: string;
    }>;
    lancaErro404(e: any, stringAcao: string): void;
    pegaIdPorEmail(email: string): Promise<string>;
}
