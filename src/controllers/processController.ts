import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const createProcess = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId, subserviceId } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!bookingId || !subserviceId ){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newProcess = await prisma.process.create({
            data: {
                bookingId: bookingId,
                subServiceId: subserviceId
            }
        })

//ทุกครั้งที่เพิ่ม process จะมีการ update payment
        //หาว่าsubserviceที่เพิ่มมาราคาเท่าไหร่
        const priceSubservice = await prisma.subservice.findUnique({
            where:{
                id: subserviceId
            }
        });

        //หาว่าเงินเดิมของ booking นี้เท่าไหร่
        const priceAmountMoney = await prisma.payment.findUnique({
            where:{
                bookingId: bookingId
            }
        });

        //update amountMoney Payment 
        let priceSub = priceSubservice?.price || 0;
        let amountMoney = priceAmountMoney?.amountMoney || 0;

        const updatePayment = await prisma.payment.update({
            where: { bookingId: bookingId },
            data: {
                amountMoney: priceSub + amountMoney
            }
        });

        res.send(newProcess);
    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getProcess = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const process = await prisma.process.findMany()
        res.send(process)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getProcessById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const process = await prisma.process.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!process) {
            res.status(400).json({ error: "Employee ID not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(process)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

//update status and timeที่updateตอนนั้น
export const updateProcess = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    const { stepStatus } = req.body

    try {
        const updateProcess = await prisma.process.update ({

            where: { id: Number(id) },
            data: {
                stepStatus: stepStatus,
                timestamp: new Date()
            }
        });
        res.send(updateProcess)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}