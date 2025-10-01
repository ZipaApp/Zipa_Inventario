import { Stock } from '../../stock/entities/stock.entity';
export declare class Almacen {
    almId: number;
    almNombre: string;
    almDireccion: string;
    almTelefono: string;
    stocks: Stock[];
}
