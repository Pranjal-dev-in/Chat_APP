import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

import authRoutes from "./routers/auth.route.js";
import messageRoutes from "./routers/message.route.js";

const PORT = process.env.PORT;
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.set("trust proxy", 1);

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log("Listing to port : " + PORT);
  connectDB();
});
