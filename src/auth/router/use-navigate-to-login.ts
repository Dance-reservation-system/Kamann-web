import { useLocation, useNavigate } from "react-router";
import { RETURN_TO_PARAM } from "@/auth/router/constants.ts";

export function useNavigateToLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const path = `'/login?${RETURN_TO_PARAM}=${location.pathname}`;

  return () => navigate(path, { replace: true });
}
