import express from "express"
import { getCustomer, getCustomerById } from "../controllers/customerController"

const router = express.Router();

router.get("/", getCustomer)
router.get("/:id", getCustomerById)

export default router