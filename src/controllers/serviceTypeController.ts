import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createServiceType = async (req: Request, res: Response, next: NextFunction) => {
    const { serviceTypeName } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!serviceTypeName ){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newServiceType = await prisma.serviceType.create({
            data: {
                serviceTypeName: serviceTypeName
            }
        })
        res.send(newServiceType);
    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getServiceType = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const serviceType = await prisma.serviceType.findMany()
        res.send(serviceType)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getServiceTypeById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const serviceType = await prisma.serviceType.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!serviceType) {
            res.status(400).json({ error: "Employee ID not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(serviceType)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}