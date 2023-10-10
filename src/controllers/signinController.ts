import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { accountName, password } = req.body
try{
//กรอกไม่ครบ
    if (!accountName || !password){
        res.status(400).json({ error: " Please complete the information." }); //ส่งไปยังหน้าบ้าน
    }

        const signin = await prisma.account.findUnique({
            where: { accountName, password }
        })
        
        if (!signin){
            return res.status(404).json({ error: 'User not found' });
        }

        if (signin.password != password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        res.send(signin)  

} catch (err:any) {
    res.status(err.status || 500).json({ message: err.message });
} 
}