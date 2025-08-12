/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `TeacherAssistants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `TeacherAssistants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teacherassistants` ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TeacherAssistants_username_key` ON `TeacherAssistants`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Teachers_username_key` ON `Teachers`(`username`);
