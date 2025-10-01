import { Producto } from '../../producto/entities/producto.entity';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';
export declare class Comercia {
    comId: number;
    comCodigo: number;
    comFecha: Date;
    comResponsable: string;
    producto: Producto;
    proveedor: Proveedor;
}
