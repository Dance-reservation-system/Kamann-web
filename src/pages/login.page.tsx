import { LoginForm, useAuth } from "@kamann/auth";
import { useNavigate } from "react-router";
import * as React from "react";
import { AuthenticatedPaths } from "@kamann/router";

export function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();

  React.useEffect(() => {
    if (auth.cookie) {
      void navigate(AuthenticatedPaths.dashboard, { replace: true });
    }
  }, [auth.cookie, navigate]);

  return <LoginForm />;
}
