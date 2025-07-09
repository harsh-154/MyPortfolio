// src/sections/AchievementsSection.jsx
import React from 'react';
import { Award, Code, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react'; // Added suitable icons

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Graphs Camp by Codeforces Master',
      description: 'Selected among 80,000+ applicants for advanced graph algorithms training. Completed 17+ techniques and featured in Hall of Fame.',
      icon: ShieldCheck,
      iconColor: 'text-purple-400',
      gradient: 'from-purple-400 to-blue-400',
      borderHover: 'border-purple-500'
    },
    {
      title: 'Top 1% on LeetCode',
      description: 'Global top 1% ranked on LeetCode. Solved 400+ DSA problems including advanced topics like DP, Graphs, and Tries.',
      icon: Code,
      iconColor: 'text-blue-400',
      gradient: 'from-blue-400 to-pink-400',
      borderHover: 'border-blue-500'
    },
    {
      title: 'Teaching Assistant – PPS',
      description: 'Guided first-year students in Programming for Problem Solving labs. Awarded certificate for excellent mentoring.',
      icon: GraduationCap,
      iconColor: 'text-green-400',
      gradient: 'from-green-400 to-lime-400',
      borderHover: 'border-green-500'
    },
    {
      title: 'Certified Prompt Engineer (Vertex AI)',
      description: 'Earned skill badge from Google Cloud for crafting prompts, using Gemini models, and applying multimodal AI in real-world tasks.',
      icon: Award,
      iconColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-400',
      borderHover: 'border-orange-500'
    },
  ];

  return (
    <section id="achievements" className="min-h-screen py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:mx-auto after:mt-4 after:rounded-full animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:${achievement.borderHover} animate-slide-in-right delay-${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <achievement.icon size={36} className={`${achievement.iconColor} mr-4`} />
                <h3 className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient}`}>
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
