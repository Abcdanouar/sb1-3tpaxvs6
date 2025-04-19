import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "15+", label: "Années d'Expérience" },
    { number: "200+", label: "Projets Réussis" },
    { number: "85%", label: "Clients Récurrents" },
    { number: "25+", label: "Experts Consultants" },
  ];

  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3460] mb-4">
              À Propos de <span className="text-[#FFD700]">Le circulaire</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD700] mb-6"></div>
            <p className="text-gray-600 mb-6">
              Depuis notre création en 2010, Le circulaire s'est imposé comme un leader reconnu dans le conseil 
              stratégique aux entreprises en France et à l'international. Notre équipe d'experts possède une vision 
              unique du marché et une profonde compréhension des enjeux économiques actuels.
            </p>
            <p className="text-gray-600 mb-8">
              Notre mission est simple : transformer votre vision en succès tangible. Nous accompagnons nos clients 
              à chaque étape, de la conception stratégique à la mise en œuvre opérationnelle.
            </p>
            <div className="space-y-3">
              {[
                "Approche personnalisée pour chaque client",
                "Équipe d'experts dans divers domaines",
                "Méthodologies innovantes et éprouvées",
                "Engagement pour des résultats mesurables",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-[#FFD700] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Équipe Le circulaire en réunion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg z-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#0F3460]">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 top-12 -left-6 w-full h-full bg-[#FFD700]/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About