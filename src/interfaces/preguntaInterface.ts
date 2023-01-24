export interface Pregunta {
    Titulo: string;
    Tipo: string; 
    Pregunta: string;
    Tematica: string;
    Imagen: string;
    FeedbackCorrecto: string;
    FeedbackIncorrecto: string;
    id?: string;
    profesorId: number;

    RespuestaCorrecta: string; 
    RespuestaIncorrecta1: string; 
    RespuestaIncorrecta2: string; 
    RespuestaIncorrecta3: string; 

    Emparejamientos: object[];
}