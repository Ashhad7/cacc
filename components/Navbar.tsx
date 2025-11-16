// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import Lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/40 px-6 py-4 backdrop-blur-md md:px-10">
      <div className="text-2xl font-bold text-[#00f7ff]">CACC</div>
      
      {/* Desktop Links */}
      <ul className="hidden space-x-6 md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="text-white transition-colors hover:text-[#00f7ff]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown)
        This slides in from the top or appears
      */}
      <div
        className={`absolute left-0 top-full w-full bg-black/80 p-6 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block w-full text-center text-lg text-white transition-colors hover:text-[#00f7ff]"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}