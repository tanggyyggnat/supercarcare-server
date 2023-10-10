import express from "express"
import { createBooking, getBooking, getBookingById, deleteBooking } from "../controllers/bookingController"

const router = express.Router();

router.post("/", createBooking)
router.get("/", getBooking)
router.get("/:id", getBookingById)
router.delete("/:id", deleteBooking)


export default router