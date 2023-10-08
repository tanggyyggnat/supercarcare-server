import express from "express"
import { getEmployee, getEmployeeById } from "../controllers/employeeController"

const router = express.Router();

router.get("/", getEmployee)
router.get("/:id", getEmployeeById)

export default router