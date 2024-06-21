import Book from "../models/book.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// add book (admin)
export const addBook = async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.findById(id);
    if (user.role !== "admin") {
      res
        .status(400)
        .json({ message: "You haven't access to perform this action." });
    }
    const book = new Book({
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      description: req.body.description,
      language: req.body.language,
    });
    const newBook = await book.save();
    res.status(201).json({ message: "A new book was added", newBook });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
