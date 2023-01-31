import { Request, Response } from "express";
import * as cuestionarioSatisfaccionService from "../services/cuestionarioSatisfaccionService";
import { handleHttp } from "../utils/http.handle";

const getAllCuestionarioSatisfaccion = (req: Request, res: Response) => {
    try {
        const getAllCuestionarioSatisfaccion = cuestionarioSatisfaccionService.getAllCuestionarioSatisfaccion();
        res.send({ status: "OK", data: getAllCuestionarioSatisfaccion});
    } catch (error: any) {
        handleHttp(res, "ERROR_GET_ALL_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }
}


const getAllCuestionarioSatisfaccionPublicos = (req: Request, res: Response) => {
    try {
        const getCuestionarioSatisfaccionPublico = cuestionarioSatisfaccionService.getAllCuestionarioSatisfaccionPublicos();
        res.send({ status: "OK", data: getCuestionarioSatisfaccionPublico});
    } catch (error: any) {
        handleHttp(res, "ERROR_GET_ALL_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }
}

const getCuestionarioSatisfaccionPorId = ({params}: Request, res: Response) => {
    const {id} = params;
    if (!id) {
        handleHttp(res, "Falta parametro :id", 400);
    }

    try {
        const cuestionarioSatisfaccion = cuestionarioSatisfaccionService.getCuestionarioSatisfaccionPorId(id);
        res.send(cuestionarioSatisfaccion);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }   
}



const getCuestionarioSatisfaccionPorProfesor = ({params}: Request, res: Response) => {
    
    const { idProfesor } = params;
    if (!idProfesor) {
        handleHttp(res, "Falta parametro :idProfesor", 400);
    }

    try {
        const cuestionarioSatisfaccion = cuestionarioSatisfaccionService.getCuestionarioSatisfaccionPorIdProfesor(+idProfesor);
        console.log(cuestionarioSatisfaccion)
        res.send(cuestionarioSatisfaccion);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_GET_JUEGO_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }    

}

const updateCuestionarioSatisfaccion = (req: Request, res: Response) => {
    const { body } = req;
    console.log(body)
    if (!body) { //Cambiar esta condicion por una  mejor
        handleHttp(res, "Faltan parametros en el body", 400);
    }

    try {
        const updatedCuestionarioSatisfaccion = cuestionarioSatisfaccionService.updateCuestionarioSatisfaccion(body);
        res.send(updatedCuestionarioSatisfaccion);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }
   
}


const deleteCuestionarioSatisfaccion = ({params}: Request, res: Response) => {
    const { id } = params;
    if (!id) {  
        handleHttp(res, "Falta parametro :id", 400);
    }
    
    try {
        const deletedCuestionarioSatisfaccion = cuestionarioSatisfaccionService.deleteCuestionarioSatisfaccionPorId(id);
        res.send(deletedCuestionarioSatisfaccion); 
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_UPDATE_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }  
}


const createCuestionarioSatisfaccion = (req: Request, res: Response) => {
    const { body } = req;  
    console.log(body)
    try {
        const createdCuestionarioSatisfaccion = cuestionarioSatisfaccionService.createCuestionarioSatisfaccion(body);
        res.status(201).send(createdCuestionarioSatisfaccion);
    } catch (error: any) {
        handleHttp(res, error?.message || "ERROR_CREATE_CUESTIONARIO_SATISFACCION", error?.status || 500, error);
    }
    
}


export {getAllCuestionarioSatisfaccion, getAllCuestionarioSatisfaccionPublicos, getCuestionarioSatisfaccionPorId, getCuestionarioSatisfaccionPorProfesor, updateCuestionarioSatisfaccion, createCuestionarioSatisfaccion, deleteCuestionarioSatisfaccion }