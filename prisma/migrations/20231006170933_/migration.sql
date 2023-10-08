/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_id` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `account_name` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `role_id` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Booking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `appointmentDate` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `booking_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `car_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `cust_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `service_type` on the `Booking` table. All the data in the column will be lost.
  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `car_brand` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `car_id` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `cust_id` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `license_plate` on the `Car` table. All the data in the column will be lost.
  - The primary key for the `CarHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `car_id` on the `CarHistory` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_usage` on the `CarHistory` table. All the data in the column will be lost.
  - You are about to drop the column `stock_id` on the `CarHistory` table. All the data in the column will be lost.
  - You are about to drop the column `usage_date` on the `CarHistory` table. All the data in the column will be lost.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_id` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `cust_email` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `cust_id` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `cust_name` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `cust_phone` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `cust_surname` on the `Customer` table. All the data in the column will be lost.
  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_hiredate` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_name` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_phone` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_salary` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `emp_surname` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `job_id` on the `Employee` table. All the data in the column will be lost.
  - The primary key for the `JobRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `job_id` on the `JobRole` table. All the data in the column will be lost.
  - You are about to drop the column `job_name` on the `JobRole` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_number` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `amount_money` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `banking_name` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `booking_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_method` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_slip` on the `Payment` table. All the data in the column will be lost.
  - The primary key for the `Stock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stock_id` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `stock_name` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `stock_num` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the `Progress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[accountName]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[licensePlate]` on the table `Car` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[carId]` on the table `CarHistory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookingId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountName` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appointmentDateTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceTypeId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carBrand` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licensePlate` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carId` to the `CarHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantityUsage` to the `CarHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockId` to the `CarHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custEmail` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custName` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custPhone` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custSurname` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empPhone` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empSalary` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empSurname` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `JobRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobName` to the `JobRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountMoney` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockName` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockQuantity` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_car_id_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_cust_id_fkey`;

-- DropForeignKey
ALTER TABLE `Car` DROP FOREIGN KEY `Car_cust_id_fkey`;

-- DropForeignKey
ALTER TABLE `CarHistory` DROP FOREIGN KEY `CarHistory_car_id_fkey`;

-- DropForeignKey
ALTER TABLE `CarHistory` DROP FOREIGN KEY `CarHistory_stock_id_fkey`;

-- DropForeignKey
ALTER TABLE `Customer` DROP FOREIGN KEY `Customer_account_id_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_account_id_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_job_id_fkey`;

-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_booking_id_fkey`;

-- DropForeignKey
ALTER TABLE `Progress` DROP FOREIGN KEY `Progress_booking_id_fkey`;

-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_booking_id_fkey`;

-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_emp_id_fkey`;

-- DropIndex
DROP INDEX `Account_account_name_key` ON `Account`;

-- DropIndex
DROP INDEX `Car_license_plate_key` ON `Car`;

-- AlterTable
ALTER TABLE `Account` DROP PRIMARY KEY,
    DROP COLUMN `account_id`,
    DROP COLUMN `account_name`,
    DROP COLUMN `role_id`,
    ADD COLUMN `accountName` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Booking` DROP PRIMARY KEY,
    DROP COLUMN `appointmentDate`,
    DROP COLUMN `booking_id`,
    DROP COLUMN `car_id`,
    DROP COLUMN `cust_id`,
    DROP COLUMN `service_type`,
    ADD COLUMN `appointmentDateTime` DATETIME(3) NOT NULL,
    ADD COLUMN `carId` INTEGER NOT NULL,
    ADD COLUMN `custId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `serviceTypeId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Car` DROP PRIMARY KEY,
    DROP COLUMN `car_brand`,
    DROP COLUMN `car_id`,
    DROP COLUMN `cust_id`,
    DROP COLUMN `license_plate`,
    ADD COLUMN `carBrand` VARCHAR(191) NOT NULL,
    ADD COLUMN `custId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `licensePlate` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `CarHistory` DROP PRIMARY KEY,
    DROP COLUMN `car_id`,
    DROP COLUMN `quantity_usage`,
    DROP COLUMN `stock_id`,
    DROP COLUMN `usage_date`,
    ADD COLUMN `carId` INTEGER NOT NULL,
    ADD COLUMN `quantityUsage` INTEGER NOT NULL,
    ADD COLUMN `stockId` INTEGER NOT NULL,
    ADD COLUMN `usageDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD PRIMARY KEY (`carId`, `stockId`);

