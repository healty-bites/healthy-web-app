export interface RecompensaCreateRequest {
    nombre: string;
    descripcion: string;
    diasRequeridos: number;
    nutricionistaId: number;
    contenidoId?: number;
    planAlimenticioId?: number;
}