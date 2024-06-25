import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import { addToCart, removeFromCart } from "../controllers/cartController.js";

router.put("/add-to-cart", authenticateToken, addToCart);
router.delete("/remove-from-cart/:bookid", authenticateToken, removeFromCart);

export default router;
