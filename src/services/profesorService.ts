import * as profesor from "../database/Profesor";
import {v4 as uuidv4} from 'uuid';

const getAllProfesores = () => {
    const allProfesores = profesor.getAllProfesores();
    return allProfesores;
}

const createProfesor = (newProfesor: any) => {
    console.log("Este es el nuevo profesor");
    console.log(newProfesor);
    const ProfesorToInsert = {
        ...newProfesor,
        id: uuidv4(),
    };
    const createdProfesor = profesor.createNewProfesor(ProfesorToInsert);
    return createdProfesor;
}

export {getAllProfesores, createProfesor};