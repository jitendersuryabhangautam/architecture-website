"use client";

import Link from "next/link";
import Stats from "./Stats";
import Image from "next/image";
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
              className="text-6xl md:text-5xl lg:text-8xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              Innovative Architecture,
              <br />
              Timeless Elegance
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-8">
              Location: park 5, 8.00m, 6.00m and 10.00m across
              <br />
              Distilled City of China (B2H), Central Life Academy
            </p>
          </div>

          <div className="text-start">
            <Link
              href="/contact"
              className="text-white px-12 py-3 md:px-16 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium border-2 border-white/10 hover:border-white/30 backdrop-blur-sm"
              style={{
                background: "linear-gradient(to right, #AD8151, #D4A76A)",
                boxShadow: "0 0 15px rgba(173, 129, 81, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #D4A76A, #AD8151)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #AD8151, #D4A76A)";
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
      <div
        className="parallax-hero relative min-h-screen flex items-center justify-center px-4 py-8"
        style={{
          backgroundImage: "url(/assets/hero3.jpg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-[45%] flex justify-center">
            <div className="relative w-full max-w-150 aspect-square rounded overflow-hidden shadow-2xl">
              {/* Main Image Container with Smooth Transition */}
              <div className="relative w-full h-full">
                <Image
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Architecture Design"
                  fill
                  className={`object-cover ${
                    fadeState === "fade-in" ? "fade-in" : "fade-out"
                  }`}
                  sizes="(max-width: 900px) 100vw, 45vw"
                  priority
                />
              </div>

              {/* Image Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`transition-all duration-500 ease-in-out rounded-full ${
                      index === currentImageIndex
                        ? "w-8 h-2 scale-110"
                        : "w-2 h-2 bg-white/70 hover:bg-white"
                    }`}
                    style={{
                      background:
                        index === currentImageIndex
                          ? "linear-gradient(to right, #AD8151, #D4A76A)"
                          : undefined,
                    }}
                    onClick={() => navigateToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20 hover:scale-110 group"
                onClick={() =>
                  navigateToImage(
                    (currentImageIndex - 1 + images.length) % images.length
                  )
                }
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20 hover:scale-110 group"
                onClick={() =>
                  navigateToImage((currentImageIndex + 1) % images.length)
                }
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[55%] px-6 lg:px-8 py-8 lg:py-10">
            <div className="text-start mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting Dreams,
                <br />
                Building Legacies
              </h1>

              <p className="text-gray-800 text-lg md:text-xl mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-800 text-lg md:text-xl mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="text-start">
              <Link
                href="/contact"
                className="inline-block text-white px-12 py-3 md:px-16 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium border-2 border-white/10 hover:border-white/30"
                style={{
                  background: "linear-gradient(to right, #AD8151, #D4A76A)",
                  boxShadow: "0 0 15px rgba(173, 129, 81, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, #D4A76A, #AD8151)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, #AD8151, #D4A76A)";
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
}
