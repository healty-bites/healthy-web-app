export interface SuscripcionCreateRequest {
    usuarioId: number;
    tipoSuscripcion: TipoSuscripcion;
}

export enum TipoSuscripcion {
    BASICO = 'BASICO',
    PREMIUM = 'PREMIUM',
    VIP = 'VIP'
}