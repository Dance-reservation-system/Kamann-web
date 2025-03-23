import * as React from "react";

const defaultValue = {
  token: null,
  setAuthToken: () => undefined,
  deleteAuthToken: () => undefined,
};

export type AuthContextType =
  | {
      token: string | null;
      setAuthToken: (token: string) => void;
      deleteAuthToken: () => void;
    }
  | undefined;

export const AuthContext = React.createContext<AuthContextType>(defaultValue);
