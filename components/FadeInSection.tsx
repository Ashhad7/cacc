// components/FadeInSection.tsx
"use client";

import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function FadeInSection({ children, className, id }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% visible
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className || ""}`}
    >
      {children}
    </section>
  );
}