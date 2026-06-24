// components/ImportantLinks.tsx
"use client";

import { useState } from "react";


const links = [
  { name: "NAVTTC", href: "https://share.google/DD658pvpSnXznDO5E" },
  { name: "SIBT Sydney", href: "https://sibt.nsw.edu.au/" },
  { name: "Torrens University", href: "https://www.torrens.edu.au/campuses/sydney/surry-hills-sydney" },
  { name: "CCAP (LSI)", href: "https://share.google/I6nJpjhoP3bfspWCX" },
  { name: "Sindh Board of Technical Education", href: "https://share.google/h2L8RewQFvEbz2xUJ" },
  { name: "Sir Syed University", href: "https://share.google/wwuMi3oatyfG9Pr88" },
  { name: "Tech University Philippines", href: "https://share.google/Upn2fPh1tO79qU2lX" },
  { name: "Hamdard University", href: "https://share.google/u7fRG65SbOrB8PYZb" },
  { name: "Govt College of Technology (Girls)", href: "https://share.google/mWHm3FtzXWbs5agog" },
  { name: "U.S. Department of State", href: "https://share.google/oW7R1GaZjeFXmL0d8" },
  { name: "Aligarh Institute of Technology", href: "https://share.google/sTXlJU4m9SWnLXIyE" },
  { name: "Florida State University", href: "https://share.google/H0x3KoY4RJ9qqby36" },
  { name: "Employers' Federation Pakistan", href: "https://share.google/yC4C4PwR7R24g4KVR" },
  { name: "Temasek Polytechnic", href: "https://share.google/CRFhfSP9iJiDNWk8C" },
  { name: "Florida College System", href: "https://share.google/LLDGlDrb1LRaBjgtI" },
  { name: "National Technology Council", href: "https://share.google/cqsIo0N4N0CeADXrM" },
  { name: "Santa Fe College", href: "https://share.google/P3SkCDmjCeWhjFBND" },
  { name: "NED University", href: "https://share.google/gWwjK4ZCUj5XiO1MB" },
  { name: "English Home", href: "https://share.google/lxDjkUO82ks1jfLWm" },
  { name: "National Skills University", href: "https://share.google/s9vviVZCjNbUOt0qP" },
  { name: "Mehran University", href: "https://share.google/hgLiI67XTK9iNSZ9m" },
  { name: "University of Karachi", href: "https://share.google/PtLFJeBKbP9lbfudA" },
  { name: "IBCC Sindh", href: "https://share.google/3ucTsvsAVeqBwYHn6" },
  { name: "Griffith College Dublin", href: "https://share.google/mZix1W1Mivaklzcfi" },
  { name: "BSEK (Secondary Board)", href: "https://share.google/6wsBFzRfx6FSoitQm" },
  { name: "BIEK (Intermediate Board)", href: "https://share.google/Ztw3EqV591IQdKFuk" },
  { name: "TESDA Manila", href: "https://share.google/TsePWXHvqZItuJuz0" },
  { name: "IBA Karachi", href: "https://share.google/r6tuMJLZvXlP1F8PM" },
  { name: "Technical University of Civil Engineering (Bucharest)", href:"utcb.ro/en"},
  { name: "Ion Mincu University of Architecture and Urbanism", href:"uauim.ro/en"},
  { name: "Technical University of Cluj-Napoca", href:"utcluj.ro/en"},
];

export default function ImportantLinks() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="mx-auto mt-20 max-w-6xl rounded-2xl from-brand-green/80 to-brand-teal/80 p-10 shadow-2xl overflow-hidden">
      {/* 1. CSS Animation Definition 
        We define this inline so it works immediately without editing your tailwind.config.js 
      */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>

      <h2 className="mb-8 text-center text-3xl font-semibold text-brand-cyan">
        Important Links
      </h2>

      <div 
        className="relative flex items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-brand-green/80 to-transparent" />

        {/* 2. The Moving Container 
            We map links TWICE so the animation is seamless. 
            When the first set finishes, the second set is exactly where the first started.
        */}
        <div className={`animate-scroll flex gap-4 px-2 py-3 ${isPaused ? 'paused' : ''}`}>
          {[...links, ...links].map((link, index) => (
            <a
              key={`${link.name}-${index}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap rounded-lg border border-transparent bg-white/10 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:bg-white/20"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-brand-green/80 to-transparent" />
      </div>
    </section>
  );
}