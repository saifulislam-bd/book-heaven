import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import { addToCart } from "../controllers/cartController.js";

router.put("/add-to-cart", authenticateToken, addToCart);

export default router;
