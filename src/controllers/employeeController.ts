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

export const createAccountEmp = async (req: Request, res: Response, next: NextFunction) => {
    const { accountName, password, jobId, empName, empSurname, empPhone, empSalary } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!accountName || !password || !jobId || !empName || !empSurname || !empPhone || !empSalary){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newAccountEmployee = await prisma.account.create({
            data: {
                accountName: accountName,
                password: password,
                role: "EMPLOYEE"
            }
        })

        const newEmployee = await prisma.employee.create ({
            data: {
                jobId: jobId,
                empName: empName,
                empSurname: empSurname,
                empPhone: empPhone,
                empSalary: empSalary,
                accountId: newAccountEmployee.id
            }
        })
        res.send(newAccountEmployee);

    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}
