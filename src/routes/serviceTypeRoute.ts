import express from "express"
import { createServiceType, getServiceType, getServiceTypeById } from "../controllers/serviceTypeController"

const router = express.Router();

router.post("/", createServiceType)
router.get("/", getServiceType)
router.get("/:id", getServiceTypeById)

export default router