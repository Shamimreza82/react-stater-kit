/* eslint-disable react-refresh/only-export-components */
import { PATHS } from "../paths";

const DashboardHome = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">Revenue</p>
      <p className="mt-1 text-2xl font-semibold">$28,430</p>
    </div>
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">New Users</p>
      <p className="mt-1 text-2xl font-semibold">1,274</p>
    </div>
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:col-span-2 lg:col-span-1">
      <p className="text-sm text-slate-400">Conversion</p>
      <p className="mt-1 text-2xl font-semibold">8.7%</p>
    </div>
  </div>
);

const UsersPage = () => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <h2 className="text-lg font-semibold">Users</h2>
    <p className="mt-2 text-sm text-slate-300">
      Add your user table or management tools here.
    </p>
  </div>
);

const SettingsPage = () => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <h2 className="text-lg font-semibold">Settings</h2>
    <p className="mt-2 text-sm text-slate-300">
      Add profile, preferences, and security settings here.
    </p>
  </div>
);

export const dashboardRoutes = [
  { index: true, element: <DashboardHome /> },
  { path: PATHS.USERS.replace(PATHS.DASHBOARD + "/", ""), element: <UsersPage /> },
  { path: PATHS.SETTINGS.replace(PATHS.DASHBOARD + "/", ""), element: <SettingsPage /> },
];
