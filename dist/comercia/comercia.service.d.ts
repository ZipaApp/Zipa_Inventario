import { DataSource } from 'typeorm';
import { Comercia } from './entities/comercia.entity';
import { CreateComerciaDto } from './dto/create-comercia.dto';
import { UpdateComerciaDto } from './dto/update-comercia.dto';
export declare class ComerciaService {
    private dataSource;
    private readonly comerciaRepository;
    constructor(dataSource: DataSource);
    create(dto: CreateComerciaDto): Promise<Comercia>;
    findAll(): Promise<Comercia[]>;
    findOne(id: number): Promise<Comercia | null>;
    update(id: number, dto: UpdateComerciaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
