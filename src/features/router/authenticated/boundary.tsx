import { useRouteError } from "react-router";
import { AxiosError } from "axios";
import { useAuth } from "@kamann/auth";
import { useLoginRedirect } from "./use-login-redirect.tsx";

export function AuthenticatedBoundary() {
  const error = useRouteError();
  const auth = useAuth();
  const redirectToLogin = useLoginRedirect();

  if (error instanceof AxiosError) {
    if (error.status === 401) {
      auth.deleteAuthCookie();
      return redirectToLogin.component;
    }
  }

  return (
    <div>
      <h1>Something went wrong!</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
