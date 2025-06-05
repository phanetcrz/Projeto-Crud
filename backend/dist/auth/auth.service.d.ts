import { CriarUsuarioDTO } from './dto/criar-usuario.dto';
import { LogarUsuarioDTO } from './dto/logar-usuario.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaProvider, jwtService: JwtService);
    criar(criarUsuarioDTO: CriarUsuarioDTO): Promise<{
        nome: string;
        email: string;
    }>;
    logar(logarUsuarioDTO: LogarUsuarioDTO): Promise<{
        nome: string;
        email: string;
        token: string;
    }>;
}
