import express from "express";
import authenticateToken from "../utils/userAuth.js";
import { addBook } from "../controllers/bookController.js";
const router = express.Router();

router.post("/add-book", authenticateToken, addBook);

export default router;
