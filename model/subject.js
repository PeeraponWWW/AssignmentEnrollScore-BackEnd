import db from "../prisma/client.js";

export const createSubject = async (data) => {
    try {
        const subject = await db.subjects.create({
            data,
        });
        return subject || null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getSubjectByTeacherId = async (teacherId) => {
    try {
        const subjects = await db.subjects.findMany({
            where: { teachBy: teacherId },
        });
        return subjects || [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getSubjectById = async (id) => {
    try {
        const subject = await db.subjects.findUnique({
            where: { id },
        });
        return subject || null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getAllSubjects = async () => {
    try {
        const subjects = await db.subjects.findMany();
        return subjects || [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const updateSubject = async (id, data) => {
    try {
        const subject = await db.subjects.update({
            where: { id },
            data,
        });
        return subject || null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const deleteSubject = async (id) => {
    try {
        const subject = await db.subjects.delete({
            where: { id },
        });
        return subject || null;
    } catch (error) {
        console.error(error);
        return null;
    }
};
