import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { loginSchema, type LoginFormData } from "@/lib/validation.ts";
import keycloak, { initKeycloak, login, register } from "@/lib/kaycloak.ts";
//img
import  Ilustration  from "../Assets/Ilustration.png"
// Login form data
const loginFormData = {
  title: "Witaj z powrotem!",
  subtitle: "Zaloguj się na swoje konto przez email",
  emailPlaceholder: "pietro.schirano@gmail.com",
  forgotPasswordText: "Zapomniałeś hasła? Kliknij tutaj",
  buttonText: "Zaloguj się",
  termsText:
    'Klikając „Kontynuuj", akceptujesz nasze Warunki korzystania z usługi i Politykę prywatności.',
  noAccountText: "Nie masz konta? Zarejestruj się!",
};

export const Frame = (): JSX.Element => {
  const [isKeycloakInitialized, setIsKeycloakInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    initKeycloak()
      .then((authenticated) => {
        setIsKeycloakInitialized(true);
        if (authenticated) {
          console.log("User is already authenticated");
        }
      })
      .catch((error) => {
        console.error("Keycloak initialization failed:", error);
        setIsKeycloakInitialized(true); // Still allow form to show
      });
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // If Keycloak is available, use it for authentication
      if (isKeycloakInitialized && keycloak) {
        await login();
      } else {
        // Fallback to custom authentication logic
        console.log("Login attempt:", data);
        // Add your custom login logic here
        alert("Login functionality - integrate with your backend");
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      if (isKeycloakInitialized && keycloak) {
        await register();
      } else {
        // Fallback registration logic
        alert("Registration functionality - integrate with your backend");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleForgotPassword = () => {
    if (isKeycloakInitialized && keycloak) {
      // Redirect to Keycloak forgot password page
      const forgotPasswordUrl = `${keycloak.authServerUrl}/realms/${keycloak.realm}/login-actions/reset-credentials`;
      window.open(forgotPasswordUrl, '_blank');
    } else {
      // Fallback forgot password logic
      alert("Forgot password functionality - integrate with your backend");
    }
  };

  return (
    <div className="bg-transparent flex flex-row justify-center w-full h-screen overflow-hidden">
      <div className="w-full max-w-[1440px] h-full">
        <div className="relative h-full">
          {/* Login Screen */}
          <section className="w-full h-full bg-white overflow-hidden">
            <div className="flex flex-row h-full">
              {/* Left side - Illustration */}
              <div className="w-1/2 bg-white relative">
                <h1 className="absolute w-[168px] h-8 top-[33px] left-10 font-normal text-neutral-900 text-4xl tracking-[3.60px] leading-8 [font-family:'Staatliches',Helvetica]">
                  Kaman
                </h1>
                <img
                  className="absolute w-[690px] h-px top-[87px] left-10 object-cover"
                  alt="Line"
                  src="/line-1-6.svg"
                />
                <div className="absolute w-[562px] h-[563px] top-[204px] left-[109px]">
                  {/* Illustration content */}
                  <img
                    className="absolute w-[400px] h-[390px] top-[100px] left-[130px]"
                    alt="Illustration"
                    src={Ilustration}
                  />
                </div>
              </div>

              {/* Right side - Login Form */}
              <div className="w-1/2 flex justify-center items-center">
                <img
                  className="absolute w-[690px] h-px top-[87px] left-[730px] object-cover"
                  alt="Line"
                  src="/line-1-6.svg"
                />
                <div className="w-[400px]">
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center gap-6">
                        {/* Header */}
                        <div className="flex flex-col items-center gap-1">
                          <h2 className="font-h-1 font-bold text-slate-900 text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)]">
                            {loginFormData.title}
                          </h2>
                          <p className="font-normal text-slate-900 text-base text-center leading-6">
                            {loginFormData.subtitle}
                          </p>
                        </div>

                        {/* Login Form */}
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            {/* Email Field */}
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="font-medium text-slate-900 ::before-border-red text-sm leading-5">
                                    Email
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      className="w-full bg-white border-zinc-300"
                                      placeholder={loginFormData.emailPlaceholder}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Password Field */}
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="font-medium text-slate-900 text-sm leading-5">
                                    Hasło
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      className="w-full bg-white border-zinc-300"
                                      type="password"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormField
                                    control={form.control}
                                    name="ConfirmPassword"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="font-medium text-slate-900 text-sm leading-5">
                                          Hasło
                                        </FormLabel>
                                        <FormControl>
                                          <Input
                                            className="w-full bg-white border-zinc-300"
                                            type="password"
                                            {...field}
                                          />
                                        </FormControl>
                                  <div className="flex justify-end">
                                    <button
                                      type="button"
                                      onClick={handleForgotPassword}
                                      className="text-xs text-zinc-400 hover:text-zinc-600 underline transition-colors"
                                    >
                                      {loginFormData.forgotPasswordText}
                                    </button>
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Login Button */}
                            <div className="w-full">
                              <Button
                                type="submit"
                                className="w-full h-[45px] bg-fuchsia-800 hover:bg-fuchsia-700 text-white rounded-md transition-colors"
                                disabled={isLoading}
                              >
                                {isLoading ? "Logowanie..." : loginFormData.buttonText}
                              </Button>
                            </div>
                          </form>
                        </Form>

                        {/* Terms */}
                        <p className="text-center text-base leading-6">
                          <span className="text-[#a1a1aa]">
                            Klikając „Kontynuuj", akceptujesz nasze{" "}
                          </span>
                          <span className="text-[#0f172a] hover:underline cursor-pointer">
                            Warunki korzystania z usługi
                          </span>
                          <span className="text-zinc-500"> i </span>
                          <span className="text-[#0f172a] hover:underline cursor-pointer">
                            Politykę prywatności
                          </span>
                          <span className="text-zinc-500">.</span>
                        </p>

                        {/* Separator */}
                        <Separator className="w-full bg-zinc-300" />

                        {/* Register Link */}
                        <p className="text-center text-base leading-4">
                          <span className="text-[#a1a1aa]">
                            Nie masz konta?
                          </span>
                          <button
                            type="button"
                            onClick={handleRegister}
                            className="font-medium text-[#86198f] hover:text-[#a21caf] ml-1 transition-colors"
                          >
                            Zarejestruj się!
                          </button>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};