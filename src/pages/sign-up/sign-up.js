import { generateId } from "../../lib/generate-id.js";
import { signUp } from "../../services/auth.service.js";
import { addNewUser } from "../../store/users.store.js";

const form = document.getElementById("signup-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    email: form.email.value,
    username: form.username.value,
    password: form.password.value,
  };

  if (formData.password.length < 6) {
    alert("La contraseña debe tener más de 6 carácteres");
    return;
  }

  const user = await signUp(formData);

  if (!user) {
    alert("No se pudo crear usuario");
    return;
  }

  const newUser = {
    id: generateId(),
    ...formData,
  };

  addNewUser(newUser);
  alert("Tu cuenta se creo con exito");

  // window.location.href("../login/login.html");
});
