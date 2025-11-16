// components/Services.tsx
import FadeInSection from "./FadeInSection";

// Merged and refined list of all your services
const services = [
  {
    title: "🎓 University Application Guidance",
    description:
      "We assist students in choosing the right universities and programs, helping with application strategy, essays, and interviews.",
  },
  {
    title: "📚 Academic & Career Planning",
    description:
      "Personalized educational and career guidance, including study plans and progress tracking to enhance academic performance.",
  },
  {
    title: "🧠 Career Development & Psychometrics",
    description:
      "In-depth career counselling using psychometric tests, detailed discussions, and mock interviews to align goals with potential.",
  },
  {
    title: "💰 Scholarship & Grant Assistance",
    description:
      "Supporting students to find and avail timely National and International Scholarships, grants, and academic loans.",
  },
  {
    title: "📄 CV & Personal Statement Writing",
    description:
      "Professional CV preparation and crafting compelling personal statements for university applications and other desired purposes.",
  },
  {
    title: "🚀 Skills & Time Management",
    description:
      "Sessions on effective time management, learning competencies, work-life balance, and smart utilization of technologies.",
  },
  {
    title: "🤝 Emotional Support & Mentorship",
    description:
      "Providing a supportive and confidential environment for students to discuss challenges and receive personal mentorship.",
  },
  {
    title: "💬 Parent & Student Workshops",
    description:
      "Interactive sessions for families to improve communication, motivation, and goal-setting for academic success.",
  },
  {
    title: "🔗 Referral Services",
    description:
      "Connecting students and families with our trusted network of specialized professionals and resources as needed.",
  },
];

export default function Services() {
  return (
    <FadeInSection id="services" className="mx-auto max-w-5xl px-5 py-24">
      <h2 className="mb-10 text-center text-3xl font-semibold text-brand-cyan">
        Our Services
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex transform flex-col rounded-lg bg-white/10 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/25"
          >
            <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
            <p className="flex-1 leading-relaxed text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* --- Concluding Statement --- */}
      <div className="mt-16 text-center">
        <p className="text-lg leading-relaxed text-gray-300">
          All services are based on Integrity, Cognitive, and short/long-term
          academic goals, following the{" "}
          <span className="font-semibold text-gray-100">SMART</span> principles:
        </p>
        <p className="mt-2 text-xl font-semibold text-gray-100">
          (Specific, Measurable, Achievable, Relevant, and Time-bound)
        </p>
      </div>
    </FadeInSection>
  );
}