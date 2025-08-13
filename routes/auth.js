import { Router } from "express";
import { 
    tLogin,
} from '../controller/teacher.js';
import {
    taLogin,
} from '../controller/teacherAssistant.js';
// import { isAuth } from "../middleware/isAuth.js";
import { checkAuth } from "../controller/authentication.js";
const router = Router();

router.get('/checkAuth', checkAuth);
router.post('/t',tLogin);
router.post('/ta',taLogin);

export default router;