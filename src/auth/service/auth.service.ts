import { useMutation } from "@tanstack/react-query";
import { LoginPayload, LoginResponse } from "../api/schema/login.schema.ts";
import { AuthApi } from "../api";
import { useNavigate, useSearchParams } from "react-router";
import { RETURN_TO_PARAM } from "@/auth/router/constants.ts";
import { useAuth } from "@/auth/provider/use-auth.ts";
import { Paths } from "@/app/router/paths.ts";

export function useLogin() {
  const { setAuthToken } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onSuccess = async (response: LoginResponse) => {
    const returnTo = searchParams.get(RETURN_TO_PARAM);

    setAuthToken(response.token);

    if (returnTo) {
      await navigate(returnTo);
    } else {
      await navigate(Paths.protected.dashboard);
    }
  };

  return useMutation({
    mutationFn: (args: LoginPayload) => AuthApi.login(args),
    onSuccess,
  });
}
