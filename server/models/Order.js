import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "Books",
    },
    status: {
      type: String,
      default: "Order placed",
      enum: ["Order placed", "Out for delivery", "Delivered", "Canceled"],
    },
  },
  { timestamps: true }
);

//Export the model
export default mongoose.model("Order", orderSchema);
