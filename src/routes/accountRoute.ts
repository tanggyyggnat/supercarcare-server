import express from "express"
import { getAccount, getAccountById } from "../controllers/accountController"

const router = express.Router();

router.get("/", getAccount)
router.get("/:id", getAccountById)


export default router