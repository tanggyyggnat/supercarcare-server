import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createSubservice = async (req: Request, res: Response, next: NextFunction) => {
    const { serviceTypeId, subserviceName, price } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!serviceTypeId || !subserviceName || !price ){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newSubservice = await prisma.subservice.create({
            data: {
                serviceTypeId: serviceTypeId,
                subServiceName: subserviceName,
                price: price
            }
        })
        res.send(newSubservice);
    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}


export const getSubservice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const subService = await prisma.subservice.findMany()
        res.send(subService)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getSubserviceById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const subService = await prisma.subservice.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!subService) {
            res.status(400).json({ error: "Stock not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(subService)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}