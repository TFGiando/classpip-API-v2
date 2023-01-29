import { Request, Response } from "express";
import * as juegoEncuestaRapidaService from "../services/juegoEncuestaRapidaService";
import { handleHttp } from "../utils/http.handle";


// 
const getAllJuegoEncuestaRapida = (req: Request, res: Response) => {
    try {
        const getAllJuegoEncuestaRapida = juegoEncuestaRapidaService.getAllJuegoEncuestaRapida();
        res.send({ status: "OK", data: getAllJuegoEncuestaRapida});
    } catch (error: any) {
        handleHttp(res, "ERROR_GET_ALLJUEGO_ENCUESTA_RAPIDA", error?.status || 500, error);
    }
}

const getJuegoEncuestaRapidaPorId = ({params}: Request, res: Response) => {
    const {id} = params;
    if (!id) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const juegoEncuestaRapida = juegoEncuestaRapidaService.getJuegoEncuestaRapidaPorId(id);
        res.send(juegoEncuestaRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_ENCUESTA_RAPIDA", error?.status || 500, error);
    }   
}



const getJuegoEncuestaRapidaPorClave = ({params}: Request, res: Response) => {
    const {clave} = params;
    if (!clave) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const juegoEncuestaRapida = juegoEncuestaRapidaService.getJuegoEncuestaRapidaPorClave(clave);
        res.send(juegoEncuestaRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_ENCUESTA_RAPIDA", error?.status || 500, error);
    }   
}


const getJuegoEncuestaRapidaPorProfesor = ({params}: Request, res: Response) => {
    const { idProfesor } = params;
    if (!idProfesor) {
        handleHttp(res, "Falta parametro :idProfesor", 400);
    }

    try {
        const juegoEncuestaRapida = juegoEncuestaRapidaService.getJuegoEncuestaRapidaPorIdProfesor(+idProfesor);
        res.send(juegoEncuestaRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_ENCUESTA_RAPIDA_POR_PROFESOR", error?.status || 500, error);
    }    

}

const updateJuegoEncuestaRapida = (req: Request, res: Response) => {
    const { body } = req;
    console.log(body)
    if (!body) { //Cambiar esta condicion por una  mejor
        handleHttp(res, "Faltan parametros en el body", 400);
    }

    try {
        const updatedEncuestaRapida = juegoEncuestaRapidaService.updateJuegoEncuestaRapida(body);
        res.send(updatedEncuestaRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_ENCUESTA_RAPIDA", error?.status || 500, error);
    }
   
}


const deleteJuegoEncuestaRapida = ({params}: Request, res: Response) => {
    const { id } = params;
    if (!id) {  
        handleHttp(res, "Falta parametro :id", 400);
    }
    
    try {
        const deletedEncuestaRapida = juegoEncuestaRapidaService.deleteJuegoEncuestaRapidaPorId(id);
        res.send(deletedEncuestaRapida); 
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_ENCUESTA_RAPIDA", error?.status || 500, error);
    }  
}


const createJuegoEncuestaRapida= (req: Request, res: Response) => {
    const { body } = req;  
    try {
        const createdEncuestaRapida = juegoEncuestaRapidaService.createJuegoEncuestaRapida(body);
        res.status(201).send(createdEncuestaRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_CREATE_JUEGO_ENCUESTA_RAPIDA", error?.status || 500, error);
    }
    
}


export {getAllJuegoEncuestaRapida, getJuegoEncuestaRapidaPorId, getJuegoEncuestaRapidaPorClave ,getJuegoEncuestaRapidaPorProfesor, updateJuegoEncuestaRapida, createJuegoEncuestaRapida, deleteJuegoEncuestaRapida }