import { Router } from "express";
import { authUser, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const authRouter = Router(); 

authRouter.post("/login", login);

authRouter.post("/signup", signup);

authRouter.post("/logout", logout);

// verify if the user is still logged in
authRouter.get("/check", protectRoute, authUser)
export default authRouter;