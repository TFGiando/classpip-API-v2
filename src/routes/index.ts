import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`
const router = Router();
const API_V2 = '/api/v2';


/**
 * Metodo que devuelve el nombre del fichero sin el "".ts"
 * @param fileName
 * @returns nombre del fichero sin ".ts", ejemplo: profesor, juegoCuestionarioRaopido etc.
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
} 
/**
 * Este metodo importa las rutas dinamicamente.
 * Todos los modulos que esten en la carpeta '/routes'
 * seran importadas y posteriormente exportadas a app.ts 
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName!== "index") {
        console.log(cleanName);
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`${API_V2}/${cleanName}`, moduleRouter.router);
        })
    }
});

export { router}