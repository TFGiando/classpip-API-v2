import { Request, Response } from "express";
import * as preguntaService from "../services/preguntaService";
import { handleHttp } from "../utils/http.handle";


const getAllPreguntaPorProfesor = ({ params }: Request, res: Response) => {
    const { idProfesor } = params;
    if (!idProfesor) {
        handleHttp(res, "Falta parametro :idProfesor", 400);
    }

    try {
        const preguntas = preguntaService.getAllPreguntaPorProfesor(+idProfesor);
        res.send(preguntas);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_ALL_PREGUNTAS_PROFESOR", error?.status || 500, error);
    }

}

const createPregunta = (req: Request, res: Response) => {

    const { body } = req;

    try {
        const createdPregunta = preguntaService.createPregunta(body);
        res.status(201).send(createdPregunta);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_CREATE_PREGUNTAR", error?.status || 500, error);
    }

}

const updatePregunta = (req: Request, res: Response) => { 
    const { body } = req;
    if (!body) { 
        handleHttp(res, "Faltan parametros en el body", 400);
    }

    try {
        const updatedPregunta = preguntaService.updatePregunta(body);
        res.send(updatedPregunta);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_PREGUNTA", error?.status || 500, error);
    }

}

const deletePregunta = ({ params }: Request, res: Response) => {
    const { id } = params;
    if (!id) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const deletedPregunta = preguntaService.deletePregunta(id);
        res.send(deletedPregunta);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_DELETE_PREGUNTA", error?.status || 500, error);
    }

}

/**
 * A continuación endpoints correspondientes a imagen de la pregunta (en caso que tenga)
 */

const getImagenPregunta = ({ params }: Request, res: Response) => {

    const { filename } = params;
    if (!filename) {
        handleHttp(res, "Falta parametro :filename", 400);
    }
    try {
        const checkImagenExits: boolean = preguntaService.checkImagenPregunta(filename);

        if (checkImagenExits == true) {
            preguntaService.getImagenPregunta(filename).pipe(res);
        } else {
            res.status(404).send("DATA_NOT_FOUND");//lO IDEAL SI NO ENCUENTRA UNA IMAGEN ES ENVIAR 404
        }

    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_IMAGEN_PREGUNTA", error?.status || 500, error);
    }

}

const uploadImagen = (req : Request, res: Response) => {

    try {
        res.send({data: "OK"});
       
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_IMAGEN_PREGUNTA", error?.status || 500, error);
    }

}

const deleteImagenPregunta = ({ params }: Request, res: Response) => {
    const { filename } = params;
    if (!filename) {
        handleHttp(res, "Falta parametro :filename", 400);
    }

    try {
        preguntaService.deleteImagenPregunta(filename);
        res.status(200).send({data: "OK"});
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_DELETE_IMAGEN_PREGUNTA", error?.status || 500, error);
    }

}





export {
    getAllPreguntaPorProfesor,
    createPregunta,
    updatePregunta,
    deletePregunta,
    getImagenPregunta,
    uploadImagen,
    deleteImagenPregunta
}