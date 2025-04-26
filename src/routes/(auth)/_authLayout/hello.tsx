import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_authLayout/hello")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      "/(auth)/_layout/hello"!
      <div>
        <div>
          <Link to="/signup/client">Client</Link>
        </div>

        <Link to="/signup/client">Instructor</Link>
      </div>
    </div>
  );
}
