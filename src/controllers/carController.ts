import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const car = await prisma.car.findMany()
        res.send(car)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getCarById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const car = await prisma.car.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!car) {
            return res.status(400).json({ error: "Car ID not found." }); //ส่งไปยังหน้าบ้าน
        }

        res.send(car)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}