import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CriarUsuarioDTO } from './dto/criar-usuario.dto';
import { LogarUsuarioDTO } from './dto/logar-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/cadastrar')
  create(@Body() criarUsuarioDTO: CriarUsuarioDTO) {
    return this.authService.criar(criarUsuarioDTO);
  }

  @Post('/logar')
  update(@Body() logarUsuarioDTO: LogarUsuarioDTO) {
    return this.authService.logar(logarUsuarioDTO);
  }
}
