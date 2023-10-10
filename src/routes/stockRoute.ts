import express from "express"
import { createStock, getStock, getStockById, updateStock, searchStock } from "../controllers/stockController"

const router = express.Router();

router.post("/", createStock)
router.get("/", getStock)
router.get("/search", searchStock)
router.get("/:id", getStockById)
router.patch("/:id", updateStock)

export default router