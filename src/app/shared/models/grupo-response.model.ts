export interface GrupoResponse {
    id: number;
    nombre: string;
    cantidadMiembros: number[];
    esPrivado: boolean;
    clienteNombre: string;
}