import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import AllProjects from './components/AllProjects';

function MainLayout({ toggleMusic, isMusicOpen, isDarkMode, toggleTheme }) {
  return (
    <div className="bg-background text-text min-h-screen transition-colors duration-500">
      <div className="bg-grain"></div>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        toggleMusic={toggleMusic}
        isMusicOpen={isMusicOpen}
      />
      
      <main className="max-w-6xl mx-auto relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <MusicPlayer isOpen={isMusicOpen} onClose={() => setIsMusicOpen(false)} />
      <Routes>
        <Route path="/" element={
          <MainLayout 
            toggleMusic={() => setIsMusicOpen(!isMusicOpen)} 
            isMusicOpen={isMusicOpen} 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />
        } />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
