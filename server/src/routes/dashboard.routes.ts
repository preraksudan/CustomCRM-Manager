import { Router } from "express";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = Router();

router.get("/dashboard", authenticateJWT, (req, res) => {
  // @ts-ignore
  const user = req.user;
  res.json({
    message: "Welcome to your dashboard withour routing ... 🚀",
    user: user
  });
});

export default router;
