import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://chat-app-v2-ayqw.onrender.com/"],
    methods: ["GET", "POST"],
  },
});

// Function to get the socket ID of a user by their userId
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {}; // to keep track of userId and socketId

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") userSocketMap[userId] = socket.id;
  // send message to all connected clients when a user connects
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen for events from the client
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
