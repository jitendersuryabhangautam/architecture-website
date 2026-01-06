"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  // Array of image paths in the assets folder
  const images = [
    "/assets/hero3.jpg",
    "/assets/project2.jpg", // Add your other image paths here
    "/assets/project1.jpg",
    "/assets/project3.jpg", // Add more as needed
    "/assets/k3.jpg", // Add more as needed
    "/assets/k2.jpg", // Add more as needed
    "/assets/k1.jpg", // Add more as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  // Smooth image transition with crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFadeState("fade-out");

      // After fade out completes, change image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeState("fade-in");
      }, 500); // Half of the transition duration
    }, 4000); // Total cycle time: 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation with smooth transition
  const navigateToImage = (index) => {
    if (index === currentImageIndex) return;

    setFadeState("fade-out");
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFadeState("fade-in");
    }, 300);
  };

  return (
    <div>
      <div
        className="parallax-hero relative min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: "url(/assets/hero3.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-start mb-12">
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              Lets Discuss
              <br />
              Your Dream
              <br />
              Project
            </h1>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
