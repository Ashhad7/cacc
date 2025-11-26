// components/ImportantLinks.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function ImportantLinks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    // Update Progress Bar
    const scrollPercent = (scrollLeft / maxScroll) * 100;
    setProgress(scrollPercent);

    // Update Fades
    setShowLeftFade(scrollLeft > 10);
    setShowRightFade(scrollLeft < maxScroll - 10);
  };

  const scrollBy = (amount: number) => {
    containerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll(); 

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="important-links" className="mx-auto mt-20 max-w-6xl rounded-2xl from-brand-green/80 to-brand-teal/80 p-10 shadow-2xl">
      <h2 className="mb-8 text-center text-3xl font-semibold text-brand-cyan">Important Links</h2>

      <div className="relative flex items-center">
        {/* Left Fade */}
        <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-20 from-brand-green/80 to-transparent transition-opacity ${showLeftFade ? 'opacity-100' : 'opacity-0'}`} />

        {/* Scroll Container */}
        <div ref={containerRef} className="links-container flex gap-4 overflow-x-auto px-2 py-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap rounded-lg border border-transparent bg-white/10 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:bg-white/20"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Fade */}
        <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-20 from-brand-green/80 to-transparent transition-opacity ${showRightFade ? 'opacity-100' : 'opacity-0'}`} />

        {/* Scroll Buttons */}
        <button
          onClick={() => scrollBy(-300)}
          className="absolute -left-5 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-brand-cyan/40 bg-brand-cyan/20 text-brand-cyan transition-all hover:scale-110 hover:bg-brand-cyan/30 md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scrollBy(300)}
          className="absolute -right-5 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-brand-cyan/40 bg-brand-cyan/20 text-brand-cyan transition-all hover:scale-110 hover:bg-brand-cyan/30 md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mx-auto mt-6 h-1.5 w-full max-w-4xl rounded-full bg-white/10">
        <div
          className="h-full rounded-full from-brand-cyan to-cyan-300 shadow-lg shadow-brand-cyan/50"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </section>
  );
}