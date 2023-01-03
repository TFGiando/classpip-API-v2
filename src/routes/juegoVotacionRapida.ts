import { Router } from 'express';
import * as juegoVotacionRapidaController from "../controllers/juegoVotacionRapidaController"

const router = Router();

router.get("/", juegoVotacionRapidaController.getAllJuegoVotacionRapida);
router.get("/:id", juegoVotacionRapidaController.getVotacionRapidaPorId);
router.get("/profesor/:idProfesor", juegoVotacionRapidaController.getJuegoVotacionRapidaPorProfesor);
router.post("/", juegoVotacionRapidaController.createJuegoVotacionRapida );
router.delete("/:id", juegoVotacionRapidaController.deleteJuegoVotacionRapida);
router.put("/", juegoVotacionRapidaController.updateJuegoVotacionRapida);

export {router};