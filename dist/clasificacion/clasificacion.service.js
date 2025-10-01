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
exports.ClasificacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const clasificacion_entity_1 = require("./entities/clasificacion.entity");
let ClasificacionService = class ClasificacionService {
    constructor(clasificacionRepository) {
        this.clasificacionRepository = clasificacionRepository;
    }
    async create(dto) {
        const clasificacion = this.clasificacionRepository.create(dto);
        return this.clasificacionRepository.save(clasificacion);
    }
    async findAll() {
        return this.clasificacionRepository.find({ relations: ['productos'] });
    }
    async findOne(id) {
        const clasificacion = await this.clasificacionRepository.findOne({
            where: { catId: id },
            relations: ['productos'],
        });
        if (!clasificacion) {
            throw new common_1.NotFoundException(`Clasificación con id ${id} no encontrada`);
        }
        return clasificacion;
    }
    async update(id, dto) {
        const clasificacion = await this.findOne(id);
        Object.assign(clasificacion, dto);
        return this.clasificacionRepository.save(clasificacion);
    }
    async remove(id) {
        const clasificacion = await this.findOne(id);
        await this.clasificacionRepository.remove(clasificacion);
    }
};
exports.ClasificacionService = ClasificacionService;
exports.ClasificacionService = ClasificacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clasificacion_entity_1.Clasificacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClasificacionService);
//# sourceMappingURL=clasificacion.service.js.map