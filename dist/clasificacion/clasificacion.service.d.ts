import { Repository } from 'typeorm';
import { Clasificacion } from './entities/clasificacion.entity';
import { CreateClasificacionDto } from './dto/create-clasificacion.dto';
import { UpdateClasificacionDto } from './dto/update-clasificacion.dto';
export declare class ClasificacionService {
    private readonly clasificacionRepository;
    constructor(clasificacionRepository: Repository<Clasificacion>);
    create(dto: CreateClasificacionDto): Promise<Clasificacion>;
    findAll(): Promise<Clasificacion[]>;
    findOne(id: number): Promise<Clasificacion>;
    update(id: number, dto: UpdateClasificacionDto): Promise<Clasificacion>;
    remove(id: number): Promise<void>;
}
