import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function LegalPageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="POWER FIT homepage"
          >
            <img src="/power-fit-mark.svg" alt="" width="36" height="36" />

            <span className="text-xl font-black tracking-tight sm:text-2xl">
              POWER <span className="text-[#F4511E]">FIT</span>
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#F4511E]"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          {title}
          <span className="text-[#F4511E]">.</span>
        </h1>

        <div className="legal-content mt-10 space-y-8 text-sm leading-7 text-white/65 sm:text-base">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-white/45 sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} POWER FIT. All rights reserved.</p>

          <Link to="/" className="transition-colors hover:text-white">
            Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}
