import React from 'react';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-12 flex items-center justify-center">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 📷 Profile Image */}
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500 transition-transform duration-500 transform hover:scale-105">
            <img
              src="/about.jpg"
              alt="Harsh Laddha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 🧠 Text Content */}
        <div className="text-center md:text-left animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Hello! I'm <span className="text-purple-400 font-semibold">Harsh Laddha</span>, a CSE undergrad at LNMIIT with strong foundations in DSA, OS, DBMS, and CN.
            <br /><br />
            I build scalable full-stack apps using React, Node.js & MongoDB, and I'm exploring AI/ML. I actively solve problems on LeetCode & Codeforces.
            <br /><br />
            I love converting ideas into clean, functional UI experiences.
          </p>

          {/* 📄 Resume Button */}
          <a
            href="HarshLaddha.pdf" // Place your resume in /public folder
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full transition-all hover:from-purple-500 hover:to-blue-500 hover:shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>

      {/* 🕓 Timeline Below */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          My Journey
        </h3>
        <ul className="border-l-4 border-purple-500 pl-6 space-y-6">
          {/* <li>
            <div className="text-lg text-yellow-400 font-semibold">2023 - Present</div>
            <div className="text-gray-300">Exploring AI/ML & building real-world full-stack projects.</div>
          </li>
          <li>
            <div className="text-lg text-yellow-400 font-semibold">2022 - 2023</div>
            <div className="text-gray-300">Solved 700+ problems on LeetCode & Codeforces. Started backend development.</div>
          </li> */}
          <li>
            <div className="text-lg text-yellow-400 font-semibold">2023 - present</div>
            <div className="text-gray-300">Learned Data Structures, Algorithms, and built basic React apps. Learned ML.</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
