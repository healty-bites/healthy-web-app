export interface UserProfile {
    id: number;
    correo: string;
    rol: 'CLIENTE' | 'NUTRICIONISTA' | null;
    nombre: string;
    apellido: string;
    sexo: 'M' | 'F' ;
    edad: number;
    altura: number;
    peso: number;
    bio?: string;
}