import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Programs", href: "/#programs" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="power-fit-navbar fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101010]/80 backdrop-blur-xl">
      <nav
        className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Power Fit home"
        >
          <img src="/power-fit-mark.svg" alt="" width="36" height="36" />
          <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
            POWER <span className="text-[#F4511E]">FIT</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 transition-colors duration-200 hover:text-[#F4511E]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://walink.me/aqte8o"
          target="_blank"
          className="hidden items-center gap-2 rounded-sm bg-[#F4511E] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#ff6938] sm:inline-flex"
        >
          Join Now
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center text-white sm:ml-4 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-b border-white/10 bg-[#101010] p-5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-sm text-white/80 transition-colors hover:text-[#F4511E]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://walink.me/aqte8o"
                target="_blank"
                onClick={closeMenu}
                className="mt-5 flex items-center justify-center gap-2 bg-[#F4511E] px-5 py-3.5 text-sm font-semibold text-white"
              >
                Join Now
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
