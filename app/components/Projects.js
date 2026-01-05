"use client";

import Image from "next/image";
import Link from "next/link";
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
      path: "/assets/project2.jpg",
    },
    {
      title: "Landscape Design",
      description:
        "Building more architectural projects than for people who use our human positions.",
      path: "/assets/project3.jpg",
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
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectTypes.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Project Card component with parallax effect
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    let mounted = true;
    let rafId = null;

    const onScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const speed = 0.15; // parallax speed for images
      const y = -rect.top * speed;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (mounted) setImageOffset(y);
      });
    };

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
      ref={cardRef}
      className="bg-white rounded-xl shadow-md hover:scale-102 transition-transform duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden h-72">
        <div style={{ transform: `translateY(${imageOffset * 0.5}px)` }}>
          <Image
            src={project.path}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}
