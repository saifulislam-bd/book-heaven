import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
export const createUser = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // check existing username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(400).json({ message: "Username already exists!" });
    }
    // check existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ message: "email already exists!" });
    }

    // check username length
    if (username.length <= 3) {
      res
        .status(400)
        .json({ message: "Username length must be greater than 3 characters" });
    }

    // check password length
    if (password.length <= 5) {
      res.status(400).json({
        message: "password length must be greater or equal to 6 characters",
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    //check existing user
    const existingUser = await User.findOne({ username });
    if (!existingUser) res.status(404).json({ message: "Invalid credential" });

    // password matching
    await bcrypt.compare(password, existingUser.password, (err, data) => {
      if (data) {
        const authClaims = [
          { name: existingUser.username, role: existingUser.role },
        ];
        //create jwt token
        const token = jwt.sign({ authClaims }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        if (!token) {
          res
            .status(400)
            .json({ message: "Token expired, Please login again." });
        }
        res
          .status(200)
          .json({ id: existingUser._id, role: existingUser.role, token });
      } else {
        res.status(400).json({ message: "Invalid credential" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// get user info
export const getUserInfo = async (req, res) => {
  try {
    const userId = req.params.id;
    const userInfo = await User.findById(userId).select("-password");
    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//update address
export const updateUserAddress = async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;
    await User.findByIdAndUpdate(id, { address: address }, { new: true });
    return res
      .status(200)
      .json({ message: "User address updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
