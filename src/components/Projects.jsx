import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const images = [
    { src: '/images/crosspay.png', label: 'WORK_SAMP_02' },
    { src: '/images/JustDoIT.jpg', label: 'WORK_SAMP_03' },
  ];

  return (
    <section id="projects" className="py-24 px-6 border-t-2 border-current transition-colors duration-500">
      <div className="flex justify-between items-center mb-16">
        <h2 className="heading-brutal text-4xl md:text-6xl transition-all duration-500">
          Visual <br /> <span className="text-background bg-text px-2 transition-colors duration-500">Artifacts</span>
        </h2>
        <div className="text-[10px] font-bold uppercase text-text-muted text-right transition-colors duration-500">
          Storage_Node: /public/images <br />
          Files: 2 Total
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ rotate: idx % 2 === 0 ? 1 : -1 }}
            className="brutal-card p-2 bg-background relative group transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden border-2 border-current relative transition-colors duration-500">
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex justify-between items-center mt-4 px-2">
              <span className="text-[10px] font-bold text-accent transition-colors duration-500">{img.label}</span>
              <span className="text-[10px] font-bold text-text-muted tracking-widest uppercase transition-colors duration-500">Graphics_Sample</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link 
          to="/projects"
          className="brutal-btn flex items-center gap-4 group"
        >
          See More Archive
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
