import * as sModel from "../model/subject";
import { getTeacherByUsername } from "../model/teacher";

export const createSubject = async (req, res) => {
    const subject = req.body.subject;
    const user = req.user;
    if(!subject) { return res.status(400).json({status: "error",message: "Bad Request!"}) };
    try{
        const teacher = await getTeacherByUsername(user.username);
        if(!teacher) { return res.status(404).json({status: "error", message: "ไม่พบคุณครู"})};
        const createSubject = await sModel.createSubject({...subject, teachBy: teacher.idTeacher});
        return res.status(201).json({status: "success", message: "สร้างวิชาสำเร็จ"});
    }catch(error) {
        console.error("Error during create subject", error);
        return res.status(500).json({ status: 'error', message: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' });
    };
};