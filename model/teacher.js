import db from "../prisma/client.js";

export const createTeacher = async (data) => {
    try {
        const teacher = await db.teachers.create({
            data,
        });
        return teacher;
    } catch (error) {
        console.error("Error creating teacher:", error);
        return null;
    }
};

export const getTeacherById = async (id) => {
    try {
        const teacher = await db.teachers.findUnique({
            where: { id },
        });
        return teacher;
    } catch (error) {
        console.error("Error getting teacher by ID:", error);
        return null;
    }
};

export const getTeacherByUsername = async (username) => {
    try {
        const teacher = await db.teachers.findUnique({
            where: { username },
        });
        return teacher;
    } catch (error) {
        console.error("Error getting teacher by username:", error);
        return null;
    }
};

export const getAllTeachers = async () => {
    try {
        const teachers = await db.teachers.findMany();
        return teachers;
    } catch (error) {
        console.error("Error getting all teachers:", error);
        return [];
    }
};

export const updateTeacher = async (id, data) => {
    try {
        const teacher = await db.teachers.update({
            where: { id },
            data,
        });
        return teacher;
    } catch (error) {
        console.error("Error updating teacher:", error);
        return null;
    }
};

export const deleteTeacher = async (id) => {
    try {
        const teacher = await db.teachers.delete({
            where: { id },
        });
        return teacher;
    } catch (error) {
        console.error("Error deleting teacher:", error);
        return null;
    }
};