-- AlterTable
ALTER TABLE `Customer` DROP PRIMARY KEY,
    DROP COLUMN `account_id`,
    DROP COLUMN `cust_email`,
    DROP COLUMN `cust_id`,
    DROP COLUMN `cust_name`,
    DROP COLUMN `cust_phone`,
    DROP COLUMN `cust_surname`,
    ADD COLUMN `accountId` INTEGER NOT NULL,
    ADD COLUMN `custEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `custName` VARCHAR(191) NOT NULL,
    ADD COLUMN `custPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `custSurname` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Employee` DROP PRIMARY KEY,
    DROP COLUMN `account_id`,
    DROP COLUMN `emp_hiredate`,
    DROP COLUMN `emp_id`,
    DROP COLUMN `emp_name`,
    DROP COLUMN `emp_phone`,
    DROP COLUMN `emp_salary`,
    DROP COLUMN `emp_surname`,
    DROP COLUMN `job_id`,
    ADD COLUMN `accountId` INTEGER NOT NULL,
    ADD COLUMN `empHireDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `empName` VARCHAR(191) NOT NULL,
    ADD COLUMN `empPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `empSalary` INTEGER NOT NULL,
    ADD COLUMN `empSurname` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `jobId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `JobRole` DROP PRIMARY KEY,
    DROP COLUMN `job_id`,
    DROP COLUMN `job_name`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `jobName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Payment` DROP PRIMARY KEY,
    DROP COLUMN `account_number`,
    DROP COLUMN `amount_money`,
    DROP COLUMN `banking_name`,
    DROP COLUMN `booking_id`,
    DROP COLUMN `payment_date`,
    DROP COLUMN `payment_id`,
    DROP COLUMN `payment_method`,
    DROP COLUMN `payment_slip`,
    ADD COLUMN `accountNumber` VARCHAR(191) NULL,
    ADD COLUMN `amountMoney` INTEGER NOT NULL,
    ADD COLUMN `bankingName` VARCHAR(191) NULL,
    ADD COLUMN `bookingId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `paymentDate` DATETIME(3) NULL,
    ADD COLUMN `paymentMethod` ENUM('CASH', 'MOBILE_BANKING') NULL,
    ADD COLUMN `paymentSlip` LONGBLOB NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Stock` DROP PRIMARY KEY,
    DROP COLUMN `stock_id`,
    DROP COLUMN `stock_name`,
    DROP COLUMN `stock_num`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `stockName` VARCHAR(191) NOT NULL,
    ADD COLUMN `stockQuantity` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Progress`;

-- DropTable
DROP TABLE `Schedule`;

-- CreateTable
CREATE TABLE `ServiceType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceTypeName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subservice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceTypeId` INTEGER NOT NULL,
    `subServiceName` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Process` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingId` INTEGER NOT NULL,
    `subServiceId` INTEGER NOT NULL,
    `stepStatus` ENUM('WAITING', 'IN_PROCESS', 'COMPLETE') NOT NULL DEFAULT 'WAITING',
    `timestamp` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedules` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empId` INTEGER NOT NULL,
    `bookingId` INTEGER NOT NULL,
    `scheduledDateTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Schedules_bookingId_key`(`bookingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Account_accountName_key` ON `Account`(`accountName`);

-- CreateIndex
CREATE UNIQUE INDEX `Car_licensePlate_key` ON `Car`(`licensePlate`);

-- CreateIndex
CREATE UNIQUE INDEX `CarHistory_carId_key` ON `CarHistory`(`carId`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_accountId_key` ON `Customer`(`accountId`);

-- CreateIndex
CREATE UNIQUE INDEX `Employee_accountId_key` ON `Employee`(`accountId`);

-- CreateIndex
CREATE UNIQUE INDEX `Payment_bookingId_key` ON `Payment`(`bookingId`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `JobRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `Account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarHistory` ADD CONSTRAINT `CarHistory_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarHistory` ADD CONSTRAINT `CarHistory_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_custId_fkey` FOREIGN KEY (`custId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_serviceTypeId_fkey` FOREIGN KEY (`serviceTypeId`) REFERENCES `ServiceType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subservice` ADD CONSTRAINT `Subservice_serviceTypeId_fkey` FOREIGN KEY (`serviceTypeId`) REFERENCES `ServiceType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Process` ADD CONSTRAINT `Process_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Process` ADD CONSTRAINT `Process_subServiceId_fkey` FOREIGN KEY (`subServiceId`) REFERENCES `Subservice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedules` ADD CONSTRAINT `Schedules_empId_fkey` FOREIGN KEY (`empId`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedules` ADD CONSTRAINT `Schedules_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
