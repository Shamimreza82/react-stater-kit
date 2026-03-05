import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import Home from "../Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../../components/sheard/NotFound";
import { PATHS } from "./paths";
import ProtectedRoute from "./guards/protected-route";
import DashboardLayout from "../layout/DashboardLayout";
import { dashboardRoutes } from "./routes/dashboard.routes";
import { authRoutes } from "./routes/auth.routes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      { path: PATHS.ABOUT, element: <About /> },
      { path: PATHS.CONTACT, element: <Contact /> },
      ...authRoutes,
    ],
  },
  {
    path: PATHS.DASHBOARD,
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: dashboardRoutes,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
