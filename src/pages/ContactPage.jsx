import usePageMetadata from "../hooks/usePageMetadata";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = {
  address: "123 Fitness Avenue, Bhopal, Madhya Pradesh 462001",
  phonePrimary: "+91 89596 90529",
  phoneSecondary: "+91 89596 90529",
  email: "hello@draftworks.in",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  twitter: "https://x.com/",
};

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  contactDetails.address,
)}&output=embed`;

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#F4511E] hover:bg-[#F4511E] hover:text-white"
    >
      {children}
    </a>
  );
}

export default function ContactPage() {
  usePageMetadata({
    title: "Contact POWER FIT | Get in Touch",
    description:
      "Contact POWER FIT for gym membership, personal training, group fitness, and directions to our gym.",
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#101010] text-white">
        <section>
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-44">
            {/* Top section */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
              {/* Left: Heading and description */}
              <div>
                <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  Let's Talk<span className="text-[#F4511E]">.</span>
                </h1>

                <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
                  Ready to begin your fitness journey? Get in touch with the
                  POWER FIT team, ask us about our programs, or visit us at the
                  gym.
                </p>

                <p className="mt-5 text-lg font-semibold text-white">
                  Let's get you moving.
                </p>
              </div>

              {/* Right: Contact details, without cards */}
              <div className="grid gap-x-8 gap-y-8 border-y border-white/10 py-7 sm:grid-cols-2 sm:gap-y-9">
                {/* Location */}
                <div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="shrink-0 text-[#F4511E]" />
                    <h2 className="text-base font-semibold">Our Location</h2>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {contactDetails.address}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="shrink-0 text-[#F4511E]" />
                    <h2 className="text-base font-semibold">Call Us</h2>
                  </div>

                  <div className="mt-3 space-y-2">
                    <a
                      href={`tel:${contactDetails.phonePrimary.replace(
                        /[^+\d]/g,
                        "",
                      )}`}
                      className="block text-sm text-white/55 transition-colors hover:text-[#F4511E]"
                    >
                      {contactDetails.phonePrimary}
                    </a>

                    <a
                      href={`tel:${contactDetails.phoneSecondary.replace(
                        /[^+\d]/g,
                        "",
                      )}`}
                      className="block text-sm text-white/55 transition-colors hover:text-[#F4511E]"
                    >
                      {contactDetails.phoneSecondary}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="shrink-0 text-[#F4511E]" />
                    <h2 className="text-base font-semibold">Email Us</h2>
                  </div>

                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-3 block break-all text-sm leading-6 text-white/55 transition-colors hover:text-[#F4511E]"
                  >
                    {contactDetails.email}
                  </a>
                </div>

                {/* Social links */}
                <div>
                  <h2 className="text-base font-semibold">Follow Us</h2>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Stay connected with POWER FIT.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <SocialLink
                      href={contactDetails.instagram}
                      label="POWER FIT on Instagram"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="0.8"
                          fill="currentColor"
                        />
                      </svg>
                    </SocialLink>

                    <SocialLink
                      href={contactDetails.facebook}
                      label="POWER FIT on Facebook"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6v2H6.8v3.2h2.8V21h3.9Z" />
                      </svg>
                    </SocialLink>

                    <SocialLink
                      href={contactDetails.twitter}
                      label="POWER FIT on X"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.5L5.5 22H2.4l7.3-8.4L1.9 2h6.4l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
                      </svg>
                    </SocialLink>

                    <a
                      href={`mailto:${contactDetails.email}`}
                      aria-label="Email POWER FIT"
                      className="flex size-10 items-center justify-center border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#F4511E] hover:bg-[#F4511E] hover:text-white"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map below the complete top section */}
            <div className="mt-12 sm:mt-20">
              <div className="h-[380px] overflow-hidden rounded-xl border border-white/10 bg-[#17191d] sm:h-[480px] lg:h-[540px]">
                <iframe
                  title="POWER FIT gym location on Google Maps"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
