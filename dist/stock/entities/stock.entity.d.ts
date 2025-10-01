import { Almacen } from '../../almacen/entities/almacen.entity';
import { Producto } from '../../producto/entities/producto.entity';
export declare class Stock {
    almId: number;
    prodId: number;
    stkCantidad: number;
    almacen: Almacen;
    producto: Producto;
}
