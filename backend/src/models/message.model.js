import mongoose from "mongoose";
import { User } from "./auth.model.js";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      default: "sending",
    },
  },
  { timestamps: true },
);

export const Message = mongoose.model("Message", messageSchema);
