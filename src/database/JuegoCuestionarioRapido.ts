import { JuegoCuestionarioRapido } from './../interfaces/juegoCuestionarioRapidoInterface';
const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";


const getAllJuegoCuestionarioRapido = () => {
    return DB.JuegoCuestionarioRapido;
}

const getCuestionarioRapidoPorId = (id: string) => {

    try {
        const cuestionarioRapido = DB.JuegoCuestionarioRapido.find((juegoCuestionarioRapido: any) => juegoCuestionarioRapido.id === id);
        if (!cuestionarioRapido) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoCuestionarioRapido con id ${id} `
            }
        }
        return cuestionarioRapido;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
 
}

const getCuestionarioRapidoPorIdProfesor = (idProfesor: number) => {
    
    try {
        const cuestionarioRapido = DB.JuegoCuestionarioRapido.filter((juegoCuestionarioRapido: JuegoCuestionarioRapido) => juegoCuestionarioRapido.profesorId === idProfesor);
        if (!cuestionarioRapido) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoCuestionarioRapido con idProfesor ${idProfesor} `
            }
        }
        return cuestionarioRapido;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const createJuegoCuestionarioRapido = (newJuegoRapido: JuegoCuestionarioRapido) => {
    try {
        DB.JuegoCuestionarioRapido.push(newJuegoRapido);
        utils.saveToDatabase(DB);
        return newJuegoRapido;
    } catch(error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const deleteCuestionarioRapidoPorId = (id: string) => {
    try {
        const indexParaEliminar = DB.JuegoCuestionarioRapido.findIndex((juegoCuestionarioRapido: JuegoCuestionarioRapido) => juegoCuestionarioRapido.id === id);
        if (indexParaEliminar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoCuestionarioRapido con el id '${id}'`
            }
        }
        const deletedCuestionarioRapido = DB.JuegoCuestionarioRapido[indexParaEliminar];
        DB.JuegoCuestionarioRapido.splice(indexParaEliminar, 1);
        utils.saveToDatabase(DB);

        return deletedCuestionarioRapido;

    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const updateJuegoCuestionarioRapido = (changesJuegoCuestionarioRapiodo: JuegoCuestionarioRapido, id?: string) => {
    try {
        const indexParaActualizar = DB.JuegoCuestionarioRapido.findIndex((juegoCuestionarioRapido: JuegoCuestionarioRapido) => juegoCuestionarioRapido.id === id);
        if (indexParaActualizar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoCuestionarioRapido con el id '${id}'`
            };
        }
        const updatedJuegoCuestionarioRapido = {
            ...DB.JuegoCuestionarioRapido[indexParaActualizar],
            ...changesJuegoCuestionarioRapiodo,
        };
        DB.JuegoCuestionarioRapido[indexParaActualizar] = updatedJuegoCuestionarioRapido;
        utils.saveToDatabase(DB);
    
        return updatedJuegoCuestionarioRapido;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   

}

export { getAllJuegoCuestionarioRapido, createJuegoCuestionarioRapido, getCuestionarioRapidoPorId, getCuestionarioRapidoPorIdProfesor, deleteCuestionarioRapidoPorId, updateJuegoCuestionarioRapido }