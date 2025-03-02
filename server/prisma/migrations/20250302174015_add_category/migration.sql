/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `category` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `equipment` DROP FOREIGN KEY `equipment_categoryId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `category_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`category_id`);

-- AlterTable
ALTER TABLE `equipment` MODIFY `categoryId` VARCHAR(191) NULL,
    MODIFY `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `years` MODIFY `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AddForeignKey
ALTER TABLE `equipment` ADD CONSTRAINT `equipment_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;
