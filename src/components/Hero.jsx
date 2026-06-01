import React from 'react';
import { motion } from 'framer-motion';
import { CornerRightDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden transition-colors duration-500">
      <div className="tape top-40 left-10"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block bg-accent text-on-accent font-bold text-xs px-4 py-1 mb-6 border-2 border-black uppercase tracking-tighter transition-colors duration-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Project: Nishant_Kandel / Status: Live
        </motion.div>

        <h1 className="heading-brutal text-[clamp(3.5rem,12vw,10rem)] mb-8 transition-all duration-500">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="block"
          >
            FULL STACK
          </motion.span>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="block text-accent bg-background dark:bg-concrete px-4 -rotate-2 inline-block transition-all duration-500 border-2 border-current"
          >
            DEVELOPER
          </motion.span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="brutal-card max-w-sm"
          >
            <p className="text-sm font-medium leading-tight">
              I BUILD INDUSTRIAL-GRADE WEB ARCHITECTURES. NO FLUFF. JUST PERFORMANCE AND RAW CREATIVITY.
            </p>
            <div className="mt-6 flex items-center gap-2 text-accent">
              <CornerRightDown className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest transition-colors duration-500 uppercase">EST. 2026 / SOURCE: NEPAL</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <button className="brutal-btn w-full md:w-auto self-start">
              Initialize Contact
            </button>
            <div className="text-[8px] text-text-muted font-bold uppercase tracking-[0.5em] transition-colors duration-500">
              Data_Source: Aboutme.txt / Latency: 0ms
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 hidden lg:block opacity-10">
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-current rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
