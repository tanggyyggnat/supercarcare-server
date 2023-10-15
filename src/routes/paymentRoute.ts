import express from "express"
import { getPayment, getPaymentById, updatePayment, updatePrice } from "../controllers/paymentController"

const router = express.Router();

router.get("/", getPayment)
router.get("/:id", getPaymentById)
router.patch("/:id", updatePayment)
router.patch("/price/:id", updatePrice)



export default router