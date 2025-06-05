import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/criar-usuario.dto';
import { LogarUsuarioDTO } from './dto/logar-usuario.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaProvider,
    private readonly jwtService: JwtService
  ) { }

  async criar(criarUsuarioDTO: CriarUsuarioDTO) {
    const rodadas = 4
    const senhaHash = await hash(criarUsuarioDTO.senha, rodadas)

    const usuarioJaCadastrado = await this.prisma.usuario.findUnique(
      { where: { email: criarUsuarioDTO.email } }
    )

    if (usuarioJaCadastrado) {
      throw new ConflictException("Usuário já cadastrado")  //Padrão do Nest
    }

    try {
      return this.prisma.usuario.create({
        data: {
          ...criarUsuarioDTO,
          senha: senhaHash
        },
        select: {   //--aqui define que ao executar a criação do usuario, só vai retornar o email do usuário
          nome: true,
          email: true
        }
      })
    } catch (e: any) {
      throw new InternalServerErrorException("Houve um problema ao cadastrar o usuário. Tente novamente mais tarde.")
    }
  }


  async logar(logarUsuarioDTO: LogarUsuarioDTO) {
    try {
      const { email, senha } = logarUsuarioDTO; //processo de desestruturação

      //pesquisa o usuario utilizando o email
      const usuario = await this.prisma.usuario.findUnique({
        where: { email }
      })

      if (!usuario) {
        throw new UnauthorizedException("Usuário não encontrado")
      }

      const senhaCorreta = await compare(senha, usuario.senha)

      if (!senhaCorreta) {
        throw new UnauthorizedException("Usuário ou senha incorreta")
      }

      const payload = {   //aonde é definido o que vai estar dentro do token, que por enquanto será apenas o usuário
        email: usuario.email
      }

      return {
        nome: usuario.nome,
        email: usuario.email,
        token: this.jwtService.sign(payload)
      }
    } catch (e: any) {
      if (e instanceof UnauthorizedException) {
        throw e
      }
      throw new InternalServerErrorException("Houve um problema ao logar o seu usuário. Tente novamente mais tarde.")
    }
  }
}
