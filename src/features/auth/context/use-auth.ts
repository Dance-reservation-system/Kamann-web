import { AuthContext } from "./auth.context.ts";
import * as React from "react";

export function useAuth() {
  const context = React.use(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within the AuthContext");
  }

  return context;
}
