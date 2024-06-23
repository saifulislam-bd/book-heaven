import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import {
  addBookToFavorite,
  removeBookFromFavorite,
} from "../controllers/favoriteController.js";

router.put("/add-book-to-favorite", authenticateToken, addBookToFavorite);
router.delete(
  "/remove-book-from-favorite",
  authenticateToken,
  removeBookFromFavorite
);

export default router;
