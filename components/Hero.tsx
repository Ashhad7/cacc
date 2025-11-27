// components/Hero.tsx
import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <FadeInSection
      id="home"
      className="flex min-h-screen items-center justify-center p-5 text-center"
    >
      <div className="hero-content">
        <h1 className="text-4xl font-semibold filter drop-shadow-lg md:text-5xl lg:text-6xl">
          Community Academic Counselling Consultant
        </h1>
        <p className="mx-auto my-6 max-w-3xl text-lg leading-relaxed md:text-xl">
          Empowering students and families through personalized academic
          guidance, career planning, and holistic support.
        </p>
        <Link
          href="#contact"
          className="inline-block rounded-md bg-[#00f7ff] px-8 py-3.5 font-semibold text-[#012b1d] transition-all hover:bg-white hover:text-[#0077b6]"
        >
          Book a Consultation
        </Link>
      </div>
    </FadeInSection>
  );
}