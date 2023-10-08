// import { NextFunction, Request, Response } from "express"
// import { Account } from "@prisma/client";

// export const createAccount = async (req: Request, res: Response, next: NextFunction) => {
//     const { account_name, password, role , email } = req.body;

//     //ข้อมูลกรอกไม่ครบ
//     if (!account_name || !password){
//         //ส่งไปหาหน้าบ้านว่ากรอกข้อมูลไม่ครบ
//     }

//     //อีเมลมีผู้ใช้อยู่แล้ว
//     const existedEmail = await prisma.customer.findFirst({
//         where: {
//             cust_email: email
//         }
//     })
    
//     if (existedEmail?.email) {
//         console.log(existedEmail)
//         return //ส่งไปหน้าบ้านว่าอีเมลมีผู้ใช้แล้ว
//     }

//     //เพิ่มข้อมูลเข้า customer ด้วย มีการสร้าง account ใหม่ customer ก็จะมีใหม่
//     const transaction = await prisma.$transaction(async () => {
//         const newAccount = await prisma.account.create({
//             data: {
//                 username: account_name,
//                 password: password,
//                 ...(role && { role: role })
//             },
//             select: {
//                 account_name: true,
//                 role: true,
//             },
//         })

//         const newCustomer = await prisma.customer.create({
//             data: {
//                 account_id: newAccount.account_id,
//                 cust_name: "Test",
//                 cust_surname: "",
//                 cust_phone: "",
//                 cust_email: ""
//             }
//         })
//         return { ...newAccount, customer: newCustomer }
//     })
//     res.send(transaction)
// };

// export const getAccounts = async (req: Request, res: Response) => {
//     const accounts = await prisma.account.findMany({
//         select: {
//             account_name: true,
//             password: true,
//             role: true,
//         }
//     })

//     res.send(accounts)
// };


// // กำลังงงว่ามันจะต้องใช้ไปทำอะไร --ยังไม่ได้แก้เป็นของ supercarcare
// export const getAccountById = async (req: Request, res: Response, next: NextFunction) => {
//     const id: string | number = req.params.id;

//     if (isNaN(Number(id))) {
//         return next(new CustomError("รหัสบัญชีไม่ถูกต้อง", 400, "รหัสบัญชีไม่ถูกต้อง ต้องรับเป้นตัวเลข"))
//     }

//     const account = await prisma.account.findUnique({
//         where: {
//             id: parseInt(id)
//         },
//         select: {
//             profile: true,
//             username: true,
//             email: true,
//             id: true,
//             created_date: true,
//             updated_date: true,
//             role: true
//         }
//     })

//     if (!account) {
//         return next(new CustomError("ไม่พบบัญชี", 400, "ไม่พบบัญชีผู้ใช้งานจาก id ดังกล่าว"))
//     }

//     res.send(account);
// };




// // const express = require('express');
// // const { PrismaClient } = require('@prisma/client');

// // const app = express();
// // const prisma = new PrismaClient();

// // app.use(express.json());

// // app.post('/createUser', async (req, res) => {
// //   try {
// //     const { role } = req.body;

// //     if (role === 'admin') {
// //       // Handle logic for admin user
// //       // For example, create an admin user in the database
// //       await prisma.adminUser.create({
// //         data: {
// //           // Admin user data
// //         },
// //       });
// //     } else if (role === 'customer') {
// //       // Handle logic for customer user
// //       // For example, create a customer user in the database
// //       await prisma.customerUser.create({
// //         data: {
// //           // Customer user data
// //         },
// //       });
// //     } else {
// //       res.status(400).json({ error: 'Invalid role' });
// //       return;
// //     }

// //     res.status(201).json({ message: 'User created successfully' });
// //   } catch (error) {
// //     console.error('Error:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });

// // app.listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });
