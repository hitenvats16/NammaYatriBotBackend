import { Router } from "express";

import userRouter from "./user.js";
import { authUser } from "../middlewares/authenticateUserMiddleware.js";
import locationRouter from "./location.js";

const appRouter = Router();

//Unauthenticated Routes
appRouter.use("/user", userRouter);

// AAuthenticated Routes
appRouter.use(authUser)
appRouter.use('/coords',locationRouter)

export default appRouter;
