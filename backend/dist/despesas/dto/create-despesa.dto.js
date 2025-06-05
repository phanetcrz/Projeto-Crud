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
exports.CreateDespesaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateDespesaDto {
}
exports.CreateDespesaDto = CreateDespesaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "A descrição é obrigatória." }),
    (0, class_validator_1.MinLength)(10, { message: "A descrição precisa ter no mínimo 10 caracteres." }),
    __metadata("design:type", String)
], CreateDespesaDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: "A data deve ser válida." }),
    (0, class_validator_1.IsNotEmpty)({ message: "A data é obrigatória." }),
    __metadata("design:type", Date)
], CreateDespesaDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O valor deve ser um número." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O valor é obrigatório." }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    __metadata("design:type", Number)
], CreateDespesaDto.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "O campo deve ser verdadeiro ou falso" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo pago é obrigatório." }),
    __metadata("design:type", Boolean)
], CreateDespesaDto.prototype, "pago", void 0);
//# sourceMappingURL=create-despesa.dto.js.map