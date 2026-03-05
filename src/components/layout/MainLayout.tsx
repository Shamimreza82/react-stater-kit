import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PATHS } from "../../app/router/paths";
import { useUnauthorizedRedirect } from "../../hooks/use-unauthorized-redirect";

const navItems = [
  { label: "Home", to: PATHS.HOME },
  { label: "About", to: PATHS.ABOUT },
  { label: "Contact", to: PATHS.CONTACT },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`;

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useUnauthorizedRedirect();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to={PATHS.HOME} className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-cyan-400 text-slate-950">
              R
            </span>
            Reza
          </NavLink>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <NavLink
              to={PATHS.LOGIN}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              Login
            </NavLink>
            <NavLink
              to={PATHS.SIGNUP}
              className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Sign Up
            </NavLink>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-md p-2 text-slate-200 hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to={PATHS.LOGIN}
                className="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to={PATHS.SIGNUP}
                className="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
