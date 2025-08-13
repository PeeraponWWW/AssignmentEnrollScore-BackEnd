import * as taModel from '../model/teacherAssistant.js';
import bcrypt from 'bcryptjs';

export const taLogin = async (req, res) => {
    const { username, password } = req.body;
    const teacherAssistant = await taModel.getTeacherAssistantByUsername(username);
    if (!teacherAssistant) {
        return res.status(404).json({ status: 'error', message: 'ไม่พบผู้ช่วยครูที่มีชื่อผู้ใช้ดังกล่าว' });
    }
    const isPasswordValid = await bcrypt.compare(password, teacherAssistant.password);
    if (!isPasswordValid) {
        return res.status(401).json({ status: 'error', message: 'รหัสผ่านไม่ถูกต้อง' });
    }
    const token = createToken({ username: teacher.username, role: 'teacher' });
    return res.status(200).json({ status: 'success', token: token });
};

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