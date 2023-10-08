import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schedule = await prisma.schedules.findMany()
        res.send(schedule)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getScheduleById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const schedule = await prisma.schedules.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!schedule) {
            res.status(400).json({ error: "Employee ID not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(schedule)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}