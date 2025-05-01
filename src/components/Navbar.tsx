import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap as Graduation } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`} 
      style={{ backgroundColor: '#29bc84', fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Graduation className="h-8 w-8 text-style={{ backgroundColor: '#29bc84' }}" />
              <span 
                className="text-xl font-bold text-style={{ backgroundColor: '#29bc84' }}" 
                style={{ fontWeight: 700 }}
              >
                UrPrepa
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Accueil" />
            <NavLink to="/mp" label="Filière MP" />
            <NavLink to="/psi" label="Filière PSI" />
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" label="Accueil" />
            <MobileNavLink to="/mp" label="Filière MP" />
            <MobileNavLink to="/psi" label="Filière PSI" />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
      style={{
        color: isActive ? '#ffffff' : '#093e2a',
        fontWeight: isActive ? '600' : '500',
      }}
    >
      {label}
    </Link>
  );
  };
  
  const MobileNavLink: React.FC<NavLinkProps> = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
      <Link
        to={to}
        className={`block px-3 py-2 rounded-md text-base font-medium`}
        style={{
          backgroundColor: isActive ? '#29bc84' : undefined,
          color: isActive ? '#ffffff' : '#093e2a',
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = '#29bc84';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = '';
            e.currentTarget.style.color = '#093e2a';
          }
        }}
      >
        {label}
      </Link>
    );
  };
  

export default Navbar;