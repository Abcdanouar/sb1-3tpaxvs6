import React from 'react';
import { navItems } from '../../data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F3460] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              LE CIRCULAIRE<span className="text-[#FFD700]">.</span>
            </h3>
            <p className="text-white/70 mb-6">
              Le circulaire accompagne les entreprises dans leur transformation digitale 
              et leur développement stratégique depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Consultation Stratégique",
                "Transformation Digitale",
                "Optimisation des Opérations",
                "Développement Durable",
                "Gestion du Changement",
                "Analyse Financière",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et conseils.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-[#FFD700] text-[#0F3460] px-4 py-2 rounded-r-md font-semibold transition-colors duration-300 hover:bg-[#E6C200]"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Le circulaire. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-[#FFD700] text-sm">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-white/70 hover:text-[#FFD700] text-sm">
              Conditions d'Utilisation
            </a>
            <a href="#" className="text-white/70 hover:text-[#FFD700] text-sm">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer