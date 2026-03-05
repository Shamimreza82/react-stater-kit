import Seo from "../../components/seo/Seo";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact the Nova Starter team to discuss your next project, product launch, or growth-focused web experience."
        path="/contact"
      />
      <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_35%)]" />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200">
          Contact
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Let&apos;s talk about your next project
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          Add your email, phone number, office address, or contact form on this
          routed page. The navbar now navigates here on both desktop and mobile.
        </p>
      </div>
      </section>
    </>
  );
};

export default Contact;
