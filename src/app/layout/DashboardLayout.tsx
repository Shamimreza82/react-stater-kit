import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../router/paths";
import { useUnauthorizedRedirect } from "../../hooks/use-unauthorized-redirect";
import Seo from "../../components/seo/Seo";
import { useAuthStore } from "@/stores/auth.store";

const DashboardLayout = () => {
  const navigate = useNavigate();
  useUnauthorizedRedirect();
  const clearToken = useAuthStore((state) => state.clearToken);

  const handleLogout = () => {
    clearToken();
    void navigate(PATHS.LOGIN);
  };

  const sidebarLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-2 text-sm transition ${
      isActive ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Seo
        title="Dashboard"
        description="Authenticated dashboard area."
        path={PATHS.DASHBOARD}
        noIndex
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[260px_1fr] sm:px-6 lg:px-8">
        <aside className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur">
          <Link to={PATHS.HOME} className="mb-6 flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-cyan-400 text-slate-950">
              N
            </span>
            Nova Panel
          </Link>
          <nav className="space-y-2">
            <NavLink end to={PATHS.DASHBOARD} className={sidebarLink}>
              Overview
            </NavLink>
            <NavLink to={PATHS.USERS} className={sidebarLink}>
              Users
            </NavLink>
            <NavLink to={PATHS.SETTINGS} className={sidebarLink}>
              Settings
            </NavLink>
          </nav>
        </aside>

        <section className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur">
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
            >
              Logout
            </button>
          </header>
          <div className="p-4 sm:p-6">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
