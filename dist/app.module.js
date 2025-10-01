"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const database_module_1 = require("./database/database.module");
const clasificacion_module_1 = require("./clasificacion/clasificacion.module");
const producto_module_1 = require("./producto/producto.module");
const almacen_module_1 = require("./almacen/almacen.module");
const stock_module_1 = require("./stock/stock.module");
const proveedor_module_1 = require("./proveedor/proveedor.module");
const sede_module_1 = require("./sede/sede.module");
const comercia_module_1 = require("./comercia/comercia.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: 'db',
                    port: 5432,
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DB'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: false,
                }),
            }),
            database_module_1.DatabaseModule,
            clasificacion_module_1.ClasificacionModule,
            producto_module_1.ProductoModule,
            almacen_module_1.AlmacenModule,
            stock_module_1.StockModule,
            proveedor_module_1.ProveedorModule,
            sede_module_1.SedeModule,
            comercia_module_1.ComerciaModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map