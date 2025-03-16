import { LoginPage } from "./login.page.tsx";
import { RouteObject } from "react-router";
import { PublicPaths } from "@kamann/router";

export const loginRoute: RouteObject = {
  path: PublicPaths.signin,
  Component: LoginPage,
};
