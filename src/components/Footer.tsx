import React from 'react';
import { Heart, Instagram } from 'lucide-react'; // Make sure you import Instagram from lucide-react
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: '#29bc84' }}
      className="text-white py-8 px-4 md:px-16"
    >
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Branding */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-3xl font-bold" style={{ color: '#093e2a' }}>
            UrPrepa
          </h3>
          
        </div>

        {/* Middle section: Social Links and Email */}
        <div className="flex flex-col items-center md:items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <div className="flex items-center space-x-3 text-lg">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#093e2a] hover:text-[#1d7046] transition-colors duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="mailto:urschool4@gmail.com"
              className="text-[#093e2a] hover:text-[#1d7046] transition-colors duration-200"
            >
              Contact: urschool4@gmail.com
            </a>
          </div>
        </div>

        {/* Right section: Copyright */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <div className="flex items-center space-x-1 text-[#093e2a]">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>pour tous les CPGEistes</span>
          </div>
          <p className="mt-1 text-sm text-[#093e2a]">
            © {currentYear} UrPrepa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
