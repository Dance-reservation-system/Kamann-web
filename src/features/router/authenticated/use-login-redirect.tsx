import { Navigate, useLocation, useNavigate } from "react-router";
import { PublicPaths, RETURN_TO_PARAM } from "@kamann/router";

export function useLoginRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  const path = `${PublicPaths.signin}?${RETURN_TO_PARAM}=${location.pathname}`;

  const callback = () =>
    navigate(path, {
      replace: true,
    });

  const component = <Navigate to={path} replace={true} />;

  return {
    callback,
    component,
  };
}
