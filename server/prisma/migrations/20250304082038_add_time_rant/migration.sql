-- AlterTable
ALTER TABLE `teachers` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);
