import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Personal Training",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete training with professional equipment",
  },
  {
    title: "Strength Training",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    alt: "Strength training area in a modern gym",
  },
  {
    title: "Group Fitness",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete working through a fitness session",
  },
  {
    title: "Cardio & Conditioning",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete focused on conditioning exercises",
  },
  {
    title: "Functional Training",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
    alt: "Functional strength workout",
  },
  {
    title: "Mobility & Recovery",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete practicing a mobility exercise",
  },
];

export default function Programs() {
  const sliderRef = useRef(null);

  const scrollPrograms = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector("[data-program-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
    const gap = 20;

    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="programs"
      className="overflow-hidden bg-[#101010] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-14">
          <h2 className="max-w-2xl whitespace-nowrap text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Select Your
            <br />
            <span className="text-[#F4511E]">Fitness Plan</span>
          </h2>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollPrograms(-1)}
              aria-label="Previous programs"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F4511E] hover:bg-[#F4511E]"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollPrograms(1)}
              aria-label="Next programs"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#F4511E] hover:bg-[#F4511E]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="programs-slider flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3"
          aria-label="Available fitness programs"
        >
          {programs.map((program) => (
            <a
              key={program.title}
              href="https://walink.me/aqte8o"
              target="_blank"
              rel="noopener noreferrer"
              data-program-card
              className="group relative block h-[390px] min-w-0 flex-[0_0_85%] snap-start overflow-hidden rounded-xl bg-[#202020] sm:h-[430px] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%]"
              aria-label={`Enquire about ${program.title}`}
            >
              <img
                src={program.image}
                alt={program.alt}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/5 transition-colors duration-300 group-hover:from-black/95" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                <h3 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                  {program.title}
                </h3>

                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F4511E] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
