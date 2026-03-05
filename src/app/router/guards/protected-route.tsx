import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PATHS } from "../paths";
import { useAuthStore } from "@/stores/auth.store";

export default function ProtectedRoute() {
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
