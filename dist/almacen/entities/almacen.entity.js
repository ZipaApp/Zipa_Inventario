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
exports.Almacen = void 0;
const typeorm_1 = require("typeorm");
const stock_entity_1 = require("../../stock/entities/stock.entity");
let Almacen = class Almacen {
};
exports.Almacen = Almacen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'alm_id' }),
    __metadata("design:type", Number)
], Almacen.prototype, "almId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alm_nombre', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Almacen.prototype, "almNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alm_direccion', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Almacen.prototype, "almDireccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alm_telefono', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Almacen.prototype, "almTelefono", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stock_entity_1.Stock, (stock) => stock.almacen),
    __metadata("design:type", Array)
], Almacen.prototype, "stocks", void 0);
exports.Almacen = Almacen = __decorate([
    (0, typeorm_1.Entity)('almacen')
], Almacen);
//# sourceMappingURL=almacen.entity.js.map