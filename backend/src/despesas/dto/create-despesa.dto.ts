import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"
import { Transform } from "class-transformer";

export class CreateDespesaDto {
    @IsString()
    @IsNotEmpty({ message: "A descrição é obrigatória." })
    @MinLength(10, { message: "A descrição precisa ter no mínimo 10 caracteres." })
    descricao: string;

    @IsDateString({}, { message: "A data deve ser válida." })
    @IsNotEmpty({ message: "A data é obrigatória." })
    data: Date;

    @IsNumber({}, { message: "O valor deve ser um número." })
    @IsNotEmpty({ message: "O valor é obrigatório." })
    @Transform(({ value }) => Number(value))  //pega o valor original do objeto value e converte para numero
    valor: number;

    @IsBoolean({ message: "O campo deve ser verdadeiro ou falso" })
    @IsNotEmpty({ message: "O campo pago é obrigatório." })
    pago: boolean;
}

// Decorator
// @isString()

//npm install --save class-validator class-transformer