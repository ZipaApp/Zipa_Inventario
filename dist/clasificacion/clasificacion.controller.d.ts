import { ClasificacionService } from './clasificacion.service';
import { CreateClasificacionDto } from './dto/create-clasificacion.dto';
import { UpdateClasificacionDto } from './dto/update-clasificacion.dto';
export declare class ClasificacionController {
    private readonly clasificacionService;
    constructor(clasificacionService: ClasificacionService);
    create(dto: CreateClasificacionDto): Promise<import("./entities/clasificacion.entity").Clasificacion>;
    findAll(): Promise<import("./entities/clasificacion.entity").Clasificacion[]>;
    findOne(id: string): Promise<import("./entities/clasificacion.entity").Clasificacion>;
    update(id: string, dto: UpdateClasificacionDto): Promise<import("./entities/clasificacion.entity").Clasificacion>;
    remove(id: string): Promise<void>;
}
