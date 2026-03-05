import { Link } from "react-router-dom";
import { PATHS } from "../../app/router/paths";
import Seo from "../seo/Seo";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noIndex
      />
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center">
          <p className="text-sm uppercase tracking-wider text-cyan-300">404</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Page not found</h1>
          <p className="mt-3 text-sm text-slate-300">
            The page you are looking for does not exist or was moved.
          </p>
          <Link
            to={PATHS.HOME}
            className="mt-5 inline-block rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
