// src/sections/HomeSection.jsx
import React from 'react';
import { User } from 'lucide-react'; // You can remove this if not using

const HomeSection = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="relative mb-8 animate-fade-in-up">
        {/* Profile Image Container */}
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500 ring-offset-2 ring-offset-black animate-pulse-subtle">
          <img
            src="image.jpg" // 🔁 replace with your image path
            alt="Harsh Laddha"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        Hi, I'm <span className="text-pink-500">Harsh Laddha</span>!
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
        A Computer Science undergrad at LNMIIT with a passion for building fast, secure, and scalable web apps. I love working across the stack and solving real-world problems through code.
      </p>
    </section>
  );
};

export default HomeSection;
