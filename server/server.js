import express from "express";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
