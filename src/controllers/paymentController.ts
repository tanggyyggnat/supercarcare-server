import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const getPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payment = await prisma.payment.findMany()
        res.send(payment)

    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getPaymentById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const payment = await prisma.payment.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!payment) {
            res.status(400).json({ error: "Stock not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(payment)

    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const updatePayment = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { data } = req.body

    try {
        console.log(data)
        if (data.paymentMethod == "CASH") {
            const payment = await prisma.payment.update({
                where: { id: Number(id) },
                data: {
                    paymentMethod: data.paymentMethod,
                    paymentDate: new Date(),
                    stepStatus: "COMPLETE"
                }
            });
            res.send(payment)

        } else if (data.paymentMethod == "MOBILE_BANKING") {
            const payment = await prisma.payment.update({
                where: { id: Number(id) },
                data: {
                    paymentMethod: data.paymentMethod,
                    bankingName: data.bankingName,
                    accountNumber: data.accountNumber,
                    paymentDate: new Date(),
                    paymentSlip: data.paymentSlip,
                    stepStatus: "COMPLETE"
                }
            });
            res.send(payment)
        }

    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const updatePrice = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { amountMoney } = req.body

    try {
        const payment = await prisma.payment.update({
            where: { id: Number(id) },
            data: {
                amountMoney: amountMoney,
            }
        });
        res.send(payment)
    } catch (err: any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}
