import { CuestionarioSatisfaccion } from '../interfaces/cuestionarioSatisfaccionInterface';
const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";


const getAllCuestionarioSatisfaccion = () => {
    return DB.CuestionarioSatisfaccion;
}

const getAllCuestionarioSatisfaccionPublicos = () => {
    try {
        const cuestionarioSatisfaccion = DB.CuestionarioSatisfaccion.filter((cuestionarioSatisfaccion: CuestionarioSatisfaccion) => cuestionarioSatisfaccion.Publico === true);
        if (!cuestionarioSatisfaccion) {
            throw {
                status: 400,
                message: `No se puede encontrar el cuestionarioSatisfaccion publico `
            }
        }
        return cuestionarioSatisfaccion;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const getCuestionarioSatisfaccionPorId = (id: string) => {

    try {
        const cuestionarioSatisfaccion = DB.CuestionarioSatisfaccion.find((cuestionarioSatisfaccion: CuestionarioSatisfaccion) => cuestionarioSatisfaccion.id === +id);
        console.log(cuestionarioSatisfaccion)
        if (!cuestionarioSatisfaccion) {
            throw {
                status: 400,
                message: `No se puede encontrar el cuestionarioSatisfaccion con id ${id} `
            }
        }
        return cuestionarioSatisfaccion;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
 
}


const getCuestionarioSatisfaccionPorIdProfesor = (idProfesor: number) => {
    
    try {
        const cuestionarioSatisfaccion = DB.CuestionarioSatisfaccion.filter((cuestionarioSatisfaccion: CuestionarioSatisfaccion) => cuestionarioSatisfaccion.profesorId === idProfesor);
        if (!cuestionarioSatisfaccion) {
            throw {
                status: 400,
                message: `No se puede encontrar el cuestionarioSatisfaccion con idProfesor ${idProfesor} `
            }
        }
        return cuestionarioSatisfaccion;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const createCuestionarioSatisfaccion = (newJuegoRapido: CuestionarioSatisfaccion) => {

    console.log(newJuegoRapido)
    try {
        DB.CuestionarioSatisfaccion.push(newJuegoRapido);
        utils.saveToDatabase(DB);
        return newJuegoRapido;
    } catch(error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const deleteCuestionarioSatisfaccionPorId = (id: number) => {
    try {
        const indexParaEliminar = DB.CuestionarioSatisfaccion.findIndex((cuestionarioSatisfaccion: CuestionarioSatisfaccion) => cuestionarioSatisfaccion.id === id);
        if (indexParaEliminar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar cuestionarioSatisfaccion con el id '${id}'`
            }
        }
        const deletedCuestionarioSatisfaccion = DB.CuestionarioSatisfaccion[indexParaEliminar];
        DB.CuestionarioSatisfaccion.splice(indexParaEliminar, 1);
        utils.saveToDatabase(DB);

        return deletedCuestionarioSatisfaccion;

    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const updateCuestionarioSatisfaccion = (changesCuestionarioSatisfaccion: CuestionarioSatisfaccion, id?: number) => {
    try {
        const indexParaActualizar = DB.CuestionarioSatisfaccion.findIndex((cuestionarioSatisfaccion: CuestionarioSatisfaccion) => cuestionarioSatisfaccion.id === id);
        if (indexParaActualizar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar cuestionarioSatisfaccion con el id '${id}'`
            };
        }
        const updatedCuestionarioSatisfaccion = {
            ...DB.CuestionarioSatisfaccion[indexParaActualizar],
            ...changesCuestionarioSatisfaccion,
        };
        DB.CuestionarioSatisfaccion[indexParaActualizar] = updatedCuestionarioSatisfaccion;
        utils.saveToDatabase(DB);
    
        return updatedCuestionarioSatisfaccion;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   

}

export { getAllCuestionarioSatisfaccion, getAllCuestionarioSatisfaccionPublicos, createCuestionarioSatisfaccion, getCuestionarioSatisfaccionPorIdProfesor, getCuestionarioSatisfaccionPorId, deleteCuestionarioSatisfaccionPorId, updateCuestionarioSatisfaccion }