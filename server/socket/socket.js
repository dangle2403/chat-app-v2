import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  core:{
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
  }
})

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  // socket.on() is used to listen for events from the client
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
})


export {app, io, server}