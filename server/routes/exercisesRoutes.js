import express from 'express';
import { createExercise, getExercises, deleteExercise } from '../controllers/exerciseController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get("/",protect, getExercises);
router.post("/",protect, createExercise);
router.delete("/:id",protect, deleteExercise);

export default router;
