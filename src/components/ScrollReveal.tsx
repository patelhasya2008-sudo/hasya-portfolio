import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.85,
  distance = 35,
}: ScrollRevealProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initialVariant = {
    opacity: 0,
    ...directions[direction],
    scale: direction === 'none' ? 0.95 : 1,
  };

  const animateVariant = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      initial={initialVariant}
      whileInView={animateVariant}
      viewport={{ once: true, margin: '-90px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple elegant cubic-bezier easeOut
      }}
    >
      {children}
    </motion.div>
  );
}
