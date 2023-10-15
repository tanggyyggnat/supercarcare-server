import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createStock = async (req: Request, res: Response, next: NextFunction) => {
    const { stockName, stockQuantity } = req.body;
    try { 
    
    //ข้อมูลกรอกไม่ครบ
        if(!stockName || !stockQuantity ){
            res.status(400).json({ error: " Please complete the information." });
        }

        const newStock = await prisma.stock.create({
            data: {
                stockName: stockName,
                stockQuantity: stockQuantity,
            }
        })
        res.send(newStock);
    } catch (err:any){
        res.status(err.status || 500).json({ message: err.message });
    }
}


export const getStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stock = await prisma.stock.findMany({
            orderBy: {
                id: 'asc'
            }
        })
        res.send(stock)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const getStockById = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    try {
        const stock = await prisma.stock.findUnique({
            where: {
                id: Number(id),
              },
        });

        if (!stock) {
            res.status(400).json({ error: "Stock not found." }); //ส่งไปยังหน้าบ้าน
            return;
        }

        res.send(stock)

    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const updateStock = async (req: Request, res: Response, next: NextFunction) => {
    const { id }  = req.params
    const { stockQuantity } = req.body

    try {
        const stock = await prisma.stock.update ({

            where: { id: Number(id) },
            data: {
                stockQuantity: stockQuantity
            }
        });
        res.send(stock)
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

export const searchStock = async (req: Request, res: Response, next: NextFunction) => {
    const { stockName } = req.body

    try {
        const stock = await prisma.stock.findMany({
            where: {
              stockName: stockName, // Replace with the name you want to search for
            },
        });
        res.send(stock)
        
    } catch (err:any) {
        res.status(err.status || 500).json({ message: err.message });
    }
}