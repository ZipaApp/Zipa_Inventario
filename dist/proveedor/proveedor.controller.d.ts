import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
export declare class ProveedorController {
    private readonly proveedorService;
    constructor(proveedorService: ProveedorService);
    create(dto: CreateProveedorDto): Promise<import("./entities/proveedor.entity").Proveedor>;
    findAll(): Promise<import("./entities/proveedor.entity").Proveedor[]>;
    findOne(id: number): Promise<import("./entities/proveedor.entity").Proveedor | null>;
    update(id: number, dto: UpdateProveedorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
