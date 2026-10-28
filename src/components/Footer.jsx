const footerLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Our Staff", href: "/#staff" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-[#17191d]">
      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-12 lg:px-12">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 md:flex-row md:items-center md:justify-between">
          <a
            href="#top"
            aria-label="Power Fit home"
            className="flex w-fit items-center gap-3"
          >
            <img src="/power-fit-mark.svg" alt="" width="36" height="36" />

            <span className="text-xl font-black tracking-tight text-white">
              POWER <span className="text-[#F4511E]">FIT</span>
            </span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-white/65 transition-colors duration-200 hover:text-[#F4511E]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="#top"
          aria-label="Back to top"
          className="block overflow-hidden pt-8 sm:pt-10"
        >
          <div className="w-full whitespace-nowrap text-[clamp(2rem,15.8vw,13.1rem)] font-black leading-[0.9] tracking-[-0.065em] text-white">
            POWER <span className="text-[#F4511E]">FIT</span>
          </div>
        </a>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 mt-8 sm:mt-14 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} POWER FIT. All rights reserved.</p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {/* <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </a> */}
            {/* <a href="#top" className="transition-colors hover:text-white">
              Back to top ↑
            </a> */}
            <span>
              Design & Developed by{" "}
              <a
                href="https://www.draftworks.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f4511e" }}
              >
                draftworks.in
              </a>
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
