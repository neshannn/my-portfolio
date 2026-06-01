import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Music } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme, toggleMusic, isMusicOpen }) => {
  return (
    <motion.nav 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[60] p-6 flex justify-between items-start pointer-events-none"
    >
      <div className="pointer-events-auto group">
        <div className="bg-accent text-white font-display p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white/10">
        {isDarkMode ? 'PORTFOLIO' : 'ポートフォリオ'}
        </div>
      </div>
      
      <div className="pointer-events-auto flex flex-col gap-2 items-end">
        <div className="flex gap-2">
          <button 
            onClick={toggleMusic}
            className={`${isMusicOpen ? 'bg-accent text-on-accent' : 'bg-concrete text-text'} p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-accent hover:text-on-accent transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none`}
            title="Toggle Music"
          >
            <Music className="w-4 h-4" />
          </button>
          
          <button 
            onClick={toggleTheme}
            className="bg-concrete text-text p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-accent hover:text-on-accent transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="bg-concrete text-text text-[10px] font-bold tracking-widest px-4 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-accent hover:text-on-accent transition-all text-right"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
