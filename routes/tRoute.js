import { Router } from "express";
import {
    createTeacher
} from '../controller/teacher.js';
import { createSubject } from "../model/subject.js";
const router = Router();

// Teacher
router.post('/teacher', createTeacher); 
// Subject
router.post('/subject', createSubject);


export default router;