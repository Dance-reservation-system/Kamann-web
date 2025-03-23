import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { LoginPayload } from "@/auth/api/schema/login.schema.ts";
import { Loader2 } from "lucide-react";

interface LoginFormProps extends React.ComponentPropsWithoutRef<"div"> {
  isPending: boolean;
  onLogin: (payload: LoginPayload) => void;
}

export function LoginForm({
  isPending,
  onLogin,
  className,
  ...props
}: LoginFormProps) {
  const [email, setEmail] = React.useState("moonlit644+1@gmail.com");
  const [password, setPassword] = React.useState("1234922!!!asdAAs2");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    onLogin({ email, password });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isPending}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/*<a*/}
                  {/*  href="#"*/}
                  {/*  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"*/}
                  {/*>*/}
                  {/*  Forgot your password?*/}
                  {/*</a>*/}
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  disabled={isPending}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                onSubmit={handleSubmit}
                disabled={isPending}
              >
                {isPending && <Loader2 className="animate-spin" />}
                Login
              </Button>
              {/*<Button variant="outline" className="w-full">*/}
              {/*  Login with Google*/}
              {/*</Button>*/}
            </div>
            {/*<div className="mt-4 text-center text-sm">*/}
            {/*  Don&apos;t have an account?{" "}*/}
            {/*  <a href="#" className="underline underline-offset-4">*/}
            {/*    Sign up*/}
            {/*  </a>*/}
            {/*</div>*/}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
