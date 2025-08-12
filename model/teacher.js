import db from "../prisma/client.js";

export const createTeacher = async (data) => {
    const teacher = await db.teachers.create({
        data,
    });
    if (teacher) {
        return teacher;
    }
    return null;
};

export const getTeacherById = async (id) => {
    const teacher = await db.teachers.findUnique({
        where: { id },
    });
    if (teacher) {
        return teacher;
    }
    return null;
};

export const getAllTeachers = async () => {
    const teachers = await db.teachers.findMany();
    if (teachers) {
        return teachers;
    }
    return [];
};

export const updateTeacher = async (id, data) => {
    const teacher = await db.teachers.update({
        where: { id },
        data,
    });
    if (teacher) {
        return teacher;
    }
    return null;
};

export const deleteTeacher = async (id) => {
    const teacher = await db.teachers.delete({
        where: { id },
    });
    if (teacher) {
        return teacher;
    }
    return null;
};
