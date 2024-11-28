import { TipoSuscripcion } from "./suscripcion-create-request.model";

export interface SuscripcionResponse {
    id: number;
    tipoSuscripcion: TipoSuscripcion;
    precio: number;
}