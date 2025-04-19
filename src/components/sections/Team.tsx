import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../../data/content';

const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3460] mb-4">
            Notre <span className="text-[#FFD700]">Équipe</span> d'Experts
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Notre équipe diversifiée de consultants expérimentés est prête à relever
            vos défis les plus complexes avec expertise et créativité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3460]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-6 w-full">
                    <div className="flex space-x-3 justify-center mb-4">
                      <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-[#FFD700] transition-colors duration-300">
                        <Linkedin size={20} className="text-white" />
                      </a>
                      <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-[#FFD700] transition-colors duration-300">
                        <Mail size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#0F3460] mb-1">{member.name}</h3>
                <p className="text-[#FFD700] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;