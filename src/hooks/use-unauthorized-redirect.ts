import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_UNAUTHORIZED_EVENT } from "../services/auth-events";
import { PATHS } from "../app/router/paths";

export const useUnauthorizedRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      void navigate(PATHS.LOGIN, { replace: true });
    };

    window.addEventListener(AUTH_UNAUTHORIZED_EVENT, handler);
    return () => window.removeEventListener(AUTH_UNAUTHORIZED_EVENT, handler);
  }, [navigate]);
};
