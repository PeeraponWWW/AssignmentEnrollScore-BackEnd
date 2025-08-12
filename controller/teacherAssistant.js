import * as taModel from '../model/teacherAssistant.js';
import bcrypt from 'bcryptjs';

export const createTeacherAssistant = async (req, res) => {
    const teacherAssistantData = req.body;
    const hashedPassword = await bcrypt.hash(teacherAssistantData.password, 10);
    teacherAssistantData.password = hashedPassword;
    if (teacherAssistantData) {
        const newTeacherAssistant = await taModel.createTeacherAssistant(teacherAssistantData);
        if (newTeacherAssistant) {
            return res.status(201).json({status: 'success', message: 'สร้างผู้ช่วยครูเรียบร้อยแล้ว' });
        }
    }
    return res.status(400).json({status: 'error', message: 'เกิดข้อผิดพลาดในการสร้างผู้ช่วยครู' });
}