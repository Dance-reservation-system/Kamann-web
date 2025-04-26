import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: () => {
    return redirect({ to: "/hello", replace: true });
  },
});

function Index() {
  return null;
}
