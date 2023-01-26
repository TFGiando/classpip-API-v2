import * as juegoEncuestaRapida from "../database/JuegoEncuestaRapida"
import { v4 as uuidv4 } from 'uuid';
import { JuegoEncuestaRapida } from "../interfaces/juegoEncuestaRapidaInterface";

const getAllJuegoEncuestaRapida = () => {
    const allJuegosEncuestaRapida = juegoEncuestaRapida.getAllJuegoEncuestaRapida();
    return allJuegosEncuestaRapida;
}

const createJuegoEncuestaRapida = (newJuegoEncuestaRapida: JuegoEncuestaRapida) => {

    if (!newJuegoEncuestaRapida.NombreJuego ||
        !newJuegoEncuestaRapida.Tipo ||
        !newJuegoEncuestaRapida.Clave ||
        !newJuegoEncuestaRapida.profesorId ||
        !newJuegoEncuestaRapida.cuestionarioSatisfaccionId) {
        throw {
            status: 400,
            message: `Uno o mas parametros del juegoEncuestaRapida faltan {NombreJuego, Tipo..} `
        }
    }

    newJuegoEncuestaRapida.id = uuidv4();

    try {
        const createdJuegoEncuestaRapida = juegoEncuestaRapida.createJuegoEncuestaRapida(newJuegoEncuestaRapida);
        return createdJuegoEncuestaRapida;
    } catch (error) {
        throw error;
    }

}


const getJuegoEncuestaRapidaPorId = (id: string) => {
    try {
        const juegoEncuesta = juegoEncuestaRapida.getEncuestaRapidaPorId(id);
        return juegoEncuesta;
    } catch (error) {
        throw error;
    }

}

const getJuegoEncuestaRapidaPorClave = (clave: string) => {
    try {
        const juegoEncuesta = juegoEncuestaRapida.getEncuestaRapidaPorClave(clave);
        return juegoEncuesta;
    } catch (error) {
        throw error;
    }

}


const getJuegoEncuestaRapidaPorIdProfesor = (idProfesor: number) => {
    try {
        const juegoEncuesta = juegoEncuestaRapida.getEncuestaRapidaPorIdProfesor(idProfesor);
        return juegoEncuesta;
    } catch (error) {
        throw error;
    }
}


const deleteJuegoEncuestaRapidaPorId = (id: string) => {
    try {
        const deleteEncuestaRapida = juegoEncuestaRapida.deleteEncuestaRapidaPorId(id);
        return deleteEncuestaRapida;
    } catch (error) {
        throw error;
    }
}

const updateJuegoEncuestaRapida = (updateEncuestaRapida: JuegoEncuestaRapida) => {
    try {
        const juegoEncuesta = juegoEncuestaRapida.updateJuegoEncuestaRapida(updateEncuestaRapida, updateEncuestaRapida.id);
        return juegoEncuesta;
    } catch (error) {
        throw error;
    }
}


export {
    getAllJuegoEncuestaRapida,
    createJuegoEncuestaRapida,
    getJuegoEncuestaRapidaPorId,
    getJuegoEncuestaRapidaPorClave,
    getJuegoEncuestaRapidaPorIdProfesor,
    deleteJuegoEncuestaRapidaPorId,
    updateJuegoEncuestaRapida
};