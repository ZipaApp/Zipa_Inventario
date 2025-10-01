"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerciaModule = void 0;
const common_1 = require("@nestjs/common");
const comercia_service_1 = require("./comercia.service");
const comercia_controller_1 = require("./comercia.controller");
const database_module_1 = require("../database/database.module");
let ComerciaModule = class ComerciaModule {
};
exports.ComerciaModule = ComerciaModule;
exports.ComerciaModule = ComerciaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [comercia_controller_1.ComerciaController],
        providers: [comercia_service_1.ComerciaService],
        exports: [comercia_service_1.ComerciaService],
    })
], ComerciaModule);
//# sourceMappingURL=comercia.module.js.map