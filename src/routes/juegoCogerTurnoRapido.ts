import {Router} from 'express';
import * as juegoCogerTurnoRapidoController from "../controllers/juegoCogerTurnoRapidoController";

const router = Router();

router.get("/", juegoCogerTurnoRapidoController.getAllJuegoCogerTurnoRapido);
router.get("/:id", juegoCogerTurnoRapidoController.getJuegoCogerTurnoRapidoPorId);
router.get("/profesor/:idProfesor", juegoCogerTurnoRapidoController.getJuegoCogerTurnoRapidoPorProfesor);
router.post("/", juegoCogerTurnoRapidoController.createJuegoCogerTurnoRapido);
router.delete("/id", juegoCogerTurnoRapidoController.deleteJuegoCogerTurnoRapido);
router.put("/", juegoCogerTurnoRapidoController.updateJuegoCogerTurnoRapido);

export{router}