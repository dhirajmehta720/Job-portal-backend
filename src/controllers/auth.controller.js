import asyncHandler from "express-async-handler";
import { User } from "../models/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("all fields are required");
  }

  const existedUser = await User.findOne({ email });
  
  if (existedUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { registerUser };
