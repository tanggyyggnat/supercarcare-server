import express from "express"
import { createBookingStock, getBookingStock, getBookingStockById } from "../controllers/bookingStockController";

const router = express.Router();

router.post("/", createBookingStock)
router.get("/", getBookingStock)
router.get("/:id", getBookingStockById)

export default router