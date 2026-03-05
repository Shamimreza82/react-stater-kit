import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PATHS } from "../paths";
import { authToken } from "../../../services/auth-token";

export default function ProtectedRoute() {
  const location = useLocation();

  if (!authToken.exists()) {
    return <Navigate to={PATHS.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
