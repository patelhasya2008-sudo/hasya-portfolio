import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Credentials', id: 'certifications' },
    { label: 'Journey', id: 'timeline' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const handleManualThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/45 dark:bg-[#020202]/30 backdrop-blur-xl border-b border-white/30 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Title */}
          <button 
            id="nav-logo"
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-1.5 focus:outline-none cursor-pointer"
          >
            <span className="font-display font-bold text-lg tracking-tight dark:text-white text-black transition-colors">
              Hasya<span className="text-[#0A84FF]">.dev</span>
            </span>
          </button>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden md:flex items-center space-x-1 bg-neutral-100/50 dark:bg-neutral-900/30 border border-neutral-200/20 dark:border-neutral-800/25 px-2 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#0A84FF] dark:text-white'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                {/* Active capsule background pill */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-white dark:bg-[#1C1C1E] border border-neutral-100 dark:border-neutral-800/40 shadow-sm rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Select button */}
            <button
              id="theme-toggler"
              onClick={handleManualThemeToggle}
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Resume button for Desktop */}
            <a
              id="resume-btn"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Hasya Patel Resume (Demo Mock, formatted PDF)');
              }}
              className="hidden md:flex items-center space-x-1 px-4 py-2 text-xs font-semibold rounded-full bg-[#0A84FF] hover:bg-[#0070E3] text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile menu trigger */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full screen Apple list-style Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            className="fixed inset-0 z-40 bg-white dark:bg-black flex flex-col pt-24 px-8 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full py-4 border-b border-neutral-100 dark:border-neutral-900 font-display text-2xl font-semibold tracking-tight transition-all duration-200 cursor-pointer flex justify-between items-center ${
                    activeSection === item.id 
                      ? 'text-[#0A84FF]' 
                      : 'text-neutral-800 dark:text-neutral-300'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span>{item.label}</span>
                  <div className={`w-1.5 h-1.5 rounded-full bg-[#0A84FF] ${activeSection === item.id ? 'opacity-100' : 'opacity-0'}`} />
                </motion.button>
              ))}
            </div>

            <div className="mt-auto mb-10 space-y-4">
              <a
                id="mobile-actions-resume"
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Downloading Hasya Patel Resume Demo Formatter PDF');
                }}
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-[#0A84FF] text-white font-semibold text-sm cursor-pointer"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={16} />
              </a>
              <div className="text-center font-mono text-[10px] text-neutral-400 dark:text-neutral-600">
                patelhasya2008@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
