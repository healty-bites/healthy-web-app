export interface ComidaResponse {
    id: number;
    nombreComida: string;
    calorias: number;
    categoria: Categoria;
    planId: number;
}

export enum Categoria {
    DESAYUNO = 'DESAYUNO',
    ALMUERZO ='ALMUERZO',
    CENA = 'CENA',
    SNACK = 'SNACK'
}