import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";
import { getUserForSidebar } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", protectRoute, getUserForSidebar);


export default userRouter;