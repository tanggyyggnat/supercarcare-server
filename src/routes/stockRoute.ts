import express from "express"
import { createStock, getStock, getStockById, updateStock } from "../controllers/stockController"

const router = express.Router();

router.post("/", createStock)
router.get("/", getStock)
router.get("/:id", getStockById)
router.patch("/:id", updateStock)
// router.get("/", getHello)

export default router