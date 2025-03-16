import { type LoginPayload, type LoginResponse } from "./schema";
import { type RegisterPayload, type RegisterResponse } from "./schema";
import { http } from "../../../app/http.ts";

export const AuthEndpoint = {
  login: "/auth/login",
  register: "/auth/register",
};

export const AuthApi = {
  login,
  register,
};

function login(payload: LoginPayload) {
  // return Promise.resolve({ data: { token: "123-dotu" } });

  console.log(payload);
  return http.post<LoginResponse>(AuthEndpoint.login, payload);
}

function register(payload: RegisterPayload) {
  return http.post<RegisterResponse>(AuthEndpoint.register, payload);
}
