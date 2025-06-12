import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const EmailUsuario = createParamDecorator(
  (_: any, ctx: ExecutionContext) => {
    const requisicao = ctx.switchToHttp().getRequest() //pega os dados na requisição
    return requisicao.emailUsuario                     //retorna o usuário da requisição

  }
)

/* do controller
   @Post()
    create(@Body() createDespesaDto: CreateDespesaDto, @Request() req: any) {
    return this.despesasService.create(createDespesaDto, req.emailUsuario);
  }
 - função de dois parametros 
   (_: any, ctx: ExecutionContext) =>{ 
   ..}  
   
   */

