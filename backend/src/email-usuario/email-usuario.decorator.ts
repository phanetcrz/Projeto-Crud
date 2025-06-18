import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

interface Requisicao extends Request {
  emailUsuario?: string; //A requisição está extendendo de Request e está incluindo o email usuario nela.
}
export const EmailUsuario = createParamDecorator(
  (_: any, ctx: ExecutionContext) => {
    const requisicao: Requisicao = ctx.switchToHttp().getRequest(); //pega os dados na requisição
    return requisicao.emailUsuario; //retorna o usuário da requisição
  },
);

/* do controller
   @Post()
    create(@Body() createDespesaDto: CreateDespesaDto, @Request() req: any) {
    return this.despesasService.create(createDespesaDto, req.emailUsuario);
  }
 - função de dois parametros 
   (_: any, ctx: ExecutionContext) =>{ 
   ..}  
   
   */
