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
exports.Stock = void 0;
const typeorm_1 = require("typeorm");
const almacen_entity_1 = require("../../almacen/entities/almacen.entity");
const producto_entity_1 = require("../../producto/entities/producto.entity");
let Stock = class Stock {
};
exports.Stock = Stock;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'alm_id', type: 'int' }),
    __metadata("design:type", Number)
], Stock.prototype, "almId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'prod_id', type: 'int' }),
    __metadata("design:type", Number)
], Stock.prototype, "prodId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'stk_cantidad', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Stock.prototype, "stkCantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => almacen_entity_1.Almacen, (almacen) => almacen.stocks),
    (0, typeorm_1.JoinColumn)({ name: 'alm_id' }),
    __metadata("design:type", almacen_entity_1.Almacen)
], Stock.prototype, "almacen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.stocks),
    (0, typeorm_1.JoinColumn)({ name: 'prod_id' }),
    __metadata("design:type", producto_entity_1.Producto)
], Stock.prototype, "producto", void 0);
exports.Stock = Stock = __decorate([
    (0, typeorm_1.Entity)('stock')
], Stock);
//# sourceMappingURL=stock.entity.js.map