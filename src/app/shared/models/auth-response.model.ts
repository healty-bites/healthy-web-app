export interface AuthResponse {
    id: number;
    token: string;
    nombre: string;
    apellido: string;
    role: string;
    clienteId: number;
    nutricionistaId: number;
}