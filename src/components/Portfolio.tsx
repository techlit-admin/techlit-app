import React from "react";
import { useInView } from "react-intersection-observer";
import Brush4Blush from "../assets/Brush4Blush.png";
import Occasia from "../assets/occasia.png";
import RkBallons from "../assets/RKBalloons.png";
import Jyothishyam from "../assets/Jyothishyam.png";
import BalloonsSpot from "../assets/BalloonSpot.png";
import BalloonsHouse from "../assets/BalloonsHouse.png";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "Occasia",
      image: Occasia,
      description: "Event Management Services",
      link: "Occasia.in",
    },
    {
      name: "Brush4Blush",
      image: Brush4Blush,
      description: "Beauty and Makeover Services",
      link: "brush4blush.in",
    },
    {
      name: "RK Balloons",
      image: RkBallons,
      description: "Event decoration services",
      link: "rkballoons.com",
    },
    {
      name: "Jyothishyam",
      image: Jyothishyam,
      description: "Astrology Consultation Platform",
    },
    {
      name: "Balloon Spot",
      image: BalloonsSpot,
      description: "Event decoration services",
      link: "balloonspot.in",
    },
    {
      name: "Balloons House",
      image: BalloonsHouse,
      description: "Event decoration services",
      link: "balloonspot.in/balloon-house",
    },
  ];

  const handleClick = (link: string) => {
    window.open("https://" + link);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-16 bg-gray-800 transition-all duration-1000 transform ${
        inView ? "opacity-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-[85vw] max-w-xs mx-auto md:w-full bg-teal-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-1000 cursor-pointer flex flex-col"
              onClick={() => handleClick(project.link ?? "")}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 flex-grow">{project.description}</p>
              {project.link && (
                <a
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 flex items-center mt-4 hover:text-yellow-600"
                >
                  Visit Website <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
