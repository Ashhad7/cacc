// components/VisionMission.tsx
import FadeInSection from "./FadeInSection";
import { Check } from "lucide-react";

export default function VisionMission() {
  const aims = [
    "Empower individuals to adopt a positive outlook and enhance their well-being.",
    "Strengthen personal confidence, self-esteem, leadership, and soft skills.",
    "Promote awareness about the evolving AI revolution.",
    "Inspire learners to pursue national and international educational scholarships.",
    "Encourage collaboration and coordination with all stakeholders.",
  ];

  return (
    <FadeInSection id="vision-mission" className="mx-auto max-w-5xl px-5 py-24">
      <h2 className="mb-10 text-center text-3xl font-semibold text-brand-cyan">Our Vision & Mission</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Vision Card */}
        <div className="min-w-80 flex-1 rounded-2xl border border-transparent bg-white/10 p-8 shadow-xl transition-all hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white/20 hover:shadow-brand-cyan/20">
          <h3 className="mb-4 text-center text-2xl font-semibold text-brand-cyan">Vision</h3>
          <p className="text-left text-lg leading-relaxed">
            To foster academic and skill development, global collaboration, and community-based career guidance,
            enabling individuals to explore, adapt, and thrive in an ever-changing world.
          </p>
        </div>

        {/* Mission Card */}
        <div className="min-w-80 flex-1 rounded-2xl border border-transparent bg-white/10 p-8 shadow-xl transition-all hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white/20 hover:shadow-brand-cyan/20">
          <h3 className="mb-4 text-center text-2xl font-semibold text-brand-cyan">Mission</h3>
          <p className="text-left text-lg leading-relaxed">
            To motivate, guide, and empower communities through caring and personalized services that integrate
            academic education with technical and vocational, market-oriented skills.
          </p>
        </div>
      </div>

      {/* Aims & Objectives */}
      <div className="mt-20">
        <h3 className="mb-8 text-center text-3xl font-semibold text-brand-cyan">Aims & Objectives</h3>
        <ul className="mx-auto max-w-4xl space-y-4">
          {aims.map((aim, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white/10 p-5"
            >
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-brand-cyan" />
              <span className="text-lg">{aim}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}