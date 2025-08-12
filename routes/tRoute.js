import { Router } from "express";
import {
    createTeacher
} from '../controller/teacher.js';
const router = Router();


router.post('/createTeacher', createTeacher);

export default router;