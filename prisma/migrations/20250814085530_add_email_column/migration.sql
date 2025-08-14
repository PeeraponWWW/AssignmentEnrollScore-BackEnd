/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `TeacherAssistants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `TeacherAssistants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacherassistants` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teachers` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TeacherAssistants_email_key` ON `TeacherAssistants`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Teachers_email_key` ON `Teachers`(`email`);
