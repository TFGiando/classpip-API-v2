import * as cuestionarioSatisfaccion from "../database/CuestionarioSatisfaccion"
import { v4 as uuidv4 } from 'uuid';
import { CuestionarioSatisfaccion } from "../interfaces/cuestionarioSatisfaccionInterface";

const getAllCuestionarioSatisfaccion = () => {
    const allCuestionarioSatisfaccion = cuestionarioSatisfaccion.getAllCuestionarioSatisfaccion();
    return allCuestionarioSatisfaccion;
}


const getAllCuestionarioSatisfaccionPublicos = () => {
    const allCuestionarioSatisfaccionPublicos = cuestionarioSatisfaccion.getAllCuestionarioSatisfaccionPublicos();
    return allCuestionarioSatisfaccionPublicos;
}

const createCuestionarioSatisfaccion = (newCuestionarioSatisfaccion: CuestionarioSatisfaccion) => {

    console.log(newCuestionarioSatisfaccion)

    if (!newCuestionarioSatisfaccion.Titulo ||
        !newCuestionarioSatisfaccion.Descripcion ||
        !newCuestionarioSatisfaccion.profesorId ||
        !newCuestionarioSatisfaccion.Afirmaciones ||
        !newCuestionarioSatisfaccion.PreguntasAbiertas
        ) {
        throw {
            status: 400,
            message: `Uno o mas parametros del cuestionarioSatisfaccion faltan {NombreJuego, Tipo..} `
        }
    }

    const newId = Math.random()*1000000;
    newCuestionarioSatisfaccion.id = Math.round(newId)
    newCuestionarioSatisfaccion.Publico = false;

    try {
        const createdCuestionarioSatisfaccion = cuestionarioSatisfaccion.createCuestionarioSatisfaccion(newCuestionarioSatisfaccion);
        return createdCuestionarioSatisfaccion;
    } catch (error) {
        throw error;
    }

}


const getCuestionarioSatisfaccionPorId = (id: string) => {
    try {
        const CuestionarioSatisfaccion = cuestionarioSatisfaccion.getCuestionarioSatisfaccionPorId(id);
        return CuestionarioSatisfaccion;
    } catch (error) {
        throw error;
    }

}


const getCuestionarioSatisfaccionPorIdProfesor = (idProfesor: number) => {
    try {
        const CuestionarioSatisfaccion = cuestionarioSatisfaccion.getCuestionarioSatisfaccionPorIdProfesor(idProfesor);
        console.log(CuestionarioSatisfaccion)
        return CuestionarioSatisfaccion;
    } catch (error) {
        throw error;
    }
}


const deleteCuestionarioSatisfaccionPorId = (id: string) => {
    try {
        const deleteCuestionarioSatisfaccion = cuestionarioSatisfaccion.deleteCuestionarioSatisfaccionPorId(+id);
        return deleteCuestionarioSatisfaccion;
    } catch (error) {
        throw error;
    }
}

const updateCuestionarioSatisfaccion = (updateCuestionarioSatisfaccion: CuestionarioSatisfaccion) => {
    try {
        const cuestionarioSatisfaccionUpdated = cuestionarioSatisfaccion.updateCuestionarioSatisfaccion(updateCuestionarioSatisfaccion, updateCuestionarioSatisfaccion.id);
        return cuestionarioSatisfaccionUpdated;
    } catch (error) {
        throw error;
    }
}


export {
    getAllCuestionarioSatisfaccion,
    getAllCuestionarioSatisfaccionPublicos,
    createCuestionarioSatisfaccion,
    getCuestionarioSatisfaccionPorId,
    getCuestionarioSatisfaccionPorIdProfesor,
    deleteCuestionarioSatisfaccionPorId,
    updateCuestionarioSatisfaccion
};