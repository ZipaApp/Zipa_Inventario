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
exports.ComerciaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const comercia_entity_1 = require("./entities/comercia.entity");
let ComerciaService = class ComerciaService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.comerciaRepository = this.dataSource.getRepository(comercia_entity_1.Comercia);
    }
    create(dto) {
        const entity = this.comerciaRepository.create(dto);
        return this.comerciaRepository.save(entity);
    }
    findAll() {
        return this.comerciaRepository.find({
            relations: ['producto', 'proveedor'],
        });
    }
    findOne(id) {
        return this.comerciaRepository.findOne({
            where: { comId: id },
            relations: ['producto', 'proveedor'],
        });
    }
    update(id, dto) {
        return this.comerciaRepository.update(id, dto);
    }
    remove(id) {
        return this.comerciaRepository.delete(id);
    }
};
exports.ComerciaService = ComerciaService;
exports.ComerciaService = ComerciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ComerciaService);
//# sourceMappingURL=comercia.service.js.map