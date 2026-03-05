import Seo from "../../components/seo/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Nova Starter and how we build fast, modern interfaces that scale with your product and business goals."
        path="/about"
      />
      <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.12),transparent_35%)]" />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-200">
          About us
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          We design fast, modern interfaces that scale with your product
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          This page is now routed properly with React Router. You can add your
          company story, mission, team details, and achievements here.
        </p>
      </div>
      </section>
    </>
  );
};

export default About;
