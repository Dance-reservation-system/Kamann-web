import { useMutation } from "@tanstack/react-query";
import type { RegisterPayload } from "../../api";
import { AuthApi } from "../../api";

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
  });
}
