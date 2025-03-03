import express from "express";
import { transferMoney, getTransactionsBySenderId } from "../controllers/transfer.controller.js";

const router = express.Router();
router.post("/transfer", transferMoney);
router.get("/transfers", getTransactionsBySenderId);


export default router;