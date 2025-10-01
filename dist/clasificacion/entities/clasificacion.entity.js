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
exports.Clasificacion = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("../../producto/entities/producto.entity");
let Clasificacion = class Clasificacion {
};
exports.Clasificacion = Clasificacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'cat_id' }),
    __metadata("design:type", Number)
], Clasificacion.prototype, "catId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cat_nombre', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Clasificacion.prototype, "catNombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => producto_entity_1.Producto, (producto) => producto.clasificacion),
    __metadata("design:type", Array)
], Clasificacion.prototype, "productos", void 0);
exports.Clasificacion = Clasificacion = __decorate([
    (0, typeorm_1.Entity)('clasificacion')
], Clasificacion);
//# sourceMappingURL=clasificacion.entity.js.map