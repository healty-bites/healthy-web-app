export interface ContenidoRequest {
    id?: number;
    titulo: string;
    descripcion: string;
    tipoContenido: TipoContenido;
    categoriaContenido: CategoriaContenido;

    coverPath: string;
    filePath: string;
    
    esGratis: boolean;
    nutricionistaId: number;
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