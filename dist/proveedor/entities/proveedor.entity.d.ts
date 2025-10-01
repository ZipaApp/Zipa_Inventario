import { Sede } from '../../sede/entities/sede.entity';
import { Comercia } from '../../comercia/entities/comercia.entity';
export declare class Proveedor {
    provId: number;
    provRazonSocial: string;
    provNit: number;
    provResponsable: string;
    provCorreo: string;
    provTelefono: string;
    sedes: Sede[];
    comercios: Comercia[];
}
