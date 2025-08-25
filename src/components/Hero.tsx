import React from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import BackgroundVideo from "../assets/background-video.mp4"; // Assuming this path is correct

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="home"
      ref={ref}
      className={`relative pt-24 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-800 to-blue-900 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "brightness(70%)" }} // Slightly darken the video
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container py-20 mx-auto px-2 sm:px-4 flex justify-center items-center">
        <div className="w-full max-w-4xl text-center relative">
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 rounded-xl pointer-events-none" />
          <div className="relative px-4 py-8 sm:px-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Elevate Your Brand with TechLit
            </h1>
            <p className="text-base sm:text-xl text-gray-100 mb-8 drop-shadow-lg">
              Social media management, creative content, and digital marketing
              packages designed for your business growth.
            </p>
            <button className="bg-indigo-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 transition-colors flex items-center mx-auto focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 drop-shadow-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
