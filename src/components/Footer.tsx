import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-neutral-100 dark:bg-[#040406] text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/40 dark:border-neutral-900 transition-colors py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side branding */}
        <div className="space-y-1.5 text-center md:text-left">
          <p className="font-display font-bold text-base dark:text-white text-neutral-950">
            Hasya Patel<span className="text-[#0A84FF]">.dev</span>
          </p>
          <p className="text-[10px] uppercase font-mono tracking-widest text-[#30D158]">
            Built with extreme precision
          </p>
        </div>

        {/* Middle items direct links */}
        <div className="flex items-center space-x-4">
          <a
            id="footer-github"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            id="footer-linkedin"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-[#0A84FF] dark:hover:text-[#0A84FF] transition-colors cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            id="footer-email"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-[#0A84FF] dark:hover:text-[#0A84FF] transition-colors cursor-pointer"
            aria-label="Mailing link"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right side: top trigger or copy info */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
          <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
            © {new Date().getFullYear()} Hasya Patel. All rights reserved.
          </p>
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all cursor-pointer shadow-sm"
          >
            <ArrowUp size={12} />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
