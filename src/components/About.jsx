import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Members" },
  { value: 20, suffix: "+", label: "Weekly Classes" },
  { value: 10, suffix: "+", label: "Trainers" },
];

function StatCounter({ value, suffix }) {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    let animationFrame;
    let startTime;
    const duration = 3000;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();
      const animate = (timestamp) => {
        if (startTime === undefined) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    });

    observer.observe(counter);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#17191d] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-28">
          {/* Left: About content */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[clamp(2.25rem,3.1vw,3rem)] 2xl:text-6xl">
              <span className="block whitespace-nowrap">
                Your Fitness Journey
              </span>
              <span className="block">
                Starts <span className="text-[#F4511E]">Here.</span>
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              At POWER FIT, we believe getting stronger is about more than
              lifting weights. It's about building confidence, developing
              discipline, and creating habits that stay with you beyond the gym.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/65">
              Whether you're starting fresh or pushing toward your next goal,
              we're here to help you train with purpose and progress at your own
              pace.
            </p>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4 md:gap-x-4">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-semibold tracking-tight text-[#F4511E] text-3xl">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-white/55 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="/#programs"
                className="group inline-flex items-center gap-3 bg-[#F4511E] px-6 py-4 text-sm font-semibold text-white"
              >
                Explore More
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Right: About image */}
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
              alt="Modern gym interior with strength training equipment"
              className="aspect-square w-full rounded-2xl object-cover sm:aspect-5/4 lg:aspect-4/5"
              loading="lazy"
            />

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
