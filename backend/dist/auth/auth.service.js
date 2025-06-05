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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_provider_1 = require("../db/prisma.provider");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async criar(criarUsuarioDTO) {
        const rodadas = 4;
        const senhaHash = await (0, bcrypt_1.hash)(criarUsuarioDTO.senha, rodadas);
        const usuarioJaCadastrado = await this.prisma.usuario.findUnique({ where: { email: criarUsuarioDTO.email } });
        if (usuarioJaCadastrado) {
            throw new common_1.ConflictException("Usuário já cadastrado");
        }
        try {
            return this.prisma.usuario.create({
                data: {
                    ...criarUsuarioDTO,
                    senha: senhaHash
                },
                select: {
                    nome: true,
                    email: true
                }
            });
        }
        catch (e) {
            throw new common_1.InternalServerErrorException("Houve um problema ao cadastrar o usuário. Tente novamente mais tarde.");
        }
    }
    async logar(logarUsuarioDTO) {
        try {
            const { email, senha } = logarUsuarioDTO;
            const usuario = await this.prisma.usuario.findUnique({
                where: { email }
            });
            if (!usuario) {
                throw new common_1.UnauthorizedException("Usuário não encontrado");
            }
            const senhaCorreta = await (0, bcrypt_1.compare)(senha, usuario.senha);
            if (!senhaCorreta) {
                throw new common_1.UnauthorizedException("Usuário ou senha incorreta");
            }
            const payload = {
                email: usuario.email
            };
            return {
                nome: usuario.nome,
                email: usuario.email,
                token: this.jwtService.sign(payload)
            };
        }
        catch (e) {
            if (e instanceof common_1.UnauthorizedException) {
                throw e;
            }
            throw new common_1.InternalServerErrorException("Houve um problema ao logar o seu usuário. Tente novamente mais tarde.");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_provider_1.PrismaProvider,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map