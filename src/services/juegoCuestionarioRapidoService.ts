import * as juegoCuestionarioRapido from "../database/JuegoCuestionarioRapido"
import { v4 as uuidv4 } from 'uuid';
import { JuegoCuestionarioRapido } from "../interfaces/juegosRapidos/juegoCuestionarioRapidoInterface";

const getAllJuegoCuestionarioRapido = () => {
    const allJuegosCuestionarioRapido = juegoCuestionarioRapido.getAllJuegoCuestionarioRapido();
    return allJuegosCuestionarioRapido;
}

const getJuegoCuestionarioRapidoPorId = (id: string) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.getCuestionarioRapidoPorId(id);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }

}

const getJuegoCuestionarioRapidoPorClave = (clave: string) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.getCuestionarioRapidoPorClave(clave);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
}

const getJuegoCuestionarioRapidoPorIdProfesor = (idProfesor: number) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.getCuestionarioRapidoPorIdProfesor(idProfesor);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
}

const createJuegoCuestionarioRapido = (newJuegoCuestionarioRapido: JuegoCuestionarioRapido) => {

    if (!newJuegoCuestionarioRapido.NombreJuego ||
        !newJuegoCuestionarioRapido.Tipo ||
        !newJuegoCuestionarioRapido.Modalidad ||
        !newJuegoCuestionarioRapido.Clave ||
        !newJuegoCuestionarioRapido.profesorId ||
        !newJuegoCuestionarioRapido.cuestionarioId) {
        throw {
            status: 400,
            message: `Uno o mas parametros del juegoCuestionarioRapido faltan {NombreJuego, Tipo..} `
        }
    }

    newJuegoCuestionarioRapido.id = uuidv4();

    try {
        const createdJuegoCuestionarioRapido = juegoCuestionarioRapido.createJuegoCuestionarioRapido(newJuegoCuestionarioRapido);
        return createdJuegoCuestionarioRapido;
    } catch (error) {
        throw error;
    }

}

const deleteJuegoCuestionarioRapidoPorId = (id: string) => {
    try {
        const deleteJuegoCuestionario = juegoCuestionarioRapido.deleteCuestionarioRapidoPorId(id);
        return deleteJuegoCuestionario;
    } catch (error) {
        throw error;
    }
}

const updateJuegoCuestionarioRapido = (updateJuegoCuestionario: JuegoCuestionarioRapido) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.updateJuegoCuestionarioRapido(updateJuegoCuestionario, updateJuegoCuestionario.id);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
}

export {
    getAllJuegoCuestionarioRapido,
    createJuegoCuestionarioRapido,
    getJuegoCuestionarioRapidoPorId,
    getJuegoCuestionarioRapidoPorClave,
    getJuegoCuestionarioRapidoPorIdProfesor,
    deleteJuegoCuestionarioRapidoPorId,
    updateJuegoCuestionarioRapido
};