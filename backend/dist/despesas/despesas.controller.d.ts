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
}
