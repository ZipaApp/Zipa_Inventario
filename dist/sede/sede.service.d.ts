import { DataSource } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
export declare class SedeService {
    private dataSource;
    private readonly sedeRepository;
    constructor(dataSource: DataSource);
    create(dto: CreateSedeDto): Promise<Sede>;
    findAll(): Promise<Sede[]>;
    findOne(id: number): Promise<Sede | null>;
    update(id: number, dto: UpdateSedeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
