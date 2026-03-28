const KEY = "user_session";

export const saveUserSession = (user) => {
  localStorage.setItem(KEY, JSON.stringify(user));
};
