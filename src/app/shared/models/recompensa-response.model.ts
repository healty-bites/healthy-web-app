import { PlanObjetivo } from "./plan-alimenticio-create-update-request.model";

export interface RecompensaResponse {
    id: number;
    nombre: string;
    descripcion: string;
    diasRequeridos: number;
    nutricionistaNombre: string;
    contenidoTitulo: string;
    planAlimenticioTitulo: PlanObjetivo;
}