import * as tModel from '../model/teacher.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../helper/jwtAuth.js';

export const tLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const teacher = await tModel.getTeacherByUsername(username);
        if (!teacher) {
            return res.status(404).json({ status: 'error', message: 'ไม่พบครูที่มีชื่อผู้ใช้ดังกล่าว' });
        }
        const isPasswordValid = await bcrypt.compare(password, teacher.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: 'error', message: 'รหัสผ่านไม่ถูกต้อง' });
        }
        const token = createToken({ username: teacher.username, role: 'teacher' });
        
        return res.status(200).json({ status: 'success', message: 'เข้าสู่ระบบสำเร็จ'});
    } catch (error) {
        console.error("Error during teacher login:", error);
        return res.status(500).json({ status: 'error', message: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' });
    }

};

export const tCheckAuth = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try{
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        const user = await tModel.getTeacherByUsername(decoded.username);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({status: 'logged in'});
    }catch(err){
        res.status(401).json({ err });
        console.error(err);
    }
}

export const createTeacher = async (req, res) => {
    const teacherData = req.body;
    const hashedPassword = await bcrypt.hash(teacherData.password, 10);
    teacherData.password = hashedPassword;
    if (teacherData) {
        const newTeacher = await tModel.createTeacher(teacherData);
        if (newTeacher) {
            return res.status(201).json({ status: 'success', message: 'สร้างครูเรียบร้อยแล้ว' });
        }
    }
    return res.status(400).json({ status: 'error', message: 'เกิดข้อผิดพลาดในการสร้างครู' });
}


