import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
  },
});

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected : ", socket.id);

  const userId = socket.handshake.query.userId;
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
