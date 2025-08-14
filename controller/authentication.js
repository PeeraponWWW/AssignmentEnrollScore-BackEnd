import { verifyToken } from "../helper/jwtAuth.js";
import * as tModel from "../model/teacher.js";
import * as taModel from "../model/teacherAssistant.js";

export const checkAuth = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    // console.log(token);
    if (!token) {
        return res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }
    try {
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ status: 'error', message: 'Invalid Token' });
        }
        const role = decoded.role;
        if (role == 'teacher') {
            const teacher = await tModel.getTeacherByUsername(decoded.username);
            if (!teacher) {
                return res.status(404).json({ status: 'Error', message: 'User Not Found' });
            }
            const userInfo = {
                name: teacher.fName + ' ' + teacher.lName,
                email: teacher.email,
                role: decoded.role
            }
            return res.status(200).json({ status: 'success', userInfo });
        } else if (role == 'ta') {
            const teacherAssistant = await taModel.getTeacherAssistantByUsername(decoded.username);
            if (!teacherAssistant) {
                return res.status(404).json({ status: 'Error', message: 'User Not Found' });
            }
            const userInfo = {
                name: teacherAssistant.fName + ' ' + teacherAssistant.lName,
                email: teacherAssistant.email,
                role: decoded.role
            }
            return res.status(200).json({ status: 'success', userInfo });
        } else {
            return res.status(401).json({ status: 'Invalid Role' });
        };
    } catch (error) {
        console.error("Error during teacher login:", error);
        return res.status(500).json({ status: 'error', message: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' });
    }
}