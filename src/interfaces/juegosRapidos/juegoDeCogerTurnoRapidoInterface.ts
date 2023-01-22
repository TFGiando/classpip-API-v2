import { Turno } from "../TurnoInterface";

export interface JuegoCogerTurnoRapido{
    NombreJuego: string;
    Tipo: string;
    profesorId: number;
    Clave: string;
    Presentacion: string;
    Turnos?: any[];
    id?: string;
}