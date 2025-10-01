import { DataSource } from 'typeorm';
import { Almacen } from './entities/almacen.entity';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
export declare class AlmacenService {
    private dataSource;
    private readonly almacenRepository;
    constructor(dataSource: DataSource);
    create(dto: CreateAlmacenDto): Promise<Almacen>;
    findAll(): Promise<Almacen[]>;
    findOne(id: number): Promise<Almacen | null>;
    update(id: number, dto: UpdateAlmacenDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
