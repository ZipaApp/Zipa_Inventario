import { ComerciaService } from './comercia.service';
import { CreateComerciaDto } from './dto/create-comercia.dto';
import { UpdateComerciaDto } from './dto/update-comercia.dto';
export declare class ComerciaController {
    private readonly comerciaService;
    constructor(comerciaService: ComerciaService);
    create(dto: CreateComerciaDto): Promise<import("./entities/comercia.entity").Comercia>;
    findAll(): Promise<import("./entities/comercia.entity").Comercia[]>;
    findOne(id: number): Promise<import("./entities/comercia.entity").Comercia | null>;
    update(id: number, dto: UpdateComerciaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
