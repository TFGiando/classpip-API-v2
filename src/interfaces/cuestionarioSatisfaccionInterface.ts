export interface CuestionarioSatisfaccion {
    Titulo: string;
    Descripcion: string;
    Publico: boolean;
    Afirmaciones: string[];
    PreguntasAbiertas: string[];
    profesorId: number;
    id?: number;
}