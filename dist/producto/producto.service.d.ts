import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Clasificacion } from '../clasificacion/entities/clasificacion.entity';
export declare class ProductoService {
    private readonly productoRepository;
    private readonly clasificacionRepository;
    constructor(productoRepository: Repository<Producto>, clasificacionRepository: Repository<Clasificacion>);
    create(dto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, dto: UpdateProductoDto): Promise<Producto>;
    remove(id: number): Promise<void>;
}
