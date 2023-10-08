import express from "express"
import { createAccountEmp, getEmployee, getEmployeeById } from "../controllers/employeeController"

const router = express.Router();

router.get("/", getEmployee)
router.get("/:id", getEmployeeById)
router.post("/", createAccountEmp)

export default router
