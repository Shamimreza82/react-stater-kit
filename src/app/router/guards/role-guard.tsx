import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../paths";

type Props = { allow: string[] };

export default function RoleGuard({ allow }: Props) {
  const user: { role: string } | null = { role: "USER" };

  if (!user) return <Navigate to={PATHS.LOGIN} replace />;

  const role = user?.role; // e.g. "ADMIN" | "DOCTOR" | "STAFF"
  if (!allow.includes(role)) return <Navigate to={PATHS.DASHBOARD} replace />;

  return <Outlet />;
}
