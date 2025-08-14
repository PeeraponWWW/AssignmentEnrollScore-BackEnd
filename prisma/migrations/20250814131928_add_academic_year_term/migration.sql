/*
  Warnings:

  - Added the required column `academicYear` to the `Subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `term` to the `Subjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subjects` ADD COLUMN `academicYear` VARCHAR(191) NOT NULL,
    ADD COLUMN `term` VARCHAR(191) NOT NULL;
