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
exports.Producto = void 0;
const typeorm_1 = require("typeorm");
const clasificacion_entity_1 = require("../../clasificacion/entities/clasificacion.entity");
const stock_entity_1 = require("../../stock/entities/stock.entity");
const comercia_entity_1 = require("../../comercia/entities/comercia.entity");
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'prod_id' }),
    __metadata("design:type", Number)
], Producto.prototype, "prodId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prod_codigo', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Producto.prototype, "prodCodigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prod_nombre', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Producto.prototype, "prodNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prod_tamaño', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Producto.prototype, "prodTama\u00F1o", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prod_precio', type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Producto.prototype, "prodPrecio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prod_cantidad', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "prodCantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clasificacion_entity_1.Clasificacion, (clasificacion) => clasificacion.productos),
    (0, typeorm_1.JoinColumn)({ name: 'cat_id' }),
    __metadata("design:type", clasificacion_entity_1.Clasificacion)
], Producto.prototype, "clasificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stock_entity_1.Stock, (stock) => stock.producto),
    __metadata("design:type", Array)
], Producto.prototype, "stocks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comercia_entity_1.Comercia, (comercia) => comercia.producto),
    __metadata("design:type", Array)
], Producto.prototype, "comercios", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('producto')
], Producto);
//# sourceMappingURL=producto.entity.js.map