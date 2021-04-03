import { Router } from "express";
import { verifyToken, roleGuard } from "@hakanhueriyet/any-util-middlewares";
import AuthController from "../controller/AuthController";

const router = Router();

router.get(
  "/currentuser",
  verifyToken,
  roleGuard("customer"),
  AuthController.getLoggedUser
);
router.post("/signin", AuthController.signIn);
router.post("/signup", AuthController.signUp);
router.get("/signout", AuthController.signOut);

export { router as oauthRouter };
