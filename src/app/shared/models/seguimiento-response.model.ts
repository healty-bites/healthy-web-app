export interface SeguimientoResponse {
    id: number;
    fecha: string; // ISO 8601 date string
    pesoDelDia: number;
    observaciones: string;
    nombreMeta: string;

    metaId?: number;
}