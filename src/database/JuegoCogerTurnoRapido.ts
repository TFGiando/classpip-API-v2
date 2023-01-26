import { JuegoCogerTurnoRapido } from "../interfaces/juegosRapidos/juegoDeCogerTurnoRapidoInterface";
const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";

const getAllCogerTurnoRapido = () => {
    return DB.JuegoCogerTurnoRapido;
}

const getCogerTurnoRapidoPorId = (id: string) => {
    try {
        const cogerTurnoRapido = DB.JuegoCogerTurnoRapido.find((juegoCogerTurnoRapido: JuegoCogerTurnoRapido) => 
        juegoCogerTurnoRapido.id === id) ;
        if(!cogerTurnoRapido) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoCogerTurnoRapido con id' ${id}`
            }
        }
        return cogerTurnoRapido;
    } catch(error: any){
        throw{status: error?.status || 500, message: error?.message || error}
    }
}

const getCogerTurnoPorClave = (clave: string) => {
    try {
        const cogerTurnoRapido = DB.JuegoCogerTurnoRapido.find((juegoCogerTurno: JuegoCogerTurnoRapido)=> 
        juegoCogerTurno.Clave === clave);
    if(!cogerTurnoRapido) {
        throw {
            status: 400,
            message: `No se puede encontrar el juegoCogerTurnoRapido con clave' ${clave}`
        }
    }
    return cogerTurnoRapido;
} catch(error: any){
    throw{status: error?.status || 500, message: error?.message || error}
}
}

const getCogerTurnoPorIdProfesor = (idProfesor: number) => {
    
    try {
        const cogerTurnoRapido = DB.JuegoCogerTurnoRapido.filter((juegoCogerTurnoRapido: JuegoCogerTurnoRapido) => juegoCogerTurnoRapido.profesorId === idProfesor);
        if (!cogerTurnoRapido) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoCogerTurnoRapido con idProfesor ${idProfesor} `
            }
        }
        return cogerTurnoRapido;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }

}

const createJuegoCogerTurnoRapido = (newJuegoRapido: JuegoCogerTurnoRapido) => {
    try {
        DB.JuegoCogerTurnoRapido.push(newJuegoRapido);
        utils.saveToDatabase(DB);
        return newJuegoRapido;
    } catch(error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const deleteCogerTurnoRapidoPorId = (id: string) => {
    try {
        const indexParaEliminar = DB.JuegoCogerTurnoRapido.findIndex((juegoCogerTurnoRapido: JuegoCogerTurnoRapido) => juegoCogerTurnoRapido.id === id);
        if (indexParaEliminar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoCuestionarioRapido con el id '${id}'`
            }
        }
        const deleteCogerTurnoRapidoPorId = DB.JuegoCogerTurnoRapido[indexParaEliminar];
        DB.JuegoCogerTurnoRapido.splice(indexParaEliminar, 1);
        utils.saveToDatabase(DB);

        return deleteCogerTurnoRapidoPorId;

    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const updateJuegoCogerTurnoRapido = (changesJuegoCogerTurnoRapido: JuegoCogerTurnoRapido, id?: string) => {
    try {
        const indexParaActualizar = DB.JuegoCogerTurnoRapido.findIndex((juegoCogerTurnoRapido: JuegoCogerTurnoRapido) => juegoCogerTurnoRapido.id === id);
        if (indexParaActualizar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoCogerTurnoRapido con el id '${id}'`
            };
        }
        const updatedJuegoCogerTurnoRapido = {
            ...DB.JuegoCogerTurnoRapido[indexParaActualizar],
            ...changesJuegoCogerTurnoRapido,
        };
        DB.JuegoCogerTurnoRapido[indexParaActualizar] = updatedJuegoCogerTurnoRapido;
        utils.saveToDatabase(DB);
    
        return updatedJuegoCogerTurnoRapido;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

export { getAllCogerTurnoRapido, createJuegoCogerTurnoRapido, getCogerTurnoPorIdProfesor, getCogerTurnoRapidoPorId, deleteCogerTurnoRapidoPorId, getCogerTurnoPorClave, updateJuegoCogerTurnoRapido }