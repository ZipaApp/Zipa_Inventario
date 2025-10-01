import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(dto: CreateStockDto): Promise<import("./entities/stock.entity").Stock>;
    findAll(): Promise<import("./entities/stock.entity").Stock[]>;
    findOne(almId: number, prodId: number): Promise<import("./entities/stock.entity").Stock | null>;
    update(almId: number, prodId: number, dto: UpdateStockDto): Promise<import("typeorm").UpdateResult>;
    remove(almId: number, prodId: number): Promise<import("typeorm").DeleteResult>;
}
