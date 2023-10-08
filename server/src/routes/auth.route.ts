import { Router, Request, Response } from "express";
import passport from "passport";
import { handleSocialLogins } from "../controllers/auth.controller";
import "../passport/index";

const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (_: Request, res: Response) => {
    res.send("Redirecting to google....");
  }
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  handleSocialLogins
);

export default router;
