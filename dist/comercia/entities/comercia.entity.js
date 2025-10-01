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
exports.Comercia = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("../../producto/entities/producto.entity");
const proveedor_entity_1 = require("../../proveedor/entities/proveedor.entity");
let Comercia = class Comercia {
};
exports.Comercia = Comercia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'com_id' }),
    __metadata("design:type", Number)
], Comercia.prototype, "comId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'com_codigo', type: 'int' }),
    __metadata("design:type", Number)
], Comercia.prototype, "comCodigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'com_fecha', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Comercia.prototype, "comFecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'com_responsable', type: 'varchar', length: 70, nullable: true }),
    __metadata("design:type", String)
], Comercia.prototype, "comResponsable", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.comercios),
    (0, typeorm_1.JoinColumn)({ name: 'prod_id' }),
    __metadata("design:type", producto_entity_1.Producto)
], Comercia.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proveedor_entity_1.Proveedor, (proveedor) => proveedor.comercios),
    (0, typeorm_1.JoinColumn)({ name: 'prov_id' }),
    __metadata("design:type", proveedor_entity_1.Proveedor)
], Comercia.prototype, "proveedor", void 0);
exports.Comercia = Comercia = __decorate([
    (0, typeorm_1.Entity)('comercia')
], Comercia);
//# sourceMappingURL=comercia.entity.js.map