import { LoginPayload, LoginResponse } from "@/auth/api/schema/login.schema.ts";
import { http } from "@/app/api/http.ts";
import { withData } from "@/app/api/with-data.ts";
import { AuthEndpoint } from "@/auth/api/auth.endpoint.ts";

export function login(payload: LoginPayload): Promise<LoginResponse> {
  return withData(http.post(AuthEndpoint.login, payload));
}
