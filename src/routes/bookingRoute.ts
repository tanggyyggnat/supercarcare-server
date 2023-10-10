import express from "express"
import { createBooking, getBooking, getBookingById, cancelBooking, searchScheduleDateTime } from "../controllers/bookingController"

const router = express.Router();

router.post("/", createBooking)
router.get("/", getBooking)
router.get("/dateTime", searchScheduleDateTime)
router.get("/:id", getBookingById)
router.patch("/:id", cancelBooking)


export default router