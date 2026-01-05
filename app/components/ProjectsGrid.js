"use client";

import Image from "next/image";
import { useState } from "react";

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
      path: "/assets/project1.jpg",
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
      path: "/assets/project3.jpg",
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

  return (
    <div
      className="parallax-hero relative min-h-screen flex items-start justify-center px-4 py-24"
      style={{
        backgroundImage: "url(/assets/hero3.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1
          className="text-6xl font-bold mb-8 "
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          Projects
        </h1>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2.5 rounded transition-all duration-300
                border text-base font-medium whitespace-nowrap
                ${
                  activeFilter === category
                    ? "bg-linear-to-r from-[#AD8151] to-[#D4A76A] text-white border-transparent shadow-lg shadow-amber-200/30"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }
              `}
              style={{
                borderWidth: activeFilter === category ? "0px" : "1px",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.path}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
