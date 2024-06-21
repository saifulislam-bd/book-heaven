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

//update book (admin)
export const updateBook = async (req, res) => {
  try {
    const { bookid } = req.headers;
    const updatedBook = await Book.findByIdAndUpdate(
      bookid,
      {
        url: req.body.url,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        language: req.body.language,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Book was updated successfully", updatedBook });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// delete book (admin)
export const deleteBook = async (req, res) => {
  try {
    const { bookid } = req.headers;
    const deletedBook = await Book.findByIdAndDelete(bookid);
    return res
      .status(200)
      .json({ message: "Book was deleted successfully", deletedBook });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};
