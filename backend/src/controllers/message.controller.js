import cloudinary from "../lib/cloudinary.js";
import { getReciverSocketId, io } from "../lib/socket.js";
import { User } from "../models/auth.model.js";
import { Message } from "../models/message.model.js";

export const getUsers = async (req, res) => {
  try {
    const myId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: myId } }).select(
      "-password",
    );
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in getUsers controller : " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id } = req.params;
    const myId = req.user._id;

    const allMessages = await Message.find({
      $or: [
        { senderId: id, receiverId: myId },
        { senderId: myId, receiverId: id },
      ],
    });

    res.status(200).json(allMessages);
  } catch (error) {
    console.log("Error in getMessages controller : " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id } = req.params;
    const myId = req.user._id;

    let imageUrl = null;
    if (image) {
      const uploadRespones = await cloudinary.uploader.upload(image, {
        resource_type: "auto",
      });
      imageUrl = uploadRespones.secure_url;
    }

    const newMessage = new Message({
      senderId: myId,
      receiverId: id,
      text,
      image: imageUrl,
    });
    await newMessage.save();

    const receiverSocketId = getReciverSocketId(id);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller : " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
