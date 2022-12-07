import * as juegoCuestionarioRapido from "../database/JuegoCuestionarioRapido"
import {v4 as uuidv4} from 'uuid';

const getAllJuegoCuestionarioRapido = () => {
    const allJuegosCuestionarioRapido = juegoCuestionarioRapido.getAllJuegoCuestionarioRapido();
    return allJuegosCuestionarioRapido;
}

const getJuegoCuestionarioRapidoPorId = (id: string) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.getCuestionarioRapidoPorId(id);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
    
}

const getJuegoCuestionarioRapidoPorIdProfesor = (idProfesor: number) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.getCuestionarioRapidoPorIdProfesor(idProfesor);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
}

const createJuegoCuestionarioRapido = (body: any) => {

    if(!body.NombreJuego || 
        !body.Tipo ||
        !body.Modalidad ||
        !body.Clave || 
        !body.profesorId || 
        !body.cuestionarioId ) {
        
        throw {
            status: 400,
            message: `Uno o mas parametros del juegoCuestionarioRapido faltan {NombreJuego, Tipo..} `
        }
        
     }
   
    const newJuegoCuestionarioRapido = {
        NombreJuego : body.NombreJuego,
        Tipo: body.Tipo,
        Modalidad: body.Modalidad,
        PuntuacionCorrecta: body.PuntuacionCorrecta,
        PuntuacionIncorrecta: body.PuntuacionIncorrecta,
        TiempoLimite: body.TiempoLimite,
        Presentacion: body.Presentacion,
        JuegoActivo: body.JuegoActivo,
        JuegoTerminado: body.JuegoTerminado,
        Clave: body.Clave,
        Respuestas: body.Respuestas,
        profesorId: body.profesorId,
        cuestionarioId: body.cuestionarioId,
    }
    const juegoCuestionarioRapidoToInsert = {
        ...newJuegoCuestionarioRapido,
        id: uuidv4(), //Verificar si es la mejor opcion
    };

    try {
        const createdProfesor = juegoCuestionarioRapido.createJuegoCuestionarioRapido(juegoCuestionarioRapidoToInsert);
        return createdProfesor;
    } catch(error) {
        throw error;
    }
    
}

const deleteJuegoCuestionarioRapidoPorId = (id: string) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.deleteCuestionarioRapidoPorId(id);
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
}

const updateJuegoCuestionarioRapido = (updateJuegoCuestionario: any) => {
    try {
        const juegoCuestionario = juegoCuestionarioRapido.updateJuegoCuestionarioRapido(updateJuegoCuestionario, updateJuegoCuestionario.id);//CAMBIAR
        return juegoCuestionario;
    } catch (error) {
        throw error;
    }
}

export {
    getAllJuegoCuestionarioRapido,
    createJuegoCuestionarioRapido,
    getJuegoCuestionarioRapidoPorId, 
    getJuegoCuestionarioRapidoPorIdProfesor, 
    deleteJuegoCuestionarioRapidoPorId, 
    updateJuegoCuestionarioRapido};