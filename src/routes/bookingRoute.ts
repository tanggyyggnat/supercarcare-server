import express from "express"
import { createBooking, getBooking, getBookingById } from "../controllers/bookingController"

const router = express.Router();

router.post("/", createBooking)
router.get("/", getBooking)
router.get("/:id", getBookingById)


export default router