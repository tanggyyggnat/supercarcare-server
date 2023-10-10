/*
  Warnings:

  - You are about to alter the column `paymentDate` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `paymentSlip` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `paymentDate` DATETIME(3) NULL,
    MODIFY `paymentSlip` VARCHAR(191) NULL;
