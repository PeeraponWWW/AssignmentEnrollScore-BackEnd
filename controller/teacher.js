import * as tModel from '../model/teacher.js';
import bcrypt from 'bcryptjs';

export const createTeacher = async (req, res) => {
    const teacherData = req.body;
    const hashedPassword = await bcrypt.hash(teacherData.password, 10);
    teacherData.password = hashedPassword;
    if (teacherData) {
        const newTeacher = await tModel.createTeacher(teacherData);
        if (newTeacher) {
            return res.status(201).json({status: 'success', message: 'สร้างครูเรียบร้อยแล้ว' });
        }
    }
    return res.status(400).json({status: 'error', message: 'เกิดข้อผิดพลาดในการสร้างครู' });
}


