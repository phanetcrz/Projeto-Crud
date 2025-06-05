"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesasModule = void 0;
const common_1 = require("@nestjs/common");
const despesas_service_1 = require("./despesas.service");
const despesas_controller_1 = require("./despesas.controller");
const prisma_provider_1 = require("../db/prisma.provider");
let DespesasModule = class DespesasModule {
};
exports.DespesasModule = DespesasModule;
exports.DespesasModule = DespesasModule = __decorate([
    (0, common_1.Module)({
        controllers: [despesas_controller_1.DespesasController],
        providers: [despesas_service_1.DespesasService, prisma_provider_1.PrismaProvider],
    })
], DespesasModule);
//# sourceMappingURL=despesas.module.js.map