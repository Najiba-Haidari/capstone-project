import express from 'express';
import { createExercise, getExercises, deleteExercise } from '../controllers/exerciseController.js';

const router = express.Router();

router.get("/", getExercises);
router.post("/", createExercise);
router.delete("/:id", deleteExercise);

export default router;
