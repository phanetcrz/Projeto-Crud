import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasController {
    private readonly despesasService;
    constructor(despesasService: DespesasService);
    create(createDespesaDto: CreateDespesaDto, email: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        usuarioId: string;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        usuarioId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        usuarioId: string;
    }>;
    update(id: string, updateDespesaDto: UpdateDespesaDto): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        usuarioId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        descricao: string;
        data: Date;
        valor: number;
        pago: boolean;
        usuarioId: string;
    }>;
}
