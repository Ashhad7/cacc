// components/ImportantLinks.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const links = [
  { name: "NAVTTC", href: "https://share.google/DD658pvpSnXznDO5E" },
  { name: "Sindh Board of Technical Education", href: "https://share.google/h2L8RewQFvEbz2xUJ" },
  { name: "Sir Syed University", href: "https://share.google/wwuMi3oatyfG9Pr88" },
  { name: "Hamdard University", href: "https://share.google/u7fRG65SbOrB8PYZb" },
  { name: "Govt College of Technology (Girls)", href: "https://share.google/mWHm3FtzXWbs5agog" },
  { name: "Aligarh Institute of Technology", href: "https://share.google/sTXlJU4m9SWnLXIyE" },
  { name: "Mehran University", href: "https://share.google/hgLiI67XTK9iNSZ9m" },
  // ... add all other links here
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

        {/* Scroll Buttons (Positioned outside the fade for clicks) */}
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