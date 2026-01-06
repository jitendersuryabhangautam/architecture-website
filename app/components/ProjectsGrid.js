"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ProjectsGrid() {
  // Define filter categories
  const filterCategories = [
    "All",
    "Residential Homes",
    "Commercial Buildings",
    "Offices",
    "Schools",
    "Interior Work",
  ];

  // Define projects with their respective categories/tags
  const projects = [
    {
      id: 1,
      title: "Modern Villa Design",
      description:
        "Luxury residential villa with sustainable architecture and smart home features.",
      path: "/assets/v1.jpg",
      tags: ["Residential Homes", "Interior Work"],
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      description:
        "State-of-the-art office building with eco-friendly design and employee wellness spaces.",
      path: "/assets/project2.jpg",
      tags: ["Commercial Buildings", "Offices"],
    },
    {
      id: 3,
      title: "Urban Landscape Park",
      description:
        "Public park design integrating natural elements with urban architecture.",
      path: "/assets/l1.jpg",
      tags: ["Commercial Buildings"],
    },
    {
      id: 4,
      title: "Educational Campus",
      description:
        "Modern school campus design promoting collaborative learning environments.",
      path: "/assets/project3.jpg",
      tags: ["Schools"],
    },
    {
      id: 5,
      title: "Luxury Apartment Complex",
      description:
        "High-end residential complex with premium amenities and panoramic views.",
      path: "/assets/k3.jpg",
      tags: ["Residential Homes", "Interior Work"],
    },
    {
      id: 6,
      title: "Shopping Mall Renovation",
      description:
        "Complete renovation of commercial space with modern retail design principles.",
      path: "/assets/k2.jpg",
      tags: ["Commercial Buildings", "Interior Work"],
    },
    {
      id: 7,
      title: "Tech Startup Office",
      description:
        "Innovative workspace design for technology company fostering creativity.",
      path: "/assets/k1.jpg",
      tags: ["Offices", "Interior Work"],
    },
    {
      id: 8,
      title: "Community School",
      description:
        "Elementary school design focusing on safety, accessibility, and natural lighting.",
      path: "/assets/project2.jpg",
      tags: ["Schools"],
    },
    {
      id: 9,
      title: "Minimalist Home",
      description:
        "Contemporary residential design emphasizing simplicity and functionality.",
      path: "/assets/project1.jpg",
      tags: ["Residential Homes", "Interior Work"],
    },
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

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
      className="parallax-hero relative min-h-screen flex items-start justify-center px-4 py-24"
      style={{
        backgroundImage: "url(/assets/hero3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center " + offset + "px",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-left"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          Projects
        </h1>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 md:px-6 py-2 md:py-2.5 rounded transition-all duration-300
                border text-sm md:text-base font-medium whitespace-nowrap
                ${
                  activeFilter === category
                    ? "text-white border-transparent shadow-lg shadow-amber-200/30"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }
              `}
              style={{
                background:
                  activeFilter === category
                    ? "linear-gradient(to right, #AD8151, #D4A76A)"
                    : undefined,
                borderWidth: activeFilter === category ? "0px" : "1px",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Alternative ProjectCard for images only
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    // ... (same useEffect code as above)
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Square image container with overlay on hover */}
      <div className="relative overflow-hidden aspect-square">
        <div style={{ transform: `translateY(${imageOffset * 0.5}px)` }}>
          <Image
            src={project.path}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Optional: Overlay with title on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
