import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import BentoSkills from './components/BentoSkills';
import TechSkills from './components/TechSkills';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';


// --- Main App Entry ---

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default behavior
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-700 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <Hero />
          <TechMarquee />
          <BentoSkills mousePos={mousePos} />
          <TechSkills />
          <ProjectGrid activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;