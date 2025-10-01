import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
export declare class AlmacenController {
    private readonly almacenService;
    constructor(almacenService: AlmacenService);
    create(dto: CreateAlmacenDto): Promise<import("./entities/almacen.entity").Almacen>;
    findAll(): Promise<import("./entities/almacen.entity").Almacen[]>;
    findOne(id: number): Promise<import("./entities/almacen.entity").Almacen | null>;
    update(id: number, dto: UpdateAlmacenDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
