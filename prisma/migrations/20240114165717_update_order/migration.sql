/*
  Warnings:

  - Added the required column `count` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `payingMethod` ENUM('CARD', 'COD') NOT NULL DEFAULT 'CARD',
    ADD COLUMN `status` ENUM('PENDING', 'SHIPPED', 'DELIVERED', 'CANCELED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `count` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `street` VARCHAR(191) NULL;
