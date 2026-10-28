import usePageMetadata from "../hooks/usePageMetadata";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import OurStaff from "../components/OurStaff";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function HomePage() {
  usePageMetadata({
    title: "POWER FIT | Gym & Fitness Training",
    description:
      "Discover POWER FIT fitness programs, strength training, personal coaching, and a supportive training environment.",
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Gallery />
        <OurStaff />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
