import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const account = await prisma.account.findMany()
        res.send(account)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getAccountById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const account = await prisma.account.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!account) {
            return res.status(400).json({ error: "Booking ID not found." }); //ส่งไปยังหน้าบ้าน
        }

        res.send(account)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}