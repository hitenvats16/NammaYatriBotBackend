import { Router } from "express";
import { addCoords } from "../database/controller/location.js";
const locationRouter = Router();

locationRouter.post("/add-coords", async (req, res) => {
  const {
    user,
    body: { coords },
  } = req;
  try {
    const result = await addCoords({ coords, user });
    return res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    return res.status(400).json({
      data: null,
      error: e,
    });
  }
});

export default locationRouter;
