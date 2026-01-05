// import Navbar from "@/components/Navbar";
// import ContactHero from "@/components/ContactHero";
// import ContactForm from "@/components/ContactForm";
// import Footer from "@/components/Footer";

import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
}
