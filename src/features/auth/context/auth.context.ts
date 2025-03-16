import * as React from "react";

const defaultValue = {
  cookie: undefined,
  setAuthCookie: () => undefined,
  deleteAuthCookie: () => undefined,
};

export type AuthContextType =
  | {
      cookie: string | undefined;
      setAuthCookie: (cookie: string) => void;
      deleteAuthCookie: () => void;
    }
  | undefined;

export const AuthContext = React.createContext<AuthContextType>(defaultValue);
