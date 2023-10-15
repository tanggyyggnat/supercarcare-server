import express from "express"
import { createBookingStock, getBookingStock, getBookingStockById, deleteBookingStock } from "../controllers/bookingStockController";

const router = express.Router();

router.post("/", createBookingStock)
router.get("/", getBookingStock)
router.get("/:id", getBookingStockById)
router.delete("/:id", deleteBookingStock)

export default router