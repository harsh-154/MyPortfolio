import React from 'react';

const skills = [
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 80 },  
  { name: 'SQL', level: 85 },
  { name: 'Data Structures & Algorithms', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Git & GitHub', level: 75 },
  { name: 'DBMS / OS / CN', level: 75 },
  { name: 'Deep Learning', level: 60 },
];

const barColors = [
  'from-purple-500 to-blue-500',
  'from-blue-500 to-pink-500',
  'from-green-400 to-blue-500',
  'from-pink-500 to-yellow-500',
  'from-yellow-400 to-pink-500',
  'from-indigo-500 to-purple-500',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-12 flex items-center justify-center bg-gradient-to-b from-black/80 to-gray-900/80">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-fade-in-up">
          My Skills
        </h2>
        <div className="space-y-8">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="w-full animate-fade-in-up-skill delay-100">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-semibold text-gray-200">{skill.name}</span>
                <span className="text-sm font-bold text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full h-5 bg-gray-800 rounded-full overflow-hidden bar-shadow">
                <div
                  className={`h-5 rounded-full bg-gradient-to-r ${barColors[idx % barColors.length]} bar-animate transition-all duration-1000 ease-in-out`}
                  style={{ width: `${skill.level}%`, minWidth: '2rem', '--bar-width': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-400 text-sm">* Skill levels are self-assessed based on experience and confidence.</p>
      </div>
    </section>
  );
};

export default SkillsSection; 