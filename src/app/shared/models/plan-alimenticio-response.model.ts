import { PlanObjetivo } from "./plan-alimenticio-create-update-request.model";

export interface PlanAlimenticioResponse {
    id: number;
    planObjetivo: PlanObjetivo;
    descripcion: string;
    duracionDias: number;
    esGratis: boolean;
    nutricionistaNombre: string;
    caloriasTotales: number;
}
