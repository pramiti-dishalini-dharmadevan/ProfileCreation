import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'HOME', to: '/' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'BLOG', to: '/blog' },
  { label: 'CONTACT', to: '/contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-bold" style={{ color: '#655e7a' }}>Vaishnavi</Link>
        <div className="hidden md:flex space-x-6">
          {menuItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className="cursor-pointer hover:opacity-70 font-medium transition"
              style={{ color: '#655e7a', fontWeight: location.pathname === item.to ? '700' : '500' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: '#655e7a' }}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          {menuItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-4 py-3 border-b hover:bg-gray-100 font-medium"
              style={{ color: '#655e7a' }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
