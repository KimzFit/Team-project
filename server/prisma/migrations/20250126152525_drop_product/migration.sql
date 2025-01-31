/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Category`;

-- DropTable
DROP TABLE `Product`;
