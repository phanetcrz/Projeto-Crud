import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LogarUsuarioDTO {
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatório.' })
  @MinLength(6, { message: 'A senha precisa ter no mínimo 6 caracteres.' })
  senha: string;
}
