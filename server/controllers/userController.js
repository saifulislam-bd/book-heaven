import User from "../models/user.js";

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

    // create new user
    const newUser = new User({ username, email, password, address });
    await newUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
