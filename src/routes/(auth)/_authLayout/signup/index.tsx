import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_authLayout/signup/")({
  component: RouteComponent,
  beforeLoad: () => {
    return redirect({
      to: "/hello",
      replace: true,
    });
  },
});

function RouteComponent() {
  return <Outlet />;
}
