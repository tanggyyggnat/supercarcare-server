-- CreateTable
CREATE TABLE `Account` (
    `account_id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role_id` INTEGER NOT NULL,
    `role` ENUM('CUSTOMER', 'EMPLOYEE') NOT NULL,

    UNIQUE INDEX `Account_account_name_key`(`account_name`),
    PRIMARY KEY (`account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `emp_id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_id` INTEGER NOT NULL,
    `emp_name` VARCHAR(191) NOT NULL,
    `emp_surname` VARCHAR(191) NOT NULL,
    `emp_phone` VARCHAR(191) NOT NULL,
    `emp_salary` INTEGER NOT NULL,
    `emp_hiredate` DATETIME(3) NOT NULL,
    `account_id` INTEGER NOT NULL,

    INDEX `employee_job_role_job_id`(`job_id`),
    INDEX `employee_account_account_id`(`account_id`),
    PRIMARY KEY (`emp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobRole` (
    `job_id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`job_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `cust_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cust_name` VARCHAR(191) NOT NULL,
    `cust_surname` VARCHAR(191) NOT NULL,
    `cust_phone` VARCHAR(191) NULL,
    `cust_email` VARCHAR(191) NOT NULL,
    `account_id` INTEGER NOT NULL,

    UNIQUE INDEX `Customer_account_id_key`(`account_id`),
    INDEX `customer_user_user_id`(`account_id`),
    PRIMARY KEY (`cust_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `booking_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cust_id` INTEGER NOT NULL,
    `car_id` INTEGER NOT NULL,
    `service_type` ENUM('CAR_INSPECTION', 'CAR_REPAIR', 'CAR_WASHING') NOT NULL,
    `appointmentDate` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `schedule_id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_id` INTEGER NOT NULL,
    `booking_id` INTEGER NOT NULL,
    `scheduled_date` DATETIME(3) NOT NULL,
    `scheduled_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`schedule_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Progress` (
    `progress_id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_id` INTEGER NOT NULL,
    `step_description` VARCHAR(191) NULL,
    `step_status` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,

    INDEX `progress_booking_booking_id`(`booking_id`),
    PRIMARY KEY (`progress_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_id` INTEGER NOT NULL,
    `amount_money` INTEGER NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `banking_name` VARCHAR(191) NULL,
    `account_number` VARCHAR(191) NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_slip` LONGBLOB NULL,

    INDEX `payment_booking_booking_id`(`booking_id`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `car_id` INTEGER NOT NULL,
    `license_plate` VARCHAR(191) NOT NULL,
    `cust_id` INTEGER NOT NULL,
    `car_brand` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Car_license_plate_key`(`license_plate`),
    INDEX `car_customer_cust_id`(`cust_id`),
    PRIMARY KEY (`car_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `stock_id` INTEGER NOT NULL AUTO_INCREMENT,
    `stock_name` VARCHAR(191) NOT NULL,
    `stock_num` INTEGER NOT NULL,

    PRIMARY KEY (`stock_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarHistory` (
    `car_id` INTEGER NOT NULL,
    `stock_id` INTEGER NOT NULL,
    `usage_date` DATETIME(3) NOT NULL,
    `quantity_usage` INTEGER NOT NULL,

    PRIMARY KEY (`car_id`, `stock_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `Account`(`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `JobRole`(`job_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `Account`(`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_cust_id_fkey` FOREIGN KEY (`cust_id`) REFERENCES `Customer`(`cust_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `Car`(`car_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_emp_id_fkey` FOREIGN KEY (`emp_id`) REFERENCES `Employee`(`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_cust_id_fkey` FOREIGN KEY (`cust_id`) REFERENCES `Customer`(`cust_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarHistory` ADD CONSTRAINT `CarHistory_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `Car`(`car_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarHistory` ADD CONSTRAINT `CarHistory_stock_id_fkey` FOREIGN KEY (`stock_id`) REFERENCES `Stock`(`stock_id`) ON DELETE CASCADE ON UPDATE CASCADE;
