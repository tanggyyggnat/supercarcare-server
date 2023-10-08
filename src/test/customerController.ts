// import { NextFunction, Request, Response } from "express"
// import { Customer } from "@prisma/client";
// import { prisma } from "../connections/prisma"

// export const getCustomer = async (req: Request, res: Response) => {

//     const customer = await prisma.customer.findMany({
//         select: {
//             cust_name: true,
//             cust_surname: true,
//             cust_phone: true,
//             cust_email: true,
//         }
//     })

//     res.send(customer)
// };

// export const getCustomerById = async (req: Request, res: Response) => {
//     const cust_id = req.params.id;

//     const customer = await prisma.customer.findUnique({
//         where: { cust_id: cust_id }
//       })

//     res.send(customer)
// };


  