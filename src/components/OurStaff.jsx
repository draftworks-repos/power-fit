import { ArrowUpRight } from "lucide-react";

const trainers = [
  {
    name: "Alex Morgan",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Jordan Blake",
    role: "Personal Trainer",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Taylor Brooks",
    role: "Fitness Coach",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
  },
];

export default function OurStaff() {
  return (
    <section id="staff" className="bg-[#17191d] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col items-start gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet Your
            <br />
            <span className="text-[#F4511E]">Training Team.</span>
          </h2>

          <a
            href="https://walink.me/aqte8o"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#F4511E]"
          >
            Train With Us
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="group min-w-0">
              <div className="relative overflow-hidden rounded-xl bg-[#242424]">
                <img
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="flex items-center justify-between gap-3 pt-5">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {trainer.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/55">{trainer.role}</p>
                </div>

                <a
                  href="https://walink.me/aqte8o"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about training with ${trainer.name}`}
                  className="group/arrow flex size-10 shrink-0 items-center justify-center rounded-full border border-[#F4511E] text-white transition-colors duration-300 bg-[#F4511E]"
                >
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/arrow:-translate-y-0.5 group-hover/arrow:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
