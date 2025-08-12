import db from "../prisma/client.js";

export const createTeacherAssistant = async (data) => {
    const teacherAssistant = await db.teacherAssistants.create({
        data,
    });
    if (teacherAssistant) {
        return teacherAssistant;
    }
    return null;
};

export const getTeacherAssistantById = async (id) => {
    const teacherAssistant = await db.teacherAssistants.findUnique({
        where: { id },
    });
    if (teacherAssistant) {
        return teacherAssistant;
    }
    return null;
};

export const getAllTeacherAssistants = async () => {
    const teacherAssistants = await db.teacherAssistants.findMany();
    if (teacherAssistants) {
        return teacherAssistants;
    }
    return [];
};

export const updateTeacherAssistant = async (id, data) => {
    const teacherAssistant = await db.teacherAssistants.update({
        where: { id },
        data,
    });
    if (teacherAssistant) {
        return teacherAssistant;
    }
    return null;
};

export const deleteTeacherAssistant = async (id) => {
    const teacherAssistant = await db.teacherAssistants.delete({
        where: { id },
    });
    if (teacherAssistant) {
        return teacherAssistant;
    }
    return null;
};
