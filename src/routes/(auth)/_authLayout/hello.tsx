import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";

export const Route = createFileRoute("/(auth)/_authLayout/hello")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      "/(auth)/_layout/hello"!
      <div className="flex gap-4 mt-4">
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/signup/client">
          <Button>Client</Button>
        </Link>

        <Link to="/signup/client">
          <Button>Instructor</Button>
        </Link>
      </div>
    </div>
  );
}
