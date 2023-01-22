import { JuegoVotacionRapida } from "../interfaces/juegoVotacionRapidaInterface";
const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";

const getAllVotacionRapida = () => {
    return DB.JuegoVotacionRapida;
}

const getVotacionRapidaPorId = (id: string) =>{
    try {
        const votacionRapida = DB.JuegoVotacionRapida.find((juegoVotacionRapida:any)=> juegoVotacionRapida === id);
        if(!votacionRapida){
            throw{
                status: 400, 
                message: `No se puede encontrar el juegoVotacionRapido con id ${id} `
            }
        }
        return votacionRapida;
    } catch(error: any) {
        throw{status: error?.status || 500, message: error?.message || error};
    }

}

const getVotacionRapidaPorIdProfesor = (idProfesor: number) => {
    
    try {
        const votacionRapida = DB.JuegoVotacionRapida.filter((juegoVotacionRapida: JuegoVotacionRapida) => juegoVotacionRapida.profesorId === idProfesor);
        if (!votacionRapida) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoVotacionRapida con idProfesor ${idProfesor} `
            }
        }
        return votacionRapida;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const getVotacionRapidaPorClave = (Clave: string) => {
    
    try {
        console.log("Clave en String")
        console.log(Clave)
        console.log(DB.juegoVotacionRapida)
        const votacionRapida = DB.JuegoVotacionRapida.filter((juegoVotacionRapida: JuegoVotacionRapida) => 
         juegoVotacionRapida.Clave === Clave);
        if (!votacionRapida) {
            throw {
                status: 400,
                message: `No se puede encontrar el juegoVotacionRapida con la clave ${Clave} `
            }
        }
        return votacionRapida;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const createJuegoVotacionRapida = (newJuegoRapido: JuegoVotacionRapida) => {
    try {
        DB.JuegoVotacionRapida.push(newJuegoRapido);
        utils.saveToDatabase(DB);
        return newJuegoRapido;
    } catch(error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const deleteJuegoVotacionRapidaPorId = (id: string) => {
    try {
        const indexParaEliminar = DB.JuegoVotacionRapida.findIndex((juegoVotacionRapida: JuegoVotacionRapida) => juegoVotacionRapida.id === id);
        if (indexParaEliminar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoVotacionRapida con el id '${id}'`
            }
        }
        const deletedVotacionRapida = DB.JuegoVotacionRapida[indexParaEliminar];
        DB.JuegoVotacionRapida.splice(indexParaEliminar, 1);
        utils.saveToDatabase(DB);

        return deletedVotacionRapida;

    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}


const updateJuegoVotacionRapida = (changesJuegoVotacionRapida: JuegoVotacionRapida, id?: string) => {
    try {
        const indexParaActualizar = DB.JuegoVotacionRapida.findIndex((juegoVotacionRapida: JuegoVotacionRapida) => juegoVotacionRapida.id === id);
        if (indexParaActualizar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar juegoVotacionRapida con el id '${id}'`
            };
        }
        const updatedJuegoVotacionRapida = {
            ...DB.JuegoVotacionRapida[indexParaActualizar],
            ...changesJuegoVotacionRapida,
        };
        DB.JuegoVotacionRapida[indexParaActualizar] = updatedJuegoVotacionRapida;
        utils.saveToDatabase(DB);
    
        return updatedJuegoVotacionRapida;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }

}

export{getAllVotacionRapida, createJuegoVotacionRapida, getVotacionRapidaPorId, getVotacionRapidaPorIdProfesor, getVotacionRapidaPorClave, deleteJuegoVotacionRapidaPorId, updateJuegoVotacionRapida}