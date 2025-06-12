import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class DespesasService {

  camposParaSelecionar = {
    id: true, descricao: true, valor: true, data: true, pago: true
  }

  constructor(private readonly prisma: PrismaProvider) { }

  formatarDespesa(despesa: any) {
    const novaDespesa = { ...despesa } /* ...despesa siginifica pegar tudo que tem em despesa */

    if (despesa.data) {   //**Verifica se existe o campo data e se tem valor */
      novaDespesa.data = `${new Date(despesa.data).toISOString().slice(0, -1)}-03:00`;
      /* seleciono o campo data e passo uma data convertida + o slice retira o Z do final da string data e concatenando o fuso horário -3 */
    }

    if (despesa.valor) {
      novaDespesa.valor = parseFloat(`${despesa.valor}`) /* Converte o valor para float */
    }

    return novaDespesa
  }

  async create(createDespesaDto: CreateDespesaDto, email: string) {
    try {
      const idUsuario = await this.pegaIdPorEmail(email)

      return this.prisma.despesa.create({
        data: {
          ...this.formatarDespesa(createDespesaDto),
          usuario: {                                 //--adicionando o ID na criação da despesa
            connect: { id: idUsuario }
          }
        }, select: this.camposParaSelecionar
      });
    } catch (e: any) {
      throw new InternalServerErrorException("Não foi possível criar a despesa. Verifique os dados e tente novamente")
    }
  }

  async findAll(email: string) {
    try {
      const usuarioId = await this.pegaIdPorEmail(email)
      return this.prisma.despesa.findMany({
        where: { usuarioId },
        select: this.camposParaSelecionar
      });
    } catch (e: any) {
      throw new InternalServerErrorException("Não foi possível obter as despesas. Tente novamente mais tarde.")
    }
  }

  async findOne(id: string, email: string) {
    try {
      const usuarioId = await this.pegaIdPorEmail(email)

      const despesa = await this.prisma.despesa.findUnique(
        {
          where: { id, usuarioId },
          select: this.camposParaSelecionar
        }
      )

      if (!despesa) {
        throw new NotFoundException("Despesa não encontrada.")
      }
      return despesa

    } catch (e: any) {
      this.lancaErro404(e, "obter a despesa")
    }
  }

  async update(id: string, updateDespesaDto: UpdateDespesaDto, email: string) {
    try {
      const criterioSelecao = await this.encontraDespesa(id, email)

      return this.prisma.despesa.update({
        where: criterioSelecao,
        data: this.formatarDespesa(updateDespesaDto),
        select: this.camposParaSelecionar
      });
    } catch (e: any) {
      this.lancaErro404(e, "atualizar a despesa")
    }
  }

  async remove(id: string, email: string) {
    try {
      const criterioSelecao = await this.encontraDespesa(id, email)

      return this.prisma.despesa.delete({
        where: criterioSelecao,
        select: this.camposParaSelecionar
      });
    } catch (e: any) {
      this.lancaErro404(e, "remover a despesa")
    }
  }

  async encontraDespesa(id: string, email: string) {
    const usuarioId = await this.pegaIdPorEmail(email)
    const despesa = await this.prisma.despesa.findUnique(
      { where: { id, usuarioId } }
    )

    if (!despesa) {
      throw new NotFoundException("Despesa não encontrada.")
    }
    return { id: despesa.id, usuarioId }
  }

  lancaErro404(e: any, stringAcao: string) {
    if (e?.status && e.status === 404) {
      throw e
    }
    throw new InternalServerErrorException(`Não foi possível ${stringAcao}. Tente novamente mais tarde.`)
  }

  async pegaIdPorEmail(email: string) {
    const usuario = await this.prisma.usuario.findUnique({    //--Pega o email vindo da requisição e faz o filtro por email na tabela do usuário
      where: { email: email }
    })

    if (!usuario) {
      throw new NotFoundException("Usuário não foi encontrado")
    }
    return usuario.id
  }
}
