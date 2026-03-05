import { PATHS } from "../paths";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";

export const authRoutes = [
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.SIGNUP, element: <Signup /> },
];
