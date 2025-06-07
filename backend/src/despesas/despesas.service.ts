import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaProvider } from 'src/db/prisma.provider';
import { connect } from 'http2';

@Injectable()
export class DespesasService {

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
      const usuario = await this.prisma.usuario.findUnique({    //--Pega o email vindo da requisição e faz o filtro por email na tabela do usuário
        where: { email: email }
      })

      if (!usuario) {
        throw new NotFoundException("Usuário não foi encontrado")
      }

      return this.prisma.despesa.create({
        data: {
          ...this.formatarDespesa(createDespesaDto),
          usuario: {                                 //--adicionando o ID na criação da despesa
            connect: { id: usuario.id }
          }
        }
      });
    } catch (e: any) {
      throw new InternalServerErrorException("Não foi possível criar a despesa. Verifique os dados e tente novamente")
    }
  }

  findAll() {
    try {
      return this.prisma.despesa.findMany();
    } catch (e: any) {
      throw new InternalServerErrorException("Não foi possível obter as despesas. Tente novamente mais tarde.")
    }
  }

  async findOne(id: string) {
    try {
      await this.encontraDespesa(id)

      const despesa = await this.prisma.despesa.findUnique(
        { where: { id } }
      )

      return despesa
    } catch (e: any) {
      this.lancaErro404(e, "obter a despesa")
    }
  }

  async update(id: string, updateDespesaDto: UpdateDespesaDto) {
    try {
      await this.encontraDespesa(id)

      return this.prisma.despesa.update({
        where: { id },
        data: this.formatarDespesa(updateDespesaDto)
      });
    } catch (e: any) {
      this.lancaErro404(e, "atualizar a despesa")
    }
  }

  async remove(id: string) {
    try {
      await this.encontraDespesa(id)

      return this.prisma.despesa.delete({
        where: { id }
      });
    } catch (e: any) {
      this.lancaErro404(e, "remover a despesa")
    }
  }

  async encontraDespesa(id: string) {
    const despesa = await this.prisma.despesa.findUnique({
      where: { id }
    });

    if (!despesa) {
      throw new NotFoundException("Despesa não encontrada.")
    }
  }

  lancaErro404(e: any, stringAcao: string) {
    if (e?.status && e.status === 404) {
      throw e
    }
    throw new InternalServerErrorException(`Não foi possível ${stringAcao}. Tente novamente mais tarde.`)
  }
}
