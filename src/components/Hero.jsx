import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-section relative flex min-h-[100svh] items-end md:items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-32 sm:px-8 sm:pb-20 lg:px-12">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="hero-title text-[clamp(2.35rem,7.8vw,7rem)] font-black leading-[0.94] tracking-[-0.02em] sm:tracking-[-0.05em] text-white"
          >
            Push Your
            <br />
            <span className="text-[#F4511E]">Limits.</span>
            <br />
            Become
            <br className="hidden sm:block" /> Unstoppable.
          </h1>

          <p className="hero-description mt-6 max-w-lg text-base leading-7 text-white/70 sm:mt-7 sm:text-lg sm:leading-8">
            Build strength, improve endurance, and become the strongest version
            of yourself. Your next level starts here.
          </p>

          <div className="hero-actions mt-7 flex flex-nowrap items-center gap-2 sm:mt-9 sm:gap-4">
            <a
              href="https://walink.me/aqte8o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap bg-[#F4511E] px-3 py-3 text-[0.7rem] font-bold text-white transition-all duration-300 hover:bg-[#ff6938] sm:min-h-13 sm:flex-none sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
            >
              Join Now
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#programs"
              className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center whitespace-nowrap border border-white/30 px-3 py-3 text-[0.7rem] font-semibold text-white transition-colors duration-300 hover:border-[#F4511E] hover:text-[#F4511E] sm:min-h-13 sm:flex-none sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about us"
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs text-white/60 transition-colors hover:text-white sm:flex lg:right-12"
      >
        SCROLL TO EXPLORE
        <span className="flex size-9 items-center justify-center rounded-full border border-white/25">
          <ArrowDown size={15} />
        </span>
      </a>
    </section>
  );
}
