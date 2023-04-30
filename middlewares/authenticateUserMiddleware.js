import { retrieveUserById } from "../database/controller/user.js";

export async function authUser(req, res, next) {
  const id = req.headers["whatsapp-user-id"];
  const user = await retrieveUserById(id);
  console.info(user)
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({
      message: "unauthorised",
    });
  }
}
