const DB = require("./db.json");
import * as utils from "../utils/utilsDatabase";


const getAllProfesores = () => {
    return DB.Profesores;
}

const createNewProfesor = ( newProfesor : any) => {
    const isAlreadyAdded =  DB.Profesores.findIndex((profesor : any) => profesor.email === newProfesor.email) > -1;
    if( isAlreadyAdded) {
        return;
    }

    DB.Profesores.push(newProfesor);
    utils.saveToDatabase(DB);
    return newProfesor;
}

export {getAllProfesores, createNewProfesor}