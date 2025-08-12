-- CreateTable
CREATE TABLE `Teachers` (
    `idTeacher` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fName` VARCHAR(191) NOT NULL,
    `lName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`idTeacher`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subjects` (
    `idSubject` VARCHAR(191) NOT NULL,
    `subjectName` VARCHAR(191) NOT NULL,
    `subjectCode` VARCHAR(191) NOT NULL,
    `teachBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`idSubject`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeacherAssistants` (
    `idTeacherAssistant` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fName` VARCHAR(191) NOT NULL,
    `lName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`idTeacherAssistant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubjectHasTeacherAssistants` (
    `idSubjectHasTeacherAssistant` VARCHAR(191) NOT NULL,
    `idSubject` VARCHAR(191) NOT NULL,
    `idTeacherAssistant` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`idSubjectHasTeacherAssistant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignments` (
    `idAssignment` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `maxScore` INTEGER NOT NULL,
    `subjectId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`idAssignment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AssignmentScoreboard` (
    `idAssignmentScoreboard` VARCHAR(191) NOT NULL,
    `idAssignment` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `fName` VARCHAR(191) NOT NULL,
    `lName` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,
    `note` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`idAssignmentScoreboard`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subjects` ADD CONSTRAINT `Subjects_teachBy_fkey` FOREIGN KEY (`teachBy`) REFERENCES `Teachers`(`idTeacher`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectHasTeacherAssistants` ADD CONSTRAINT `SubjectHasTeacherAssistants_idSubject_fkey` FOREIGN KEY (`idSubject`) REFERENCES `Subjects`(`idSubject`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubjectHasTeacherAssistants` ADD CONSTRAINT `SubjectHasTeacherAssistants_idTeacherAssistant_fkey` FOREIGN KEY (`idTeacherAssistant`) REFERENCES `TeacherAssistants`(`idTeacherAssistant`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assignments` ADD CONSTRAINT `Assignments_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subjects`(`idSubject`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AssignmentScoreboard` ADD CONSTRAINT `AssignmentScoreboard_idAssignment_fkey` FOREIGN KEY (`idAssignment`) REFERENCES `Assignments`(`idAssignment`) ON DELETE RESTRICT ON UPDATE CASCADE;
