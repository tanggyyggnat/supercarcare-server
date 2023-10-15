import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const createBookingStock = async (req: Request, res: Response, next: NextFunction) => {
    const { bookingId, data } = req.body;
    try {
        const transaction = await prisma.$transaction(async () => {
            data.forEach(async (element: any) => {
                //ข้อมูลกรอกไม่ครบ
                if (!bookingId || !data) {
                    res.status(400).json({ error: " Please complete the information." });
                }

                const newBookingStock = await prisma.bookingStock.create({
                    data: {
                        bookingId: bookingId,
                        stockId: element.id,
                        quantityUsage: element.quantity,
                    }
                })

                //หาว่าใน stock มีจำนวนเท่าไหร่
                const stock = await prisma.stock.findUnique({
                    where: {
                        id: element.id
                    }
                });

                //update amountMoney Payment 
                let quanInStock = stock?.stockQuantity || 0;

                const updateStock = await prisma.stock.update({
                    where: { id: element.id },
                    data: {
                        stockQuantity: quanInStock - element.quantity
                    }
                });
            });
        });

        res.send(transaction);
    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getBookingStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookingStock = await prisma.bookingStock.findMany()
        res.send(bookingStock)
    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getBookingStockById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const bookingStock = await prisma.bookingStock.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!bookingStock) {
            return res.status(400).json({ error: "Car ID not found." }); //ส่งไปยังหน้าบ้าน
        }

        res.send(bookingStock)

    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const deleteBookingStock = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {

        const bookingStock = await prisma.bookingStock.findUnique({
            where: {
                id: Number(id),
            },
        });

        const deletebookingStock = await prisma.bookingStock.delete({
            where: {
                id: Number(id),
            },
        });

        const stock = await prisma.stock.findUnique({
            where: {
                id: bookingStock?.stockId
            }
        });

        //update amountMoney Payment 
        let quanInStock = stock?.stockQuantity || 0;

        const updateStock = await prisma.stock.update({
            where: { id: stock?.id },
            data: {
                stockQuantity: quanInStock + bookingStock!.quantityUsage
            }
        });

        res.send(updateStock)

    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}
