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
exports.Sede = void 0;
const typeorm_1 = require("typeorm");
const proveedor_entity_1 = require("../../proveedor/entities/proveedor.entity");
let Sede = class Sede {
};
exports.Sede = Sede;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'sed_id' }),
    __metadata("design:type", Number)
], Sede.prototype, "sedId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sed_nombre', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Sede.prototype, "sedNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sed_direccion', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Sede.prototype, "sedDireccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sed_telefono', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Sede.prototype, "sedTelefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proveedor_entity_1.Proveedor, (proveedor) => proveedor.sedes),
    (0, typeorm_1.JoinColumn)({ name: 'prov_id' }),
    __metadata("design:type", proveedor_entity_1.Proveedor)
], Sede.prototype, "proveedor", void 0);
exports.Sede = Sede = __decorate([
    (0, typeorm_1.Entity)('sede')
], Sede);
//# sourceMappingURL=sede.entity.js.map