/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Try to default to system theme pref or default to dark (minimalism elegance)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hasya_portfolio_theme');
      if (saved) return saved === 'dark';
      
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemDark;
    }
    return true; // Default to dark
  });

  // Keep theme choice in local storage
  useEffect(() => {
    localStorage.setItem('hasya_portfolio_theme', darkMode ? 'dark' : 'light');
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#020202] text-neutral-950 dark:text-neutral-50 transition-colors duration-300 font-sans selection:bg-[#0a84ff]/20">
      
      {/* Dynamic Background Glowing Mesh Circles for Frosted Glass styling */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] left-[-10%] w-[50vw] h-[50vw] rounded-full glowing-mesh-blue blur-[90px] dark:blur-[140px] opacity-70" />
        <div className="absolute bottom-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full glowing-mesh-green blur-[100px] dark:blur-[150px] opacity-60" />
        <div className="absolute top-[65%] left-[20%] w-[40vw] h-[40vw] rounded-full glowing-mesh-blue blur-[100px] dark:blur-[150px] opacity-40" />
      </div>

      {/* Precision Trailing Custom Cursor */}
      <CustomCursor />

      {/* Intro sequence loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main app layout wrapper */}
      {!isLoading && (
        <div id="portfolio-app-root" className="relative">
          
          {/* Glassmorphic Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Page segments */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Timeline />
            <Contact />
          </main>

          {/* Footer segment */}
          <Footer />
        </div>
      )}
    </div>
  );
}

