import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 border-t-2 border-current relative overflow-hidden transition-colors duration-500">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-accent/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-brutal text-6xl md:text-9xl mb-8 transition-all duration-500">
              PING <br />
              <span className="text-accent underline decoration-4 underline-offset-8 transition-colors duration-500">ME</span>.
            </h2>
            <p className="text-xl text-text font-light max-w-sm transition-colors duration-500">
              AVAILABLE FOR FULL-TIME ROLES AND HIGH-IMPACT FREELANCE PROJECTS WORLDWIDE.
            </p>
          </motion.div>

          <div className="flex flex-col justify-end gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] transition-colors duration-500">Social Channels</span>
              <div className="flex flex-wrap gap-8 text-2xl font-display font-bold">
                <a href="https://github.com/neshannn" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors underline decoration-text/10 underline-offset-8 decoration-1 hover:decoration-accent transition-all duration-500">GITHUB</a>
                <a href="https://www.instagram.com/dumbbratt_" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors underline decoration-text/10 underline-offset-8 decoration-1 hover:decoration-accent transition-all duration-500">INSTAGRAM</a>
                <a href="https://www.facebook.com/nishant.kandel.2025/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors underline decoration-text/10 underline-offset-8 decoration-1 hover:decoration-accent transition-all duration-500">FACEBOOK</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] transition-colors duration-500">Direct_Relay</span>
              <a href="mailto:kandelnishant01@gmail.com" className="heading-brutal text-3xl md:text-5xl hover:text-accent transition-colors text-text transition-all duration-500">
                HI@NISHANT.DEV
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-text/5 text-[10px] font-bold tracking-[0.2em] uppercase text-text/40 transition-colors duration-500">
          <span>DESIGNED & BUILT BY NISHANT KANDEL © 2026</span>
          <div className="flex gap-8 text-[8px]">
            <span>BASED IN NEPAL</span>
            <span>NODE: NE_DIST_01</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
