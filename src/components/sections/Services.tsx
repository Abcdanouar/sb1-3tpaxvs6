import React from 'react';
import { Lightbulb, Rocket, Settings, Leaf } from 'lucide-react';
import { services } from '../../data/content';

const getIcon = (iconName: string, size: number = 36) => {
  switch (iconName) {
    case 'lightbulb':
      return <Lightbulb size={size} />;
    case 'rocket':
      return <Rocket size={size} />;
    case 'settings':
      return <Settings size={size} />;
    case 'leaf':
      return <Leaf size={size} />;
    default:
      return <Lightbulb size={size} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3460] mb-4">
            Nos Services <span className="text-[#FFD700]">d'Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nous proposons des solutions personnalisées pour répondre aux défis uniques de votre entreprise, 
            en vous accompagnant à chaque étape de votre développement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group"
            >
              <div className="text-[#0F3460] group-hover:text-[#FFD700] transition-colors duration-300 mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-[#0F3460] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-[#183D6D]"
          >
            Parlons de Votre Projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;