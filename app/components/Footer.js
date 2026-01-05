"use client";
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-800">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(to right, #AD8151, #D4A76A)",
                backgroundClip: "text",
              }}
            >
              Step One Studio
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#"
              className="text-gray-300 hover:text-[#D4A76A] transition-colors duration-300 group relative"
            >
              <span>Home</span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #AD8151, #D4A76A)",
                }}
              ></span>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#D4A76A] transition-colors duration-300 group relative"
            >
              <span>About Us</span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #AD8151, #D4A76A)",
                }}
              ></span>
            </a>
            <a
              href="/projects"
              className="text-gray-300 hover:text-[#D4A76A] transition-colors duration-300 group relative"
            >
              <span>Projects</span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #AD8151, #D4A76A)",
                }}
              ></span>
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-[#D4A76A] transition-colors duration-300 group relative"
            >
              <span>Contact Us</span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #AD8151, #D4A76A)",
                }}
              ></span>
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="/contact"
            className="relative overflow-hidden text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium group"
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
            <span className="relative z-10">Get Quote</span>
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
              }}
            ></div>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 <span className="text-[#D4A76A]">Step One Studio</span>. All
            rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-[#D4A76A] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#D4A76A] transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#D4A76A] transition-colors duration-300 text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
