import locationModel from "../models/location.js";

export async function addCoords({ coords, user }) {
  try {
    const result = await locationModel.create({
      coords,
      user,
    });
    return result;
  } catch (e) {
    return null;
  }
}
