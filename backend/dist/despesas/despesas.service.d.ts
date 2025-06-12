import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
export declare class DespesasService {
    private readonly prisma;
    camposParaSelecionar: {
        id: boolean;
        descricao: boolean;
        valor: boolean;
        data: boolean;
        pago: boolean;
    };
    constructor(prisma: PrismaProvider);
    formatarDespesa(despesa: any): any;
    create(createDespesaDto: CreateDespesaDto, email: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
    }>;
    findAll(email: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
    }[]>;
    findOne(id: string, email: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
    }>;
    update(id: string, updateDespesaDto: UpdateDespesaDto, email: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
    }>;
    remove(id: string, email: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
    }>;
    encontraDespesa(id: string, email: string): Promise<{
        id: string;
        usuarioId: string;
    }>;
    lancaErro404(e: any, stringAcao: string): void;
    pegaIdPorEmail(email: string): Promise<string>;
}
