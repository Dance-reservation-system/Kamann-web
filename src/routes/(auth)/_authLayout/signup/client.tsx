import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_authLayout/signup/client")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>"/(auth)/_layout/signup/client"!</div>;
}
