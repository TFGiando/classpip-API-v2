export interface JuegoVotacionRapida {

    NombreJuego: string;
    Tipo: string;
    Clave: string;
    ModoReparto: string;
    id?: string;
    profesorId: number;
    Conceptos: string[];
    Puntos: number[];
    Respuestas: any;
    
}