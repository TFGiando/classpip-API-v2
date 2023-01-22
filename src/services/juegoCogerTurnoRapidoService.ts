import * as juegoCogerTurnoRapido from "../database/JuegoCogerTurnoRapido"
import { v4 as uuidv4 } from 'uuid';
import { JuegoCogerTurnoRapido } from "../interfaces/juegosRapidos/juegoDeCogerTurnoRapidoInterface";

const getAllJuegoCogerTurnoRapido = () => {
    const allJuegoCogerTurnoRapido = juegoCogerTurnoRapido.getAllCogerTurnoRapido();
    return allJuegoCogerTurnoRapido;
}

const getJuegoCogerTurnoRapidoPorId = (id: string) => {
    try {
        const juegoCogerTurno = juegoCogerTurnoRapido.getCogerTurnoRapidoPorId(id);
        return juegoCogerTurno;
    } catch (error){
        throw error;
    }
}

const getJuegoCogerTurnoRapidoPorIdProfesor = (idProfesor: number) => {
    try {
        const juegoCogerTurno = juegoCogerTurnoRapido.getCogerTurnoPorIdProfesor(idProfesor);
        return juegoCogerTurno;
    } catch (error) {
        throw error;
    }
}

const createJuegoCogerTurnoRapido = (newJuegoCogerTurnoRapido: JuegoCogerTurnoRapido) => {
    
   if(!newJuegoCogerTurnoRapido.NombreJuego||
        !newJuegoCogerTurnoRapido.Tipo ||
      !newJuegoCogerTurnoRapido.Clave ||
        !newJuegoCogerTurnoRapido.profesorId ||
      !newJuegoCogerTurnoRapido.Turnos ||
        ! newJuegoCogerTurnoRapido.Presentacion

   )
     {
        throw{
             status: 400,
             message: `Uno o mas parametros del juegoCogerTurnoRapido faltan {NombreJuego, Tipo..} `
        }
     }

    newJuegoCogerTurnoRapido.id= uuidv4();

    try{
        const createdJuegoCogerTurnoRapido = juegoCogerTurnoRapido.createJuegoCogerTurnoRapido(newJuegoCogerTurnoRapido);
        return createdJuegoCogerTurnoRapido;
    } catch (error) {
        throw error;
    }
}

const deleteJuegoCogerTurnoRapidoPorId = (id: string) => {
    try{
        const deleteJuegoCogerTurno = juegoCogerTurnoRapido.deleteCogerTurnoRapidoPorId(id);
        return deleteJuegoCogerTurno;
    } catch (error){
        throw error;
    }
}

const updateJuegoCogerTurnoRapido = (updateJuegoCogerTurnoRapido: JuegoCogerTurnoRapido) => {
    try {
        const juegoCogerTurno = juegoCogerTurnoRapido.updateJuegoCogerTurnoRapido(updateJuegoCogerTurnoRapido, updateJuegoCogerTurnoRapido.id);
    } catch (error) {
        throw error;
    }
}

export {
    getAllJuegoCogerTurnoRapido,
    createJuegoCogerTurnoRapido,
    getJuegoCogerTurnoRapidoPorId,
    getJuegoCogerTurnoRapidoPorIdProfesor,
    deleteJuegoCogerTurnoRapidoPorId,
    updateJuegoCogerTurnoRapido
}