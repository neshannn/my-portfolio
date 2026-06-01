import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, Image as ImageIcon, Code, X } from 'lucide-react';

const AllProjects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const webApps = [
    { title: 'Crosspay', desc: 'Financial transaction platform architecture.', src: '/images/crosspay.png' },
    { title: 'G&G Platform', desc: 'E-commerce and distribution system.', src: '/images/gng.png' },
  ];

  const videos = [
    { title: 'Yuta Cardigan Edit', file: '/videos/yuta-cardigan.mp4' },
    { title: 'Experimental_Wtf', file: '/videos/wtf.mp4' },
    { title: 'Double Take', file: '/videos/doubletake.mp4' },
    { title: 'Light Switch', file: '/videos/LightSwitch.mp4' },
    { title: 'No Idea', file: '/videos/noidea.mp4' },
  ];

  const graphics = [
    { title: 'WhatEver', src: '/images/JustDoIT.jpg' },
    { title: 'Sprite Model', src: '/images/Sprite.jpg' },
    { title: 'Design_Sample_03', src: '/images/dices.jpg' },
  ];

  return (
    <div className="bg-background text-text min-h-screen p-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-24 py-12">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <Link to="/" className="brutal-btn px-4 py-2 flex items-center gap-2 text-xs">
            <ArrowLeft className="w-4 h-4" /> Return_To_Base
          </Link>
          <div className="heading-brutal text-2xl uppercase opacity-20 font-mono tracking-tighter">Archive_V1.0_Final</div>
        </nav>

        {/* Section 1: Web Apps */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 border-b-4 border-current pb-4">
            <Code className="w-8 h-8 text-accent" />
            <h2 className="heading-brutal text-4xl md:text-6xl">Web_App_Demos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {webApps.map((app, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="brutal-card p-4 bg-surface">
                <div className="aspect-video bg-concrete border-2 border-black overflow-hidden mb-4">
                  <img src={app.src} alt={app.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 tracking-tight">{app.title}</h3>
                <p className="text-sm opacity-70 mb-4 font-medium leading-tight">{app.desc}</p>
                <div className="flex gap-4">
                  <button className="text-[10px] font-bold uppercase text-accent flex items-center gap-1 hover:underline">
                    <ExternalLink className="w-3 h-3" /> Live_Preview
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Video Edits */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 border-b-4 border-current pb-4">
            <Play className="w-8 h-8 text-accent" />
            <h2 className="heading-brutal text-4xl md:text-6xl">Visual_Edits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid, i) => (
              <motion.div 
                key={i} 
                className="brutal-card p-2 bg-surface cursor-pointer group"
                onClick={() => setActiveVideo(vid)}
              >
                <div className="aspect-square bg-black border-2 border-black relative overflow-hidden">
                  <video 
                    src={vid.file} 
                    muted 
                    loop 
                    playsInline 
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 group-hover:scale-110">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase p-2 flex justify-between items-center">
                  <span>{vid.title}</span>
                  <span className="opacity-30">Play_Artifact</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Graphic Designs */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 border-b-4 border-current pb-4">
            <ImageIcon className="w-8 h-8 text-accent" />
            <h2 className="heading-brutal text-4xl md:text-6xl">Graphics_Design</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {graphics.map((design, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="brutal-card p-1 bg-surface aspect-square group overflow-hidden">
                <img src={design.src} alt={design.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black border-4 border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                Close_Archive <X className="w-6 h-6" />
              </button>
              <video 
                src={activeVideo.file} 
                controls 
                autoPlay 
                className="w-full h-full"
              />
              <div className="absolute -bottom-10 left-0 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                Viewing: {activeVideo.title} // Project_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjects;
