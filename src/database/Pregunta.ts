import { JuegoCuestionarioRapido } from './../interfaces/juegoCuestionarioRapidoInterface';
const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";
import { Pregunta } from '../interfaces/preguntaInterface';

// test pipeline

const getPreguntasPorIdProfesor = (idProfesor: number) => {
    try {
        const pregunta = DB.Pregunta.filter((pregunta: Pregunta) => pregunta.profesorId === idProfesor);
        if (!pregunta) {
            throw {
                status: 400,
                message: `No se puede encontrar las preguntas con idProfesor ${idProfesor} ` //VERIFICAR CUAL PUEDE SER LA RESPUESTA EN API ANTIGUA
            }
        }
        return pregunta;
    } catch (error: any){
        throw {status: error?.status || 500, message: error?.message || error  };
    }
}

const createPregunta = (pregunta: Pregunta) => {
    try {
        DB.Pregunta.push(pregunta);
        utils.saveToDatabase(DB);
        return pregunta;
    } catch(error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}

const updatePregunta = (actualizarPregunta: Pregunta, id?: string) => {
    try {
        const indexParaActualizar = DB.Pregunta.findIndex((pregunta: Pregunta) => pregunta.id === id);
        if (indexParaActualizar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar pregunta con el id '${id}'`
            };
        }
        const updatedPregunta = {
            ...DB.Pregunta[indexParaActualizar],
            ...actualizarPregunta,
        };
        DB.Pregunta[indexParaActualizar] = updatedPregunta;
        utils.saveToDatabase(DB);
    
        return updatedPregunta;
    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }

}

const deletePregunta = (id: string) => {
    try {
        const indexParaEliminar = DB.Pregunta.findIndex((pregunta: Pregunta) => pregunta.id === id);
        if (indexParaEliminar === -1) {
            throw {
                status: 400,
                message: `No se puede encontrar pregunta con el id '${id}'`
            }
        }
        const deletedPregunta = DB.Pregunta[indexParaEliminar];
        DB.Pregunta.splice(indexParaEliminar, 1);
        utils.saveToDatabase(DB);

        return deletedPregunta;

    } catch (error: any) {
        throw {status: error?.status || 500, message: error?.message || error  };
    }
   
}



//(CRuD)IMAGENES DE PREGUNTAR

export { getPreguntasPorIdProfesor, createPregunta, updatePregunta, deletePregunta,  }