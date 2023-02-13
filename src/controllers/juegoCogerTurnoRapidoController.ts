import { request, Request, Response } from "express";
import * as juegoCogerTurnoRapidoService from "../services/juegoCogerTurnoRapidoService";
import { handleHttp } from "../utils/http.handle";

const getAllJuegoCogerTurnoRapido = (req: Request, res: Response) => {
try{
    const allJuegoCogerTurnoRapido = juegoCogerTurnoRapidoService.getAllJuegoCogerTurnoRapido();
    res.send({status: "OK", data: allJuegoCogerTurnoRapido});
    } catch (error:any) {
        handleHttp(res, "ERROR_GET_ALLJUEGO_COGER_TURNO_RAPIDO", error?.status || 500, error);
    }
}

const getJuegoCogerTurnoRapidoPorId = ({params}: Request, res: Response ) => {
    const {id} = params;
    if(!id) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const juegoCogerTurnoRapido = juegoCogerTurnoRapidoService.getJuegoCogerTurnoRapidoPorId(id);
        res.send(juegoCogerTurnoRapido);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_COGER_TURNO_RAPIDO", error?.status || 500, error);
    }
}

const pruebaVideo = ({params}:Request, res:Response ) => {
    res.send("Tefegiando")
}

const getJuegoCogerTurnoRapidoPorProfesor = ({params}: Request, res:Response) => {
    const {idProfesor} = params;
    if(!idProfesor) {
        handleHttp(res, "Falta parametro :idProfesor", 400);
    }
    try {
        const juegoCogerTurnoRapido = juegoCogerTurnoRapidoService.getJuegoCogerTurnoRapidoPorIdProfesor(+idProfesor);
        res.send(juegoCogerTurnoRapido);
    } catch (error: any) {
        handleHttp(res, error?.message ||"ERROR_GET_JUEGO_COGER_TURNO_RAPIDP_POR_PROFESOR", error?.status || 500, error);
    }
}

const getJuegoCogerTurnoRapidoPorClave = ({params}: Request, res: Response) => {
    const {clave} = params;
    if(!clave) {
        handleHttp(res, "Falta parametro :clave", 400);
    } 
    try {
        const juegoCogerTurno = juegoCogerTurnoRapidoService.getJuegoCogerTurnoRapidoPorClave(+clave);
        res.send(juegoCogerTurno)
    } catch (error: any) {
        handleHttp(res, error?.message ||"ERROR_GET_JUEGO_COGER_TURNO_RAPIDP_POR_CLAVE", error?.status || 500, error);
    }
}

const createJuegoCogerTurnoRapido = (req: Request, res: Response) => {
    
    const {body} = req;
    
    try{
        const createdJuegoCogerTurnoRapido = juegoCogerTurnoRapidoService.createJuegoCogerTurnoRapido(body);
        res.status(201).send(createdJuegoCogerTurnoRapido)
    } catch (error:any) {
        handleHttp(res, error?.message || "ERROR_CREATE_JUEGO_COGER_TURNO_RAPIDO", error?.status || 500, error);
    }
}

const updateJuegoCogerTurnoRapido = (req: Request, res: Response) => {
    const {body} = req;
    if(!body) {
        handleHttp(res, "Falta parametros el el body", 400);
    }

    try {
        const updatedJuegoCogerTurnoRapido = juegoCogerTurnoRapidoService.updateJuegoCogerTurnoRapido(body);
        res.send(updatedJuegoCogerTurnoRapido);
    } catch(error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_COGER_TURNO_RAPIDO", error?.status || 500, error)
    }
}

const deleteJuegoCogerTurnoRapido = ({params}: Request, res: Response) => {
    const {id} = params;
    if (!id) {
        handleHttp(res, "Falta paramtro :id", 400);
    }

    try {
        const deletedJuegoCogerTurno = juegoCogerTurnoRapidoService.deleteJuegoCogerTurnoRapidoPorId(id);
        res.send(deletedJuegoCogerTurno);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_DELETE_JUEGO_COGER_TURNO_RAPIDO", error?.status || 500, error);
    }

}

export {getAllJuegoCogerTurnoRapido,getJuegoCogerTurnoRapidoPorClave, getJuegoCogerTurnoRapidoPorId, getJuegoCogerTurnoRapidoPorProfesor, createJuegoCogerTurnoRapido, deleteJuegoCogerTurnoRapido, updateJuegoCogerTurnoRapido, pruebaVideo}