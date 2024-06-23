import express from "express";
const router = express.Router();
import authenticateToken from "../utils/userAuth.js";
import {
  addBookToFavorite,
  getFavoriteBooks,
  removeBookFromFavorite,
} from "../controllers/favoriteController.js";

router.put("/add-book-to-favorite", authenticateToken, addBookToFavorite);
router.delete(
  "/remove-book-from-favorite",
  authenticateToken,
  removeBookFromFavorite
);
router.get("/get-favorite-books", authenticateToken, getFavoriteBooks);

export default router;
