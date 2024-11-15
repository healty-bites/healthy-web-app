export interface PlanAlimenticioCreateUpdateRequest {
    id?: number;
    planObjetivo: PlanObjetivo;
    descripcion: string;
    duracionDias: number;
    esGratis: boolean;
    nutricionistaId?: number;
}

export enum PlanObjetivo {
    DEFICIT = 'DEFICIT',
    MANTENIMIENTO_PESO = 'MANTENIMIENTO_PESO',
    AUMENTO_MASA_MUSCULAR = 'AUMENTO_MASA_MUSCULAR'
}