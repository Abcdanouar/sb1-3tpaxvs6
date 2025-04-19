import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#0F3460]/70"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Transformez Votre Vision <br />
            <span className="text-[#FFD700]">En Réalité</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Le circulaire accompagne les entreprises innovantes dans leur croissance 
            et leur transformation digitale avec des solutions stratégiques sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#FFD700] text-[#0F3460] px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:scale-105 text-center"
            >
              Discuter de Votre Projet
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-white hover:text-[#0F3460] text-center"
            >
              Découvrir Nos Services
            </a>
          </div>
        </div>
      </div>
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero