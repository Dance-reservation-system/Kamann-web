import { useAuth } from "@/auth/provider/use-auth.ts";
import { NavigateToLogin } from "@/auth/router/navigate-to-login.tsx";
import { Outlet } from "react-router";
import { TokenService } from "../service";

export function AuthenticateOutlet() {
  const auth = useAuth();

  TokenService.useAuthInterceptor(auth);

  if (!auth.token) {
    return <NavigateToLogin />;
  }

  return <Outlet />;
}
