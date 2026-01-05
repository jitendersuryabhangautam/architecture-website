"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
        <div className="text-2xl font-bold text-white">
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

        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-white transition-all duration-300 text-lg font-medium ${
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
              px-6
              py-2.5
              rounded-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              font-medium
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
    </nav>
  );
}
