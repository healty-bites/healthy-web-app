export interface PublicacionResponse {
    id: number;
    titulo: string;
    descripcion: string;
    
    publicacionPath: string;

    clienteId: number;
    clienteNombre: string;
    grupoNombre: string;
}