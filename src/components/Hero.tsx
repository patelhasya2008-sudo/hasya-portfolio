import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Download, Mail, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
// @ts-ignore
import hasyaColorPhoto from '../assets/images/hasya_color_photo_1780474446676.png';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    'Computer Engineering Student',
    'Full Stack Web Developer',
    'Generative AI Builder',
    'Problem Solver',
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(currentFullRole.substring(0, typedText.length + 1));
        
        if (typedText === currentFullRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(handleTyping, 70);
        }
      } else {
        setTypedText(currentFullRole.substring(0, typedText.length - 1));
        
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          timer = setTimeout(handleTyping, 40);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent py-20 px-6 transition-colors"
    >
      {/* Dynamic Floating Ambient Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-[#0A84FF]/12 dark:bg-[#0A84FF]/8 blur-[100px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[#30D158]/10 dark:bg-[#30D158]/6 blur-[120px]"
          animate={{
            x: [0, -30, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">
        
        {/* Left Column: Text & Details */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 px-4 sm:px-6">
          {/* Intro Pill Tag */}
          <motion.div
            id="hero-intro-pill"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-md shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#30D158] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#30D158]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold">
              Open to Off-campus Opportunities & Internships
            </span>
          </motion.div>

          {/* Hello Greeting */}
          <motion.p
            id="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[#0A84FF] dark:text-[#0A84FF] text-sm tracking-widest uppercase font-semibold mb-3"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          {/* Main Display Title */}
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-8xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.05]"
          >
            Hasya Patel
          </motion.h1>

          {/* Subtitle / Typing Carousel Container */}
          <motion.div
            id="hero-typing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-10 mt-6 md:mt-8 flex items-center justify-center lg:justify-start"
          >
            <span className="font-sans text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 tracking-tight font-medium">
              I am a{' '}
              <span className="text-neutral-900 dark:text-white font-semibold border-r-2 border-[#0A84FF] pr-1 animate-pulse">
                {typedText}
              </span>
            </span>
          </motion.div>

          {/* Small introductory summary text */}
          <motion.p
            id="hero-summary"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-neutral-500 dark:text-neutral-400 max-w-lg mt-6 text-sm md:text-base leading-relaxed font-sans"
          >
            Honoring high precision engineering with a{' '}
            <span className="text-[#30D158] font-semibold">{PERSONAL_INFO.cgpa} CGPA</span>. Crafting next-generation responsive systems and integrating prompt-based generative node behaviors.
          </motion.p>

          {/* Triple Action CTA Button Setup */}
          <motion.div
            id="hero-cta-cluster"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-3.5 mt-10 w-full sm:w-auto"
          >
            <button
              id="hero-cta-projects"
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto group flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#0A84FF] hover:bg-[#0070E3] text-white text-xs font-semibold shadow-md active:scale-98 transition-all cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="hero-cta-resume"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Resume (Demo format PDF loaded for student Hasya Patel)');
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Download size={13} />
              <span>Get Resume</span>
            </a>

            <button
              id="hero-cta-contact"
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <Mail size={13} />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Perfect Styled Profile Avatar Circle (built exactly like reference image) */}
        <motion.div
          id="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 px-4 selection:bg-none"
        >
          {/* Double-bordered lavender circular frame (Reference match) */}
          <div className="relative p-3 md:p-4 rounded-full border border-violet-400/80 dark:border-violet-500/80 bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-2xl">
            {/* White/Dark background gap ring */}
            <div className="rounded-full bg-white dark:bg-[#020202] p-1 shadow-inner md:w-80 md:h-80 w-64 h-64 overflow-hidden relative">
              <a
                href="https://kommodo.ai/i/MERynkS8oD7DpjNqMGp4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
                title="View original image link"
              >
                <img
                  src={hasyaColorPhoto}
                  referrerPolicy="no-referrer"
                  alt="Hasya Patel"
                  className="w-full h-full object-cover object-[center_18%] rounded-full hover:scale-105 transition-all duration-700 pointer-events-auto"
                />
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Down arrow indicator scroll trigger */}
      <motion.div
        id="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0], y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Scroll Down</span>
        <ChevronDown size={14} className="text-neutral-400" />
      </motion.div>
    </section>
  );
}
