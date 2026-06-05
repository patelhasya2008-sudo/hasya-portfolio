import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, X, Sparkles, Clock, User, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Simple Mouse Tilt State for tilt cards
  const [tiltStyle, setTiltStyle] = useState<{ [key: string]: string }>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate relative to the card.
    const y = e.clientY - rect.top;  // y coordinate relative to the card.
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angle (max 5 degrees)
    const rotateX = ((centerY - y) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTiltStyle((prev) => ({
      ...prev,
      [id]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltStyle((prev) => ({
      ...prev,
      [id]: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    }));
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.8}>
          <div className="flex flex-col mb-16 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
              03 / Works
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-neutral-400 dark:text-neutral-500 text-xs md:text-sm max-w-sm mt-1 font-sans">
              Crafted for speed, modular UI states, and robust schema constraints.
            </p>
            <div className="h-[2px] w-12 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 0.15} duration={0.9}>
              <div
                id={`project-card-${project.id}`}
                className="group relative cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                onClick={() => setSelectedProject(project)}
                style={{
                  transform: tiltStyle[project.id] || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d',
                }}
              >
              {/* Outer Glow Wrapper on Hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#0a84ff]/10 to-[#30D158]/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none" />

              {/* Card Container */}
              <div className="relative h-full flex flex-col glass-card-light dark:glass-card-dark rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
                
                {/* Custom Stylized CSS Screenshot Placeholder mock */}
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-tr from-neutral-200/70 to-neutral-100 dark:from-neutral-950 dark:to-[#1a1a22] flex items-center justify-center p-8 relative border-b border-neutral-100 dark:border-neutral-900">
                  
                  {/* Subtle Background Art */}
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[radial-gradient(#0A84FF_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Hover Image Zoom wrapper */}
                  <motion.div
                    className="w-full h-full max-w-sm rounded-xl border border-white/20 dark:border-neutral-800/80 bg-white/70 dark:bg-black/70 shadow-2xl p-4 flex flex-col justify-between overflow-hidden relative backdrop-blur-sm"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-neutral-200/50 dark:border-neutral-800/40 pb-2 mb-2">
                      <div className="flex space-x-1">
                        <span className="w-2 h-2 rounded-full bg-[#FF453A]" />
                        <span className="w-2 h-2 rounded-full bg-[#FFD60A]" />
                        <span className="w-2 h-2 rounded-full bg-[#30D158]" />
                      </div>
                      <span className="font-mono text-[8px] bg-neutral-200/50 dark:bg-neutral-900 px-2 py-0.5 rounded text-neutral-400">
                        {project.id === 'foodie-fleet' ? 'foodie-fleet.live' : 'healthcloud-pro.app'}
                      </span>
                    </div>

                    {/* Inside Mock graphic layout */}
                    <div className="flex-1 flex flex-col justify-center space-y-2">
                      <span className="font-display font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
                        {project.title}
                      </span>
                      <div className="flex gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="font-mono text-[8px] text-[#0A84FF] bg-[#0A84FF]/10 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* CSS Mocking blocks */}
                      <div className="space-y-1 pt-1 opacity-60">
                        <div className="h-1.5 w-full bg-neutral-300 dark:bg-neutral-800 rounded-sm" />
                        <div className="h-1.5 w-4/5 bg-neutral-300 dark:bg-neutral-800 rounded-sm" />
                      </div>
                    </div>

                    {/* Live ping icon */}
                    <div className="absolute bottom-3 right-3 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30D158] animate-pulse" />
                      <span className="font-mono text-[7px] text-neutral-400">active server</span>
                    </div>
                  </motion.div>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#0A84FF] tracking-wider px-2.5 py-0.5 rounded-full bg-[#0A84FF]/10">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                        {project.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#0A84FF] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Horizontal dividers & tag arrays */}
                  <div className="mt-5 space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                    {/* Technology Badges with distinctive premium tint classes */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => {
                        let colorClass = 'bg-neutral-100 dark:bg-[#1C1C1E] text-neutral-600 dark:text-neutral-400';
                        if (tag === 'React' || tag === 'Next.js' || tag === 'Motion Layout') {
                          colorClass = 'bg-[#0A84FF]/10 text-[#0A84FF] dark:bg-[#0A84FF]/8';
                        } else if (tag === 'TypeScript' || tag === 'JavaScript') {
                          colorClass = 'bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/8';
                        } else if (tag === 'MySQL / API' || tag === 'Local Databases') {
                          colorClass = 'bg-[#30D158]/10 text-[#30D158] dark:bg-[#30D158]/8';
                        } else if (tag === 'Tailwind' || tag === 'Tailwind CSS') {
                          colorClass = 'bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/8';
                        }
                        
                        return (
                          <span 
                            key={tag} 
                            className={`font-mono text-[9.5px] font-bold tracking-tight px-3 py-1 rounded-md transition-colors ${colorClass}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {/* Direct Action buttons (Live Demo & GitHub) with premium hover animations */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Launching live simulation sandbox for "${project.title}"`);
                        }}
                        className="flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl bg-[#0A84FF] hover:bg-[#0070E3] text-white text-xs font-bold shadow-md hover:shadow-[#0A84FF]/20 hover:scale-[1.015] active:scale-[0.985] transition-all cursor-pointer group/btn"
                      >
                        <ExternalLink size={12} className="group-hover/btn:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="flex items-center justify-center space-x-1.5 py-3 px-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-[#121214]/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-[#E1E1E6] text-xs font-bold hover:scale-[1.015] active:scale-[0.985] transition-all cursor-pointer group/git"
                      >
                        <Github size={12} className="group-hover/git:scale-110 transition-transform" />
                        <span>GitHub Repo</span>
                      </a>
                    </div>

                    {/* Read Case study trigger text */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-neutral-600 dark:text-neutral-400 pt-2.5 group-hover:text-[#0A84FF] transition-all duration-300">
                      <span className="flex items-center gap-1.5">
                        <Sparkles size={11} className="text-[#0A84FF]" />
                        <span>Explore Comprehensive Case Study Case Study</span>
                      </span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#0A84FF]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="case-study-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Box */}
            <motion.div
              id="case-study-modal"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-container-light dark:glass-container-dark rounded-3xl text-neutral-950 dark:text-neutral-100 shadow-2xl"
              initial={{ scale: 0.93, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            >
              {/* Close Button sticky wrapper */}
              <div className="sticky top-0 bg-white/30 dark:bg-[#0E0E12]/30 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/20 dark:border-white/5 z-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#0A84FF] font-black">
                  Developer Case Study
                </span>
                <button
                  id="case-study-close"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Modal Core Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <User size={13} className="text-[#0A84FF]" /> {selectedProject.role}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-[#30D158]" /> {selectedProject.duration}
                    </span>
                  </div>
                </div>

                {/* Long Description and goals */}
                <div className="space-y-3 font-sans">
                  <h4 className="font-mono text-[10px] uppercase text-[#0A84FF] font-bold tracking-widest">
                    Project Architecture & Objectives
                  </h4>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Technical Features list */}
                <div className="space-y-3.5 pl-0.5">
                  <h4 className="font-mono text-[10px] uppercase text-[#30D158] font-bold tracking-widest">
                    Core Engineering Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                        <CheckCircle2 size={16} className="text-[#30D158] mt-0.5 mr-3 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Action Link Blocks inside Modal */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-100 dark:border-neutral-950">
                  <button
                    id="case-study-live-demo"
                    onClick={() => alert(`Launching sandbox simulation for ${selectedProject.title}`)}
                    className="flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-[#0A84FF] hover:bg-[#0070E3] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    <span>Launch Static Simulation</span>
                  </button>

                  <a
                    id="case-study-github"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900/40 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-[#E1E1E6] text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Github size={14} />
                    <span>View Repository on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
