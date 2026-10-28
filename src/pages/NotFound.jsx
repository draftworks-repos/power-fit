import usePageMetadata from "../hooks/usePageMetadata";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  usePageMetadata({
    title: "Page Not Found | POWER FIT",
    description:
      "The requested page could not be found. Return to the POWER FIT homepage.",
    robots: "noindex, follow",
  });
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#101010] px-5 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,81,30,0.15),transparent_60%)]"
      />

      <div className="relative z-10 w-full max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-3"
          aria-label="Power Fit homepage"
        >
          <img src="/power-fit-mark.svg" alt="" width="38" height="38" />
          <span className="text-2xl font-black tracking-tight text-white">
            POWER <span className="text-[#F4511E]">FIT</span>
          </span>
        </Link>

        <p
          aria-hidden="true"
          className="mt-12 text-[clamp(7rem,25vw,13rem)] font-black leading-none tracking-[-0.09em] text-[#F4511E]"
        >
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/60">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 bg-[#F4511E] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ff6938]"
        >
          <ArrowLeft size={17} />
          Back to homepage
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
