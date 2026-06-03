import { motion } from 'motion/react';
import { Award, GraduationCap, MapPin, ClipboardList, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      id="about" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with subtle accent */}
        <div className="flex flex-col mb-16 space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
            01 / Background
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            About Hasya Patel
          </h2>
          <div className="h-[2px] w-12 bg-neutral-200 dark:bg-neutral-800 rounded mt-3" />
        </div>

        {/* Modular Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: Academic Excellence Visual Card (Lg: 5/12 span) */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            variants={itemVariants}
          >
            {/* The 9.86 CGPA Apple-style Bento Display */}
            <div className="relative p-8 rounded-3xl bg-[#000000] border border-neutral-900/60 overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              {/* Outer micro glass element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#30D158]/8 to-transparent rounded-full blur-2xl" />
              
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#30D158]/15 text-[#30D158] rounded-xl">
                  <Award size={22} />
                </div>
                <span className="font-mono text-[10px] bg-[#30D158]/15 text-[#30D158] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Perfect Score Bracket
                </span>
              </div>

              {/* Huge CGPA Number Showcase */}
              <div className="mt-6 space-y-1">
                <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider">
                  Cumulated Academic CGPA
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="font-display text-6xl md:text-7xl font-extrabold tracking-tight text-white">
                    {PERSONAL_INFO.cgpa}
                  </span>
                  <span className="font-mono text-neutral-400 text-lg">/ 10.00</span>
                </div>
              </div>

              {/* Progress representation gauge bar */}
              <div className="mt-6">
                <div className="w-full h-2 bg-neutral-900 border border-neutral-800/40 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#0a84ff] to-[#30D158] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '98.6%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2.5 text-[11px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1">
                    <TrendingUp size={11} className="text-[#30D158]" /> Outstanding performance scale
                  </span>
                  <span>98.6% Record</span>
                </div>
              </div>
            </div>

            {/* Quick Metadata list card */}
            <div className="p-6 rounded-3xl bg-[#000000] border border-neutral-900/60 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <div className="flex items-center space-x-3 text-sm text-neutral-300">
                <div className="p-2 bg-neutral-800/40 border border-neutral-800/30 rounded-lg text-neutral-200">
                  <GraduationCap size={15} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Enrollment status</p>
                  <p className="font-medium text-white">Computer Engineering Diploma Student</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-neutral-300">
                <div className="p-2 bg-neutral-800/40 border border-neutral-800/30 rounded-lg text-neutral-200">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Base coordinates</p>
                  <p className="font-medium text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-neutral-300">
                <div className="p-2 bg-neutral-800/40 border border-neutral-800/30 rounded-lg text-neutral-200">
                  <ClipboardList size={15} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Academic Focus</p>
                  <p className="font-medium text-white">Full Stack Architecture & Cloud GenAI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Detailed Story & timelines (Lg: 7/12 span) */}
          <motion.div 
            className="lg:col-span-7 space-y-8 lg:pl-4"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">
                Engineering software tailored for performance.
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
                {PERSONAL_INFO.summary}. I am strongly committed to the craft of front-end execution and API optimizations, maintaining flawless coding layouts and absolute visual alignment.
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
                Throughout my academic years, I have prioritized modular development paradigms, ensuring both small applications and comprehensive systems are built using solid and durable structures.
              </p>
            </div>

            {/* Timed milestone timeline inside About (Academic Education Focus) */}
            <div className="space-y-5">
              <h4 className="font-mono text-[10px] uppercase text-[#0A84FF] tracking-wider font-semibold">
                Core Academic Foundations
              </h4>
              
              <div className="relative border-l border-neutral-100 dark:border-neutral-900 pl-6 ml-2.5 space-y-6">
                
                {/* School block 1 */}
                <div className="relative">
                  {/* Floating bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0A84FF] ring-[6px] ring-white dark:ring-[#08080A]" />
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        Diploma in Computer Engineering
                      </h5>
                      <span className="font-mono text-xs text-neutral-400">2023 - 2026</span>
                    </div>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">
                      Gujarat Technological University (GTU Equivalent Syllabus)
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-1 leading-relaxed">
                      Rigorous technical education specializing in algorithm complexity, database systems (MySQL), programming methodologies (Python, C, JS), application framework cycles, and systems testing criteria.
                    </p>
                  </div>
                </div>

                {/* Secondary learning */}
                <div className="relative">
                  {/* Floating bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#30D158] ring-[6px] ring-white dark:ring-[#08080A]" />
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h5 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        Self-Directed Advanced Curriculum
                      </h5>
                      <span className="font-mono text-xs text-neutral-400">Continuous</span>
                    </div>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">
                      Independent Technical Mastery (AI, Full Stack, Optimization)
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-1 leading-relaxed">
                      Completed professional certifications in Cloud-scale Generative AI from Google Cloud and Microsoft Prompt Engineering architectures, testing prompt latency and vector memory parameters.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
