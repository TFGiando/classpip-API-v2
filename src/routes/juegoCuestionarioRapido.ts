import { Router } from 'express';
import * as juegoCuestionarioRapidoController from "../controllers/juegoCuestionarioRapidoController"

const router = Router();

// http://localhost:3001/api/v2/juegoCuestionarioRapido
router.get("/", juegoCuestionarioRapidoController.getAllJuegoCuestionarioRapido);
router.get("/:id", juegoCuestionarioRapidoController.getJuegoCuestionarioRapidoPorId);
router.get("/profesor/:idProfesor", juegoCuestionarioRapidoController.getJuegoCuestionarioRapidoPorProfesor);
router.post("/", juegoCuestionarioRapidoController.createJuegoCuestionarioRapido );
router.delete("/:id", juegoCuestionarioRapidoController.deleteJuegoCuestionarioRapido);
router.put("/", juegoCuestionarioRapidoController.updateJuegoCuestionarioRapido);

export {router};