"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClasificacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clasificacion_dto_1 = require("./create-clasificacion.dto");
class UpdateClasificacionDto extends (0, mapped_types_1.PartialType)(create_clasificacion_dto_1.CreateClasificacionDto) {
}
exports.UpdateClasificacionDto = UpdateClasificacionDto;
//# sourceMappingURL=update-clasificacion.dto.js.map