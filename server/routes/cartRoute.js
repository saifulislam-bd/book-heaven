import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";

router.post("/add-to-cart", authenticateToken, addToCart);

export default router;
