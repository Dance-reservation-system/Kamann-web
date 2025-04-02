import { useAuth } from "@/auth/provider/use-auth.ts";
import { NavigateToLogin } from "@/auth/router/navigate-to-login.tsx";
import { Outlet } from "react-router";

export function AuthenticateOutlet() {
  const auth = useAuth();

  if (!auth.token) {
    return <NavigateToLogin />;
  }

  return <Outlet />;
}
