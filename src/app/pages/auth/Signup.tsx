import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { authToken } from "../../../services/auth-token";
import { authService } from "../../../services/auth.service";
import Seo from "../../../components/seo/Seo";

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const nameValue = formData.get("name");
    const emailValue = formData.get("email");
    const passwordValue = formData.get("password");
    const name = typeof nameValue === "string" ? nameValue : "";
    const email = typeof emailValue === "string" ? emailValue : "";
    const password = typeof passwordValue === "string" ? passwordValue : "";

    try {
      const data = await authService.signup({ name, email, password });
      authToken.set(data.accessToken);
      void navigate(PATHS.DASHBOARD, { replace: true });
    } catch {
      setErrorMessage("Signup failed. Please try again.");
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

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              void handleSignup(e);
            }}
          >
            <div>
              <label className="mb-1 block text-sm text-slate-200">Full Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-300/40 focus:ring"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-200">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-300/40 focus:ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-200">Password</label>
              <input
                name="password"
                type="password"
                required
                className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-300/40 focus:ring"
                placeholder="Create password"
              />
            </div>

            {errorMessage && <p className="text-sm text-red-300">{errorMessage}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-cyan-400 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating account..." : "Sign up"}
            </button>
          </form>

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
