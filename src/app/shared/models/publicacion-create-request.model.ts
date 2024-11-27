export interface PublicacionCreateRequest {
    id?: number;
    titulo: string;
    descripcion: string;
    
    publicacionPath: string;

    clienteId: number;
    grupoId: number;
}