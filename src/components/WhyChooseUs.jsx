import { useState } from "react";
import { ChevronDown } from "lucide-react";

const benefits = [
  {
    title: "How do our personal trainers help you progress?",
    description:
      "Our trainers help you understand proper technique, build a consistent routine, and work toward your individual fitness goals. Whether you're just starting out or looking to improve your performance, having the right guidance can make your training more effective.",
  },
  {
    title: "What makes our training equipment different?",
    description:
      "Train with equipment designed to support a variety of strength, cardio, and conditioning exercises. Our goal is to give you a comfortable training environment where you can focus on your workouts and continue challenging yourself.",
  },
  {
    title: "Can you find a program that suits your goals?",
    description:
      "Whether your focus is strength, endurance, general fitness, or personal training, you can explore different training approaches and choose one that suits your current ability, schedule, and goals.",
  },
  {
    title: "How do we maintain a comfortable training space?",
    description:
      "A welcoming training environment helps you focus on what matters. We aim to provide a clean, organized space where members can train comfortably and use the facilities with confidence.",
  },
  {
    title: "What makes our fitness community special?",
    description:
      "Fitness is easier to stick with when you feel encouraged. Train alongside people with different goals, celebrate your progress, and build habits that support a more consistent and rewarding fitness journey.",
  },
  {
    title: "Is POWER FIT suitable for beginners?",
    description:
      "Absolutely. You can start at your current fitness level and gradually build strength, confidence, and consistency. Choose a program that matches your goals, learn proper exercise techniques, and progress at a pace that works for you.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="bg-[#17191d] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <h2 className="mb-10 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:mb-14 sm:text-5xl lg:text-6xl">
          More Than a Gym.
          <br />
          <span className="text-[#F4511E]">A Better You.</span>
        </h2>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image appears first on mobile and tablet */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85"
              alt="Athlete training with battle ropes in a gym"
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105 lg:aspect-[4/5]"
            />
          </div>

          {/* FAQ column aligned to the top */}
          <div className="flex w-full flex-col gap-3">
            {benefits.map((benefit, index) => {
              const isOpen = activeIndex === index;
              const questionId = `why-choose-question-${index}`;
              const answerId = `why-choose-answer-${index}`;

              return (
                <article
                  key={benefit.title}
                  className={`rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#F4511E]/50 bg-[#202124]"
                      : "border-white/[0.08] bg-[#1c1e22] hover:border-white/20"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 rounded-xl p-5 text-left sm:p-6"
                    >
                      <span
                        className={`text-base font-semibold leading-7 transition-colors duration-200 sm:text-lg ${
                          isOpen ? "text-[#F4511E]" : "text-white"
                        }`}
                      >
                        {benefit.title}
                      </span>

                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#F4511E] text-white"
                            : "bg-white/[0.06] text-white/70"
                        }`}
                      >
                        <ChevronDown
                          size={18}
                          aria-hidden="true"
                          className={`transition-transform duration-300 ease-in-out ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    className={`faq-answer-grid ${
                      isOpen ? "faq-answer-open" : "faq-answer-closed"
                    }`}
                  >
                    <div className="faq-answer-inner min-h-0 overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-white/60 sm:px-6 sm:pb-6 sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
