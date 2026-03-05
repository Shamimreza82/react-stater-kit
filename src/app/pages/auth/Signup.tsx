import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
import { type SignupFormValues, signupSchema } from "./auth.schemas";
import { useAuthStore } from "@/stores/auth.store";

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setToken = useAuthStore((state) => state.setToken);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignup = async (values: SignupFormValues) => {
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const data = await authService.signup(values);
      setToken(data.accessToken);
      void navigate(PATHS.DASHBOARD, { replace: true });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const apiMessage = typeof error.response?.data?.message === "string" ? error.response.data.message : null;
        setErrorMessage(apiMessage ?? "Signup failed. Please try again.");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Sign Up"
        description="Create your Nova Starter account and start managing your product experience."
        path="/signup"
        noIndex
      />
      <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_40%)]" />
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur">
          <h1 className="text-3xl font-semibold">Create account</h1>
          <p className="mt-2 text-sm text-slate-300">Start using Nova today.</p>

          <Form {...form}>
            <form
              className="mt-6 space-y-4"
              onSubmit={form.handleSubmit((values) => {
                void handleSignup(values);
              })}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John Doe"
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
                        placeholder="Create password"
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
                {isSubmitting ? "Creating account..." : "Sign up"}
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-sm text-slate-300">
            Already have an account?{" "}
            <Link to={PATHS.LOGIN} className="text-cyan-300 hover:text-cyan-200">
              Login
            </Link>
          </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Signup;
