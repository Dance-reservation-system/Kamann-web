import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/auth/components/login-form.tsx";

export const Route = createFileRoute("/(auth)/_authLayout/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginForm isPending={false} onLogin={() => null} />;
}
