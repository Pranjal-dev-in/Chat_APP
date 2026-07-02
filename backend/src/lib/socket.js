import { Server } from "socket.io";
import express from "express";
import http from "http";
import jwt from "jsonwebtoken";
import { User } from "../models/auth.model.js";

const app = express();
const server = http.createServer(app);

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
  },
});

const userSocketMap = {};

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error("Unauthorized: no token"));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return next(new Error("Unauthorized: user not found"));

    socket.userId = user._id.toString();
    next();
  } catch (error) {
    next(new Error("Unauthorized: invalid token"));
  }
});

io.on("connection", (socket) => {
  console.log("A user connected : ", socket.id);

  const userId = socket.userId;
  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected : ", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

function getReciverSocketId(userId) {
  return userSocketMap[userId];
}

export { io, app, server, getReciverSocketId };
