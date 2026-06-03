import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Code, 
  Code2, 
  Database, 
  Cpu, 
  Palette, 
  Sparkles, 
  Terminal, 
  GitBranch,
  Layers,
  Laptop
} from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = ['All', 'Languages', 'Web Technologies', 'Databases & Tools', 'Specialized'];

  // Map string icon names to Lucide icons with fallback
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="text-[#FF4B2B]" size={18} />;
      case 'FileHtml':
        return <Code className="text-[#E34F26]" size={18} />;
      case 'FileCss':
        return <Layers className="text-[#1572B6]" size={18} />;
      case 'Code':
        return <Code className="text-[#F7DF1E]" size={18} />;
      case 'Code2':
        return <Code2 className="text-[#3178C6]" size={18} />;
      case 'Database':
        return <Database className="text-[#4479A1]" size={18} />;
      case 'Atom':
        return <Cpu className="text-[#61DAFB]" size={18} />;
      case 'Briefcase':
        return <Laptop className="text-neutral-700 dark:text-neutral-200" size={18} />;
      case 'Palette':
        return <Palette className="text-[#38BDF8]" size={18} />;
      case 'Sparkles':
        return <Sparkles className="text-[#0A84FF]" size={18} />;
      case 'Terminal':
        return <Terminal className="text-[#30D158]" size={18} />;
      case 'GitBranch':
        return <GitBranch className="text-[#F05032]" size={18} />;
      default:
        return <Code2 className="text-neutral-400" size={18} />;
    }
  };

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section 
      id="skills" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header content section */}
        <div className="flex flex-col mb-12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
            02 / Competence
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Developer Frameworks & Skills
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 text-xs md:text-sm max-w-lg mt-1 font-sans">
            Rigorous mastery of multiple languages, state systems, database structuring, and generative optimization vectors.
          </p>
          <div className="h-[2px] w-12 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#0A84FF] text-white shadow-md shadow-[#0A84FF]/20 border border-transparent'
                  : 'glass-card-light dark:glass-card-dark text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          id="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 rounded-2xl glass-card-light dark:glass-card-dark overflow-hidden transition-all duration-300"
              >
                {/* Visual gradient light effects on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0A84FF]/2 to-transparent group-hover:from-[#0A84FF]/5 rounded-full blur-xl transition-all duration-300" />
                
                {/* Details layout */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-neutral-100 dark:bg-[#1C1C1E] rounded-xl group-hover:scale-105 transition-transform duration-300">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-[#0A84FF] transition-colors duration-200">
                        {skill.name}
                      </h4>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full mt-4">
                  <div className="w-full h-[3px] bg-neutral-100 dark:bg-[#1C1C1E] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#0a84ff] to-[#30D158] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
