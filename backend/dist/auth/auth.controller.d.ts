import { AuthService } from './auth.service';
import { CriarUsuarioDTO } from './dto/criar-usuario.dto';
import { LogarUsuarioDTO } from './dto/logar-usuario.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(criarUsuarioDTO: CriarUsuarioDTO): Promise<{
        nome: string;
        email: string;
    }>;
    update(logarUsuarioDTO: LogarUsuarioDTO): Promise<{
        nome: string;
        email: string;
        token: string;
    }>;
}
