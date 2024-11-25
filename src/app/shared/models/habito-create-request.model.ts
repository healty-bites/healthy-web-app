export interface HabitoCreateRequest {
    nombre: string;
    fechaRegistro: string;
    hidratacion: number;
    alimentacion: number;
    ejercicio: number;
    calidadDeSueno: number;
    clienteId: number;
}