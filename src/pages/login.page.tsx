import { AuthService } from "@/auth/service";
import * as React from "react";
import { Button } from "@/components/ui/button.tsx";
import { useAuth } from "@/auth/provider/use-auth.ts";
import { Navigate } from "react-router";

export function LoginPage() {
  const auth = useAuth();

  const [email, setEmail] = React.useState("moonlit644+1@gmail.com");
  const [password, setPassword] = React.useState("1234922!!!asdAAs2");

  const loginMutation = AuthService.useLogin();

  if (auth.token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-svh">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Login
      </h1>

      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter password"
      />
      <Button
        disabled={loginMutation.isPending}
        type="submit"
        onClick={() => {
          loginMutation.mutate({ email, password });
        }}
      >
        Login
      </Button>

      {loginMutation.error && (
        <pre>{JSON.stringify(loginMutation.error, null, 2)}</pre>
      )}
    </div>
  );
}
