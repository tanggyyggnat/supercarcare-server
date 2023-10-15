import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customer = await prisma.customer.findMany()
        res.send(customer)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const customer = await prisma.customer.findUnique({
            where: {
                accountId: Number(id),
              },
        });

        if (!customer) {
            res.status(400).json({ error: "Customer ID not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(customer)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}