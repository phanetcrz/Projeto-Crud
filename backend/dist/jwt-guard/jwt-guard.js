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
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
let JwtGuard = class JwtGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const requisicao = context.switchToHttp().getRequest();
        const token = requisicao.headers.authorization?.split(' ')[1];
        function lancarErro() {
            throw new common_2.UnauthorizedException("Parece que você não está logado. Faça login novamente");
        }
        try {
            const tokenDecodificado = this.jwtService.decode(token);
            if (tokenDecodificado.exp < Math.round(Date.now() / 1000)) {
                lancarErro();
            }
            requisicao.emailUsuario = tokenDecodificado.email;
        }
        catch (e) {
            lancarErro();
        }
        return true;
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtGuard);
//# sourceMappingURL=jwt-guard.js.map