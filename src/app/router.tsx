import { createBrowserRouter, RouteObject } from "react-router";
import { loginRoute } from "../pages/login.route.ts";
import App from "../App.tsx";
import {
  AuthenticatedPaths,
  AuthenticatedOutlet,
  AuthenticatedBoundary,
} from "@kamann/router";

const authenticatedRoutes: RouteObject = {
  element: <AuthenticatedOutlet />,
  errorElement: <AuthenticatedBoundary />,
  children: [
    {
      path: AuthenticatedPaths.dashboard,
      Component: App,
    },
    {
      path: "/example",
      Component: App,
    },
  ],
};

const publicRoutes: RouteObject[] = [loginRoute];

export const router = createBrowserRouter([
  ...publicRoutes,
  authenticatedRoutes,
]);
