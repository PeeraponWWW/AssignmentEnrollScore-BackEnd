import db from "../prisma/client.js";

export const createTeacherAssistant = async (data) => {
    try {
        const teacherAssistant = await db.teacherAssistants.create({
            data,
        });
        return teacherAssistant;
    } catch (error) {
        console.error("Error creating teacher assistant:", error);
        return null;
    }
};

export const getTeacherAssistantById = async (id) => {
    try {
        const teacherAssistant = await db.teacherAssistants.findUnique({
            where: { id },
        });
        return teacherAssistant;
    } catch (error) {
        console.error("Error getting teacher assistant by id:", error);
        return null;
    }
};

export const getTeacherAssistantByUsername = async (username) => {
    try {
        const teacherAssistant = await db.teacherAssistants.findUnique({
            where: { username },
        });
        return teacherAssistant;
    } catch (error) {
        console.error("Error getting teacher assistant by username:", error);
        return null;
    }
};

export const getAllTeacherAssistants = async () => {
    try {
        const teacherAssistants = await db.teacherAssistants.findMany();
        return teacherAssistants;
    } catch (error) {
        console.error("Error getting all teacher assistants:", error);
        return [];
    }
};

export const updateTeacherAssistant = async (id, data) => {
    try {
        const teacherAssistant = await db.teacherAssistants.update({
            where: { id },
            data,
        });
        return teacherAssistant;
    } catch (error) {
        console.error("Error updating teacher assistant:", error);
        return null;
    }
};

export const deleteTeacherAssistant = async (id) => {
    try {
        const teacherAssistant = await db.teacherAssistants.delete({
            where: { id },
        });
        return teacherAssistant;
    } catch (error) {
        console.error("Error deleting teacher assistant:", error);
        return null;
    }
};
