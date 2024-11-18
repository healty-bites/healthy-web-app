export interface ComidaResponse {
    id: number;
    nombreComida: string;
    calorias: number;
    categoria: Categoria;
    nombrePlanAlimenticio: number;
    planAlimenticioId: number;
}

export enum Categoria {
    DESAYUNO = 'DESAYUNO',
    ALMUERZO ='ALMUERZO',
    CENA = 'CENA',
    SNACK = 'SNACK'
}