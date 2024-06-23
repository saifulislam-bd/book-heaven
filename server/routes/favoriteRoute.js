import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import { addBookToFavorite } from "../controllers/favoriteController.js";

router.put("/add-book-to-favorite", authenticateToken, addBookToFavorite);
export default router;
