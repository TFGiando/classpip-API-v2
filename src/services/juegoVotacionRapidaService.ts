import * as juegoVotacionRapida from "../database/JuegoVotacionRapida";
import { v4 as uuidv4 } from 'uuid';
import { JuegoVotacionRapida } from "../interfaces/juegoVotacionRapidaInterface";

const getAllVotacionRapida = () => {
    const allVotacionRapida = juegoVotacionRapida.getAllVotacionRapida()
    return allVotacionRapida;
}

const getJuegoVotacionRapidaPorId = (id: string) => {
    try {
        const juegoVotacion = juegoVotacionRapida.getVotacionRapidaPorId(id);
        return juegoVotacion;
    } catch (error) {
        throw error;
    }
}

const getJuegoVotacionRapidaPorIdProfesor = (idProfesor: number) => {
    try {
        const juegoVotacion = juegoVotacionRapida.getVotacionRapidaPorIdProfesor(idProfesor);
        return juegoVotacion;
    } catch (error) {
        throw error;
    }
}

const getJuegoVotacionRapidaPorClave = (Clave: number) => {
    try {
        const juegoVotacion = juegoVotacionRapida.getVotacionRapidaPorClave(Clave.toString());
        return juegoVotacion;
    } catch (error) {
        throw error;
    }
}

const createJuegoVotacionRapida = (newJuegoVotacionRapida: JuegoVotacionRapida) => {

    if (!newJuegoVotacionRapida.NombreJuego ||
        !newJuegoVotacionRapida.Tipo ||
        !newJuegoVotacionRapida.ModoReparto ||
        !newJuegoVotacionRapida.Clave ||
        !newJuegoVotacionRapida.profesorId ||
        !newJuegoVotacionRapida.Respuestas ||
        !newJuegoVotacionRapida.Conceptos) {
        throw {
            status: 400,
            message: `Uno o mas parametros del juegoVotacionRapido faltan {NombreJuego, Tipo..} `
        }
    }

    newJuegoVotacionRapida.id = uuidv4();

    try {
        const createdJuegoVotacionRapidA = juegoVotacionRapida.createJuegoVotacionRapida(newJuegoVotacionRapida);
        return createdJuegoVotacionRapidA;
    } catch (error) {
        throw error;
    }
}

const deleteJuegoVotacionRapidaPorId = (id: string) => {
    try {
        const deleteJuegoVotacionRapida = juegoVotacionRapida.deleteJuegoVotacionRapidaPorId(id);
        return deleteJuegoVotacionRapida;
    } catch (error) {
        throw error;
    }
}

const updateJuegoVotacionRapida = (updateJuegoVotacionRapida: JuegoVotacionRapida) => {
    try {
        const juegoVotacion = juegoVotacionRapida.updateJuegoVotacionRapida(updateJuegoVotacionRapida, updateJuegoVotacionRapida.id);//CAMBIAR
        return juegoVotacion;
    } catch (error) {
        throw error;
    }
}

export {
    getAllVotacionRapida,
    createJuegoVotacionRapida,
    getJuegoVotacionRapidaPorId,
    getJuegoVotacionRapidaPorIdProfesor,
    deleteJuegoVotacionRapidaPorId,
    updateJuegoVotacionRapida,
    getJuegoVotacionRapidaPorClave
};