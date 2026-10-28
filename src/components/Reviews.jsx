import { Star, ArrowUpRight } from "lucide-react";

const reviews = [
  {
    name: "Gym Member",
    date: "Replace with review date",
    text: "The coaches make training feel approachable and help me stay consistent with my fitness goals.",
  },
  {
    name: "Gym Member",
    date: "Replace with review date",
    text: "A great training environment with quality equipment and a welcoming atmosphere.",
  },
  {
    name: "Gym Member",
    date: "Replace with review date",
    text: "The workouts keep me motivated, and I enjoy having a structured approach to my training.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#101010] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block sm:inline">Google</span>{" "}
            <span className="text-[#F4511E]">Reviews.</span>
          </h2>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">4.6</span>

            <div>
              <div
                className="flex gap-1 text-[#F4511E]"
                aria-label="Five stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p className="mt-1 text-xs text-white/50">
                Sample rating - replace with verified data
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className={`min-h-[250px] flex-col rounded-xl border border-white/10 bg-[#17191d] p-6 sm:p-7 ${
                index === 2 ? "hidden lg:flex" : "flex"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-bold tracking-tight text-white">
                  Google
                </span>

                <div
                  className="flex gap-1 text-[#F4511E]"
                  aria-label="Five stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="mt-7 flex-1 text-sm leading-7 text-white/70">
                “{review.text}”
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">
                  {review.name}
                </p>
                <p className="mt-1 text-xs text-white/40">{review.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-[#F4511E] bg-[#F4511E] px-6 py-4 text-sm font-semibold text-white"
          >
            View All Reviews
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
