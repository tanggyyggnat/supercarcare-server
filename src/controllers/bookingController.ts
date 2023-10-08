import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const booking = await prisma.booking.findMany()
        res.send(booking)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getBookingById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const booking = await prisma.booking.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!booking) {
            return res.status(400).json({ error: "Booking ID not found." }); //ส่งไปยังหน้าบ้าน
        }

        res.send(booking)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { custId, serviceTypeId, appointmentDateTime, description, licensePlate, carBrand} = req.body
           
        //ข้อมูลกรอกไม่ครบ
        if (!custId || !serviceTypeId || !appointmentDateTime || !description || !licensePlate || !carBrand) {
            res.status(400).json({ error: " Please complete the information." });
            return;
        }
    
        //เช็คป้ายทะเบียนว่ามีใน Car ไหม
    const checkLicensePlate = await prisma.car.findUnique({
        where: {
            licensePlate: licensePlate,
        },
    });


    //เพิ่มข้อมูลเข้า Car, Booking, schedules, Process, Payment
    const transaction = await prisma.$transaction (async () => {

        //สร้าง Car ใหม่
        let carId: number;

        if (!checkLicensePlate){
            const newCar = await prisma.car.create({
                data: {
                    licensePlate: licensePlate,
                    custId: custId,
                    carBrand: carBrand
                }
            });
            carId = newCar.id;
        } else {
            carId = checkLicensePlate.id
        }

        //สร้าง Booking ใหม่
        const newBooking = await prisma.booking.create({
            data: {
                custId: custId,
                carId: carId,
                serviceTypeId: serviceTypeId,
                appointmentDateTime: appointmentDateTime,
                description: description
            }
        })

        //สร้าง schedules และหาว่า empId ไหนงานนน้อยสุด

        const minJobEmp = await prisma.employee.findMany({
            orderBy: {
                schedule: {
                  _count: 'asc' // รายการ schedules น้อยที่สุด
                }
            }
          });

        const newSchedule = await prisma.schedules.create ({
            data: {
                empId: Number(minJobEmp[0].id),
                bookingId: newBooking.id,
            }
        })

        //สร้าง Process
        const newProcess = await prisma.process.create ({
            data: {
                bookingId: newBooking.id,
                subServiceId: 1,
                timestamp: new Date(),
            }
        })
        
        //สร้าง Payment
        const newPayment = await prisma.payment.create ({
            data: {
                bookingId: newBooking.id,
                amountMoney: 0,
                bankingName: "",
                accountNumber: "",
                paymentDate: null,
                paymentSlip: null
            }
        })

        res.send("WOW")


    })

    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }

}