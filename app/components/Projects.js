import Image from "next/image";
import Link from "next/link";

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

  return (
    <div
      className="parallax-hero relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url(/assets/hero3.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectTypes.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md">
              <Image
                src={project.path}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-72 object-cover mb-4"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
