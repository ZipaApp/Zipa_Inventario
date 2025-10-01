"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComerciaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_comercia_dto_1 = require("./create-comercia.dto");
class UpdateComerciaDto extends (0, mapped_types_1.PartialType)(create_comercia_dto_1.CreateComerciaDto) {
}
exports.UpdateComerciaDto = UpdateComerciaDto;
//# sourceMappingURL=update-comercia.dto.js.map