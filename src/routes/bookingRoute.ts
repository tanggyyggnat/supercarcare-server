import express from "express"
import { createBooking, getBooking, getBookingById, cancelBooking } from "../controllers/bookingController"

const router = express.Router();

router.post("/", createBooking)
router.get("/", getBooking)
router.get("/:id", getBookingById)
router.patch("/:id", cancelBooking)


export default router