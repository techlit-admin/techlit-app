import React from 'react';
import { useInView } from 'react-intersection-observer';
import Occasia from '../assets/occasia.jpg';
import RkBallons from '../assets/rkballons.jpg';

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: 'Occasia.in',
      image: Occasia,
      description: 'E-commerce platform for occasion wear'
    },
    {
      name: 'brush4blush.in',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      description: 'Beauty and cosmetics website'
    },
    {
      name: 'rkballoons.com',
      image: RkBallons,
      description: 'Event decoration services'
    }
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-16 bg-gray-900 transition-all duration-1000 transform ${inView ? 'opacity-100' : 'opacity-0 scale-95'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-1000 ${inView ? 'opacity-100 ' : 'opacity-0'} flex flex-col`}>
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 flex-grow">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;