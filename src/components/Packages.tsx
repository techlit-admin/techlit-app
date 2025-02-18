import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Packages = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const packages = [
    {
      name: 'Bronze Pack',
      features: ['1 post per week', '1 reel per month'],
      //price: '₹4,999/mo'
    },
    {
      name: 'Silver Pack',
      features: ['1 post every alternative day', '1 reel per week', 'Support for ad campaigns'],
      //price: '₹9,999/mo'
    },
    {
      name: 'Gold Pack',
      features: ['1 post per day', '1 reel per week', 'Support for ad campaigns'],
      //price: '₹14,999/mo'
    },
    {
      name: 'Diamond Pack',
      features: ['1 post per day', '1 reel per week', 'Support for ad campaigns', 'Custom designs for posts', 'Creative ideas for brand growth'],
      //price: '₹24,999/mo'
    }
  ];

  return (
    <section id="packages" ref={ref} className={`py-16 bg-gray-800 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Packages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-700 flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-white">{pkg.name}</h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-auto">
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