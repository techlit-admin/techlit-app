import React from "react";
import { TrendingUp, Clock, Wallet, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";

const benefitData = [
  {
    text: "Result-Driven Strategies",
    icon: TrendingUp,
    color: "#ef4444", // bright red
  },
  {
    text: "On-Time Delivery",
    icon: Clock,
    color: "#f59e42", // bright yellow-orange
  },
  {
    text: "Affordable & Transparent Pricing",
    icon: Wallet,
    color: "#fde047", // bright yellow
  },
  {
    text: "Innovative & Customized Solutions",
    icon: Sparkles,
    color: "#f472b6", // bright pink
  },
];

const About = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitData.map(({ text, icon: Icon, color }) => (
            <div
              key={text}
              className="m-3 p-6 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-900 text-center transform hover:scale-105 transition-transform hover:shadow-neumorph"
            >
              <Icon
                style={{ color }}
                className="h-12 w-12 mx-auto mb-4 drop-shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
