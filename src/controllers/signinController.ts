import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { accountName, password, role } = req.body

//กรอกไม่ครบ
    if (!accountName || !password){
        res.status(400).json({ error: " Please complete the information." }); //ส่งไปยังหน้าบ้าน
    }


//check role
    if (role == "CUSTOMER"){
        const customerCheck = await prisma.account.findUnique({
            where: { accountName, password, role },
            include: {
                customer: true
            }
        })
        
        if (!customerCheck){
            return res.status(404).json({ error: 'User not found' });
        }

        if (customerCheck.password != password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        res.send(customerCheck)
    }    

    else if (role == "EMPLOYEE"){
        const employeeCheck = await prisma.account.findUnique({
            where: { accountName, password, role },
            include: {
                employee: true
            }
        })
        
        if (!employeeCheck){
            return res.status(404).json({ error: 'User not found' });
        }

        if (employeeCheck.password != password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        res.send(employeeCheck)
    } 
}