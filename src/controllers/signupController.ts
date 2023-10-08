import { NextFunction, Request, Response } from "express";
import { PrismaClient, ROLE } from "@prisma/client"

const prisma = new PrismaClient()

export const signup = async (req: Request, res: Response, next: NextFunction) => {

    try {

    const { accountName, password, custName, custSurname, custPhone, custEmail } = req.body
    
//ข้อมูลกรอกไม่ครบ
    if (!accountName || !password || !custName || !custSurname || !custPhone || !custEmail){
        res.status(400).json({ error: " Please complete the information." }); //ส่งไปยังหน้าบ้าน
        return;
    }

//account Nameเคยใช้ไปแล้ว
    const existedAccount = await prisma.account.findFirst({
        where: {
            accountName: accountName
        }
    })
//emailเคยใช้ไปแล้ว   
    const existedEmail = await prisma.customer.findFirst({
        where: {
            custEmail: custEmail
        }
    })
    
    if (existedEmail?.custEmail) {
        console.log(existedEmail)
        res.status(400).json({ error: "Email is already in use" }); //ส่งปยังหน้าบ้าน
        return;
    }
    else if (existedAccount?.accountName) {
        console.log(existedAccount)
        res.status(400).json({ error: "Account Name is already in use" }); //ส่งปยังหน้าบ้าน
        return;
    }

//เพิ่มข้อมูลเข้าทั้ง Account, Customer
    const transaction = await prisma.$transaction (async () => {
        //สร้าง Account ใหม่
        const newAccount = await prisma.account.create({
            data: {
                accountName: accountName,
                password: password,
                role: ROLE.CUSTOMER
            }
        })

        //สร้าง Customer ใหม่
        const newCustomer = await prisma.customer.create({
            data: {
                custName: custName,
                custSurname: custSurname,
                custPhone: custPhone,
                custEmail: custEmail,
                accountId: newAccount.id
            }
        })
        
        res.send(newCustomer);
    })

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }

};

// export const getHello = (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World! V2');
// }