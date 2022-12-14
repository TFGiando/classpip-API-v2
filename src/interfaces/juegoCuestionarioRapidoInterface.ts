export interface JuegoCuestionarioRapido {
    NombreJuego: string;
    Tipo: string;
    Modalidad: string;
    PuntuacionCorrecta: number;
    PuntuacionIncorrecta: number;
    TiempoLimite: string;
    Presentacion: string;
    JuegoActivo: boolean;
    JuegoTerminado: boolean;
    Clave: string;
    Respuestas: string[];
    profesorId: number;
    cuestionarioId: number;
    id?: string;
}