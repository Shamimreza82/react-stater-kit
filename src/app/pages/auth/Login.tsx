/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { authService } from "../../../services/auth.service";
import Seo from "../../../components/seo/Seo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type LoginFormValues, loginSchema } from "./auth.schemas";
import { useAuthStore } from "@/stores/auth.store";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setToken = useAuthStore((state) => state.setToken);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: LoginFormValues) => {
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const data = await authService.login(values);
      setToken(data.accessToken);
      void navigate(from || PATHS.DASHBOARD, { replace: true });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const apiMessage = typeof error.response?.data?.message === "string" ? error.response.data.message : null;
        setErrorMessage(apiMessage ?? "Login failed. Please check credentials and try again.");
      } else {
        setErrorMessage("Login failed. Please check credentials and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Login"
        description="Sign in to your Nova Starter account to access your dashboard."
        path="/login"
        noIndex
      />
      <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.2),transparent_40%)]" />
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="mt-2 text-sm text-slate-300">Welcome back to Nova.</p>

          <Form {...form}>
            <form
              className="mt-6 space-y-4"
              onSubmit={form.handleSubmit((values) => {
                void handleLogin(values);
              })}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="border-white/15 bg-slate-950 text-slate-100 placeholder:text-slate-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        className="border-white/15 bg-slate-950 text-slate-100 placeholder:text-slate-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              {errorMessage && <p className="text-sm text-red-300">{errorMessage}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              >
                {isSubmitting ? "Signing in..." : "Login"}
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-sm text-slate-300">
            Don&apos;t have an account?{" "}
            <Link to={PATHS.SIGNUP} className="text-cyan-300 hover:text-cyan-200">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Login;
