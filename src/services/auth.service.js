import { BASE_URL } from "../utils/constants.js";

export const signIn = async (username, password) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    return await res.json();
  } catch (error) {
    console.error("Error en login:", error);
  }
};

export const signUp = async (formData) => {
  const { username, email, password } = formData;

  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    return await res.json();
  } catch (error) {
    console.error("Error en login:", error);
  }
};
