import { getAllUsers } from "../services/users.service.js";
import { setUsersDataBase } from "../store/users.store.js";

export async function GenerateDataBase() {
  const response = await getAllUsers();

  if (!response) {
    alert("Ocurrio un error cargando base de datos, visitanos mas tarde");
    return;
  }

  setUsersDataBase(response);
}
