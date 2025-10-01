import { SedeService } from './sede.service';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
export declare class SedeController {
    private readonly sedeService;
    constructor(sedeService: SedeService);
    create(dto: CreateSedeDto): Promise<import("./entities/sede.entity").Sede>;
    findAll(): Promise<import("./entities/sede.entity").Sede[]>;
    findOne(id: number): Promise<import("./entities/sede.entity").Sede | null>;
    update(id: number, dto: UpdateSedeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
