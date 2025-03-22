import { useMutation } from "@tanstack/react-query";
import { LoginPayload } from "../api/schema/login.schema.ts";
import { AuthApi } from "../api";

export function useLogin() {
  const onSuccess = () => {
    // TODO: navigate('/dashboard')
  };

  return useMutation({
    mutationFn: (args: LoginPayload) => AuthApi.login(args),
    onSuccess,
  });
}
