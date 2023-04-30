import { connect } from "mongoose";
import { config } from "dotenv";

config();
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

connect(
  `mongodb+srv://${USER}:${PASS}@nmy.hsf3h6c.mongodb.net/?retryWrites=true&w=majority`
)
  .then(() => {
    console.info("Server connected");
  })
  .catch((e) => {
    console.error("Error occured ", e);
  });
