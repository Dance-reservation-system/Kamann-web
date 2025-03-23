import { createBrowserRouter } from "react-router";
import App from "@/App.tsx";
import { AuthenticateOutlet } from "@/auth/router/authenticated-outlet.tsx";
import { LoginPage } from "@/pages/login.page.tsx";
import { DashboardPage } from "@/pages/dashboard.page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },

  {
    path: "/login",
    Component: LoginPage,
  },

  {
    Component: AuthenticateOutlet,
    children: [
      {
        path: "/dashboard",
        Component: DashboardPage,
      },
    ],
  },
]);
