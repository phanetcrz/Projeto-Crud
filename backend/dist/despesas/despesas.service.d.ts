import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
interface DespesaInput {
    descricao: string;
    valor: number;
    data: string;
    pago: boolean;
}
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
    formatarDespesa(despesa: CreateDespesaDto | UpdateDespesaDto): DespesaInput;
    create(createDespesaDto: CreateDespesaDto, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
    findAll(email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }[]>;
    findOne(id: string, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
    update(id: string, updateDespesaDto: UpdateDespesaDto, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
    remove(id: string, email: string): Promise<{
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        id: string;
    }>;
    encontraDespesa(id: string, email: string): Promise<{
        id: string;
        usuarioId: string;
    }>;
    lancaErro404(e: unknown, stringAcao: string): void;
    pegaIdPorEmail(email: string): Promise<string>;
}
export {};
