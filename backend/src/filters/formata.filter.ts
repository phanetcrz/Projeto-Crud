import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class FormataFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const resposta: Response = host.switchToHttp().getResponse();
    const ehHttpException = exception instanceof HttpException;

    const status = ehHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR; /* Se a excessão não for do tipo exception então lança um status 500 pelo INTERNAL_SERVER_ERROR*/

    const respostaOriginal: any = ehHttpException && exception.getResponse();

    const mensagem = respostaOriginal
      ? respostaOriginal.message
      : 'Houve um problema desconhecido.';

    const mensagemEhArray = Array.isArray(mensagem);

    const tipo = exception?.constructor?.name;

    resposta.status(status).json({
      erro: {
        mensagem: mensagemEhArray ? mensagem.join(' ') : mensagem, //--verifica se a mensagem é um array para remover.
        status,
        tipo,
      },
    });
  }
}
