import { DataSource } from 'typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
export declare class ProveedorService {
    private dataSource;
    private readonly proveedorRepository;
    constructor(dataSource: DataSource);
    create(dto: CreateProveedorDto): Promise<Proveedor>;
    findAll(): Promise<Proveedor[]>;
    findOne(id: number): Promise<Proveedor | null>;
    update(id: number, dto: UpdateProveedorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
