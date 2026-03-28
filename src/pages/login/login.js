import { signIn } from "../../services/auth.service.js";
import { saveUserSession } from "../../store/auth.store.js";
import { GenerateDataBase } from "../../utils/generate-data-base.js";

const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  const response = await signIn(username, password);

  if (!response) {
    alert("Credenciales incorrectas");
    return;
  }

  const isAdmin = username === "admin@codigo.pe";

  const user = {
    username: username,
    token: response.token,
    role: isAdmin ? "admin" : "user",
  };

  saveUserSession(user);
  alert("Login exitoso");

  window.location.href = "../home/home.html";
});

GenerateDataBase();
