import express from "express";
import authenticateToken from "../utils/userAuth.js";
import {
  addBook,
  deleteBook,
  updateBook,
} from "../controllers/bookController.js";
const router = express.Router();

router.post("/add-book", authenticateToken, addBook);
router.put("/update-book", authenticateToken, updateBook);
router.delete("/delete-book", authenticateToken, deleteBook);

export default router;
