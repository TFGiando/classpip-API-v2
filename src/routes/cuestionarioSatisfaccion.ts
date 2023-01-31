import { Router } from 'express';
import * as cuestionarioSatisfaccionController from "../controllers/cuestionarioSatisfaccionController"

const router = Router();

// http://localhost:3001/api/v2/cuestionarioSatisfaccion
router.get("/", cuestionarioSatisfaccionController.getAllCuestionarioSatisfaccion);
router.get("/publicos", cuestionarioSatisfaccionController.getAllCuestionarioSatisfaccionPublicos);
router.get("/:id", cuestionarioSatisfaccionController.getCuestionarioSatisfaccionPorId);
router.get("/profesor/:idProfesor", cuestionarioSatisfaccionController.getCuestionarioSatisfaccionPorProfesor);
router.post("/", cuestionarioSatisfaccionController.createCuestionarioSatisfaccion );
router.delete("/:id", cuestionarioSatisfaccionController.deleteCuestionarioSatisfaccion);
router.put("/", cuestionarioSatisfaccionController.updateCuestionarioSatisfaccion);

export {router};