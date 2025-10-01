import { DataSource } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockService {
    private dataSource;
    private readonly stockRepository;
    constructor(dataSource: DataSource);
    create(dto: CreateStockDto): Promise<Stock>;
    findAll(): Promise<Stock[]>;
    findOne(almId: number, prodId: number): Promise<Stock | null>;
    update(almId: number, prodId: number, dto: UpdateStockDto): Promise<import("typeorm").UpdateResult>;
    remove(almId: number, prodId: number): Promise<import("typeorm").DeleteResult>;
}
