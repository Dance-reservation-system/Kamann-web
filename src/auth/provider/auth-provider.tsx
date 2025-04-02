import * as React from "react";
import { AuthContext } from "./auth-context.ts";
import { TokenService } from "../service";

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [token, setToken] = React.useState(() => TokenService.getToken());

  const setAuthToken = React.useCallback((next: string) => {
    TokenService.setToken(next);
    setToken(next);
  }, []);

  const deleteAuthToken = React.useCallback(() => {
    TokenService.deleteToken();
    setToken(null);
  }, []);

  const value = React.useMemo(
    () => ({
      token,
      setAuthToken,
      deleteAuthToken,
    }),
    [token, setAuthToken, deleteAuthToken],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}
