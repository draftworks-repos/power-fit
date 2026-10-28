const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern gym interior with workout equipment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    alt: "Strength training session",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete training in the gym",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    alt: "Fitness workout in progress",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
    alt: "Functional strength training",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete working on flexibility and mobility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=85",
    alt: "Training area inside a fitness center",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#101010] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Gallery heading */}
        <div className="mb-10 flex flex-col items-start gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:whitespace-nowrap lg:text-5xl xl:text-6xl">
            The Work. <span className="text-[#F4511E]">The Wins.</span>
          </h2>

          <p className="max-w-xs text-left text-sm leading-6 text-white/55 sm:text-base">
            A look at the space, the people, and the effort behind every
            milestone.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[220px] lg:grid-cols-3">
          {galleryImages.map((item, index) => {
            let layout = "h-[210px] sm:h-[260px] lg:h-auto";

            if (index === 0) {
              // Tall feature image on desktop.
              layout =
                "col-span-2 h-[300px] sm:col-span-1 sm:h-[420px] " +
                "lg:col-start-1 lg:row-start-1 lg:row-span-3 lg:h-auto";
            } else if (index === 1) {
              // Matches the first image's height on tablets.
              layout =
                "h-[210px] sm:h-[420px] " +
                "lg:col-start-2 lg:row-start-1 lg:h-auto";
            } else if (index === 2) {
              layout =
                "h-[210px] sm:h-[260px] " +
                "lg:col-start-3 lg:row-start-1 lg:h-auto";
            } else if (index === 3) {
              layout =
                "h-[210px] sm:h-[260px] " +
                "lg:col-start-2 lg:row-start-2 lg:h-auto";
            } else if (index === 4) {
              layout =
                "h-[210px] sm:h-[260px] " +
                "lg:col-start-3 lg:row-start-2 lg:h-auto";
            } else if (index === 5) {
              layout =
                "h-[210px] sm:h-[260px] " +
                "lg:col-start-2 lg:row-start-3 lg:h-auto";
            } else if (index === 6) {
              // Paired with the sixth image, instead of spanning two columns.
              layout =
                "h-[210px] sm:col-span-2 sm:h-[260px] " +
                "lg:col-start-3 lg:row-start-3 lg:h-auto";
            }

            return (
              <figure
                key={item.image}
                className={`group relative overflow-hidden rounded-xl bg-[#202020] ${layout}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/20" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
