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
  Laptop,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

const SKILL_DETAILS: Record<string, string[]> = {
  'Python': ['Core Scripting', 'Data Structures', 'Algorithmic Efficiency', 'Model Prototyping'],
  'HTML': ['Semantic Tagging', 'DOM Structure', 'Accessibility Compliance', 'SEO Standards'],
  'CSS': ['Modern Flex/Grid', 'Utility Composition', 'Keyframe Animations', 'Responsive Fluid Scales'],
  'JavaScript': ['ES6+ Async Event Loop', 'Module Trees', 'DOM Orchestration', 'Storage Control'],
  'TypeScript': ['Strict Compile Interfaces', 'Type Assertions', 'Generic Structures', 'Safe APIs'],
  'Database Management': ['Relational Modeling', 'Query Indexing', 'Schema Normalization', 'ACID Transactions'],
  'Application Development': ['Component Lifecycle', 'Vite Bundler Pipelines', 'Context Orchestration', 'Responsive UI States'],
  'Tailwind CSS': ['Atomic Classes Pipeline', 'Responsive Media Prefixes', 'Extended Custom Themes', 'Arbitrary Styling'],
  'Generative AI': ['Gemini Model APIs', 'LLM Context Windows', 'Structured JSON Outputs', 'Zero-shot Prompting'],
  'Prompt Engineering': ['Instruction Injection', 'Few-shot Structuring', 'Guardrail Alignment', 'Token Optimization'],
  'Git & GitHub': ['Conflict Resolution', 'Repository Security', 'Actions Hooks', 'Version Reverts']
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

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
            {filteredSkills.map((skill) => {
              const isCardActive = activeSkillId === skill.name;
              return (
                <motion.div
                  layout
                  id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveSkillId(isCardActive ? null : skill.name)}
                  className={`group relative p-6 rounded-2xl glass-card-light dark:glass-card-dark overflow-hidden transition-all duration-300 cursor-pointer border ${
                    isCardActive 
                      ? 'border-[#0A84FF] dark:border-[#0A84FF] ring-2 ring-[#0A84FF]/10 dark:ring-[#0A84FF]/15' 
                      : 'border-transparent'
                  }`}
                >
                  {/* Visual gradient light effects on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0A84FF]/2 to-transparent group-hover:from-[#0A84FF]/5 rounded-full blur-xl transition-all duration-300 pointer-events-none" />
                  
                  {/* Details layout */}
                  <div className="flex justify-between items-center mb-4 relative z-10">
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
                    <div className="flex items-center space-x-1.5">
                      <span className="font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                        {skill.level}%
                      </span>
                      <HelpCircle size={12} className="text-neutral-400 group-hover:text-[#0A84FF] transition-colors" />
                    </div>
                  </div>

                  {/* Animated Level Bar + Progress indicator hover effects */}
                  <div className="w-full mt-4">
                    <div className="w-full h-[4px] group-hover:h-[6px] bg-neutral-100 dark:bg-neutral-800/80 rounded-full overflow-hidden transition-all duration-300 relative shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0A84FF] via-purple-500 to-[#30D158] group-hover:brightness-110 rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      >
                        {/* Interactive glowing tip on card hover */}
                        <span className="absolute right-0 top-0 bottom-0 w-2.5 bg-white dark:bg-neutral-100 rounded-full shadow-[0_0_12px_rgba(48,209,88,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                    <div className="flex justify-between text-[8px] font-mono mt-1.5 px-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#0A84FF] font-semibold">Click to inspect</span>
                      <span className="text-[#30D158] font-bold">Progress Verified</span>
                    </div>
                  </div>

                  {/* Sub-Concept list expanding on click (interactive skill card!) */}
                  <AnimatePresence>
                    {isCardActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80"
                      >
                        <p className="text-[10px] uppercase font-mono text-neutral-400 dark:text-neutral-500 font-bold mb-2">Core Concepts Developed:</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {(SKILL_DETAILS[skill.name] || ['Standard Principles', 'Testing Procedures']).map((concept) => (
                            <div 
                              key={concept} 
                              className="flex items-center space-x-1.5 py-1 px-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40"
                            >
                              <CheckCircle size={10} className="text-[#30D158] flex-shrink-0" />
                              <span className="font-sans text-[10px] text-neutral-600 dark:text-neutral-300 leading-tight truncate">
                                {concept}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
