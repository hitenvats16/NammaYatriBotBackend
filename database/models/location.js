import { Schema, model } from "mongoose";

const LocationSchema = new Schema({
  coords: {
    type: Schema.Types.Array,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Coordinates", LocationSchema);
