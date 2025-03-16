import { useAuth } from "@kamann/auth";
import { Outlet } from "react-router";
import { useLoginRedirect } from "./use-login-redirect.tsx";

export const RETURN_TO_PARAM = "return_to";

export function AuthenticatedOutlet() {
  const auth = useAuth();
  const redirectToLogin = useLoginRedirect();

  if (!auth.cookie) {
    return redirectToLogin.component;
  }

  return <Outlet />;
}
