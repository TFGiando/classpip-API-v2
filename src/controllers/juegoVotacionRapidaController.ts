import { request, Request, Response } from "express";
import * as juegoVotacionRapidaService from "../services/juegoVotacionRapidaService";
import { handleHttp } from "../utils/http.handle";

const getAllJuegoVotacionRapida = (req: Request, res: Response) => {
    try {
        const allJuegoVotacionRapida = juegoVotacionRapidaService.getAllVotacionRapida();
        res.send({ status: "OK", data: allJuegoVotacionRapida});
    } catch (error: any) {
        handleHttp(res, "ERROR_GET_ALLJUEGO_VOTACION_RAPIDA", error?.status || 500, error);
    }
}

const getVotacionRapidaPorId = ({params}: Request, res: Response) => {
    const {id} = params;
    if (!id) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const juegoVotacionRapida = juegoVotacionRapidaService.getJuegoVotacionRapidaPorId(id);
        res.send(juegoVotacionRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_VOTACION_RAPIDA", error?.status || 500, error);
    }
}

const getJuegoVotacionRapidaPorProfesor = ({params}: Request, res: Response) => {
    const { idProfesor } = params;
    if (!idProfesor) {
        handleHttp(res, "Falta parametro :idProfesor", 400);
    }

    try {
        const juegoVotacionRapida = juegoVotacionRapidaService.getJuegoVotacionRapidaPorIdProfesor(+idProfesor);
        res.send(juegoVotacionRapida);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_VOTACION_RAPIDO_POR_PROFESOR", error?.status || 500, error);
    }    
}

const getJuegoVotacionRapidaPorClave = ({params}: Request, res: Response) => {
    const {Clave} = params;
    console.log('clave')
    console.log(Clave)
    Clave.split
    if(!Clave) {
        handleHttp(res, "Falta parametro clave", 400)
    }
    try {

        const juegoVotacionRapida = juegoVotacionRapidaService.getJuegoVotacionRapidaPorClave(+Clave);
        res.send(juegoVotacionRapida)
    } catch (error:any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_VOTACION_RAPIDPO_POR_CLAVE", error?.status || 500, error);
    }
}

const createJuegoVotacionRapida= (req: Request, res: Response) => {
    const { body } = req;  
    try {
        const createdJuegoVotacion = juegoVotacionRapidaService.createJuegoVotacionRapida(body);
        res.status(201).send(createdJuegoVotacion);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_CREATE_JUEGO_VOTACION_RAPIDa", error?.status || 500, error);
    }
}

const updateJuegoVotacionRapida = (req: Request, res: Response) => {
    const { body } = req;
    if (!body) { //Cambiar esta condicion por una  mejor
        handleHttp(res, "Faltan parametros en el body", 400);
    }

    try {
        const updatedJuegoVotacion = juegoVotacionRapidaService.updateJuegoVotacionRapida(body);
        res.send(updatedJuegoVotacion);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_VOTACION_RAPIDO", error?.status || 500, error);
    }
}

const deleteJuegoVotacionRapida = ({params}: Request, res: Response) => {
    const { id } = params;
    if (!id) {  
        handleHttp(res, "Falta parametro :id", 400);
    }
    
    try {
        const deletedJuegoVotacion = juegoVotacionRapidaService.deleteJuegoVotacionRapidaPorId(id);
        res.send(deletedJuegoVotacion); 
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_JUEGO_VOTACION_RAPIDA", error?.status || 500, error);
    }  
}

export{ getAllJuegoVotacionRapida, getJuegoVotacionRapidaPorProfesor, getVotacionRapidaPorId, getJuegoVotacionRapidaPorClave, createJuegoVotacionRapida, updateJuegoVotacionRapida, deleteJuegoVotacionRapida}