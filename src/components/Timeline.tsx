import { motion } from 'motion/react';
import { GraduationCap, Code, Sparkles, Award } from 'lucide-react';
import { TIMELINE } from '../data';

export default function Timeline() {
  // Map timeline icon names to Lucide elements
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={16} className="text-[#0A84FF]" />;
      case 'Code':
        return <Code size={16} className="text-[#30D158]" />;
      case 'Sparkles':
        return <Sparkles size={16} className="text-[#BF5AF2]" />;
      case 'Award':
        return <Award size={16} className="text-[#FF9F0A]" />;
      default:
        return <GraduationCap size={16} className="text-neutral-400" />;
    }
  };

  const getTimelineColorBorder = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return 'border-[#0A84FF]';
      case 'Code': return 'border-[#30D158]';
      case 'Sparkles': return 'border-[#BF5AF2]';
      case 'Award': return 'border-[#FF9F0A]';
      default: return 'border-neutral-500';
    }
  };

  return (
    <section 
      id="timeline" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col mb-20 space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
            05 / Chronicles
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Milestones & Journey
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 text-xs md:text-sm max-w-sm mt-1 font-sans">
            A chronological review of education, development milestones, and academic growth.
          </p>
          <div className="h-[2px] w-12 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
        </div>

        {/* Scroll-designed alternate Timeline container */}
        <div className="relative max-w-5xl mx-auto mt-16 pl-4 md:pl-0">
          
          {/* Centered Track spine */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neutral-200 dark:from-neutral-900 via-neutral-300 dark:via-neutral-800 to-transparent transform -translate-x-1/2" />

          {/* Timeline events iteration */}
          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.year}
                  id={`timeline-item-${item.year}`}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Floating Year Bubble Marker */}
                  <div className="absolute left-[3px] md:left-1/2 top-1 md:top-auto w-[34px] h-[34px] rounded-full bg-neutral-50 dark:bg-[#121215] border border-neutral-300 dark:border-neutral-800 shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10">
                    {getTimelineIcon(item.iconName)}
                  </div>

                  {/* Horizontal Connector lines for large viewports */}
                  <div className={`hidden md:block absolute top-1/2 h-[1px] w-[5%] bg-neutral-200 dark:bg-neutral-900 ${
                    isEven ? 'left-[45%]' : 'right-[45%]'
                  }`} />

                  {/* Narrative details content card */}
                  <motion.div
                    className={`w-full md:w-[45%] p-6 md:p-8 glass-card-light dark:glass-card-dark rounded-3xl relative ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Glowing highlight border accent line */}
                    <div className={`absolute top-0 bottom-0 w-1 rounded-l-3xl ${
                      isEven ? 'right-0 rounded-r-3xl rounded-l-none' : 'left-0'
                    } border-l-4 ${getTimelineColorBorder(item.iconName)}`} />

                    {/* Meta indicator */}
                    <div className={`flex flex-col mb-3 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="font-mono text-xs text-[#0A84FF] font-extrabold tracking-widest bg-[#0A84FF]/10 px-2.5 py-1 rounded-full mb-1">
                        {item.year}
                      </span>
                      <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-neutral-500 dark:text-neutral-400 text-xs md:text-sm leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Dummy side container spacer on large screen */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
