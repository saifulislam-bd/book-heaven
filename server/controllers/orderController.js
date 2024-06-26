import User from "../models/User.js";
import Order from "../models/Order.js";

// place order
export const placeOrder = async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;
    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFromDB = await newOrder.save();

      //saving order in user model
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromDB._id },
      });

      //clearing cart
      await User.findByIdAndUpdate(id, {
        $pull: { cart: orderData._id },
      });
    }
    return res.json({
      status: "Success",
      message: "Order placed successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

// get order history of particular user
export const getOrderHistory = async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "Order",
      populate: { path: "Book" },
    });
    const ordersData = userData.orders.reverse();
    return res.json({
      status: "Success",
      data: ordersData,
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};

// get all order (admin)
export const getAllOrder = async (req, res) => {
  try {
    const userData = await Order.find()
      .populate({ path: "Book" })
      .populate({ path: "User" })
      .sort({ createdAt: -1 });
    return res.json({
      status: "Success",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};
