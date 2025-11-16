// components/Mission.tsx
import FadeInSection from "./FadeInSection";
import { FlagIcon } from "@heroicons/react/24/solid";

export default function Mission() {
  return (
    // REMOVED: "bg-gray-50". The section is now transparent 
    // to let the body's gradient show through.
    <FadeInSection id="mission" className="py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-semibold text-brand-cyan">
          Our Mission
        </h2>

        {/* REPLACED: "bg-white shadow-lg"
          WITH: "bg-white/10 backdrop-blur-sm"
          
          This creates a "glassmorphism" effect. It's a semi-transparent
          white with a blur, which looks great over the animated gradient.
        */}
        <div className="relative mb-12 rounded-lg border-l-4 border-brand-cyan bg-white/10 p-8 backdrop-blur-sm">
          <FlagIcon className="absolute -top-5 -left-5 h-14 w-14 shrink-0 text-brand-cyan opacity-80" />
          <p className="text-xl font-medium leading-relaxed text-gray-100">
            {/* CHANGED: text-gray-800 -> text-gray-100 (for readability) */}
            To motivate, guide, and provide caring services that empower
            communities through meaningful education and market-oriented
            technical and vocational skills, contributing to Pakistan’s social
            and economic development.
          </p>
        </div>

        {/* The rest of the text acts as supporting detail or "Our Commitment". */}
        <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-gray-300">
          {/* CHANGED: text-gray-700 -> text-gray-300
            
            We use a slightly dimmer gray here (300) than the main
            mission text (100) to create a clear visual hierarchy.
          */}
          <p>
            Although it’s a difficult task to keep the stakeholders on one
            pitch, we are confident to do the needful in the larger interest of
            the community.
          </p>
          <p>
            Moreover, we are dedicated to providing opportunities and services to
            the Youth towards entrepreneurship and helping them explore and
            avail upcoming National and International academic Scholarships and
            grants.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}