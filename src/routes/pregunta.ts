import { Router } from 'express';
import * as preguntaController from "../controllers/preguntaController"
import multerMiddleware from '../utils/utilsImage';

const router = Router();

//http://localhost:3001/api/v2/pregunta
router.get("/profesor/:idProfesor", preguntaController.getAllPreguntaPorProfesor);
router.post("/", preguntaController.createPregunta );
router.delete("/:id", preguntaController.deletePregunta);
router.put("/", preguntaController.updatePregunta);

router.get("/imagen/download/:filename", preguntaController.getImagenPregunta );
router.post("/imagen/upload", multerMiddleware.single("myfile"), preguntaController.uploadImagen );
router.delete("/imagen/:filename", preguntaController.deleteImagenPregunta);


export { router };