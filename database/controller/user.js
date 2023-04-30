import UserModel from "../models/user.js";

export async function getOrCreateUser(data) {
  const existing = await UserModel.findOne({ phone_no: data?.phone_no });
  if (existing) {
    return existing;
  }
  try {
    const user = await UserModel.create(data);
    return user;
  } catch (e) {
    return null;
  }
}

export async function retrieveUserById(id) {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (e) {
    return null;
  }
}
