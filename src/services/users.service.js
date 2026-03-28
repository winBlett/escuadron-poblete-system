import { BASE_URL } from "../utils/constants.js";

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    return await res.json();
  } catch (error) {
    console.error("Ocurrio error trayendo usuarios", error);
  }
};
