import React, { useState } from "react";
import { FcDownRight } from "react-icons/fc";
import { useInView } from "react-intersection-observer";

const Packages = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

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

  const handleKnowMore = (pkgName: string) => {
    setSelectedPackage(pkgName);
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
  };

  const whatsappNumber = "919676124330"; // Your WhatsApp number without '+'
  const whatsappMessage = selectedPackage
    ? `Hi, I'm interested in the ${selectedPackage}. Please share more details.`
    : "";

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
          Our Digital Marketing Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="w-[80%] max-w-xs mx-auto md:w-[70%] lg:w-[90%] xl:w-[95%] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-blue-800 dark:to-cyan-800 rounded-lg p-6 hover:shadow-neumorph shadow-xl transition-shadow flex flex-col"
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
              <button
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-auto"
                onClick={() => handleKnowMore(pkg.name)}
              >
                Know More...
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg p-4 w-[90vw] max-w-xs sm:p-8 sm:max-w-sm sm:w-full shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              {selectedPackage}
            </h3>
            <p className="mb-6 text-gray-700 text-center">
              Interested in this package? Contact us on WhatsApp!
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white py-2 rounded-md text-center font-semibold hover:bg-green-600 transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;
