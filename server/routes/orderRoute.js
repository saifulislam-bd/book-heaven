import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import {
  getAllOrder,
  getOrderHistory,
  placeOrder,
} from "../controllers/orderController.js";

router.post("/place-order", authenticateToken, placeOrder);
router.get("/get-order-history", authenticateToken, getOrderHistory);
router.get("/get-all-order", authenticateToken, getAllOrder);
export default router;
