import React from "react";
import { Laptop, Megaphone, Palette } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Digital Marketing",
      icon: Megaphone,
      items: ["SEO", "Social Media Marketing", "PPC", "Content Marketing"],
    },
    {
      title: "Website Development",
      icon: Laptop,
      description:
        "Custom, responsive, and high-performing websites tailored to your needs",
    },
    {
      title: "Branding & Design",
      icon: Palette,
      items: ["Logo design", "Graphics", "Branding strategies"],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className={`py-16 bg-gray-800 transition-opacity duration-1000 transform ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => {
            // Assign a bright color for each icon
            let iconColor = "#38bdf8"; // cyan for Megaphone
            if (service.icon === Laptop) iconColor = "#facc15"; // yellow for Laptop
            if (service.icon === Palette) iconColor = "#ef4444"; // red for Palette

            return (
              <div
                key={service.title}
                className="w-[90%] max-w-xs bg-gradient-to-br from-cyan-700 to-dark-800 p-6 rounded-lg hover:shadow-neumorph shadow-xl transform hover:scale-105 flex flex-col transition-transform"
              >
                <service.icon
                  style={{ color: iconColor }}
                  className="h-12 w-12 mb-4 mx-auto drop-shadow-lg"
                />
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {service.title}
                </h3>
                {service.items ? (
                  <ul className="mt-4 text-gray-300 flex-grow">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 flex-grow">
                    {service.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
