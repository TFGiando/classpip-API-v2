import * as juegoCuestionarioRapido from "../database/JuegoCuestionarioRapido"
import * as preguntaPersistence from "../database/Pregunta"
import { v4 as uuidv4 } from 'uuid';
import { JuegoCuestionarioRapido } from "../interfaces/juegoCuestionarioRapidoInterface";
import { Pregunta } from "../interfaces/preguntaInterface";
import * as fs from "fs";


const IMAGENES_PREGUNTA_PATH = "/server/imagenesPregunta/"

const getAllPreguntaPorProfesor = (idProfesor: number) => {
    try {
        const preguntas = preguntaPersistence.getPreguntasPorIdProfesor(idProfesor);
        return preguntas;
    } catch (error) {
        throw error;
    }
}

const createPregunta = (pregunta: Pregunta) => {

    if (!pregunta.Titulo ||
        !pregunta.Tipo ||
        !pregunta.Pregunta ||
        !pregunta.Tematica ||
        !pregunta.profesorId ||
        !pregunta.FeedbackCorrecto ||
        !pregunta.FeedbackIncorrecto) {
        throw {
            status: 400,
            message: `Uno o mas parametros del juegoCuestionarioRapido faltan {Titulo, Tipo..} `
        }
    }

    //Cambiamos el nombre de la imagen para almacenar una imagen con nombre random (Utilizando timestamp)
    if (pregunta.Imagen) {
        const ext = pregunta.Imagen.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        pregunta.Imagen = fileNameRandom;
    }

    pregunta.id = uuidv4();

    try {
        const createdPregunta = preguntaPersistence.createPregunta(pregunta);
        return createdPregunta;
    } catch (error) {
        throw error;
    }

}

const updatePregunta = (pregunta: Pregunta) => {
    try {
        //Cambiamos el nombre de la imagen para almacenar una imagen con nombre random (Utilizando timestamp)
        if (pregunta.Imagen) {
            const ext = pregunta.Imagen.split(".").pop();
            const fileNameRandom = `image-${Date.now()}.${ext}`;
            pregunta.Imagen = fileNameRandom;
        }

        const updatedPregunta = preguntaPersistence.updatePregunta(pregunta, pregunta.id);

        return updatedPregunta;
    } catch (error) {
        throw error;
    }
}

const deletePregunta = (id: string) => {
    try {
        const deletedPregunta = preguntaPersistence.deletePregunta(id);
        return deletedPregunta;
    } catch (error) {
        throw error;
    }
}

// CRUD IMAGENES DE PREGUNTAS
const checkImagenPregunta =  (filename: string): boolean => {  
    try {
        fs.accessSync(`${process.cwd()}${IMAGENES_PREGUNTA_PATH}${filename}`);
        return true;
    } catch(err) {
        return false;
    } 

}
const getImagenPregunta = (filename: string) => {
    try {    
        return fs.createReadStream(`${process.cwd()}${IMAGENES_PREGUNTA_PATH}${filename}`);
    } catch (error) {
        throw error;
    }
}



const deleteImagenPregunta = (filename: string) => {
    try {
        fs.unlink(`${process.cwd()}${IMAGENES_PREGUNTA_PATH}${filename}`, (error) => {
            if (error) { throw error };
            console.log(`Image: ${filename} eliminada`);
            return;
        })

    } catch (error) {
        throw error;
    }
}





export {
    getAllPreguntaPorProfesor,
    createPregunta,
    updatePregunta,
    deletePregunta,
    checkImagenPregunta,
    getImagenPregunta,
    deleteImagenPregunta
};