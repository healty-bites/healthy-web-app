export interface ContenidoResponse {
    id: number;
    titulo: string;
    descripcion: string;
    tipoContenido: TipoContenido;
    categoriaContenido: CategoriaContenido;

    coverPath: string;
    filePath: string;
    
    esGratis: boolean;
    nutricionistaNombre: string;
}

export enum TipoContenido {
    VIDEO = 'VIDEO',
    ARTICULO = 'ARTICULO',
    GUIA = 'GUIA'
}

export enum CategoriaContenido {
    NUTRICION = 'NUTRICION',
    EJERCICIO = 'EJERCICIO',
    SALUD_MENTAL = 'SALUD_MENTAL'
}