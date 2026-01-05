// import Navbar from "@/components/Navbar";
// import ProjectsGrid from "@/components/ProjectsGrid";
// import Footer from "@/components/Footer";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsGrid from "../components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
