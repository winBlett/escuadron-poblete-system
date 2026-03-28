const KEY = "users_database";

export const setUsersDataBase = (users) => {
  const localUsers = JSON.parse(localStorage.getItem(KEY));

  if (!localUsers) {
    localStorage.setItem(KEY, JSON.stringify(users));
    return;
  }
};

export const addNewUser = (user) => {
  const users = JSON.parse(localStorage.getItem(KEY));
  users.push(user);

  localStorage.setItem(KEY, JSON.stringify(users));
};
