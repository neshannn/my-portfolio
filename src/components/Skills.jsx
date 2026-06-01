import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const stack = [
    { name: 'MongoDB', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 98 },
    { name: 'Design', level: 92 },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative border-y-2 border-current transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full border-dot opacity-50 -z-10"></div>
      
      <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
        <h2 className="heading-brutal text-6xl md:text-9xl text-accent -rotate-2 transition-all duration-500">
          LOADOUT
        </h2>
        <div className="bg-text text-background p-4 border-2 border-accent text-[10px] font-bold uppercase tracking-[0.2em] max-w-xs transition-colors duration-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          SYSTEM_VERSION: 1.0.4 <br />
          LOAD_PROTOCOL: SUCCESSFUL <br />
          CURRENT_STACK: ACTIVE
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stack.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4, rotate: index % 2 === 0 ? 1 : -1 }}
            className="brutal-card group transition-all duration-500"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase text-text-muted transition-colors duration-500">{skill.name}</span>
              <span className="text-accent text-xs font-bold font-mono transition-colors duration-500">{skill.level}%</span>
            </div>
            <div className="h-4 bg-background border border-text/10 p-1 transition-colors duration-500">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                className="h-full bg-accent shadow-[2px_0px_10px_var(--color-accent)] opacity-80"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-wrap gap-4">
        {['MERN', 'PYTHON', 'UI/UX', 'MOTION', 'EDITING'].map((tag) => (
          <span key={tag} className="bg-text text-background font-bold text-[10px] px-3 py-1 border border-current shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors duration-500">
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
