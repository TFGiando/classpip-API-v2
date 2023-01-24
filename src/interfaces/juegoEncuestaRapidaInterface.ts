export interface JuegoEncuestaRapida {
    NombreJuego: string;
    Tipo: string;
    Clave: string;
    RespuestasPreguntasAbiertas?: object;
    Respuestas: object;
    id?: string;
    profesorId: number;
    cuestionarioSatisfaccionId: number;
}