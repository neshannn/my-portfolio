import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 transition-colors duration-500">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 flex flex-col gap-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="heading-brutal text-5xl md:text-7xl transition-all duration-500"
          >
            The <span className="text-accent">Operator</span>
          </motion.h2>
          
          <div className="brutal-card relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent -mr-8 -mt-8 rotate-45 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="space-y-6 text-sm font-medium leading-relaxed relative z-10">
              <p className="text-text transition-colors duration-500">
                [IDENT] NISHANT KANDEL <br />
                [ORIGIN] GRAPHICS DESIGNING / EDITING <br />
                [EVOLVED] FULL STACK WEB APP DEVELOPMENT
              </p>
              <p className="text-text transition-colors duration-500">
                MY WORK IS DEFINED BY AN UNCOMPROMISING APPROACH TO UTILITY AND AESTHETIC INTEGRITY. 
                I DO NOT USE TEMPLATES. I DO NOT FOLLOW TRENDS. I CONSTRUCT SOLUTIONS.
              </p>
              <p className="bg-accent/10 p-4 border-l-4 border-accent italic text-text transition-colors duration-500">
                "I ENJOY BUILDING THINGS THAT LIVE ON THE INTERNET, BRINGING DESIGNS TO LIFE WITH SCALABLE, EFFICIENT CODE."
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="brutal-card border-black aspect-square overflow-hidden relative group transition-all duration-500">
            <img 
              src="/images/Snapchat-1012981418.jpg" 
              alt="Nishant Kandel" 
              className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute top-2 right-2 bg-accent text-on-accent text-[8px] font-bold px-2 py-0.5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              IDENT_NK_01
            </div>
          </div>
          <div className="bg-concrete dark:bg-accent text-text dark:text-on-accent p-4 font-bold text-xs uppercase tracking-widest text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-all duration-500">
            Verified Artifact
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
