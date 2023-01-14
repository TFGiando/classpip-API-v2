import { JuegoEncuestaRapida } from './../interfaces/juegoEncuestaRapidaInterface';
const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";


const getAllJuegoEncuestaRapida = () => {
    return DB.JuegoEncuestaRapida;
}

const getEncuestaRapidaPorId = (id: string) => {

    try {
        const encuestaRapida = DB.JuegoEncuestaRapida.find((juegoEncuestaRapida: any) => juegoEncuestaRapida.id === id);
        if (!encuestaRapida) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoEncuestaRapida con id ${id} `
            }
        }
        return encuestaRapida;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
 
}


const getEncuestaRapidaPorClave = (clave: string) => {

    try {
        const encuestaRapida = DB.JuegoEncuestaRapida.find((juegoEncuestaRapida: JuegoEncuestaRapida) => juegoEncuestaRapida.Clave === clave);
        console.log(encuestaRapida)
        if (!encuestaRapida) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoEncuestaRapida con clave ${clave} `
            }
        }
        return encuestaRapida;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
 
}


const getEncuestaRapidaPorIdProfesor = (idProfesor: number) => {
    
    try {
        const encuestaRapida = DB.JuegoEncuestaRapida.filter((juegoEncuestaRapida: JuegoEncuestaRapida) => juegoEncuestaRapida.profesorId === idProfesor);
        if (!encuestaRapida) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoEncuestaRapida con idProfesor ${idProfesor} `
            }
        }
        return encuestaRapida;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const createJuegoEncuestaRapida = (newJuegoRapido: JuegoEncuestaRapida) => {
    try {
        DB.JuegoEncuestaRapida.push(newJuegoRapido);
        utils.saveToDatabase(DB);
        return newJuegoRapido;
    } catch(error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const deleteEncuestaRapidaPorId = (id: string) => {
    try {
        const indexParaEliminar = DB.JuegoEncuestaRapida.findIndex((juegoEncuestaRapida: JuegoEncuestaRapida) => juegoEncuestaRapida.id === id);
        if (indexParaEliminar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoEncuestaRapida con el id '${id}'`
            }
        }
        const deletedEncuestaRapida = DB.JuegoEncuestaRapida[indexParaEliminar];
        DB.JuegoEncuestaRapida.splice(indexParaEliminar, 1);
        utils.saveToDatabase(DB);

        return deletedEncuestaRapida;

    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const updateJuegoEncuestaRapida = (changesJuegoEncuestaRapida: JuegoEncuestaRapida, id?: string) => {
    try {
        const indexParaActualizar = DB.JuegoEncuestaRapida.findIndex((juegoEncuestaRapida: JuegoEncuestaRapida) => juegoEncuestaRapida.id === id);
        if (indexParaActualizar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoEncuestaRapida con el id '${id}'`
            };
        }
        const updatedJuegoEncuestaRapida = {
            ...DB.JuegoEncuestaRapida[indexParaActualizar],
            ...changesJuegoEncuestaRapida,
        };
        DB.JuegoEncuestaRapida[indexParaActualizar] = updatedJuegoEncuestaRapida;
        utils.saveToDatabase(DB);
    
        return updatedJuegoEncuestaRapida;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   

}

export { getAllJuegoEncuestaRapida, createJuegoEncuestaRapida, getEncuestaRapidaPorIdProfesor, getEncuestaRapidaPorClave, getEncuestaRapidaPorId, deleteEncuestaRapidaPorId, updateJuegoEncuestaRapida }