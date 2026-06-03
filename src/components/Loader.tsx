import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6 seconds total
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * 5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="app-loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#010101] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Apple-style minimalist glowing emblem */}
        <motion.div
          className="relative flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-tr from-[#020202] to-[#121212] border border-[#222222] shadow-[0_0_30px_rgba(10,132,255,0.08)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Internal shape & glow */}
          <div className="absolute inset-0.5 rounded-[14px] bg-[#020202] flex items-center justify-center">
            <span className="font-display font-medium text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              H
            </span>
            <span className="font-display font-bold text-lg text-[#0A84FF]">.</span>
          </div>
          
          {/* Ambient rotation glow */}
          <motion.div 
            className="absolute -inset-1 rounded-2xl bg-[#0A84FF]/20 blur-md -z-10"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Minimal text info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-1"
        >
          <h2 className="font-display font-medium tracking-tight text-white text-md">
            Hasya Patel
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#0A84FF]">
            Portfolio Launching
          </p>
        </motion.div>

        {/* Dynamic Progress indicator */}
        <div className="w-48 mt-10">
          <div className="w-full h-[3px] bg-neutral-900 rounded-full overflow-hidden relative border border-transparent">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0a84ff] to-[#30D158] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between items-center mt-3 px-1 text-neutral-500 font-mono text-[11px]">
            <span>LOADING SYSTEMS</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
