import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.post("/send/:id", protectRoute, sendMessage);
messageRouter.get("/:id", protectRoute, getMessages);

export default messageRouter;
