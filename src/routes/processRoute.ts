import express from "express"
import { createProcess, getProcess, getProcessById, updateProcess, deleteProcess } from "../controllers/processController"

const router = express.Router();

router.post("/", createProcess)
router.get("/", getProcess)
router.get("/:id", getProcessById)
router.patch("/:id", updateProcess)
router.delete("/:id", deleteProcess)



export default router