const LS_KEY = "_t";

export function getToken() {
  return localStorage.getItem(LS_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(LS_KEY, token);
}

export function deleteToken() {
  localStorage.removeItem(LS_KEY);
}
