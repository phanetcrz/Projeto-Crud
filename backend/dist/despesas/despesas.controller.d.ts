import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasController {
    private readonly despesasService;
    constructor(despesasService: DespesasService);
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
}
