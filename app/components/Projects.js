"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const projectTypes = [
    {
      title: "Architectural Design",
      description:
        "Building more architectural projects than for people who use our human positions.",
      path: "/assets/project1.jpg",
    },
    {
      title: "Interior Design",
      description:
        "A number of areas of architecture include engineering, development, and design.",
      path: "/assets/k2.jpg",
    },
    {
      title: "Landscape Design",
      description:
        "Building more architectural projects than for people who use our human positions.",
      path: "/assets/l1.jpg",
    },
  ];

  // Parallax state and refs
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let mounted = true;
    let rafId = null;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const speed = 0.35; // adjust for stronger/weaker parallax
      const y = -rect.top * speed;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (mounted) setOffset(Math.round(y));
      });
    };

    // initial position
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      mounted = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="parallax-hero relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url(/assets/hero3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center " + offset + "px",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="container mx-auto relative z-10">
        <h2
          className="text-6xl sm:text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          Our Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectTypes.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    // ... same useEffect code
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      {/* Square image container */}
      <div className="relative overflow-hidden aspect-square">
        {/* Parallax effect */}
        <div style={{ transform: `translateY(${imageOffset * 0.5}px)` }}>
          <Image
            src={project.path}
            alt={project.title}
            width={600}
            height={600}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Base subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent"></div>

        {/* Content that's always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-0">
            {project.title}
          </h3>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.description}
          </p>
        </div>

        {/* Enhanced overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-amber-900/95 via-amber-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
          <div className="text-center text-white">
            <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <svg
                className="w-16 h-16 mx-auto mb-6 text-white/90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

            <p className="text-gray-200 mb-8 max-w-xs mx-auto">
              {project.description}
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-800 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
              Explore Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
