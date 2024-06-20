import express from "express";
import authenticateToken from "../utils/userAuth.js";
import {
  createUser,
  getUserInfo,
  loginUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/get-user-info/:id", authenticateToken, getUserInfo);

export default router;
