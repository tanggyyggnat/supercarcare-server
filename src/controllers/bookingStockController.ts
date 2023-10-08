import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const createBookingStock = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId, stockId, quantityUsage } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!bookingId || !stockId || !quantityUsage ){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newBookingStock = await prisma.bookingStock.create({
            data: {
                bookingId: bookingId,
                stockId: stockId,
                quantityUsage: quantityUsage
            }
        })

        //หาว่าใน stock มีจำนวนเท่าไหร่
        const stock = await prisma.stock.findUnique({
            where:{
                id: stockId
            }
        });

        //update amountMoney Payment 
        let quanInStock = stock?.stockQuantity || 0;

        const updateStock = await prisma.stock.update({
            where: { id: stockId },
            data: {
                stockQuantity: quanInStock - quantityUsage
            }
        });

        res.send(newBookingStock);
    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getBookingStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookingStock = await prisma.bookingStock.findMany()
        res.send(bookingStock)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getBookingStockById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const bookingStock = await prisma.bookingStock.findUnique({
            where: {
                bookingId: Number(id),
              },
        });

        if (!bookingStock) {
            return res.status(400).json({ error: "Car ID not found." }); //ส่งไปยังหน้าบ้าน
        }

        res.send(bookingStock)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}
