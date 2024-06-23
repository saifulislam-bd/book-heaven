import User from "../models/User.js";

//add book to favorite
export const addBookToFavorite = async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookFavorite = userData.favorites.includes(bookid);
    if (isBookFavorite) {
      return res
        .status(200)
        .json({ message: "Book is already in the favorite list." });
    }
    const favoriteBook = await User.findByIdAndUpdate(id, {
      $push: { favorites: bookid },
    });
    return res
      .status(200)
      .json({ message: "Book is added in the favorite list.", favoriteBook });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

//remove book from favorite
export const removeBookFromFavorite = async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookFavorite = userData.favorites.includes(bookid);

    if (isBookFavorite) {
      await User.findByIdAndUpdate(id, {
        $pull: { favorites: bookid },
      });
    }
    return res.status(200).json({
      message: "Book is removed from the favorite list.",
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

//get fav books of a particular user
export const getFavoriteBooks = async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("favorites");
    const favoriteBooks = userData.favorites;
    return res.json({
      status: "Success",
      data: favoriteBooks,
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};
