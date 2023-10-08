import express from "express"
import { getCar, getCarById } from "../controllers/carController"

const router = express.Router();

router.get("/", getCar)
router.get("/:id", getCarById)


export default router