import { Router } from "express";

import { getOrCreateUser } from "../database/controller/user.js";

const userRouter = Router();

userRouter.post("/auth", async (req, res) => {
  const { name, phone_no } = req.body;
  try {
    const result = await getOrCreateUser({ name, phone_no });
    console.info(result)
    return res.json({
      user: result,
      error: null,
    });
  } catch (e) {
    return res.status(400).json({
      user: null,
      error: e,
    });
  }
});

export default userRouter;
