import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { navItems } from '../../data/content';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-[#0F3460]' : 'text-white'}`}>
              LE CIRCULAIRE<span className="text-[#FFD700]">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-[#FFD700] ${
                  isScrolled ? 'text-[#0F3460]' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button 
              className={`flex items-center font-medium transition-colors duration-200 hover:text-[#FFD700] ${
                isScrolled ? 'text-[#0F3460]' : 'text-white'
              }`}
            >
              <Globe size={18} className="mr-1" />
              FR
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-[#0F3460]' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#0F3460] font-medium hover:text-[#FFD700] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="flex items-center text-[#0F3460] font-medium hover:text-[#FFD700] transition-colors duration-200">
              <Globe size={18} className="mr-1" />
              FR
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header