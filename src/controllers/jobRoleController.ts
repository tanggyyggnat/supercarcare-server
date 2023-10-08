import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createJobRole = async (req: Request, res: Response, next: NextFunction) => {
    const { jobName } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!jobName ){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newJobRole = await prisma.jobRole.create({
            data: {
                jobName: jobName
            }
        })
        res.send(newJobRole);
    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}