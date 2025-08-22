import { Router } from "express";
import { signup , login ,refresh , logout}  from "../controllers/auth.controller";
import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma";
import { generateTokens } from "../utils/token.utils";

const router = Router();

// signup route
router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

export default router;
