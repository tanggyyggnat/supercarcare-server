import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employee = await prisma.employee.findMany()
        res.send(employee)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!employee) {
            res.status(400).json({ error: "Employee ID not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(employee)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}