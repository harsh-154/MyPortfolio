import React, { useState, useEffect } from 'react';
import CursorEffect from './components/CursorEffect.jsx';
import Navbar from './components/Navbar.jsx';
import HomeSection from './sections/HomeSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import AchievementsSection from './sections/AchievementsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import SkillsSection from './sections/SkillsSection.jsx';

import { Linkedin, Github, Code, Award, Briefcase, User, Mail } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'achievements', 'contact'];
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  const navItems = [
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact Me', icon: Mail },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/harsh-laddha-004160262',
    },
    {
      name: 'LeetCode',
      icon: () => (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" style={{display:'inline'}}>
          <rect width="32" height="32" rx="16" fill="#181717"/>
          <path d="M21.5 10.5L16 5L10.5 10.5M10.5 21.5L16 27L21.5 21.5M5 16H27" stroke="#FFA116" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      url: 'https://leetcode.com/u/laddhaharsh154/',
    },
    {
      name: 'Codeforces',
      icon: Code,
      url: 'https://codeforces.com/profile/harsh_154',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/harsh-154',
    },
  ];

  return (
    <div className={`min-h-screen relative font-inter overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200'
        : 'bg-white text-gray-900'
    }`}>
      <CursorEffect cursorPos={cursorPos} />

      <Navbar
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
        socialLinks={socialLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative z-10 pt-24 pb-8">
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer socialLinks={socialLinks} />

      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(128, 0, 128, 0.4), 0 0 20px rgba(0, 0, 255, 0.2);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.7), 0 0 30px rgba(0, 0, 255, 0.5);
          }
        }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite alternate; }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slide-in-left 0.7s ease-out forwards; opacity: 0; }
        .animate-slide-in-left.delay-100 { animation-delay: 0.1s; }
        .animate-slide-in-left.delay-200 { animation-delay: 0.2s; }
        .animate-slide-in-left.delay-300 { animation-delay: 0.3s; }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right { animation: slide-in-right 0.7s ease-out forwards; opacity: 0; }
        .animate-slide-in-right.delay-100 { animation-delay: 0.1s; }
        .animate-slide-in-right.delay-200 { animation-delay: 0.2s; }
        .animate-slide-in-right.delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default App;