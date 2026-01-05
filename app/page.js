// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Stats from "@/components/Stats";
// import Projects from "@/components/Projects";
// import Footer from "@/components/Footer";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <Projects />
      <Footer />
    </div>
  );
}
