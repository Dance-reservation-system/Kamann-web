import { createBrowserRouter } from "react-router";
import { AuthenticateOutlet } from "@/auth/router/authenticated-outlet.tsx";
import { Login } from "@/routes/login.tsx";
import { DashboardPage } from "@/pages/dashboard.page.tsx";
import { Paths } from "./paths";
import App from "@/App.tsx";

export const router = createBrowserRouter([
  {
    path: "*",
    Component: App,
  },

  {
    path: Paths.public.login,
    Component: Login,
  },

  {
    Component: AuthenticateOutlet,
    children: [
      {
        path: Paths.protected.dashboard,
        Component: DashboardPage,
      },
    ],
  },
]);
