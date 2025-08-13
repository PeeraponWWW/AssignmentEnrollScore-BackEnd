import { Router } from "express";
import {
    createTeacher
} from '../controller/teacher.js';
const router = Router();


router.post('/teacher', createTeacher);

export default router;