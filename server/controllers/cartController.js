import User from "../models/User.js";

// add to cart
export const addToCart = async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookInCart = userData.cart.includes(bookid);
    if (isBookInCart) {
      return res.json({
        status: "Success",
        message: "Book is already in cart.",
      });
    }
    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    return res.json({ status: "Success", message: "Book is added to cart." });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

// remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.headers;
    const { bookid } = req.params;
    await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });
    return res.json({ status: "Success", message: "Book removed from cart." });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

// get cart of a particular user
export const getUserCart = async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("cart");
    const cart = userData.cart.reverse();
    return res.json({
      status: "Success",
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};
