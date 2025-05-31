import React from "react";
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const benefits = [
    "Result-Driven Strategies",
    "On-Time Delivery",
    "Affordable & Transparent Pricing",
    "Innovative & Customized Solutions",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 bg-dark-200 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="m-6 p-6 rounded-lg bg-gradient-to-br from-gray-100 to-cyan-300 dark:from-cyan-500 dark:to-indigo-900 text-center transform hover:scale-105 transition-transform hover:shadow-neumorph"
            >
              <CheckCircle className="h-12 w-12 text-dark-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
