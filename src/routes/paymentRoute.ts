import express from "express"
import { getPayment, getPaymentById, updatePayment } from "../controllers/paymentController"

const router = express.Router();

router.get("/", getPayment)
router.get("/:id", getPaymentById)
router.patch("/:id", updatePayment)


export default router