import { useAuth } from "../../context";
import { useMutation } from "@tanstack/react-query";
import type { LoginPayload, LoginResponse } from "../../api";
import { AuthApi } from "../../api";
import { useNavigate, useSearchParams } from "react-router";
import { AxiosResponse } from "axios";
import { AuthenticatedPaths, RETURN_TO_PARAM } from "@kamann/router";

export function useLogin() {
  const { setAuthCookie } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onSuccess = async ({ data }: AxiosResponse<LoginResponse>) => {
    const returnTo = searchParams.get(RETURN_TO_PARAM);
    setAuthCookie(data.token);

    if (returnTo) {
      await navigate(returnTo, { replace: true });
    } else {
      await navigate(AuthenticatedPaths.dashboard, { replace: true });
    }
  };

  return useMutation({
    mutationFn: (payload: LoginPayload) => AuthApi.login(payload),
    onSuccess: onSuccess,
  });
}
