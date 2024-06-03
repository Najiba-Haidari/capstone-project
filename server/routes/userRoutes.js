import express from 'express';
import {signupUser, loginUser, getMe} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/", signupUser);
router.post("/login", loginUser)
router.get("/me",protect, getMe)


export default router;