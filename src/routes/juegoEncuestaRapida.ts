import { Router } from 'express';
import * as juegoEncuestaRapidaController from "../controllers/juegoEncuestaRapidaController"

const router = Router();

// http://localhost:3001/api/v2/juegoEncuestaRapida
router.get("/", juegoEncuestaRapidaController.getAllJuegoEncuestaRapida);
router.get("/:id", juegoEncuestaRapidaController.getJuegoEncuestaRapidaPorId);
router.get("/clave/:clave", juegoEncuestaRapidaController.getJuegoEncuestaRapidaPorClave);
router.get("/profesor/:idProfesor", juegoEncuestaRapidaController.getJuegoEncuestaRapidaPorProfesor);
router.post("/", juegoEncuestaRapidaController.createJuegoEncuestaRapida );
router.delete("/:id", juegoEncuestaRapidaController.deleteJuegoEncuestaRapida);
router.put("/", juegoEncuestaRapidaController.updateJuegoEncuestaRapida);

export {router};