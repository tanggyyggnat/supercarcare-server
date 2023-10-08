// import { NextFunction, Request, Response } from "express"
// import { Account } from "@prisma/client";
// import { prisma } from "../connections/prisma"

// export const login = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { account_name, password, role }: { account_name: string, password: string, role: string } = req.body
  
//       if (!account_name || !password) {
//         //กรอกข้อมูลให้ครบถ้วน
//       }

//       //check role is customer or employee
//       if (role == "CUSTOMER"){
//         const customerCheck = await prisma.account.findUnique({
//             where: { account_name },
//             include: {
//               customer:true
//             }
//           })
      
//           if (!customerCheck) {
//             //อีเมลไม่ถูก
//           }
      
//           if (customerCheck.password != password) {
//             //รหัสไม่ถูก
//           }
          
//           //งงตรงนี้!!!!!
//           customerCheck.password = "------"
//           res.send(customerCheck)
//         }
//         else if (role == "EMPLOYEE"){
//             const employeeCheck = await prisma.account.findUnique({
//                 where: { account_name },
//                 include: {
//                   employee:true
//                 }
//               })
          
//               if (!employeeCheck) {
//                 //อีเมลไม่ถูก
//               }
          
//               if (employeeCheck.password != password) {
//                 //รหัสไม่ถูก
//               }
              
//               //งงตรงนี้!!!!!
//               employeeCheck.password = "------"
//               res.send(employeeCheck)
//             }
//         } catch (err) {
//           return next(new CustomError("ไม่สามารถเข้าสู่ระบบได้", 500))
//     }
      
      
// }
