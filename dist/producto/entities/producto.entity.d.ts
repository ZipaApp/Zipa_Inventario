import { Clasificacion } from '../../clasificacion/entities/clasificacion.entity';
import { Stock } from '../../stock/entities/stock.entity';
import { Comercia } from '../../comercia/entities/comercia.entity';
export declare class Producto {
    prodId: number;
    prodCodigo: number;
    prodNombre: string;
    prodTamaño: number;
    prodPrecio: number;
    prodCantidad: number;
    clasificacion: Clasificacion;
    stocks: Stock[];
    comercios: Comercia[];
}
