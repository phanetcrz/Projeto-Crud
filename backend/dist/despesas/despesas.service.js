"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_provider_1 = require("../db/prisma.provider");
let DespesasService = class DespesasService {
    constructor(prisma) {
        this.prisma = prisma;
        this.camposParaSelecionar = {
            id: true, descricao: true, valor: true, data: true, pago: true
        };
    }
    formatarDespesa(despesa) {
        const novaDespesa = { ...despesa };
        if (despesa.data) {
            novaDespesa.data = `${new Date(despesa.data).toISOString().slice(0, -1)}-03:00`;
        }
        if (despesa.valor) {
            novaDespesa.valor = parseFloat(`${despesa.valor}`);
        }
        return novaDespesa;
    }
    async create(createDespesaDto, email) {
        try {
            const idUsuario = await this.pegaIdPorEmail(email);
            return this.prisma.despesa.create({
                data: {
                    ...this.formatarDespesa(createDespesaDto),
                    usuario: {
                        connect: { id: idUsuario }
                    }
                }, select: this.camposParaSelecionar
            });
        }
        catch (e) {
            throw new common_1.InternalServerErrorException("Não foi possível criar a despesa. Verifique os dados e tente novamente");
        }
    }
    async findAll(email) {
        try {
            const usuarioId = await this.pegaIdPorEmail(email);
            return this.prisma.despesa.findMany({
                where: { usuarioId },
                select: this.camposParaSelecionar
            });
        }
        catch (e) {
            throw new common_1.InternalServerErrorException("Não foi possível obter as despesas. Tente novamente mais tarde.");
        }
    }
    async findOne(id, email) {
        try {
            const usuarioId = await this.pegaIdPorEmail(email);
            const despesa = await this.prisma.despesa.findUnique({
                where: { id, usuarioId },
                select: this.camposParaSelecionar
            });
            if (!despesa) {
                throw new common_1.NotFoundException("Despesa não encontrada.");
            }
            return despesa;
        }
        catch (e) {
            this.lancaErro404(e, "obter a despesa");
        }
    }
    async update(id, updateDespesaDto, email) {
        try {
            const criterioSelecao = await this.encontraDespesa(id, email);
            return this.prisma.despesa.update({
                where: criterioSelecao,
                data: this.formatarDespesa(updateDespesaDto),
                select: this.camposParaSelecionar
            });
        }
        catch (e) {
            this.lancaErro404(e, "atualizar a despesa");
        }
    }
    async remove(id, email) {
        try {
            const criterioSelecao = await this.encontraDespesa(id, email);
            return this.prisma.despesa.delete({
                where: criterioSelecao,
                select: this.camposParaSelecionar
            });
        }
        catch (e) {
            this.lancaErro404(e, "remover a despesa");
        }
    }
    async encontraDespesa(id, email) {
        const usuarioId = await this.pegaIdPorEmail(email);
        const despesa = await this.prisma.despesa.findUnique({ where: { id, usuarioId } });
        if (!despesa) {
            throw new common_1.NotFoundException("Despesa não encontrada.");
        }
        return { id: despesa.id, usuarioId };
    }
    lancaErro404(e, stringAcao) {
        if (e?.status && e.status === 404) {
            throw e;
        }
        throw new common_1.InternalServerErrorException(`Não foi possível ${stringAcao}. Tente novamente mais tarde.`);
    }
    async pegaIdPorEmail(email) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { email: email }
        });
        if (!usuario) {
            throw new common_1.NotFoundException("Usuário não foi encontrado");
        }
        return usuario.id;
    }
};
exports.DespesasService = DespesasService;
exports.DespesasService = DespesasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_provider_1.PrismaProvider])
], DespesasService);
//# sourceMappingURL=despesas.service.js.map