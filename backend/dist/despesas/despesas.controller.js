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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasController = void 0;
const common_1 = require("@nestjs/common");
const despesas_service_1 = require("./despesas.service");
const create_despesa_dto_1 = require("./dto/create-despesa.dto");
const update_despesa_dto_1 = require("./dto/update-despesa.dto");
const jwt_guard_1 = require("../jwt-guard/jwt-guard");
const email_usuario_decorator_1 = require("../email-usuario/email-usuario.decorator");
let DespesasController = class DespesasController {
    constructor(despesasService) {
        this.despesasService = despesasService;
    }
    create(createDespesaDto, email) {
        return this.despesasService.create(createDespesaDto, email);
    }
    findAll(email) {
        return this.despesasService.findAll(email);
    }
    findOne(id, email) {
        return this.despesasService.findOne(id, email);
    }
    update(id, updateDespesaDto, email) {
        return this.despesasService.update(id, updateDespesaDto, email);
    }
    remove(id, email) {
        return this.despesasService.remove(id, email);
    }
};
exports.DespesasController = DespesasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, email_usuario_decorator_1.EmailUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_despesa_dto_1.CreateDespesaDto, String]),
    __metadata("design:returntype", void 0)
], DespesasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, email_usuario_decorator_1.EmailUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DespesasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, email_usuario_decorator_1.EmailUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DespesasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, email_usuario_decorator_1.EmailUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_despesa_dto_1.UpdateDespesaDto, String]),
    __metadata("design:returntype", void 0)
], DespesasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, email_usuario_decorator_1.EmailUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DespesasController.prototype, "remove", null);
exports.DespesasController = DespesasController = __decorate([
    (0, common_1.Controller)('despesas'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [despesas_service_1.DespesasService])
], DespesasController);
//# sourceMappingURL=despesas.controller.js.map