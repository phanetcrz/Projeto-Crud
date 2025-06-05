"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormataFilter = void 0;
const common_1 = require("@nestjs/common");
let FormataFilter = class FormataFilter {
    catch(exception, host) {
        const resposta = host.switchToHttp().getResponse();
        console.log(resposta);
        const ehHttpException = exception instanceof common_1.HttpException;
        const status = ehHttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const respostaOriginal = ehHttpException && exception.getResponse();
        console.log('erro: ' + respostaOriginal);
        const mensagem = respostaOriginal ? respostaOriginal.message : "Houve um problema desconhecido.";
        const mensagemEhArray = Array.isArray(mensagem);
        const tipo = exception?.constructor?.name;
        resposta.status(status).json({
            erro: {
                mensagem: mensagemEhArray ? mensagem.join(" ") : mensagem,
                status,
                tipo
            }
        });
    }
};
exports.FormataFilter = FormataFilter;
exports.FormataFilter = FormataFilter = __decorate([
    (0, common_1.Catch)()
], FormataFilter);
//# sourceMappingURL=formata.filter.js.map