import { Outlet } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import { PATHS } from "../router/paths";

const AdminLayout = () => {
  return (
    <div>
      <Seo
        title="Admin"
        description="Authenticated admin area."
        path={PATHS.ADMIN}
        noIndex
      />
      <h2 className="p-4 text-xl font-semibold">Admin Layout</h2>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
