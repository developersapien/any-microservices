import { Router } from "express";
import { verifyToken, roleGuard } from "@hakanhueriyet/any-util-middlewares";
import NotificationController from "../controller/NotificationController";

const router = Router();

router.get("/mail", NotificationController.sendMail);

router.get("/mail/verify");

router.get("/mail/confirmation/:token");

router.get("/otp");

export { router as notificationRouter };
