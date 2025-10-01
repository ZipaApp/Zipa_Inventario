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
exports.Proveedor = void 0;
const typeorm_1 = require("typeorm");
const sede_entity_1 = require("../../sede/entities/sede.entity");
const comercia_entity_1 = require("../../comercia/entities/comercia.entity");
let Proveedor = class Proveedor {
};
exports.Proveedor = Proveedor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'prov_id' }),
    __metadata("design:type", Number)
], Proveedor.prototype, "provId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prov_razonsocial', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Proveedor.prototype, "provRazonSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prov_nit', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Proveedor.prototype, "provNit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prov_responsable', type: 'varchar', length: 70, nullable: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "provResponsable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prov_correo', type: 'varchar', length: 70, nullable: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "provCorreo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prov_telefono', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "provTelefono", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sede_entity_1.Sede, (sede) => sede.proveedor),
    __metadata("design:type", Array)
], Proveedor.prototype, "sedes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comercia_entity_1.Comercia, (comercia) => comercia.proveedor),
    __metadata("design:type", Array)
], Proveedor.prototype, "comercios", void 0);
exports.Proveedor = Proveedor = __decorate([
    (0, typeorm_1.Entity)('proveedor')
], Proveedor);
//# sourceMappingURL=proveedor.entity.js.map