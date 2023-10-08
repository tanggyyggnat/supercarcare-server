/*
  Warnings:

  - You are about to drop the `CarHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CarHistory` DROP FOREIGN KEY `CarHistory_carId_fkey`;

-- DropForeignKey
ALTER TABLE `CarHistory` DROP FOREIGN KEY `CarHistory_stockId_fkey`;

-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `stepStatus` ENUM('WAITING', 'IN_PROCESS', 'COMPLETE') NOT NULL DEFAULT 'IN_PROCESS';

-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `stepStatus` ENUM('WAITING', 'IN_PROCESS', 'COMPLETE') NOT NULL DEFAULT 'WAITING',
    MODIFY `paymentMethod` ENUM('NONE', 'CASH', 'MOBILE_BANKING') NULL DEFAULT 'NONE';

-- DropTable
DROP TABLE `CarHistory`;

-- CreateTable
CREATE TABLE `BookingStock` (
    `bookingId` INTEGER NOT NULL,
    `stockId` INTEGER NOT NULL,
    `usageDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `quantityUsage` INTEGER NOT NULL,

    UNIQUE INDEX `BookingStock_bookingId_key`(`bookingId`),
    PRIMARY KEY (`bookingId`, `stockId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookingStock` ADD CONSTRAINT `BookingStock_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookingStock` ADD CONSTRAINT `BookingStock_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
