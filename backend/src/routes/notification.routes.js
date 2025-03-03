import express from "express";
import { getNotificationsBySenderId } from "../controllers/notification.controller.js";

const router = express.Router();
router.get("/notifications", getNotificationsBySenderId);


export default router;