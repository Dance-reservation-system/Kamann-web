import { Navigate, useLocation } from "react-router";
import { RETURN_TO_PARAM } from "@/auth/router/constants.ts";

export function NavigateToLogin() {
  const location = useLocation();

  const path = `/login?${RETURN_TO_PARAM}=${location.pathname}`;

  return <Navigate to={path} replace={true} />;
}
