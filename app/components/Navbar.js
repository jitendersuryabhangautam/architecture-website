"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "About Us" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/10 backdrop-blur-md shadow-lg"
          : "bg-black/10 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-white">
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(to right, #AD8151, #D4A76A)",
              backgroundClip: "text",
            }}
          >
            Step One Studio
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-white transition-all duration-300 text-sm lg:text-base font-medium ${
                isActive(link.href)
                  ? "text-[#AD8151] font-semibold"
                  : "hover:text-[#AD8151]"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Golden underline effect */}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  isActive(link.href)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  background: "linear-gradient(to right, #AD8151, #D4A76A)",
                }}
              ></span>
            </Link>
          ))}

          <Link
            href="/contact"
            className={`
              relative
              overflow-hidden
              text-white
              px-4 lg:px-6
              py-2
              rounded-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              font-medium
              text-sm lg:text-base
              ${
                isActive("/contact")
                  ? "ring-2 ring-[#AD8151] ring-offset-2 ring-offset-black/50 shadow-lg scale-105"
                  : ""
              }
            `}
            style={{
              background:
                "linear-gradient(to right, #AD8151, #C99B5C, #AD8151)",
              backgroundSize: "200% 100%",
              boxShadow: "0 0 10px rgba(173, 129, 81, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to right, #D4A76A, #E0B87E, #D4A76A)";
              e.currentTarget.style.backgroundPosition = "right center";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to right, #AD8151, #C99B5C, #AD8151)";
              e.currentTarget.style.backgroundPosition = "left center";
            }}
          >
            <span className="relative z-10">Contact Us</span>
            {/* Shimmer effect */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              }}
            ></div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded transition-colors duration-300 ${
                  isActive(link.href)
                    ? "bg-[#AD8151]/20 text-[#AD8151] font-semibold"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 rounded text-white font-medium"
              style={{
                background: "linear-gradient(to right, #AD8151, #D4A76A)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
