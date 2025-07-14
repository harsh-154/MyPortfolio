// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Code, Award, Github } from 'lucide-react'; // Ensure all social icons are imported

const Footer = ({ socialLinks }) => {
  return (
    <footer className="bg-black bg-opacity-80 text-gray-400 text-center py-6 px-4">
      <p>&copy; {new Date().getFullYear()} Harsh Laddha. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label={link.name}
          >
            <link.icon size={28} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
