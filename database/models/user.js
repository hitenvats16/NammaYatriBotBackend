import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  phone_no: {
    type: Schema.Types.String,
  },
});

export default model("User", UserSchema);
