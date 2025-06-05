import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requisicao = context.switchToHttp().getRequest() //pega os dados do context da requisição
    const token = requisicao.headers.authorization?.split(' ')[1] //[0]bearer [1]dskdjskjdks e pega o token

    function lancarErro() {
      throw new UnauthorizedException("Parece que você não está logado. Faça login novamente")
    }

    try {
      const tokenDecodificado = this.jwtService.decode(token)
      if (tokenDecodificado.exp < Math.round(Date.now() / 1000)) {  //verifica se o token expirou
        lancarErro()
      }
    } catch (e: any) {
      lancarErro()
    }

    return true;
  }
}
