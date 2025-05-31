import React from "react";
import { useInView } from "react-intersection-observer";
import Brush4Blush from "../assets/Brush4Blush.png";
import Occasia from "../assets/occasia.png";
import RkBallons from "../assets/RKBalloons.png";
import Jyothishyam from "../assets/Jyothishyam.png";
import BalloonsSpot from "../assets/BalloonSpot.png";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "Occasia.in",
      image: Occasia,
      description: "E-commerce platform for occasion wear",
    },
    {
      name: "brush4blush.in",
      image: Brush4Blush,
      description: "Beauty and cosmetics website",
    },
    {
      name: "rkballoons.com",
      image: RkBallons,
      description: "Event decoration services",
    },
    {
      name: "jyothishyam.in",
      image: Jyothishyam,
      description: "Event decoration services",
    },
    {
      name: "balloonspot.in",
      image: BalloonsSpot,
      description: "Event decoration services",
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
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`bg-teal-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-1000 cursor-pointer ${
                inView ? "opacity-100 " : "opacity-0"
              } flex flex-col`}
              onClick={() => handleClick(project.name)}
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
              <a
                href={`https://${project.name}`}
                target="_blank"
                className="text-yellow-600 flex items-center mt-4 hover:text-blue-700"
              >
                Visit Website <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
