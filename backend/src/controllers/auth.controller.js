import { User } from "../models/auth.model.js";
import bcrypt from "bcrypt";
import { generateJWT } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Each field required to fill" });
  }
  const { email, fullName, password } = req.body;
  try {
    if (!email || !fullName || !password) {
      return res.status(400).json({ message: "Each field required to fill" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 character" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      fullName,
      password: hashedPassword,
    });

    if (newUser) {
      generateJWT(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup : " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Each field required to fill" });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Each field required to fill" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 character" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }
    const isPassCorrect = await bcrypt.compare(password, user.password);
    if (!isPassCorrect) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }
    generateJWT(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in login : " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("sid", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout : " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const profilePic = req.body;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }
    const uploadRespones = await cloudinary.uploader.upload(profilePic);
    const updateUser = await User.findByIdAndUpdate(
      req.user._id,
      { profilePic: uploadRespones.secure_url },
      { new: true },
    );

    return res.status(200).json({ updateUser });
  } catch (error) {
    console.log("Error in updateProfile : " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth : " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
