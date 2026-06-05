import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import Magnetic from './Magnetic';

interface QuickLinkProps {
  label: string;
  targetId: string;
}

function QuickLink({ label, targetId }: QuickLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="text-neutral-500 hover:text-[#0A84FF] dark:text-neutral-400 dark:hover:text-[#0A84FF] font-sans text-xs font-semibold tracking-tight transition-colors duration-200 cursor-pointer"
    >
      {label}
    </a>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="portfolio-footer" 
      className="bg-neutral-100/50 dark:bg-[#030304] text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/50 dark:border-neutral-900/60 transition-all py-16 px-6 relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Upper footer zone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Brand block: (Span 4) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display font-black text-lg dark:text-white text-neutral-950 tracking-tight">
                Hasya Patel<span className="text-[#0A84FF]">.dev</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#30D158]/10 text-[#30D158] font-bold tracking-widest leading-none">
                CGPA {PERSONAL_INFO.cgpa}
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed font-sans font-light">
              Computer Engineering Student focused on professional full stack design, standard-compliant systems, and GenAI solutions. Dedicated to creating fluid digital platforms.
            </p>
          </div>

          {/* Quick Navigation: (Span 4) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0A84FF] font-bold">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-center md:text-left">
              <QuickLink label="Home Space" targetId="hero" />
              <QuickLink label="Core Identity" targetId="about" />
              <QuickLink label="Expertise" targetId="skills" />
              <QuickLink label="Works Grid" targetId="projects" />
              <QuickLink label="Credential Verification" targetId="certifications" />
              <QuickLink label="Career Path" targetId="timeline" />
              <QuickLink label="Connection Hub" targetId="contact" />
            </div>
          </div>

          {/* Connect actions: (Span 3) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
              Connect Channels
            </span>
            <div className="flex items-center space-x-3.5">
              <Magnetic range={35} strength={0.3}>
                <a
                  id="footer-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
              </Magnetic>

              <Magnetic range={35} strength={0.3}>
                <a
                  id="footer-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:text-[#0A84FF] dark:hover:text-[#0A84FF] hover:border-[#0A84FF]/30 dark:hover:border-[#0A84FF]/20 hover:shadow-md transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
              </Magnetic>

              <Magnetic range={35} strength={0.3}>
                <a
                  id="footer-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:text-[#0A84FF] dark:hover:text-[#0A84FF] hover:border-[#0A84FF]/30 dark:hover:border-[#0A84FF]/20 hover:shadow-md transition-all cursor-pointer"
                  aria-label="Send direct message"
                >
                  <Mail size={16} />
                </a>
              </Magnetic>
            </div>
          </div>

        </div>

        {/* Horizontal Divider */}
        <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-900 opacity-60" />

        {/* Lower footer zone */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 text-center md:text-left">
            © {new Date().getFullYear()} Hasya Patel. Built with premium motion standards. All copyright registered.
          </p>
          
          <Magnetic range={25} strength={0.15}>
            <button
              id="footer-scroll-top"
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-all cursor-pointer shadow-sm text-xs font-bold font-mono tracking-tight"
            >
              <ArrowUp size={12} className="animate-bounce" />
              <span>Scroll to Top</span>
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}
