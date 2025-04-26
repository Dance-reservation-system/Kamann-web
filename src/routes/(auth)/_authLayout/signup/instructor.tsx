import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_authLayout/signup/instructor")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>"/(auth)/_layout/signup/instructor"!</div>;
}
