import React from "react";
import { FcDownRight } from "react-icons/fc";
import { useInView } from "react-intersection-observer";

const Packages = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: "Bronze Pack",
      features: ["1 post per week", "1 reel per month"],
    },
    {
      name: "Silver Pack",
      features: [
        "1 post every alternative day",
        "1 reel per week",
        "Support for ad campaigns",
      ],
    },
    {
      name: "Gold Pack",
      features: [
        "1 post per day",
        "1 reel per week",
        "Support for ad campaigns",
      ],
    },
    {
      name: "Diamond Pack",
      features: [
        "1 post per day",
        "1 reel per week",
        "Support for ad campaigns",
        "Custom designs for posts",
        "Creative ideas for brand growth",
      ],
    },
  ];

  return (
    <section
      id="packages"
      ref={ref}
      className={`py-16 bg-gray-900 ${
        inView ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-blue-800 dark:to-cyan-800 rounded-lg p-6 hover:shadow-neumorph shadow-xl transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-yellow-400 text-center">
                {pkg.name}
              </h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-white-800 dark:text-white-800"
                  >
                    <FcDownRight className="h-5 w-5 mr-2" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-auto">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
