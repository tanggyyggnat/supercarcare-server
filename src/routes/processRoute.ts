import express from "express"
import { createProcess, getProcess, getProcessById, updateProcess } from "../controllers/processController"

const router = express.Router();

router.post("/", createProcess)
router.get("/", getProcess)
router.get("/:id", getProcessById)
router.patch("/:id", updateProcess)


export default router