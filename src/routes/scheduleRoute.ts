import express from "express"
import { getSchedule, getScheduleById } from "../controllers/scheduleController"

const router = express.Router();

router.get("/", getSchedule)
router.get("/:id", getScheduleById)

export default router