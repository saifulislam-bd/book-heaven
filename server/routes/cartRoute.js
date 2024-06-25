import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import {
  addToCart,
  getUserCart,
  removeFromCart,
} from "../controllers/cartController.js";

router.put("/add-to-cart", authenticateToken, addToCart);
router.put("/remove-from-cart/:bookid", authenticateToken, removeFromCart);
router.get("/get-user-cart", authenticateToken, getUserCart);

export default router;
