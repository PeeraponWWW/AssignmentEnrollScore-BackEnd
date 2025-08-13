import { Router } from "express";
import { 
    tLogin,
} from '../controller/teacher.js';
import {
    taLogin,
} from '../controller/teacherAssistant.js';
const router = Router();

// router.get('/checkAuth',)

router.post('/t',tLogin)
router.post('/ta',taLogin)

export default router;