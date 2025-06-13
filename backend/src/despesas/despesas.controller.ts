// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { JwtGuard } from 'src/jwt-guard/jwt-guard';
import { EmailUsuario } from 'src/email-usuario/email-usuario.decorator';

@Controller('despesas')
@UseGuards(JwtGuard)
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  create(
    @Body() createDespesaDto: CreateDespesaDto,
    @EmailUsuario() email: string,
  ) {
    //**@EmailUsuario - decorator personalizado */
    return this.despesasService.create(createDespesaDto, email);
  }

  @Get()
  findAll(@EmailUsuario() email: string) {
    return this.despesasService.findAll(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @EmailUsuario() email: string) {
    return this.despesasService.findOne(id, email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDespesaDto: UpdateDespesaDto,
    @EmailUsuario() email: string,
  ) {
    return this.despesasService.update(id, updateDespesaDto, email);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @EmailUsuario() email: string) {
    return this.despesasService.remove(id, email);
  }
}

/*
Pegar a requisição completa
@Request() req: any

ex:

create(@Body() createDespesaDto: CreateDespesaDto, @Request() req: any) {


*/
