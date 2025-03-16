import Cookies from "js-cookie";

export const AuthService = {
  getAuthCookie,
  setAuthCookie,
  deleteAuthCookie,
};

const COOKIE_NAME = "_sessid";

function getAuthCookie() {
  return Cookies.get(COOKIE_NAME);
}

function setAuthCookie(cookie: string) {
  return Cookies.set(COOKIE_NAME, cookie);
}

function deleteAuthCookie() {
  Cookies.remove(COOKIE_NAME);
}
