import { Request, Response } from "express";
import * as juegoCuestionarioRapidoService from "../services/juegoCuestionarioRapidoService";
import { handleHttp } from "../utils/http.handle";

const getAllJuegoCuestionarioRapido = (req: Request, res: Response) => {
    try {
        const allJuegoCuestionarioRapido = juegoCuestionarioRapidoService.getAllJuegoCuestionarioRapido();
        res.send({ status: "OK", data: allJuegoCuestionarioRapido});
    } catch (error: any) {
        handleHttp(res, "ERROR_GET_ALLJUEGO_CUESTIONARIO_RAPIDO", error?.status || 500, error);
    }
}


const getJuegoCuestionarioRapidoPorId = ({params}: Request, res: Response) => {
    const {id} = params;
    if (!id) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const juegoCuestionarioRapido = juegoCuestionarioRapidoService.getJuegoCuestionarioRapidoPorId(id);
        res.send(juegoCuestionarioRapido);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_CUESTIONARIO_RAPIDO", error?.status || 500, error);
    }
   
}

const getJuegoCuestionarioRapidoPorClave = ({params}: Request, res: Response) => {
    const {clave} = params;
    if (!clave) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const juegoCuestionarioRapido = juegoCuestionarioRapidoService.getJuegoCuestionarioRapidoPorClave(clave);
        res.send(juegoCuestionarioRapido);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_CUESTIONARIO_RAPIDO", error?.status || 500, error);
    }
   
}

const getJuegoCuestionarioRapidoPorProfesor = ({params}: Request, res: Response) => {
    const { idProfesor } = params;
    if (!idProfesor) {
        handleHttp(res, "Falta parametro :idProfesor", 400);
    }

    try {
        const juegoCuestionarioRapido = juegoCuestionarioRapidoService.getJuegoCuestionarioRapidoPorIdProfesor(+idProfesor);
        res.send(juegoCuestionarioRapido);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_CUESTIONARIO_RAPIDO_POR_PROFESOR", error?.status || 500, error);
    }    

}

const createJuegoCuestionarioRapido= (req: Request, res: Response) => {
    const { body } = req;  
    try {
        const createdJuegoCuestionario = juegoCuestionarioRapidoService.createJuegoCuestionarioRapido(body);
        res.status(201).send(createdJuegoCuestionario);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_CREATE_JUEGO_CUESTIONARIO_RAPIDO", error?.status || 500, error);
    }
    
}

const updateJuegoCuestionarioRapido = (req: Request, res: Response) => {
    const { body } = req;
    if (!body) { 
        handleHttp(res, "Faltan parametros en el body", 400);
    }

    try {
        const updatedJuegoCuestionario = juegoCuestionarioRapidoService.updateJuegoCuestionarioRapido(body);
        res.send(updatedJuegoCuestionario);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_CUESTIONARIO_RAPIDO", error?.status || 500, error);
    }
   
}

const deleteJuegoCuestionarioRapido = ({params}: Request, res: Response) => {
    const { id } = params;
    if (!id) {  
        handleHttp(res, "Falta parametro :id", 400);
    }
    
    try {
        const deletedJuegoCuestionario = juegoCuestionarioRapidoService.deleteJuegoCuestionarioRapidoPorId(id);
        res.send(deletedJuegoCuestionario); 
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_CUESTIONARIO_RAPIDO", error?.status || 500, error);
    }
    
}

export { getAllJuegoCuestionarioRapido, getJuegoCuestionarioRapidoPorId, getJuegoCuestionarioRapidoPorProfesor, createJuegoCuestionarioRapido, deleteJuegoCuestionarioRapido, updateJuegoCuestionarioRapido, getJuegoCuestionarioRapidoPorClave}