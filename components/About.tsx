// components/About.tsx
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <FadeInSection id="about" className="mx-auto max-w-4xl px-5 py-24">
      <h2 className="mb-12 text-center text-3xl font-semibold text-brand-cyan">
        About Us
      </h2>

      {/* --- Main Content Section --- */}
      <div className="mb-16 space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          The Community Academic Counselling office has been newly established in
          Karachi, Pakistan by an Academic and Professional Technologists
          senior Community leader, <strong>Prof. Tassadduq Shahab Sherwani</strong>.
        </p>
        <p>
          Our team truly believes <strong>Action Speaks Louder than Words.</strong> Hence, we
          are committed to our principles of high integrity, dedication,
          devotion, transparency, and satisfaction of the community and students
          across borders.
        </p>
        <p>
          Prof. Tassadduq Shahab Sherwani officially visited abroad to
          participate in the following important programs:
        </p>

        {/* --- List of Programs --- */}
        <ul className="space-y-5 pt-4">
          <li className="flex items-start gap-3">
            <AcademicCapIcon className="h-8 w-8 shrink-0 text-brand-cyan" />
            <span>
              <strong>Community College Administrator Program</strong> under the
              United States Educational Foundation Pakistan (USEFP) at Florida,
              USA.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <AcademicCapIcon className="h-8 w-8 shrink-0 text-brand-cyan" />
            <span>
              <strong>Study Visit Programme</strong> on “Cost Recovery, TVET
              Policy, Planning & Co-ordination” under the Technical Education
              Project of Pakistan, funded by the Asian Development Bank and
              conducted in “Quezon City, Philippine” and by the “Temasek
              Polytechnic Singapore”.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <AcademicCapIcon className="h-8 w-8 shrink-0 text-brand-cyan" />
            <span>
              <strong>Personal Visits</strong> to Dubai, UAE, and Saudia Arabia.
            </span>
          </li>
        </ul>
      </div>

      {/* --- Founder Bio Section --- */}
      <div className="flex flex-col items-center gap-10 rounded-lg bg-gray-50 p-8 md:flex-row">
        <Image
          src="/founder.png"
          alt="Prof. Tassadduq Shahab Sherwani, Founder of CACC"
          width={250}
          height={250}
          className="h-60 w-60 shrink-0 rounded-full border-4 border-brand-cyan object-cover shadow-xl md:h-64 md:w-64"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            Meet Our Founder
          </h3>
          <blockquote className="text-lg leading-relaxed text-gray-700">
            <p>
              Proud to be a{" "}
              <strong>
                Graduate Engineering Technologist from NED University of
                Engineering & Technology Karachi
              </strong>
              . It is my privilege to welcome you as the CEO-Founder of the
              Community Academic Counselling Consultancy (CACC), newly
              established office initially in Karachi.
            </p>
          </blockquote>
        </div>
      </div>
    </FadeInSection>
  );
}