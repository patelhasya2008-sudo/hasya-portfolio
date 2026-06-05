import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Download, Mail, ChevronDown, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
// @ts-ignore
import hasyaColorPhoto from '../assets/images/hasya_color_photo_1780474446676.png';

interface FloatingCodeProps {
  code: string;
  className: string;
  delay: number;
}

function FloatingCode({ code, className, delay }: FloatingCodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.65, 0.9, 0.65], 
        y: [0, -14, 0],
        rotate: [0, 1.5, -1.5, 0],
        scale: [1, 1.01, 0.99, 1]
      }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`hidden lg:flex items-center space-x-2 px-3 py-2 rounded-xl border border-neutral-200/40 dark:border-neutral-800/80 bg-white/50 dark:bg-[#121214]/50 backdrop-blur-md shadow-lg font-mono text-[10.5px] text-neutral-600 dark:text-neutral-300 select-none z-20 pointer-events-none absolute ${className}`}
    >
      <Code size={11} className="text-[#0A84FF]" />
      <span>{code}</span>
    </motion.div>
  );
}

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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent py-20 px-6 transition-colors animate-fade-in"
    >
      {/* 3D Gradient Background with Interactive Grid Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 transition-colors">
        {/* Dynamic mesh radial glow layers */}
        <div className="absolute inset-0 opacity-40 dark:opacity-60 bg-[radial-gradient(circle_at_25%_30%,rgba(10,132,255,0.14)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(48,209,88,0.11)_0%,transparent_50%),radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.11)_0%,transparent_50%)]" />
        
        {/* 3D Perspective Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.14] text-neutral-400 dark:text-[#0A84FF]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            transform: 'perspective(600px) rotateX(65deg) translateY(-25%) scale(1.7)',
            transformOrigin: 'top center',
          }}
        />

        {/* Ambient Blur Spheres */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-[#0A84FF]/10 dark:bg-[#0A84FF]/8 blur-[100px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[#30D158]/8 dark:bg-[#30D158]/6 blur-[120px]"
          animate={{
            x: [0, -30, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Animated Coding Elements */}
      <FloatingCode 
        code='const dev = { name: "Hasya Patel" };' 
        className="top-[18%] left-[8%]" 
        delay={0} 
      />
      <FloatingCode 
        code='import { Web } from "developer";' 
        className="top-[14%] right-[10%]" 
        delay={1.5} 
      />
      <FloatingCode 
        code='cgpa: "9.86 / 10.00"' 
        className="bottom-[22%] left-[6%]" 
        delay={3} 
      />
      <FloatingCode 
        code='const solver = (problem) => code;' 
        className="bottom-[26%] right-[51%]" 
        delay={0.8} 
      />
      <FloatingCode 
        code='<React speed="lightning" />' 
        className="top-[45%] right-[6%]" 
        delay={2.2} 
      />
      <FloatingCode 
        code='npm run build --success' 
        className="bottom-[18%] right-[8%]" 
        delay={4.1} 
      />

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

          {/* Large Introduction: "Hi, I'm Hasya Patel" */}
          <div className="relative">
            <motion.p
              id="hero-greeting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-[#0A84FF] dark:text-[#0A84FF] text-[13px] tracking-widest uppercase font-bold mb-3 flex items-center gap-1.5 justify-center lg:justify-start"
            >
              <Sparkles size={11} />
              <span>Personal Portfolio</span>
            </motion.p>
            
            <motion.h1
              id="hero-main-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.08] select-none"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] via-purple-500 to-[#30D158] bg-size-200 font-black">
                Hasya Patel
              </span>
            </motion.h1>
          </div>

          {/* Subtitle: "Web Developer • Problem Solver • Tech Enthusiast" */}
          <motion.div
            id="hero-subtitle-bullets"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-2 md:gap-x-3.5 gap-y-2 font-mono text-[12px] sm:text-xs md:text-sm font-bold text-neutral-700 dark:text-neutral-300 tracking-wider"
          >
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/80">Web Developer</span>
            <span className="text-[#0A84FF]">•</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/80">Problem Solver</span>
            <span className="text-[#30D158]">•</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/80">Tech Enthusiast</span>
          </motion.div>

          {/* Typing Carousel Container */}
          <motion.div
            id="hero-typing-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-8 mt-5 flex items-center justify-center lg:justify-start"
          >
            <span className="font-sans text-sm md:text-base text-neutral-500 dark:text-neutral-400 tracking-tight font-medium">
              Specialized in{' '}
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
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-neutral-500 dark:text-neutral-400 max-w-lg mt-5 text-xs md:text-sm leading-relaxed font-sans"
          >
            Computer Engineering student honoring critical software design standards with an incredible{' '}
            <span className="text-[#30D158] font-bold">{PERSONAL_INFO.cgpa} CGPA</span>. Developing highly interactive React applications, prompt engineering, and full stack database structures.
          </motion.p>

          {/* Call-to-action buttons: View Projects and Contact Me */}
          <motion.div
            id="hero-cta-cluster"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <button
              id="hero-cta-projects"
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto group flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-[#0A84FF] hover:bg-[#0070E3] hover:shadow-lg hover:shadow-blue-500/20 text-white text-xs font-bold active:scale-98 transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              id="hero-cta-contact"
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-4 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 text-xs font-bold hover:shadow-sm active:scale-98 transition-all cursor-pointer backdrop-blur-sm"
            >
              <Mail size={13} className="text-neutral-500 dark:text-neutral-400" />
              <span>Contact Me</span>
            </button>

            {/* Minor tertiary Action: Resume Download */}
            <a
              id="hero-cta-resume"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Resume (Demo format PDF loaded for student Hasya Patel)');
              }}
              className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white dark:text-neutral-400 dark:hover:text-neutral-100 text-xs font-semibold py-2 px-3 hover:underline hidden sm:inline-flex items-center space-x-1 transition-colors"
            >
              <Download size={11} />
              <span>Get Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Perfect Styled Profile Avatar Circle */}
        <motion.div
          id="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 px-4 selection:bg-none relative"
        >
          {/* Double-bordered lavender circular frame */}
          <div className="relative p-3 md:p-4 rounded-full border border-violet-400/80 dark:border-violet-500/80 bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-2xl transition-all">
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
