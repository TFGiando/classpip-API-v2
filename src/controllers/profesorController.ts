import { Request, Response } from "express";
import * as  profesorService from "../services/profesorService"

const getProfesores = (req: Request, res: Response) => {
   const allProfesores = profesorService.getAllProfesores();
   res.send({status: "OK", data: allProfesores});
}


// Testin pipeline

const createProfesor = (req: Request, res: Response) => {
   const { body } = req;

   if(!body.Nombre || 
      !body.PrimerApellido ||
      !body.SegundoApellido ||
      !body.NombreUsuario || 
      !body.email ||
      !body.Password || 
      !body.Identificador ) {
      
         return false;
   }

   const newProfesor = {
      Nombre : body.Nombre,
      PrimerApellido: body.PrimerApellido,
      SegundoApellido: body.SegundoApellido,
      NombreUsuario: body.NombreUsuario,
      email: body.email,
      Password: body.Password,
      Identificador: body.Identificador,
      configuracionEventos : body.configuracionEventos
   }

   const createdProfesor = profesorService.createProfesor(newProfesor);
   res.status(201).send({status: "Ok", data: createdProfesor});
}

const getProfesor = (req: Request, res: Response) => {

}

const updateProfesor = (req: Request, res: Response) => {

}

const deleteProfesor = (req: Request, res: Response) => {

}

export {getProfesores, getProfesor, updateProfesor, deleteProfesor, createProfesor };