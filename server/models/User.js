import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "username already taken"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email already taken"],
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    favorites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book",
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book",
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

//Export the model
export default mongoose.model("User", userSchema);
