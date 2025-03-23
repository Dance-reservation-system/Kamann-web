import { AuthService } from "@/auth/service";
import { useAuth } from "@/auth/provider/use-auth.ts";
import { Navigate } from "react-router";
import { LoginForm } from "@/auth/components/login-form.tsx";
import { LoginPayload } from "@/auth/api/schema/login.schema.ts";

export function LoginPage() {
  const auth = useAuth();
  const loginMutation = AuthService.useLogin();

  const handleLogin = (payload: LoginPayload) => {
    loginMutation.mutate(payload);
  };

  if (auth.token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onLogin={handleLogin} isPending={loginMutation.isPending} />
        {loginMutation.error && (
          <pre>{JSON.stringify(loginMutation.error, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}
