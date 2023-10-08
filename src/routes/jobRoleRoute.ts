import express from "express"
import { createJobRole } from "../controllers/jobRoleController"

const router = express.Router();

router.get("/", createJobRole)


export default router