// src/components/Navbar.jsx
import React from 'react';
import {
  Home,
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';

const Navbar = ({
  activeSection,
  scrollToSection,
  navItems,
  socialLinks,
  isMenuOpen,
  setIsMenuOpen,
  theme,
  setTheme
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 shadow-lg px-4 py-3 md:px-8 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Home Button */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center text-white text-3xl font-bold transition-transform duration-300 hover:scale-105 focus:outline-none"
          aria-label="Home"
        >
          <Home className="mr-2 text-purple-400" size={32} />
          <span className="hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Harsh's Portfolio
          </span>
        </button>

        {/* Desktop Nav Links + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300
                ${activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'}
                focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-75`}
            >
              <item.icon className="mr-2" size={20} />
              {item.label}
            </button>
          ))}

          {/* 🌗 Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              aria-label={link.name}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center w-full text-left text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
                    focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-75`}
                >
                  <item.icon className="mr-3" size={20} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle for Mobile */}
          <div className="flex justify-center mt-6 border-t border-gray-700 pt-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full py-2 bg-gray-700 text-white rounded-full text-sm transition hover:bg-gray-600"
            >
              {theme === 'dark' ? 'Switch to Light Mode 🌞' : 'Switch to Dark Mode 🌙'}
            </button>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-6 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
