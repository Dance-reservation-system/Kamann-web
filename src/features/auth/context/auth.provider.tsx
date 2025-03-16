import * as React from "react";
import { AuthService } from "./auth.service.ts";
import { AuthContext } from "./auth.context.ts";

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [cookie, setCookie] = React.useState(() => AuthService.getAuthCookie());

  const setAuthCookie = React.useCallback((cookie: string) => {
    const next = AuthService.setAuthCookie(cookie);
    setCookie(next);
  }, []);

  const deleteAuthCookie = React.useCallback(() => {
    AuthService.deleteAuthCookie();
    setCookie(undefined);
  }, []);

  const value = React.useMemo(
    () => ({
      cookie,
      setAuthCookie,
      deleteAuthCookie,
    }),
    [cookie, setAuthCookie, deleteAuthCookie],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}
