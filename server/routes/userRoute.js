import express from "express";
import { createUser } from "../controllers/userController.js";
const router = express.Router();

// register route
router.post("/register", createUser);

export default router;
