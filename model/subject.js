import db from "../prisma/client.js";

export const createSubject = async (data) => {
    const subject = await db.subjects.create({
        data,
    });
    if (subject) {
        return subject;
    }
    return null;
};

export const getSubjectByTeacherId = async (teacherId) => {
    const subjects = await db.subjects.findMany({
        where: { teachBy: teacherId },
    });
    if (subjects) {
        return subjects;
    }
    return [];
};

export const getSubjectById = async (id) => {
    const subject = await db.subjects.findUnique({
        where: { id },
    });
    if (subject) {
        return subject;
    }
    return null;
};

export const getAllSubjects = async () => {
    const subjects = await db.subjects.findMany();
    if (subjects) {
        return subjects;
    }
    return [];
};

export const updateSubject = async (id, data) => {
    const subject = await db.subjects.update({
        where: { id },
        data,
    });
    if (subject) {
        return subject;
    }
    return null;
};

export const deleteSubject = async (id) => {
    const subject = await db.subjects.delete({
        where: { id },
    });
    if (subject) {
        return subject;
    }
    return null;
};
