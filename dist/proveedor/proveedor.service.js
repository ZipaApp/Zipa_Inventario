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
exports.ProveedorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const proveedor_entity_1 = require("./entities/proveedor.entity");
let ProveedorService = class ProveedorService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.proveedorRepository = this.dataSource.getRepository(proveedor_entity_1.Proveedor);
    }
    create(dto) {
        const entity = this.proveedorRepository.create(dto);
        return this.proveedorRepository.save(entity);
    }
    findAll() {
        return this.proveedorRepository.find({
            relations: ['sedes', 'comercios'],
        });
    }
    findOne(id) {
        return this.proveedorRepository.findOne({
            where: { provId: id },
            relations: ['sedes', 'comercios'],
        });
    }
    update(id, dto) {
        return this.proveedorRepository.update(id, dto);
    }
    remove(id) {
        return this.proveedorRepository.delete(id);
    }
};
exports.ProveedorService = ProveedorService;
exports.ProveedorService = ProveedorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ProveedorService);
//# sourceMappingURL=proveedor.service.js.map