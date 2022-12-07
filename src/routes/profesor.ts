import { Router } from 'express';
import { getProfesores, getProfesor, createProfesor  } from '../controllers/profesorController';

const router = Router();

router.get("/", getProfesores);
router.get("/:id", getProfesor);
router.post("/",createProfesor );


export {router};