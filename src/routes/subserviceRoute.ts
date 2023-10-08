import express from "express"
import { createSubservice, getSubservice, getSubserviceById } from "../controllers/subserviceController"

const router = express.Router();

router.post("/", createSubservice)
router.get("/", getSubservice)
router.get("/:id", getSubserviceById)


export default router