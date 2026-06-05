import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, MapPin, ClipboardList, TrendingUp, Sparkles, Briefcase, FileBadge, ExternalLink, Calendar, Plus, User, Code } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, SKILLS } from '../data';
import ScrollReveal from './ScrollReveal';
import Magnetic from './Magnetic';

export default function About() {
  const [profileHovered, setProfileHovered] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      id="about" 
      className="py-28 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10 overflow-hidden"
    >
      {/* Decorative glass glow backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0A84FF]/2 dark:bg-[#0A84FF]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#30D158]/2 dark:bg-[#30D158]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with subtle accent */}
        <ScrollReveal direction="up" duration={0.8}>
          <div className="flex flex-col mb-16 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-black flex items-center gap-1.5">
              <Sparkles size={11} className="animate-spin-slow text-[#0A84FF]" />
              <span>01 / Biography & Metrics</span>
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Professional Identity
            </h2>
            <p className="text-neutral-400 dark:text-neutral-500 text-xs md:text-sm max-w-sm mt-1 font-sans">
              Merging computer engineering principles with responsive visual craftsmanship.
            </p>
            <div className="h-[2.5px] w-14 bg-gradient-to-r from-[#0A84FF] to-[#30D158] rounded mt-4" />
          </div>
        </ScrollReveal>

        {/* Modular Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          
          {/* Column 1: Professional profile card & stats (Lg: 5/12 span) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            
            {/* Professional Profile Card with interactive glass framework */}
            <motion.div
              variants={itemVariants}
              onMouseEnter={() => setProfileHovered(true)}
              onMouseLeave={() => setProfileHovered(false)}
              className="relative p-8 rounded-[32px] border border-neutral-200/60 dark:border-white/5 bg-white/40 dark:bg-neutral-900/30 backdrop-blur-xl shadow-xl overflow-hidden group/profile-card"
            >
              {/* Dynamic glass gloss flare */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#0a84ff]/3 via-transparent to-[#30d158]/3 opacity-0 group-hover/profile-card:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#0a84ff]/5 dark:bg-[#0a84ff]/8 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row xl:flex-col gap-6 items-center sm:items-start xl:items-center text-center sm:text-left xl:text-center relative z-10">
                
                {/* Glowing Avatar Placeholder with Cybernetic Frame */}
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#0A84FF] via-purple-500 to-[#30D158] opacity-75 blur-md group-hover/profile-card:scale-105 group-hover/profile-card:opacity-100 transition-all duration-500 animate-spin-slow" />
                  <div className="relative w-24 h-24 rounded-full bg-neutral-950 flex items-center justify-center border-2 border-white dark:border-neutral-900 overflow-hidden shadow-inner">
                    <span className="font-display text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-neutral-400">
                      HP
                    </span>
                    {/* Concentric diagnostic lines */}
                    <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-15" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="1" strokeDasharray="4 6" fill="none" />
                    </svg>
                  </div>
                  {/* Glowing online check dot badge */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#30D158] rounded-full border-[3px] border-white dark:border-[#101012] shadow-md shadow-[#30D158]/50" />
                </div>

                {/* Profile Identity Details block */}
                <div className="space-y-3 flex-1">
                  <div>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider text-[#30D158] bg-[#30D158]/10 border border-[#30D158]/20 mb-2 uppercase">
                      ● Active Placement Opportunity
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="font-mono text-[10.5px] font-bold text-[#0A84FF] uppercase tracking-widest mt-1">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>

                  <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed max-w-xs mx-auto sm:mx-0 xl:mx-auto">
                    Top-tier Computer Engineering Student with terminal score structures and clean architectural designs.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start xl:justify-center gap-2 text-[11px] font-mono text-neutral-600 dark:text-neutral-300">
                    <span className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-1 rounded-lg">
                      <MapPin size={11} className="text-[#0a84ff]" />
                      <span>{PERSONAL_INFO.location}</span>
                    </span>
                    <span className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-1 rounded-lg">
                      <Award size={11} className="text-[#30d158]" />
                      <span>CGPA {PERSONAL_INFO.cgpa} / 10</span>
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Statistics Cards Zone: Projects, Certifications, and Skills in high contrast bento card slots */}
            <div className="grid grid-cols-3 gap-4">
              
              {/* Stat Card 1: Projects Completed */}
              <motion.div
                variants={itemVariants}
                className="group/stat-card relative p-5 rounded-2xl border border-neutral-200/50 dark:border-white/5 bg-white/40 dark:bg-neutral-950/20 backdrop-blur-md shadow-md text-center hover:border-[#0A84FF]/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0a84ff] to-transparent opacity-40" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold block mb-1">Projects</span>
                <span className="font-display text-3xl font-extrabold tracking-tighter text-neutral-900 dark:text-white block group-hover/stat-card:scale-105 transition-transform duration-300">
                  {PROJECTS.length}+
                </span>
                <span className="font-sans text-[9px] text-neutral-400 font-medium block mt-1 leading-none">Completed</span>
              </motion.div>

              {/* Stat Card 2: Technical Certifications */}
              <motion.div
                variants={itemVariants}
                className="group/stat-card relative p-5 rounded-2xl border border-neutral-200/50 dark:border-white/5 bg-white/40 dark:bg-neutral-950/20 backdrop-blur-md shadow-md text-center hover:border-purple-500/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-40" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold block mb-1">Certs</span>
                <span className="font-display text-3xl font-extrabold tracking-tighter text-neutral-900 dark:text-white block group-hover/stat-card:scale-105 transition-transform duration-300">
                  {CERTIFICATIONS.length}
                </span>
                <span className="font-sans text-[9px] text-neutral-400 font-medium block mt-1 leading-none">Credentialed</span>
              </motion.div>

              {/* Stat Card 3: Skills Verified */}
              <motion.div
                variants={itemVariants}
                className="group/stat-card relative p-5 rounded-2xl border border-neutral-200/50 dark:border-white/5 bg-white/40 dark:bg-neutral-950/20 backdrop-blur-md shadow-md text-center hover:border-[#30D158]/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#30D158] to-transparent opacity-40" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold block mb-1">Skills</span>
                <span className="font-display text-3xl font-extrabold tracking-tighter text-neutral-900 dark:text-white block group-hover/stat-card:scale-105 transition-transform duration-300">
                  {SKILLS.length}+
                </span>
                <span className="font-sans text-[9px] text-neutral-400 font-medium block mt-1 leading-none">Verified Core</span>
              </motion.div>

            </div>

          </div>

          {/* Column 2: Biography & Education Timeline (Lg: 7/12 span) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10 xl:pl-6">
            
            {/* Elegant Short Biography layout */}
            <motion.div 
              variants={itemVariants}
              className="space-y-5 p-7 md:p-8 rounded-[32px] border border-neutral-200/50 dark:border-white/5 bg-white/30 dark:bg-neutral-900/10 backdrop-blur-md shadow-lg"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Code size={18} className="text-[#0A84FF]" />
                <span>The Engineering Philosophy</span>
              </h3>
              
              <div className="space-y-4 text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-normal">
                <p>
                  {PERSONAL_INFO.summary}. I model software as a functional ecosystem requiring clean semantic logic, rigorous type parameters, and lightweight interface transitions. 
                </p>
                <p>
                  Balancing the structured thinking of a formal computer engineering curriculum at GTU with immediate exploration of full-stack ecosystems, I specialize in web optimization protocols. I design components to load instantly and run adaptively, ensuring responsive aesthetics match structural durability.
                </p>
              </div>
            </motion.div>

            {/* Education Timeline Block */}
            <motion.div 
              variants={itemVariants} 
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 pb-1.5 border-b border-neutral-200/60 dark:border-neutral-900">
                <GraduationCap size={18} className="text-[#30D158]" />
                <h4 className="font-mono text-[10.5px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-extrabold">
                  Education & Academic Timeline
                </h4>
              </div>

              {/* Enhanced timeline nodes with custom badges */}
              <div className="relative border-l border-neutral-200 dark:border-neutral-900 pl-6 ml-3.5 space-y-8">
                
                {/* School milestone 1: GTU COMPUTER ENGINEERING */}
                <div className="relative group/timeline-node">
                  {/* Floating active blue bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0A84FF] ring-[6px] ring-white dark:ring-[#08080A] group-hover/timeline-node:scale-110 group-hover/timeline-node:shadow-[0_0_8px_rgba(10,132,255,0.7)] transition-all duration-300" />
                  
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h5 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <span>Diploma in Computer Engineering</span>
                        <span className="font-mono text-[9px] font-bold text-[#0A84FF] bg-[#0A84FF]/10 px-2 py-0.5 rounded">GTU</span>
                      </h5>
                      <span className="font-mono text-[10.5px] text-neutral-400 font-bold flex items-center gap-1">
                        <Calendar size={11} /> 2023 - 2026
                      </span>
                    </div>
                    
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">
                      Gujarat Technological University Syllabus Equivalent • Top 1% Grade Bracket
                    </p>
                    
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl font-sans font-light">
                      Technical education specializing in relational model configurations, algorithm optimizations (Python, C, JavaScript), network engineering foundations, software development cycles, and detailed API schemas.
                    </p>

                    {/* Academic Accomplishment bullet list */}
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9.5px]">
                      <span className="px-2.5 py-1 rounded bg-[#30D158]/5 dark:bg-[#30D158]/10 text-[#30D158] font-bold border border-[#30D158]/10">
                        CGPA: {PERSONAL_INFO.cgpa} / 10
                      </span>
                      <span className="px-2.5 py-1 rounded bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-500 font-bold border border-indigo-500/10">
                        Systems Design Focus
                      </span>
                    </div>
                  </div>
                </div>

                {/* School milestone 2: SELF-DIRECTED SYLLABUS & RESEARCH */}
                <div className="relative group/timeline-node">
                  {/* Floating active green bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#30D158] ring-[6px] ring-white dark:ring-[#08080A] group-hover/timeline-node:scale-110 group-hover/timeline-node:shadow-[0_0_8px_rgba(48,209,88,0.7)] transition-all duration-300" />
                  
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h5 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <span>Self-Organized Technical Mastery</span>
                        <span className="font-mono text-[9px] font-bold text-[#30D158] bg-[#30D158]/10 px-2 py-0.5 rounded">Continuous</span>
                      </h5>
                      <span className="font-mono text-[10.5px] text-neutral-400 font-bold flex items-center gap-1">
                        <Calendar size={11} /> Since 2024
                      </span>
                    </div>
                    
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">
                      Advanced Professional Full Stack & Artificial Intelligence Curriculums
                    </p>
                    
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl font-sans font-light">
                      Rigorous study of enterprise cloud databases, component frameworks (React, Next.js), and generative artificial intelligence architectures. Engineered testbeds for prompt injection boundaries and model latency analysis.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9.5px]">
                      <span className="px-2.5 py-1 rounded bg-[#0A84FF]/5 dark:bg-[#0A84FF]/10 text-[#0A84FF] font-bold border border-[#0A84FF]/10">
                        Generative AI Verified
                      </span>
                      <span className="px-2.5 py-1 rounded bg-purple-500/5 dark:bg-purple-500/10 text-purple-500 font-bold border border-purple-500/10">
                        Microsoft Prompt Specialist
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

