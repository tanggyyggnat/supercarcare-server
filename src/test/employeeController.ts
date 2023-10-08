// import { NextFunction, Request, Response } from "express"
// import { Employee } from "@prisma/client";
// import { prisma } from "../connections/prisma"

// export const getEmployee = async (req: Request, res: Response) => {

//     const employee = await prisma.employee.findMany({
//         select: {
//             emp_name: true,
//             emp_surname: true,
//             emp_phone: true,
//         }
//     })

//     res.send(employee)
// };

// export const getEmployeeById = async (req: Request, res: Response) => {
//     const emp_id = req.params.id;

//     const employee = await prisma.employee.findUnique({
//         where: { cust_id: emp_id }
//       })

//     res.send(employee)
// };


  